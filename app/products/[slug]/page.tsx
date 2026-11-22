import type { CSSProperties } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Arrow } from '@/components/site/arrow';
import { ProductIcon } from '@/components/site/product-icon';
import { ProductImage } from '@/components/site/product-image';
import { ProductMotif } from '@/components/site/product-motif';
import { ProductScreenshots } from '@/components/site/product-screenshots';
import { pageMetadata } from '@/lib/page-metadata';
import { products, type Product } from '@/lib/products';
import { company } from '@/lib/site-content';
import '../product-detail.css';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

function findProduct(slug: string) {
  return products.find(product => product.slug === slug) ?? notFound();
}

export async function generateMetadata({ params }: Props) {
  const product = findProduct((await params).slug);
  return pageMetadata(product.name, product.summary);
}

const themeOf = (product: Product) => ({ '--accent': product.accent, '--accent-ink': product.accentInk }) as CSSProperties;

export default async function ProductPage({ params }: Props) {
  const product = findProduct((await params).slug);
  const subject = encodeURIComponent(`Inquiry about ${product.name}`);
  const mailto = `mailto:${company.email}?subject=${subject}`;
  const others = products.filter(({ slug }) => slug !== product.slug);

  return (
    <div className="pdp" style={themeOf(product)}>
      <header className="pdp-hero">
        <div className="pdp-hero-bg" aria-hidden="true"><ProductMotif name={product.motif} /></div>
        <div className="shell">
          <nav className="breadcrumb mono" aria-label="Breadcrumb">
            <ol><li><Link href="/products">Products</Link></li><li aria-current="page">{product.name}</li></ol>
          </nav>
          <div className="pdp-hero-grid">
            <div className="pdp-hero-copy">
              <p className="eyebrow"><span className="red-square" />{product.category}</p>
              <h1>{product.name}<span className="red-period">.</span></h1>
              <p className="pdp-headline">{product.headline}</p>
              <p className="pdp-intro">{product.introduction}</p>
              <ul className="pdp-badges" aria-label={`${product.name} at a glance`}>
                {product.badges.map(badge => <li key={badge}>{badge}</li>)}
              </ul>
              <div className="pdp-actions">
                <a className="button button-red" href={mailto}>Ask about {product.name} <Arrow diagonal /></a>
                <a className="text-link light-link" href="#screenshots">See it in action <Arrow className="pdp-arrow-down" /></a>
              </div>
            </div>
            <div className="pdp-stage">
              <ProductImage
                product={product}
                overlay={product.callouts.map((callout, index) => (
                  <div key={callout.label} className={`pdp-callout pdp-callout-${index + 1}`}>
                    <span className="mono">{callout.label}</span>
                    <strong>{callout.value}</strong>
                  </div>
                ))}
              />
            </div>
          </div>
        </div>
      </header>

      <section className="pdp-stats" aria-label={`${product.name} by the numbers`}>
        <div className="shell">
          <ul style={{ '--stats': product.highlights.length } as CSSProperties}>
            {product.highlights.map(item => (
              <li key={item.label} className="pdp-stat pdp-reveal">
                <p className="pdp-stat-value">{item.value}</p>
                <p className="pdp-stat-label">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="shell pdp-pitch" aria-label={`Why ${product.name}`}>
        <p className="eyebrow pdp-reveal"><span className="red-square" />Why {product.name}</p>
        <p className="pdp-pitch-text pdp-reveal">{product.pitch.lead}<span>{product.pitch.answer}</span></p>
      </section>

      <nav className="pdp-nav" aria-label={`${product.name} page sections`}>
        <div className="shell pdp-nav-inner">
          <span className="pdp-nav-name mono"><span className="red-square" />{product.name}</span>
          <div className="pdp-nav-links">
            <a href="#screenshots">Screenshots</a>
            <a href="#workflow">Workflow</a>
            <a href="#capabilities">Capabilities</a>
          </div>
          <a className="pdp-nav-cta" href={mailto}>Ask about {product.name}</a>
        </div>
      </nav>

      <ProductScreenshots product={product} />

      <section className="pdp-workflow" aria-labelledby="workflow">
        <div className="shell pdp-workflow-grid">
          <div className="pdp-workflow-intro">
            <p className="eyebrow"><span className="red-square" />A worked example</p>
            <h2 id="workflow">{product.example.title}</h2>
            <p>{product.example.description}</p>
          </div>
          <ol className="pdp-steps">
            {product.example.steps.map(step => (
              <li key={step.title} className="pdp-reveal">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pdp-capabilities" aria-labelledby="capabilities">
        <div className="shell">
          <div className="pdp-section-head pdp-reveal">
            <p className="eyebrow"><span className="red-square" />Capabilities</p>
            <h2 id="capabilities">What you can do with {product.name}</h2>
          </div>
          <ul className="pdp-bento">
            {product.features.map(feature => (
              <li key={feature.title} className="pdp-feature pdp-reveal">
                <span className="pdp-feature-icon"><ProductIcon name={feature.icon} /></span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pdp-cta" aria-labelledby="contact">
        <div className="pdp-cta-bg" aria-hidden="true"><ProductMotif name={product.motif} /></div>
        <div className="shell pdp-cta-inner">
          <p className="eyebrow"><span className="red-square" />Start a conversation</p>
          <h2 id="contact">{product.inquiry}</h2>
          <div className="pdp-cta-actions">
            <a className="button button-red" href={mailto}>Ask about {product.name} <Arrow diagonal /></a>
            <p className="mono">Opens an email to {company.email}</p>
          </div>
        </div>
      </section>

      <section className="shell pdp-more" aria-labelledby="more-products">
        <div className="pdp-more-head">
          <h2 id="more-products">More from 372 GeoMedia</h2>
          <Link className="text-link" href="/products">All products <Arrow /></Link>
        </div>
        <ul>
          {others.map(other => (
            <li key={other.slug} style={themeOf(other)}>
              <Link href={`/products/${other.slug}`}>
                <p className="eyebrow"><span className="red-square" />{other.category}</p>
                <h3>{other.name}</h3>
                <p>{other.summary}</p>
                <span className="pdp-more-link">Explore {other.name} <Arrow /></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
