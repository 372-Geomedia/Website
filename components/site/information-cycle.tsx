import { CapabilityMotif } from './capability-motif';
import type { CapabilityKind } from '@/lib/capabilities';

const stages: { title: string; detail: string; motif: CapabilityKind }[] = [
  { title: 'Record the damage', detail: 'An inspector photographs a damaged roof and marks its location on a field map.', motif: 'response' },
  { title: 'Match the property', detail: 'A coordinator checks the address and parcel boundary, then attaches the report to the property record.', motif: 'integration' },
  { title: 'Schedule the repair', detail: 'The coordinator reviews the damage and assigns a work order to a crew.', motif: 'analysis' },
  { title: 'Update the record', detail: 'The crew logs the repair against the work order. The next inspector can see what changed and when.', motif: 'software' },
];

export function InformationCycle() {
  return (
    <section className="information-cycle shell" aria-labelledby="cycle-heading">
      <div className="editorial-heading">
        <h2 id="cycle-heading">From inspection to repair</h2>
        <p>In this example, a field crew and a coordinator use the same property record to track a storm-damaged roof.</p>
      </div>
      <ol className="cycle-stages">
        {stages.map(stage => (
          <li key={stage.title}>
            <div className="cycle-visual"><CapabilityMotif kind={stage.motif} /></div>
            <h3>{stage.title}</h3>
            <p>{stage.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
