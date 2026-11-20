import Image from 'next/image';
import type { Product } from '@/lib/products';
import { ImageCredits } from './product-image';

export function ProductScreenshots({ product }: { product: Product }) {
  return (
    <section className="shell product-screens" aria-labelledby="screenshots">
      <div className="product-section-intro">
        <h2 id="screenshots">Inside {product.name}</h2>
        <p>{product.screenshotIntro}</p>
      </div>
      <div className="screen-grid">
        {product.screenshots.map(screen => (
          <figure key={screen.src} className="screen-figure">
            <a className="screen-link" href={screen.src} aria-label={`View full size: ${screen.title}`}>
              <Image src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} />
              <span aria-hidden="true">View full size</span>
            </a>
            <figcaption>
              <h3>{screen.title}</h3>
              <p>{screen.caption}</p>
              <ImageCredits credits={screen.credits} />
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
