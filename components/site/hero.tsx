import { Arrow } from './arrow';
import { MapField } from './map-field';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <MapField />
      <div className="shell hero-inner">
        <div className="eyebrow hero-eyebrow"><span className="red-square" />Geospatial technology & consulting</div>
        <div className="hero-copy">
          <h1 id="hero-heading">See the<br />whole picture<span className="red-period">.</span></h1>
          <p>We build maps, GIS platforms and field applications for emergency response, environmental monitoring and community planning.</p>
          <div className="hero-actions">
            <Link className="button button-red" href="/work">Explore our work <Arrow diagonal /></Link>
            <a className="text-link light-link" href="#capabilities">What we do <Arrow /></a>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#connected-view" className="scroll-link"><span className="scroll-icon" aria-hidden="true">↓</span>How we use map layers</a>
        </div>
      </div>
      <div className="hero-caption shell"><span>Galveston Bay, Texas · Illustrative proximity analysis</span><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">Map data © OpenStreetMap contributors</a></div>
    </section>
  );
}
