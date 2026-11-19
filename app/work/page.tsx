import Link from 'next/link';
import { PageIntro } from '@/components/site/page-intro';
import { ContactCTA } from '@/components/site/contact-cta';
import { ProjectVisual } from '@/components/site/project-visual';
import { WorkExperience } from '@/components/site/work-experience';
import { Arrow } from '@/components/site/arrow';
import { workExamples } from '@/lib/work';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata('Work', 'Browse screenshots from our geospatial work and explore example workflows for coastal response, field operations and community planning.');

export default function WorkPage() {
  return <><PageIntro label="Work" title="Maps and applications" description="Our work ranges from tracking power outages across counties to mapping planting rows in the field." />
    <WorkExperience />
    <section className="shell work-collection" aria-labelledby="workflows-title">
      <div className="section-heading"><h2 id="workflows-title">Illustrative workflows</h2><span className="section-rule" /></div>
      {workExamples.map(example => <article className="work-entry" key={example.slug}>
        <ProjectVisual visual={example.visual} />
        <div className="work-entry-copy"><p className="eyebrow">{example.discipline}</p><h3><Link href={`/work/${example.slug}`}>{example.title}</Link></h3><p>{example.summary}</p><dl className="work-scale"><dt className="mono">Scale</dt><dd>{example.scale}</dd></dl><Link className="text-link" href={`/work/${example.slug}`} aria-label={`View workflow for ${example.title.toLowerCase()}`}>View workflow <Arrow diagonal /></Link></div>
      </article>)}
    </section><ContactCTA /></>;
}
