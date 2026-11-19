import { capabilities } from '@/lib/capabilities';
import { Arrow } from './arrow';
import { CapabilityMotif } from './capability-motif';
import Link from 'next/link';

export function Capabilities({ showApplications = false }: { showApplications?: boolean }) {
  return (
    <section className={`capabilities-section${showApplications ? ' capabilities-compact' : ''}`} id="capabilities" aria-labelledby="capabilities-heading" tabIndex={-1}>
      <div className="shell">
        <div className={showApplications ? 'sr-only' : 'capabilities-intro'}>
          <h2 id="capabilities-heading">What we do</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map(capability => (
            <article className="capability-entry" key={capability.kind} aria-labelledby={`capability-${capability.kind}`}>
              <div className="capability-visual-row">
                <CapabilityMotif kind={capability.kind} />
              </div>
              <h3 id={`capability-${capability.kind}`}>{capability.title}</h3>
              <p className="capability-description">{capability.description}</p>
              {showApplications && <ul className="capability-applications">
                {capability.applications.map(application => <li key={application}>{application}</li>)}
              </ul>}
            </article>
          ))}
        </div>
        {!showApplications && <div className="capabilities-close">
          <Link className="text-link" href="/capabilities">All capabilities <Arrow diagonal /></Link>
        </div>}
      </div>
    </section>
  );
}
