import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageIntro } from '@/components/site/page-intro';
import { ProjectVisual } from '@/components/site/project-visual';
import { ContactCTA } from '@/components/site/contact-cta';
import { Arrow } from '@/components/site/arrow';
import { workExamples } from '@/lib/work';
import { pageMetadata } from '@/lib/page-metadata';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return workExamples.map(({ slug }) => ({ slug })); }
function findExample(slug: string) { const example = workExamples.find(item => item.slug === slug); if (!example) notFound(); return example; }
export async function generateMetadata({ params }: Props) { const example = findExample((await params).slug); return pageMetadata(example.title, example.summary); }

export default async function WorkDetailPage({ params }: Props) {
  const example = findExample((await params).slug);
  const next = workExamples[(workExamples.indexOf(example) + 1) % workExamples.length];
  return <><PageIntro label="Illustrative workflow" back={{ href: '/work', label: 'Work' }} title={example.title} description={example.summary} />
    <div className="shell project-detail">
      <div className="project-overview"><ProjectVisual visual={example.visual} /><aside className="project-facts" aria-label="Workflow details"><dl><dt>Application</dt><dd>{example.discipline}</dd><dt>Geographic scale</dt><dd>{example.scale}</dd></dl></aside></div>
      <section className="project-section"><h2>Challenge</h2><p className="project-prose">{example.challenge}</p></section>
      <section className="project-section"><h2>Data sources</h2><ul className="source-list">{example.sources.map(source => <li key={source}>{source}</li>)}</ul></section>
      <section className="project-section"><h2>Approach</h2><ol className="detail-steps">{example.approach.map(step => <li key={step.title}><h3>{step.title}</h3><p>{step.detail}</p></li>)}</ol></section>
      <section className="project-section"><h2>Example outputs</h2><div className="output-list">{example.outputs.map(output => <div key={output.title}><h3>{output.title}</h3><p>{output.detail}</p></div>)}</div></section>
      <section className="feedback-note"><div><h2>Follow-up</h2><p>{example.feedback}</p></div></section>
      <Link className="next-story" href={`/work/${next.slug}`}><span><span className="eyebrow">Next workflow</span><strong>{next.title}</strong></span><Arrow diagonal /></Link>
    </div><ContactCTA /></>;
}
