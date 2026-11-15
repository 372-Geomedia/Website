import Link from 'next/link';
import { PageIntro } from '@/components/site/page-intro';
import { Arrow } from '@/components/site/arrow';
import { company } from '@/lib/site-content';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata('Talk with us', 'Tell 372 GeoMedia what you are trying to understand, connect or build. Start a conversation about your geospatial project.');
const emailHref = `mailto:${company.email}?subject=${encodeURIComponent('A geospatial project for 372 GeoMedia')}&body=${encodeURIComponent('Hello 372 GeoMedia,\n\nHere is what we are trying to understand, connect or build:\n\n\nThe information and systems we are working with:\n\n\nThe people and decisions this needs to support:\n\n\nName / organization:\n')}`;

const prompts = [
  { question: 'What needs to become clearer?', detail: 'The decision, task or information gap you want to address.' },
  { question: 'What information already exists?', detail: 'Your GIS, spreadsheets, field records, imagery, applications or other systems.' },
  { question: 'Who needs to use the result?', detail: 'The people, responsibilities and working conditions the solution needs to support.' },
];

export default function TalkPage() {
  return <><PageIntro label="Talk with us" title={<>Tell us what<br /><span>you’re working on.</span></>} description="A question, an existing system or an early idea is enough to start. You don’t need a finished specification." />
    <section className="shell contact-layout">
      <div className="contact-address">
        <p className="eyebrow"><span className="red-square" />Email the team</p>
        <h2>Let’s talk about<br />the work.</h2>
        <a className="contact-email" href={`mailto:${company.email}`}>{company.email}<Arrow diagonal /></a>
        <p>Write to us directly, or start from a draft that includes the three questions on this page.</p>
        <a className="button button-red" href={emailHref}>Open an email draft <Arrow diagonal /></a>
        <p className="email-explanation">Opens your email app with the prompts filled in. Review and send the message there.</p>
      </div>
      <div className="contact-prompts">
        <h2>A useful place to begin</h2>
        <ol>{prompts.map(prompt => <li key={prompt.question}><h3>{prompt.question}</h3><p>{prompt.detail}</p></li>)}</ol>
        <p>Rough answers are fine. We’ll work through the details together.</p>
      </div>
    </section>
    <section className="contact-links shell">
      <div><p className="eyebrow">Still exploring?</p><h2>Find the right starting point.</h2></div>
      <Link className="text-link" href="/capabilities">See what we do <Arrow /></Link>
      <Link className="text-link" href="/work">See how it comes together <Arrow /></Link>
    </section></>;
}
