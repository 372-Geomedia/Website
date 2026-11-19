import { PageIntro } from '@/components/site/page-intro';
import { Experience } from '@/components/site/experience';
import { ContactCTA } from '@/components/site/contact-cta';
import { Arrow } from '@/components/site/arrow';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata('About', 'Learn how 372 GeoMedia approaches GIS projects, where our name comes from and what our team has built.');

const principles = [
  { title: 'Talk to the people doing the work', detail: 'We ask field crews, analysts and managers what they need to decide and what information they can collect on site.' },
  { title: 'Document the sources', detail: 'We record where the data came from, when it was collected and which gaps could affect a decision.' },
  { title: 'Follow the assignment', detail: 'We trace a report from the person who files it to the person who acts on it, including how the outcome gets recorded.' },
];

export default function AboutPage() {
  return <>
    <PageIntro label="About" title="About 372 GeoMedia" description="We're a geospatial technology and consulting company. We help organizations maintain their GIS, connect it to existing databases and build applications for staff in the field." />
    <section className="brand-story">
      <div className="shell brand-story-grid">
        <div className="brand-code" aria-hidden="true">372</div>
        <div>
          <h2>Why 372?</h2>
          <p>In the Culper Code Book, 372 stood for “map.” That entry gave our company its name.</p>
          <a className="text-link" href="https://www.mountvernon.org/george-washington/the-revolutionary-war/spying-and-espionage/the-culper-code-book">Read the code book at Mount Vernon <Arrow diagonal /></a>
        </div>
      </div>
    </section>
    <section className="shell working-principles">
      <div className="editorial-heading"><h2>How we work</h2></div>
      <div className="principle-grid">{principles.map(principle => <article key={principle.title}><h3>{principle.title}</h3><p>{principle.detail}</p></article>)}</div>
    </section>
    <Experience />
    <ContactCTA />
  </>;
}
