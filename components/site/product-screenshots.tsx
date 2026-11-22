import Image from 'next/image';
import type { Product } from '@/lib/products';
import { ImageCredits } from './product-image';

export function ProductScreenshots({ product }: { product: Product }) {
  const total = String(product.screenshots.length).padStart(2, '0');
  return (
    <section className="pdp-screens" aria-labelledby="screenshots">
      <div className="shell">
        <div className="pdp-section-head pdp-reveal">
          <p className="eyebrow"><span className="red-square" />Inside the product</p>
          <h2 id="screenshots">Inside {product.name}</h2>
          <p>{product.screenshotIntro}</p>
        </div>
        <div className="pdp-shots">
          {product.screenshots.map((screen, index) => {
            const wide = screen.width / screen.height > 2;
            return (
              <figure key={screen.src} className={`screen-figure pdp-shot${wide ? ' pdp-shot-wide' : ''}`}>
                <div className={`pdp-shot-media pdp-reveal ${product.frame === 'tablet' ? 'pdp-tablet' : 'pdp-window'}`}>
                  {product.frame === 'window' && (
                    <div className="pdp-window-bar" aria-hidden="true"><i /><i /><i /><span>{product.frameLabel}</span></div>
                  )}
                  <a className="screen-link" href={screen.src} aria-label={`View full size: ${screen.title}`}>
                    <Image src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} sizes={wide ? '(max-width: 900px) 92vw, 1200px' : '(max-width: 900px) 92vw, 62vw'} />
                    <span aria-hidden="true">View full size</span>
                  </a>
                </div>
                <figcaption className="pdp-reveal">
                  <p className="pdp-shot-number mono"><b>{String(index + 1).padStart(2, '0')}</b> / {total}</p>
                  <h3>{screen.title}</h3>
                  <p>{screen.caption}</p>
                  <ImageCredits credits={screen.credits} />
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
