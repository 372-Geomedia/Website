import { Arrow } from './arrow';
import { LayerStack } from './layer-stack';
import Link from 'next/link';

export function SpatialStory() {
  return (
    <section className="spatial-story" id="connected-view" aria-labelledby="story-heading">
      <div className="shell">
        <div className="story-grid">
          <div className="story-copy">
            <h2 id="story-heading">Which sites need<br /><span>an inspection?</span></h2>
            <p>After a storm, a response team can map damage reports alongside buildings and roads to decide where to send inspectors. As crews visit each site, their notes become part of its record.</p>
            <Link className="text-link story-link" href="/work/coastal-response">Explore the coastal response example <Arrow diagonal /></Link>
          </div>
          <figure className="layer-figure">
            <LayerStack />
            <figcaption>Sample observations over the roads and coastline of Galveston Bay, Texas.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
