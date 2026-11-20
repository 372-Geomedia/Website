import Image from 'next/image';
import type { Product } from '@/lib/products';

export function ImageCredits({ credits }: { credits: Product['image']['credits'] }) {
  if (!credits?.length) return null;
  return (
    <span className="product-credits">
      {credits.map(credit => <a key={credit.href} href={credit.href}>{credit.label}</a>)}
    </span>
  );
}

export function ProductImage({ product, thumbnail = false }: { product: Product; thumbnail?: boolean }) {
  const { image } = product;
  return (
    <figure className="product-figure">
      <div className="product-frame">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={thumbnail ? '(max-width: 760px) 90vw, 30vw' : '(max-width: 900px) 90vw, 52vw'}
        />
      </div>
      {(!thumbnail || image.credits) && (
        <figcaption>
          {!thumbnail && <span>{image.caption}</span>}
          <ImageCredits credits={image.credits} />
        </figcaption>
      )}
    </figure>
  );
}
