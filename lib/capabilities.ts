export type CapabilityKind = 'response' | 'platforms' | 'analysis' | 'software' | 'integration' | 'planning';

type Capability = {
  kind: CapabilityKind;
  field: string;
  title: string;
  description: string;
  applications: string[];
};

// Capability groups follow the redesign brief. Operational examples retain
// service offerings from the existing company pages, not claims of past results.
export const capabilities: Capability[] = [
  {
    kind: 'response',
    field: 'Response & recovery',
    title: 'Emergency Management',
    description: 'Track missions, assets and field teams in one operational picture—from the first report through recovery.',
    applications: [
      'Situational awareness & mission tracking',
      'Blue Roof, debris & temporary power operations',
      'Infrastructure assessment & work orders',
    ],
  },
  {
    kind: 'platforms',
    field: 'Shared environments',
    title: 'Geospatial Platforms',
    description: 'Stand up, assess and improve the GIS your organization depends on, whether on premises or in the cloud.',
    applications: [
      'Enterprise & cloud GIS',
      'Collaborative maps, dashboards & forms',
      'Existing GIS assessment & optimization',
    ],
  },
  {
    kind: 'analysis',
    field: 'Patterns & possibilities',
    title: 'Spatial Analysis & GeoAI',
    description: 'Use geography, imagery and AI-assisted models to find patterns, assess hazards and compare locations.',
    applications: [
      'Hazard, vulnerability & imagery analysis',
      'Property analysis & commercial site selection',
      'Predictive models & AI-assisted workflows',
    ],
  },
  {
    kind: 'software',
    field: 'Purpose-built tools',
    title: 'Custom Software',
    description: 'Build applications around the way your teams actually work, instead of reshaping the work to fit the tool.',
    applications: [
      'Web, desktop & field applications',
      'Assignments, status tracking & reporting',
      'GIS extensions & ongoing support',
    ],
  },
  {
    kind: 'integration',
    field: 'Information in motion',
    title: 'Data Engineering & Integration',
    description: 'Connect the systems you already have so location data moves between them cleanly—and can be traced.',
    applications: [
      'ETL, APIs & spatial databases',
      'Sensors, field data & real-time feeds',
      'Business-system integration & data lineage',
    ],
  },
  {
    kind: 'planning',
    field: 'People & place',
    title: 'Community & Planning',
    description: 'Turn parcels, zoning and local data into maps that residents and decision-makers can use.',
    applications: [
      'StoryMaps & public engagement tools',
      'Zoning, parcels & infrastructure insights',
      'Demographic & development analysis',
    ],
  },
];
