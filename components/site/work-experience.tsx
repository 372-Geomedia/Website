import Image from 'next/image';
import Link from 'next/link';
import { Arrow } from './arrow';
import { talk } from '@/lib/site-content';

type Sector = { key: string; label: string; title: string };
type Tile = {
  sector: string;
  file: string;
  width: number;
  height: number;
  title: string;
  description: string;
  /** Landscape screens fill the frame. Phone screens and very wide ones are letterboxed instead of cropped. */
  fit: 'cover' | 'contain';
};

// Filter labels are short; titles are the sector names used on the tiles.
const sectors: Sector[] = [
  { key: 'flood', label: 'Flood', title: 'Flood Mitigation and Management' },
  { key: 'disaster', label: 'Disaster response', title: 'Disaster Response' },
  { key: 'weather', label: 'Weather', title: 'Weather' },
  { key: 'custom', label: 'Custom apps', title: 'Custom Applications' },
  { key: 'environment', label: 'Environment', title: 'Ecosystem and Environment' },
  { key: 'oil-gas', label: 'Oil & gas', title: 'Oil and Gas' },
];

// The images are 520 px wide at most, so the tiles stay close to that size
// rather than stretching them. The description is the image's original alt text.
const tiles: Tile[] = [
  { sector: 'flood', file: 'flood-mitigation', width: 520, height: 345, fit: 'cover', title: 'Flood response mapping', description: 'River flood zones, staging areas and field tasks over satellite imagery.' },
  { sector: 'disaster', file: 'power-outage-monitoring', width: 520, height: 399, fit: 'cover', title: 'Power outage monitoring', description: 'A county-level map of power outages across Alabama and Florida.' },
  { sector: 'disaster', file: 'roof-damage-repair', width: 520, height: 258, fit: 'contain', title: 'Roof damage assessment', description: 'An aerial roof measurement beside a 3D model of the selected roof.' },
  { sector: 'weather', file: 'nimbus', width: 520, height: 334, fit: 'cover', title: 'Weather radar', description: 'Gulf Coast radar returns beside a list of active weather alerts.' },
  { sector: 'weather', file: 'forecasting-storm-impacts', width: 520, height: 336, fit: 'cover', title: 'Storm impact forecast', description: 'A coastal wind forecast with estimated impacts on homes and utilities.' },
  { sector: 'custom', file: 'custom-applications', width: 520, height: 325, fit: 'cover', title: 'Survey map editor', description: 'A map editor with layers for survey points, trees, paths and parcels.' },
  { sector: 'custom', file: 'work-order-management', width: 400, height: 569, fit: 'contain', title: 'Work order management', description: 'A mobile field-service application with a map above its work orders.' },
  { sector: 'environment', file: 'ecosystem-mobile', width: 297, height: 640, fit: 'contain', title: 'Field mapping', description: 'A mobile field map showing planting rows and management areas.' },
  { sector: 'environment', file: 'ecosystem-web', width: 520, height: 306, fit: 'cover', title: 'Carbon credit inventory', description: 'A dashboard showing carbon credit balances by registry and recent transactions.' },
  { sector: 'oil-gas', file: 'oil-and-gas', width: 520, height: 339, fit: 'cover', title: 'Subsurface analysis', description: 'Well paths and seismic cross sections in a subsurface viewer.' },
];

const titleOf = (key: string) => sectors.find(sector => sector.key === key)?.title ?? '';

export function WorkExperience() {
  return (
    <section id="experience" className="shell work-experience" aria-labelledby="work-experience-title">
      <div className="section-heading">
        <h2 id="work-experience-title">Experience</h2>
        <span className="section-rule" />
      </div>
      <div className="work-gallery">
        <fieldset className="work-filter">
          <legend className="sr-only">Show work from a sector</legend>
          <input className="sr-only" type="radio" name="work-sector" id="sector-all" defaultChecked />
          <label htmlFor="sector-all">All work <span>{tiles.length}</span></label>
          {sectors.map(sector => (
            <span className="work-filter-option" key={sector.key}>
              <input className="sr-only" type="radio" name="work-sector" id={`sector-${sector.key}`} />
              <label htmlFor={`sector-${sector.key}`}>{sector.label} <span>{tiles.filter(tile => tile.sector === sector.key).length}</span></label>
            </span>
          ))}
        </fieldset>
        <ul className="work-tiles">
          {tiles.map(tile => (
            <li className="work-tile work-reveal" data-sector={tile.sector} key={tile.file}>
              <figure>
                <div className="work-tile-media" data-fit={tile.fit}>
                  {/* The caption below describes the screenshot, so the image itself is decorative. */}
                  <Image src={`/experience/${tile.file}.webp`} alt="" width={tile.width} height={tile.height} sizes="(max-width: 620px) 92vw, (max-width: 1000px) 46vw, 450px" loading="lazy" />
                </div>
                <figcaption>
                  <p className="eyebrow"><span className="red-square" />{titleOf(tile.sector)}</p>
                  <h3>{tile.title}</h3>
                  <p>{tile.description}</p>
                </figcaption>
              </figure>
            </li>
          ))}
          <li className="work-tile-cta work-reveal">
            <p className="eyebrow"><span className="red-square" />Your project</p>
            <h3>Working on something similar?</h3>
            <p>Tell us what you need to map, track or build.</p>
            <Link className="button button-red" href={talk.href}>{talk.label} <Arrow diagonal /></Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
