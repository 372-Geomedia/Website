import type { ReactNode } from 'react';
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

type Props = {
  product: Product;
  thumbnail?: boolean;
  /** Decorative content positioned over the image, such as floating callouts. */
  overlay?: ReactNode;
};

export function ProductImage({ product, thumbnail = false, overlay }: Props) {
  const { image } = product;
  return (
    <figure className="product-figure">
      <div className="product-stage">
        <div className="product-frame">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            // The detail-page hero is the largest thing above the fold; the menu thumbnails are not.
            priority={!thumbnail}
            sizes={thumbnail ? '(max-width: 760px) 90vw, (max-width: 1150px) 45vw, 23vw' : '(max-width: 900px) 90vw, 52vw'}
          />
        </div>
        {overlay}
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
