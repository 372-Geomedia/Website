import Image from 'next/image';

const categories = [
  {
    title: 'Flood Mitigation and Management',
    screenshots: [
      { file: 'flood-mitigation', caption: 'Flood response mapping', alt: 'River flood zones, staging areas and field tasks over satellite imagery.' },
    ],
  },
  { title: 'Real Estate', screenshots: [] },
  {
    title: 'Weather',
    screenshots: [
      { file: 'nimbus', caption: 'Weather radar', alt: 'Gulf Coast radar returns beside a list of active weather alerts.' },
      { file: 'forecasting-storm-impacts', caption: 'Storm impact forecast', alt: 'A coastal wind forecast with estimated impacts on homes and utilities.' },
    ],
  },
  {
    title: 'Disaster Response',
    screenshots: [
      { file: 'power-outage-monitoring', caption: 'Power outage monitoring', alt: 'A county-level map of power outages across Alabama and Florida.' },
      { file: 'roof-damage-repair', caption: 'Roof damage assessment', alt: 'An aerial roof measurement beside a 3D model of the selected roof.' },
    ],
  },
  {
    title: 'Oil and Gas',
    screenshots: [
      { file: 'oil-and-gas', caption: 'Subsurface analysis', alt: 'Well paths and seismic cross sections in a subsurface viewer.' },
    ],
  },
  {
    title: 'Ecosystem and Environment',
    screenshots: [
      { file: 'ecosystem-mobile', caption: 'Field mapping', alt: 'A mobile field map showing planting rows and management areas.' },
      { file: 'ecosystem-web', caption: 'Carbon credit inventory', alt: 'A dashboard showing carbon credit balances by registry and recent transactions.' },
    ],
  },
  {
    title: 'Custom Applications',
    screenshots: [
      { file: 'custom-applications', caption: 'Survey map editor', alt: 'A map editor with layers for survey points, trees, paths and parcels.' },
      { file: 'work-order-management', caption: 'Work order management', alt: 'A mobile field-service application with a map above its work orders.' },
    ],
  },
];

export function WorkExperience() {
  return (
    <section id="experience" className="shell work-experience" aria-labelledby="work-experience-title">
      <div className="section-heading">
        <h2 id="work-experience-title">Experience</h2>
        <span className="section-rule" />
      </div>
      <div className="work-experience-categories">
        {categories.map(({ title, screenshots }) => (
          <div className="work-experience-category" key={title}>
            <h3>{title}</h3>
            {screenshots.length > 0 && (
              <div className="work-experience-screenshots">
                {screenshots.map(({ file, caption, alt }) => (
                  <figure key={file}>
                    <Image src={`/experience/${file}.webp`} alt={alt} width={168} height={105} loading="lazy" />
                    <figcaption>{caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
