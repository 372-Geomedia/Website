import { company, talk } from '@/lib/site-content';
import { Arrow } from './arrow';
import Link from 'next/link';

// The homepage numbers its sections; the About page does not, so the section
// number and the closing link change with the page.
export function Experience({ onAboutPage = false }: { onAboutPage?: boolean }) {
  return (
    <section className="experience-section dark" id="experience" aria-labelledby="experience-heading" tabIndex={-1}>
      <div className="shell">
        <div className="section-heading">
          <span className="eyebrow">{onAboutPage ? <span className="red-square" /> : <span className="section-number">03 /</span>} The people behind the work</span>
          <span className="section-rule" />
        </div>
        <div className="experience-grid">
          <div className="experience-stat">
            <p className="experience-number">{company.experience.years.slice(0, -1)}<span>+</span></p>
            <p className="experience-unit">{company.experience.description}</p>
          </div>
          <div className="experience-copy">
            <h2 id="experience-heading">Built on experience.<br /><span>Grounded in the work.</span></h2>
            <p>Good systems start with the people who use them. We tie every technical decision to the responsibilities, information and workflows behind it.</p>
            <p>Our work spans emergency management, geospatial systems, custom applications and community planning—from first assessment through delivery and ongoing support.</p>
            <Link className="text-link" href={onAboutPage ? talk.href : '/about'}>{onAboutPage ? 'Talk with our team' : 'More about 372 GeoMedia'} <Arrow diagonal /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
