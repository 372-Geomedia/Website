import assert from 'node:assert/strict';

// HTTP integration checks, not browser or visual tests. Run against a local
// development or production server: npm run check:routes -- http://localhost:3001
const base = new URL(process.argv[2] || 'http://localhost:3000');
assert(['localhost', '127.0.0.1', '[::1]'].includes(base.hostname), 'Use a local server for these checks.');
const productPaths = ['/products/372-strata', '/products/gismaster', '/products/geofara', '/products/leveeguard'];
const isProductPath = path => path === '/products' || path.startsWith('/products/');
const queue = ['/', '/capabilities', '/work', '/about', '/talk', '/products'];
const pages = new Map();
const titles = new Set();
const descriptionValues = new Set();
const productImages = new Set();
const unescape = value => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#x27;', "'");
const attribute = (tag, name) => unescape(tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] || '');

while (queue.length) {
  const path = queue.shift();
  if (pages.has(path)) continue;
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `${path}: expected a successful route`);
  const raw = await response.text();
  const html = raw.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: one H1`);
  assert.equal((html.match(/<main\b/g) || []).length, 1, `${path}: one main landmark`);
  assert.equal((html.match(/<header\b[^>]*class="site-header"/g) || []).length, 1, `${path}: one shared header`);
  assert.equal((html.match(/<footer\b[^>]*class="site-footer"/g) || []).length, 1, `${path}: one shared footer`);
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  assert(title?.includes('372 GeoMedia'), `${path}: branded page title`);
  assert(!titles.has(title), `${path}: page-specific title`);
  titles.add(title);
  const metaTags = [...html.matchAll(/<meta\b[^>]*>/g)].map(match => match[0]);
  const descriptionTag = metaTags.find(tag => attribute(tag, 'name') === 'description');
  const description = attribute(descriptionTag || '', 'content');
  assert(description.length > 30, `${path}: useful metadata description`);
  assert(!descriptionValues.has(description), `${path}: page-specific description`);
  descriptionValues.add(description);
  const noindex = metaTags.some(tag => attribute(tag, 'name') === 'robots' && /\bnoindex\b/i.test(attribute(tag, 'content')));
  assert.equal(noindex, isProductPath(path), `${path}: only the unlisted products area should specify noindex`);

  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${path}: unique DOM IDs`);
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] || '';
  const images = [...main.matchAll(/<img\b[^>]*>/g)].map(match => match[0]);
  const imageLinks = new Set(images.map(tag => attribute(tag, 'src')));
  const links = [...html.matchAll(/<a\b[^>]*>/g)].map(match => attribute(match[0], 'href'));
  for (const href of links) {
    assert(href, `${path}: no empty link destinations`);
    if (href.startsWith('#')) assert(ids.includes(href.slice(1)), `${path}: existing fragment ${href}`);
    const target = new URL(href, new URL(path, base));
    if (target.origin === base.origin) {
      if (!isProductPath(path)) assert(!isProductPath(target.pathname), `${path}: public pages must not link to ${target.pathname}`);
      if (!imageLinks.has(href) && !pages.has(target.pathname)) queue.push(target.pathname);
    }
    assert(!/^https?:\/\/372geomedia\.com/.test(href), `${path}: company navigation should stay local`);
  }
  const nav = html.match(/<nav\b[^>]*aria-label="Main navigation"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
  assert(nav, `${path}: desktop navigation rendered`);
  const currentLink = [...nav.matchAll(/<a\b[^>]*>/g)].map(match => match[0]).find(tag => attribute(tag, 'aria-current') === 'page');
  if (path === '/' || isProductPath(path)) assert(!currentLink, `${path}: no unrelated active tab`);
  else assert.equal(attribute(currentLink || '', 'href'), `/${path.split('/')[1]}`, `${path}: correct active navigation`);

  if (isProductPath(path)) {
    const menu = path === '/products';
    const navLabel = menu ? 'Products' : 'Breadcrumb';
    const productNav = [...html.matchAll(/<nav\b([^>]*)>([\s\S]*?)<\/nav>/g)].find(match => attribute(match[1], 'aria-label') === navLabel);
    assert(productNav, `${path}: ${navLabel} navigation rendered`);
    const navHrefs = [...productNav[2].matchAll(/<a\b[^>]*>/g)].map(match => attribute(match[0], 'href'));
    for (const dest of menu ? productPaths : ['/products']) {
      assert(navHrefs.includes(dest), `${path}: ${navLabel} links to ${dest}`);
    }

    if (menu) {
      assert.equal(images.length, productPaths.length, 'The menu includes one image per product');
    } else {
      const screenshots = [...main.matchAll(/<a\b[^>]*class="screen-link"[^>]*>([\s\S]*?)<\/a>/g)];
      assert(screenshots.length >= 2, `${path}: multiple interface views`);
      assert.equal(imageLinks.size, screenshots.length + 1, `${path}: distinct screenshots and a hero image`);
      for (const [link, content] of screenshots) {
        const src = attribute(content.match(/<img\b[^>]*>/)?.[0] || '', 'src');
        assert(src && attribute(link, 'href') === src, `${path}: each screenshot opens at full size`);
      }
    }
    for (const image of images) {
      const src = attribute(image, 'src');
      assert(src && attribute(image, 'alt').trim(), `${path}: product imagery has a source and a description`);
      const imageUrl = new URL(src, new URL(path, base));
      assert.equal(imageUrl.origin, base.origin, `${path}: product image is hosted locally`);
      productImages.add(imageUrl.href);
    }
  }

  if (path === '/talk') {
    const draftHref = links.find(href => href.startsWith('mailto:') && href.includes('?'));
    assert(draftHref, 'Talk with us: email draft link exists');
    const draft = new URL(draftHref);
    assert.equal(draft.pathname, 'support@372geomedia.com');
    assert(draft.searchParams.get('subject')?.includes('372 GeoMedia'));
    const questions = [...html.matchAll(/<h3>([^<]+\?)<\/h3>/g)].map(match => unescape(match[1]));
    assert.equal(questions.length, 3, 'Talk page includes the three project questions');
    assert(questions.every(question => draft.searchParams.get('body')?.includes(question)), 'Email draft includes each project question');
  }
  pages.set(path, html);
}

assert.equal([...pages.keys()].filter(path => !isProductPath(path)).length, 8, 'The home page, four section pages and three work pages should be reachable.');
assert.deepEqual(new Set([...pages.keys()].filter(isProductPath)), new Set(['/products', ...productPaths]), 'The unlisted menu and all product drafts should be reachable.');
for (const url of productImages) {
  const image = await fetch(url);
  assert.equal(image.status, 200, `${url}: product image is available`);
  assert(image.headers.get('content-type')?.startsWith('image/'), `${url}: product image has an image content type`);
  assert((await image.arrayBuffer()).byteLength > 0, `${url}: product image is nonempty`);
}
// /insights was removed; /contact is redirected to /talk by nginx, not the dev server.
for (const path of ['/work/does-not-exist', '/products/does-not-exist', '/insights', '/does-not-exist']) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 404, `${path}: return an actual 404 status`);
  assert((await response.text()).includes('<h1>Page not found</h1>'), `${path}: recovery heading`);
}
console.log(`Passed: ${pages.size} pages, unlisted product navigation, ${productImages.size} product images, metadata, fragments, email draft and 4 missing-page responses.`);
