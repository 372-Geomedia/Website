export type WorkExample = {
  slug: string;
  title: string;
  summary: string;
  discipline: string;
  scale: string;
  visual: 'coast' | 'field' | 'community';
  challenge: string;
  sources: string[];
  approach: { title: string; detail: string }[];
  outputs: { title: string; detail: string }[];
  feedback: string;
};

// These are illustrative applications of confirmed capabilities, not client work.
// The record structure can also support approved case studies when supplied.
export const workExamples: WorkExample[] = [
  {
    slug: 'coastal-response',
    title: 'Coastal storm response',
    summary: 'Use storm forecasts and field reports to decide which Gulf Coast facilities need inspection first.',
    discipline: 'Emergency management',
    scale: 'Region → community → facility',
    visual: 'coast',
    challenge: 'Which facilities need attention first, and who can reach them? To assign crews during a coastal storm, teams need forecasts, facility records and field reports. They also need to know each source, when it was updated and what remains uncertain.',
    sources: ['Official forecast and hazard products', 'Terrain, imagery and community context', 'Infrastructure and facility inventories', 'Population and service-area information', 'Field observations and damage assessments', 'Assignments and mission status'],
    approach: [
      { title: 'Map facilities and storm reports', detail: 'Match forecasts, facilities, assets and field reports by location. Record issue times and distinguish forecasts from observed conditions.' },
      { title: 'Prioritize facilities for assessment', detail: 'Review each facility’s exposure, role, dependencies and last verified status. Record the criteria and assumptions behind its priority.' },
      { title: 'Assign inspections', detail: 'Give each inspection an owner and a location. Add the findings and completion status to the response map.' },
    ],
    outputs: [
      { title: 'Operational picture', detail: 'A map and status view linking facilities, relevant hazards, source information and current assignments.' },
      { title: 'Assessment queue', detail: 'A list of sites awaiting inspection, why each is a priority and what information is missing.' },
      { title: 'Mission record', detail: 'A traceable connection between a decision, an assigned task and the resulting field report.' },
    ],
    feedback: 'The next team reviewing a facility can see the latest assessment alongside earlier reports and revise its priority.',
  },
  {
    slug: 'connected-field-operations',
    title: 'Field inspections and work orders',
    summary: 'Link a field report to the asset it describes, assign the work and record what the crew finds.',
    discipline: 'Custom software & integration',
    scale: 'Asset → site → service area',
    visual: 'field',
    challenge: 'A field report, a GIS asset record and a work order may describe the same site. How can a crew update the right asset without reconciling three systems by hand each time the job status changes?',
    sources: ['Asset and facility registers', 'Georeferenced field forms and photographs', 'Inspection and maintenance history', 'Service boundaries and access information', 'Work orders and assignment status'],
    approach: [
      { title: 'Match reports to assets', detail: 'Keep original record identifiers and define matching rules. Flag uncertain matches for review, especially when several assets are close together.' },
      { title: 'Design the field form', detail: 'Ask for information a crew can collect on site. Account for limited connectivity and check entries before submission.' },
      { title: 'Synchronize work orders', detail: 'Link reviewed reports to assignments and status updates. Log changes, synchronization times and unresolved errors.' },
    ],
    outputs: [
      { title: 'Field application', detail: 'A focused form for observations, location, photographs and the context needed by the next person.' },
      { title: 'Work queue', detail: 'A location-based view of reviewed observations and assignments, including ownership and current status.' },
      { title: 'Traceable asset history', detail: 'A record of what was observed, what action followed and which source supports the latest status.' },
    ],
    feedback: 'When a crew closes a work order, the condition report becomes part of the asset’s maintenance history for the next inspection.',
  },
  {
    slug: 'community-location-intelligence',
    title: 'Site selection and community planning',
    summary: 'Compare potential sites using parcel records, zoning, infrastructure and residents’ observations.',
    discipline: 'Community, planning & real estate',
    scale: 'Parcel → neighborhood → community',
    visual: 'community',
    challenge: 'Which sites meet the planning criteria? Parcel, zoning and utility records document some conditions. Residents and site visits can identify others. Planners need to see which sources support each comparison and which questions are still open.',
    sources: ['Parcel and property information', 'Zoning and land-use records', 'Utilities and public infrastructure', 'Demographic and local economic information', 'Community observations and points of interest'],
    approach: [
      { title: 'Set the decision criteria', detail: 'Define the planning question, geographic extent and factors to compare. Keep assumptions explicit and retain links to the authoritative records.' },
      { title: 'Compare candidate sites', detail: 'Compare access, infrastructure and local conditions. Show which factors affect the comparison and which questions need a site visit.' },
      { title: 'Publish the comparison', detail: 'Share the findings in a property map, planning tool or StoryMap. Include residents’ observations and a way to submit new ones.' },
    ],
    outputs: [
      { title: 'Site comparison', detail: 'A geographic view of options, criteria and source information for a documented review.' },
      { title: 'Public-facing map', detail: 'An understandable view of local information, with useful context and links to the underlying sources.' },
      { title: 'Planning record', detail: 'A record of the assumptions, information gaps and observations that shaped the discussion.' },
    ],
    feedback: 'Add residents’ comments and site visit findings to the next comparison. Keep the earlier assumptions so planners can see what changed.',
  },
];
