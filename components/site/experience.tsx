import { company } from '@/lib/site-content';
import { Arrow } from './arrow';
import Link from 'next/link';

export function Experience() {
  return (
    <section className="experience-section dark" id="experience" aria-labelledby="experience-heading" tabIndex={-1}>
      <div className="shell">
        <div className="experience-grid">
          <div className="experience-stat">
            <p className="experience-number">{company.experience.years.slice(0, -1)}<span>+</span></p>
            <p className="experience-unit">{company.experience.description}</p>
          </div>
          <div className="experience-copy">
            <h2 id="experience-heading">Our team’s work</h2>
            <p>Our team has built tools for tracking power outages, assessing roof damage and managing carbon credits.</p>
            <Link className="text-link" href="/work#experience">View project screenshots <Arrow diagonal /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
