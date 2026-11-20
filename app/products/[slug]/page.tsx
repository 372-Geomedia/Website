import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProductImage } from '@/components/site/product-image';
import { pageMetadata } from '@/lib/page-metadata';
import { products } from '@/lib/products';
import { company } from '@/lib/site-content';

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

export default async function ProductPage({ params }: Props) {
  const product = findProduct((await params).slug);
  const subject = encodeURIComponent(`Inquiry about ${product.name}`);

  return (
    <>
      <div className="product-hero">
        <div className="shell">
          <nav className="breadcrumb mono" aria-label="Breadcrumb">
            <ol><li><Link href="/products">Products</Link></li><li aria-current="page">{product.name}</li></ol>
          </nav>
          <div className="product-hero-grid">
            <header>
              <p className="eyebrow"><span className="red-square" />{product.category}</p>
              <h1>{product.name}</h1>
              <p className="product-headline">{product.headline}</p>
              <p className="product-introduction">{product.introduction}</p>
            </header>
            <ProductImage product={product} />
          </div>
        </div>
      </div>
      <section className="shell product-workflow" aria-labelledby="workflow-heading">
        <div className="product-example">
          <h2 id="workflow-heading">{product.example.title}</h2>
          <p>{product.example.description}</p>
        </div>
        <div className="product-features">
          {product.features.map(feature => (
            <div key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="contact-cta">
        <div className="shell contact-cta-inner">
          <h2>{product.inquiry}</h2>
          <a className="button button-red" href={`mailto:${company.email}?subject=${subject}`}>Ask about {product.name}</a>
        </div>
      </section>
    </>
  );
}
