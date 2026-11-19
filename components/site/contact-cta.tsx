import Link from 'next/link';
import { Arrow } from './arrow';
import { talk } from '@/lib/site-content';

export function ContactCTA() {
  return <section className="contact-cta" aria-labelledby="contact-cta-heading"><div className="shell contact-cta-inner">
    <h2 id="contact-cta-heading">Tell us about your project.</h2>
    <Link className="button button-red" href={talk.href}>{talk.label} <Arrow diagonal /></Link>
  </div></section>;
}
