import Link from 'next/link';
import { PageIntro } from '@/components/site/page-intro';
import { ProductImage } from '@/components/site/product-image';
import { pageMetadata } from '@/lib/page-metadata';
import { products } from '@/lib/products';

export const metadata = pageMetadata('Products', 'Explore 372 Strata for Texas subsurface geology, GISMaster for county parcel records and Geofara for field mapping.');

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        label="Products"
        title="Products"
        description="Explore the geology around a well, trace a parcel through an ownership change, or take a map into the field."
      />
      <nav className="shell product-menu" aria-label="Products">
        {products.map(product => (
          <article className="product-card" key={product.slug}>
            <p className="eyebrow"><span className="red-square" />{product.category}</p>
            <h2><Link href={`/products/${product.slug}`}>{product.name}</Link></h2>
            <p className="product-summary">{product.summary}</p>
            <ProductImage product={product} thumbnail />
          </article>
        ))}
      </nav>
    </>
  );
}
