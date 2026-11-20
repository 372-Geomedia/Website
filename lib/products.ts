export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  headline: string;
  introduction: string;
  image: {
    src: string;
    alt: string;
    caption: string;
    credits?: { label: string; href: string }[];
  };
  example: { title: string; description: string };
  features: { title: string; description: string }[];
  inquiry: string;
};

export const products: Product[] = [
  {
    slug: '372-strata',
    name: '372 Strata',
    category: 'Subsurface geology',
    summary: 'Explore Texas geology, groundwater and oil and gas records in a Windows desktop atlas.',
    headline: 'Read the geology behind a Texas well.',
    introduction: 'Bring public well records and your own subsurface data into one Windows workspace. Start with a Texas county, select a well on the map and see how its geology compares with the wells around it.',
    image: {
      src: '/products/372-strata.webp',
      alt: 'Red and blue seismic reflections along two sides of a Stratton survey block meet a horizontal slice at 4,000 feet below sea level.',
      caption: 'Stratton field, South Texas. Line 90 and trace 55 meet beneath the 4,000-foot depth slice.',
      credits: [{ label: 'Bureau of Economic Geology, UT Austin · SEG', href: 'https://wiki.seg.org/wiki/Stratton_3D_survey' }],
    },
    example: {
      title: 'Build a section through nearby wells',
      description: 'Choose a well from a county package with wellbore records. Its cross section lines up filed formation depths, perforations and total depths in neighboring wells so you can see where the records agree and where a pick is missing.',
    },
    features: [
      { title: 'Put a well in context', description: 'Overlay aquifer footprints, water wells, soils and surface geology with oil and gas well locations from the Railroad Commission of Texas.' },
      { title: 'Inspect your own files', description: 'Read a curve by depth in a LAS well log, examine a directional survey or step through a section from a SEG-Y seismic file.' },
      { title: 'Reopen a county offline', description: 'Download the county and the layers you need before leaving the office. Saved records remain available for local review.' },
    ],
    inquiry: 'Which Texas county are you studying?',
  },
  {
    slug: 'gismaster',
    name: 'GISMaster',
    category: 'Parcel administration',
    summary: 'Follow ownership, recorded documents and parcel history in a working prototype for county mapping staff.',
    headline: 'Keep a parcel’s history through every split.',
    introduction: 'A parcel can change shape, owner and identifier over its lifetime. GISMaster is a working prototype that helps county mapping staff trace those changes back to the recorded documents.',
    image: {
      src: '/products/gismaster.svg',
      alt: 'An illustrated parcel division showing two successor lots inside the original boundary.',
      caption: 'Illustrative parcel division. A new boundary creates two successor parcels.',
    },
    example: {
      title: 'Follow the record after a parcel changes',
      description: 'When a tract is divided, a mapper can follow the original parcel to its successors. When parcels are combined, the surviving record links back to each retired parcel, where its ownership and document history remain available.',
    },
    features: [
      { title: 'Review the supporting records', description: 'Find a parcel and review its recorded documents, ownership history and taxing districts before applying a change.' },
      { title: 'Document the tax check', description: 'Before a division, combination or retirement, the prototype checks the collector account and records who ran the check, when it ran and the result.' },
      { title: 'Share the right records', description: 'Staff with export permission can download a filtered list of parcels, document histories or taxing districts. Protected owner details have separate access controls.' },
    ],
    inquiry: 'How does your county track parcel changes?',
  },
  {
    slug: 'geofara',
    name: 'Geofara',
    category: 'Field mapping',
    summary: 'Map assets, edit boundaries and record inspections in the field on an Android tablet.',
    headline: 'Bring the map to the inspection.',
    introduction: 'Geofara puts GIS editing tools in the hands of field crews. Draw a feature, record what you see and attach a photo while you’re still on site. The Android tablet workspace keeps the map, layers and inspection form within reach.',
    image: {
      src: '/products/geofara.webp',
      alt: 'Geofara’s layer panel beside a street map with two labeled valves, a dashed trail and a parcel boundary.',
      caption: 'Valves, a trail and a parcel in the Geofara tablet workspace.',
      credits: [
        { label: '© OpenStreetMap contributors', href: 'https://www.openstreetmap.org/copyright' },
        { label: 'OpenMapTiles', href: 'https://openmaptiles.org/' },
        { label: 'OpenFreeMap', href: 'https://openfreemap.org/' },
      ],
    },
    example: {
      title: 'Inspect a row of assets in one visit',
      description: 'Download a basemap before departure. At each valve, collect its position, record its condition and attach a photo. The inspection template can carry the inspector’s name into the next entry and clear the fields that need a fresh observation.',
    },
    features: [
      { title: 'Capture the location', description: 'Use the tablet’s GPS or a paired GNSS receiver to collect a point or track. Snap a new boundary to an existing vertex or trace a shared edge.' },
      { title: 'Build a form for the job', description: 'Define required fields and choices, scan an asset barcode or show a follow-up question when an inspection response calls for one.' },
      { title: 'Bring edits back to the office', description: 'Export a GeoPackage with photos linked to their features, or connect to PostgreSQL to edit a supported PostGIS table directly.' },
    ],
    inquiry: 'What does your crew need to capture in the field?',
  },
];
