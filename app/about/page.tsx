import Link from 'next/link';
import { PageIntro } from '@/components/site/page-intro';
import { Experience } from '@/components/site/experience';
import { ContactCTA } from '@/components/site/contact-cta';
import { LayerStack } from '@/components/site/layer-stack';
import { Arrow } from '@/components/site/arrow';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata('About', 'Meet 372 GeoMedia: geospatial technology and consulting backed by 50+ years of combined team experience.');

const principles = [
  { title: 'Start with the work.', detail: 'Understand who needs the information, the decisions they make and the conditions in which they operate.' },
  { title: 'Keep the source in view.', detail: 'Make assumptions, information gaps and the origin of a result visible to the people who rely on it.' },
  { title: 'Build for what follows.', detail: 'Connect collection, analysis and action so that the next person has the context they need.' },
];

export default function AboutPage() {
  return <>
    <PageIntro label="About" title={<>Geography is<br /><span>the common ground.</span></>} description="372 GeoMedia is a geospatial technology and consulting company. We help organizations put their information on the map—and put the map to work." />
    <section className="shell about-introduction">
      <div>
        <p className="eyebrow"><span className="red-square" />Our perspective</p>
        <h2>Understanding starts<br />with relationships.</h2>
        <p>An observation belongs to a place. A place is connected to infrastructure, people and activity. A decision makes more sense when those relationships are visible.</p>
        <p>We bring them together with GIS, spatial analysis, GeoAI, custom software and data integration—starting from the operational question and working toward the system that answers it.</p>
        <Link className="text-link" href="/capabilities">Explore our capabilities <Arrow diagonal /></Link>
      </div>
      <figure className="about-layers"><LayerStack /><figcaption>Separate sources. Shared geography.</figcaption></figure>
    </section>
    <section className="brand-story">
      <div className="shell brand-story-grid">
        <div className="brand-code" aria-hidden="true">372<span className="mono">A code for “map”</span></div>
        <div>
          <p className="eyebrow">A name with meaning</p>
          <h2>Trusted information.<br />Informed action.</h2>
          <p>Our name comes from the Culper Code Book, where 372 stood for “map.” It is a concise reminder of what geographic information can do: establish context and help people decide what comes next.</p>
          <a className="text-link" href="https://www.mountvernon.org/george-washington/the-revolutionary-war/spying-and-espionage/the-culper-code-book">Explore the code book at Mount Vernon <Arrow diagonal /></a>
        </div>
      </div>
    </section>
    <section className="shell working-principles">
      <div className="editorial-heading"><h2>People make<br />information useful.</h2><p>Field personnel observe. Analysts interpret. Teams coordinate. A useful system supports the handoffs between them.</p></div>
      <div className="principle-grid">{principles.map((principle, index) => <article key={principle.title}><span className="mono">0{index + 1}</span><h3>{principle.title}</h3><p>{principle.detail}</p></article>)}</div>
    </section>
    <Experience onAboutPage />
    <ContactCTA />
  </>;
}
