import { PageIntro } from '@/components/site/page-intro';
import { Arrow } from '@/components/site/arrow';
import { company } from '@/lib/site-content';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata('Talk with us', 'Email 372 GeoMedia about a mapping project, a field application or an existing GIS.');

const prompts = [
  { question: 'What are you working on?', detail: 'Describe the task or decision you need help with.' },
  { question: 'What information do you have?', detail: 'Mention any maps, spreadsheets, field records or systems you already use.' },
  { question: 'Who will use the result?', detail: 'Tell us who needs it and where they work.' },
];

const emailBody = ['Hello 372 GeoMedia,', ...prompts.map(({ question }) => `${question}\n`), 'Name or organization'].join('\n\n');
const emailHref = `mailto:${company.email}?subject=${encodeURIComponent('A geospatial project for 372 GeoMedia')}&body=${encodeURIComponent(emailBody)}`;

export default function TalkPage() {
  return <><PageIntro label="Talk with us" title="Tell us about your project" description="Email us about a new mapping project, a field application or a GIS you already use." />
    <section className="shell contact-layout">
      <div className="contact-address">
        <h2>Email the team</h2>
        <a className="contact-email" href={`mailto:${company.email}`}>{company.email}<Arrow diagonal /></a>
        <a className="button button-red" href={emailHref}>Open an email draft <Arrow diagonal /></a>
        <p className="email-explanation">The draft opens in your email app with the project questions filled in.</p>
      </div>
      <div className="contact-prompts">
        <h2>What to include</h2>
        <ul>{prompts.map(prompt => <li key={prompt.question}><h3>{prompt.question}</h3><p>{prompt.detail}</p></li>)}</ul>
      </div>
    </section></>;
}
