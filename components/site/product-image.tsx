import Image from 'next/image';
import type { Product } from '@/lib/products';

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
          {image.credits && (
            <span className="product-credits">
              {image.credits.map(credit => <a key={credit.href} href={credit.href}>{credit.label}</a>)}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
