export type CapabilityKind = 'response' | 'platforms' | 'analysis' | 'software' | 'integration' | 'planning';

type Capability = {
  kind: CapabilityKind;
  title: string;
  description: string;
  applications: string[];
};

// Capability groups follow the redesign brief. Operational examples retain
// service offerings from the existing company pages, not claims of past results.
export const capabilities: Capability[] = [
  {
    kind: 'response',
    title: 'Emergency Management',
    description: 'Help coordinators track damage reports, available crews and open assignments during response and recovery.',
    applications: [
      'Situational awareness & mission tracking',
      'Blue Roof, debris & temporary power operations',
      'Infrastructure assessment & work orders',
    ],
  },
  {
    kind: 'platforms',
    title: 'Geospatial Platforms',
    description: 'Set up and maintain GIS platforms on your servers or in the cloud.',
    applications: [
      'Enterprise & cloud GIS',
      'Collaborative maps, dashboards & forms',
      'Existing GIS assessment & optimization',
    ],
  },
  {
    kind: 'analysis',
    title: 'Spatial Analysis & GeoAI',
    description: 'Analyze imagery and model hazards to assess which properties are exposed.',
    applications: [
      'Hazard, vulnerability & imagery analysis',
      'Property analysis & commercial site selection',
      'Predictive models & AI-assisted workflows',
    ],
  },
  {
    kind: 'software',
    title: 'Custom Software',
    description: 'Build web, desktop and mobile tools for inspections, work orders and reporting.',
    applications: [
      'Web, desktop & field applications',
      'Assignments, status tracking & reporting',
      'GIS extensions & ongoing support',
    ],
  },
  {
    kind: 'integration',
    title: 'Data Engineering & Integration',
    description: 'Connect field and office systems so teams can trace each update to its source.',
    applications: [
      'ETL, APIs & spatial databases',
      'Sensors, field data & real-time feeds',
      'Business-system integration & data lineage',
    ],
  },
  {
    kind: 'planning',
    title: 'Community & Planning',
    description: 'Map parcels, zoning and infrastructure so planners and residents can compare development options.',
    applications: [
      'StoryMaps & public engagement tools',
      'Zoning, parcels & infrastructure insights',
      'Demographic & development analysis',
    ],
  },
];
