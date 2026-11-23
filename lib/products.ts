type Credit = { label: string; href: string };
type ProductImage = {
  src: string;
  alt: string;
  caption: string;
  credits?: Credit[];
};
type Feature = { title: string; description: string };

export type ProductIconName =
  | 'layers' | 'file-search' | 'wifi-off' | 'crosshair' | 'waves' | 'fuel'
  | 'search' | 'history' | 'landmark' | 'scale' | 'shield-check' | 'file-spreadsheet'
  | 'clipboard-list' | 'link' | 'pentagon' | 'database' | 'printer'
  | 'activity' | 'construction' | 'truck' | 'clipboard-check' | 'wrench' | 'share';

export type ProductMotifName = 'strata' | 'parcels' | 'field' | 'levee';

export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  headline: string;
  introduction: string;
  /** Bright tone for dark backgrounds, and a deeper ink tone for light ones. */
  accent: string;
  accentInk: string;
  motif: ProductMotifName;
  /** Chrome drawn around the screenshots. */
  frame: 'window' | 'tablet';
  frameLabel: string;
  /** Short status and platform chips under the hero introduction. */
  badges: string[];
  /** Two small facts that float beside the hero image. */
  callouts: { label: string; value: string }[];
  /** Verifiable counts for the strip below the hero. */
  highlights: { value: string; label: string }[];
  /** A one-sentence problem, then the product's answer to it. */
  pitch: { lead: string; answer: string };
  image: ProductImage;
  screenshotIntro: string;
  screenshots: (ProductImage & { title: string; width: number; height: number })[];
  example: Feature & { steps: Feature[] };
  features: (Feature & { icon: ProductIconName })[];
  inquiry: string;
};

const strattonCredit = [{ label: 'Bureau of Economic Geology, UT Austin · SEG', href: 'https://wiki.seg.org/wiki/Stratton_3D_survey' }];
const basemapCredits = [
  { label: '© OpenStreetMap contributors', href: 'https://www.openstreetmap.org/copyright' },
  { label: 'OpenMapTiles', href: 'https://openmaptiles.org/' },
  { label: 'OpenFreeMap', href: 'https://openfreemap.org/' },
];

export const products: Product[] = [
  {
    slug: '372-strata',
    name: '372 Strata',
    category: 'Subsurface geology',
    summary: 'Explore Texas geology, groundwater and oil and gas records in a Windows desktop atlas.',
    headline: 'Read the geology behind a Texas well.',
    introduction: 'Bring public well records and your own subsurface data into one Windows workspace. Start with a Texas county, select a well on the map and see how its geology compares with the wells around it.',
    accent: '#7ea3f2',
    accentInk: '#2c4ca6',
    motif: 'strata',
    frame: 'window',
    frameLabel: '372 Strata',
    badges: ['Windows desktop', 'Offline once downloaded', 'Texas counties'],
    callouts: [
      { label: 'Open your own files', value: 'LAS · SEG-Y · GeoPackage' },
      { label: 'Stacked in one view', value: 'Wells · aquifers · soils · faults' },
    ],
    highlights: [
      { value: '7', label: 'map products, from aquifers to oil and gas wells' },
      { value: '7', label: 'industry file workflows, from LAS logs to SEG-Y seismic' },
      { value: '21', label: 'wells and 10 tracked sand tops in the bundled Stratton survey' },
      { value: '0', label: 'map accounts or access tokens required' },
    ],
    pitch: {
      lead: 'A well’s filing, its water-well neighbors, the rock at the surface and the seismic beneath it rarely share a screen.',
      answer: ' 372 Strata puts them in one window, one county at a time.',
    },
    image: {
      src: '/products/372-strata.webp',
      alt: 'Red and blue seismic reflections along two sides of a Stratton survey block meet a horizontal slice at 4,000 feet below sea level.',
      caption: 'Stratton field, South Texas. Line 90 and trace 55 meet beneath the 4,000-foot depth slice.',
      credits: strattonCredit,
    },
    screenshotIntro: 'Explore a Texas county, its surface geology and the seismic section through a reference well.',
    screenshots: [
      {
        title: 'Read wells against the surface geology',
        src: '/products/strata-geology-map.webp', width: 1600, height: 1000,
        alt: 'Water-well markers over colored surface rock units in Kleberg County, with layer and reported-depth controls beside the map.',
        caption: 'These are saved groundwater records for Kleberg County. Filter the wells by reported depth, then select a well or a rock unit to inspect its source attributes.',
        credits: [
          { label: 'Texas Water Development Board', href: 'https://www.twdb.texas.gov/groundwater/data/data-well-reports.asp' },
          { label: 'Geologic Atlas of Texas', href: 'https://feature.geographic.texas.gov/arcgis/rest/services/Geologic_Database/GeologicDatabaseofTexas_250k/MapServer' },
        ],
      },
      {
        title: 'Choose what to download',
        src: '/products/strata-county-atlas.webp', width: 1600, height: 1000,
        alt: 'Texas county atlas with Kleberg highlighted and the oil, gas and groundwater download options open.',
        caption: 'Select a county to choose its oil and gas records. Geology and groundwater layers can be downloaded separately for the same workspace.',
        credits: [{ label: 'County boundaries from the U.S. Census Bureau', href: 'https://tigerweb.geo.census.gov/arcgis/rest/services/Generalized_ACS2024/State_County/MapServer/11' }],
      },
      {
        title: 'Follow a sand top across wells',
        src: '/products/strata-well-section.webp', width: 1378, height: 455,
        alt: 'Seven well tracks over red and blue seismic reflections, with sand-top picks and the tracked B46 surface.',
        caption: 'Stratton line 199 runs 2.4 miles west to east through well 9. The section shows the distance of each projected well from the line, its sand picks and any available logs.',
        credits: strattonCredit,
      },
    ],
    example: {
      title: 'Build a section through nearby wells',
      description: 'A formation listed in one well may be missing from the next well’s filing. A cross section lets you compare what each operator reported.',
      steps: [
        { title: 'Choose the county and records', description: 'In the Texas atlas, download a county with the Maps + wellbore records package. Open the county in 3D and select a well to see its operator, field and filed depth.' },
        { title: 'Line up the neighbors', description: 'Choose “Section through it” to place nearby wells side by side. Read the formation depths, perforated intervals and total depth for each well.' },
        { title: 'Check a pick against a log', description: 'Open a LAS log and formation-top table in the file inspector. When the depth references agree, compare the picked top with the curve at that depth.' },
      ],
    },
    features: [
      { icon: 'layers', title: 'Put a well in context', description: 'Overlay aquifer footprints, water wells, soils and surface geology with oil and gas well locations from the Railroad Commission of Texas.' },
      { icon: 'file-search', title: 'Inspect your own files', description: 'Read a curve by depth in a LAS well log, examine a directional survey or step through a section from a SEG-Y seismic file.' },
      { icon: 'wifi-off', title: 'Reopen a county offline', description: 'Download the county and the layers you need before leaving the office. Saved records remain available for local review.' },
      { icon: 'crosshair', title: 'Screen a proposed site', description: 'Drop a pin, set a radius and list nearby water wells, drillers’ reports and oil and gas well locations. Export the records as CSV or a printable map and source inventory as HTML.' },
      { icon: 'waves', title: 'Compare groundwater observations', description: 'Set the ends and width of a groundwater section. Compare dated water levels and screened intervals across the wells in that corridor.' },
      { icon: 'fuel', title: 'Read production by reporting unit', description: 'Review oil by lease and gas by gas-well ID. When several wells share a reporting unit, its production is counted once.' },
    ],
    inquiry: 'Which Texas county are you studying?',
  },
  {
    slug: 'parcelwise',
    name: 'Parcelwise',
    category: 'Parcel ownership records',
    summary: 'Keep parcel ownership, recorded deeds and every split or combination in one record for an appraisal district.',
    headline: 'One record of who owns every parcel, and how they got it.',
    introduction: 'Parcelwise is the record an appraisal district’s mapping and ownership staff keep beside its CAMA system. It takes in the deeds the county clerk records, keeps every change to a parcel and passes each change on to the offices that need it.',
    accent: '#6fcfa8',
    accentInk: '#1f6b4f',
    motif: 'parcels',
    frame: 'window',
    frameLabel: 'Parcelwise · prototype screens',
    badges: ['In development', 'Texas appraisal districts', 'ASP.NET Core · SQL Server'],
    callouts: [
      { label: 'Each morning', value: 'The clerk’s new deeds, queued' },
      { label: 'On every transfer', value: 'Exemption review flagged' },
    ],
    highlights: [
      { value: '3', label: 'offices kept in step: CAMA, the tax office and the county clerk' },
      { value: '5', label: 'starter roles, assigned through the district’s own directory groups' },
      { value: '8', label: 'parts available in a parcel ID format, set before loading' },
      { value: '1', label: 'transaction applies a deed to every parcel it covers' },
    ],
    pitch: {
      lead: 'When a deed is recorded, the owner, the exemptions and three other offices’ records all have to catch up.',
      answer: ' Parcelwise keeps one record and passes each change on, with nothing failing silently.',
    },
    image: {
      src: '/products/parcelwise.svg',
      alt: 'An illustrated parcel division showing two successor lots inside the original boundary.',
      caption: 'Illustrative parcel division. A new boundary creates two successor parcels.',
    },
    screenshotIntro: 'These screens come from the working prototype Parcelwise grew out of, and use invented parcel records.',
    screenshots: [
      {
        title: 'Check the tax history',
        src: '/products/parcelwise-tax-history.webp', width: 1320, height: 840,
        alt: 'Collector tab for a fictional parcel, with ten paid tax years and an itemized 2026 bill.',
        caption: 'Each tax year’s bill sits beside a history of balances and payments. Staff can see the evidence behind the tax check before dividing a parcel.',
      },
      {
        title: 'Prepare the split',
        src: '/products/parcelwise-split.webp', width: 1320, height: 872,
        alt: 'Split parcel form showing proposed IDs and deeded acres for Lots A and B, with the option to retire the parent selected.',
        caption: 'Preview the new parcel identifiers, assign lot labels and deeded acreage, and record the plat that explains the change.',
      },
      {
        title: 'Follow the successors',
        src: '/products/parcelwise-lineage.webp', width: 1320, height: 872,
        alt: 'History tab of the retired demo parcel, with links to both successors above four recorded documents.',
        caption: 'After the split, the retired parent links to both new parcels and retains its four recorded instruments. A reviewer can follow either successor back to this source.',
      },
    ],
    example: {
      title: 'From a recorded deed to updated records',
      description: 'A deed is recorded at the county clerk. The district needs the owner changed, the exemption reviewed and CAMA told, with a record of how each step happened.',
      steps: [
        { title: 'Match the deed to its parcels', description: 'The clerk’s recordings arrive each morning, oldest first. For each one, the queue lists possible parcels with the evidence behind each match, and the clerk chooses every parcel the deed covers.' },
        { title: 'Apply it as a transfer', description: 'Choose a transfer, additional vesting or history only. Applying saves every selected parcel’s history, ownership changes, outgoing notices and the intake decision together. A failed save leaves the deed available to retry.' },
        { title: 'Review the exemption and follow the handoff', description: 'The parcel is flagged for exemption review, because an exemption the seller had does not pass to the buyer. The Exchange page shows what each office received, and retries anything that failed.' },
      ],
    },
    features: [
      { icon: 'file-search', title: 'Work the clerk’s recordings', description: 'Each morning’s recordings land in a queue, oldest first. For every instrument the queue lists candidate parcels with the evidence behind each match, so the clerk can choose every parcel a deed covers.' },
      { icon: 'pentagon', title: 'Divide, combine and retire without losing history', description: 'New parcels start with the parent’s owner, situs, taxing units and history for the mapper to correct. Combined parcels link both ways. Nothing is deleted, and a parcel with past-due taxes is refused.' },
      { icon: 'history', title: 'Ask who owned it, and when', description: 'Look up the ownership in effect on a chosen date, or on January 1 of a tax year, with its source and document number. Earlier dates without enough evidence show an empty result.' },
      { icon: 'landmark', title: 'Catch exemptions at the transfer', description: 'A change of owner flags the parcel for exemption review, because an exemption the seller had does not pass to the buyer, and CAMA is told.' },
      { icon: 'shield-check', title: 'Keep protected owners protected', description: 'Owners whose records are confidential are masked in every screen, export, report and look-up for anyone without the protected-records permission. Every unmasked view is audited.' },
      { icon: 'share', title: 'Hand each change to the next office', description: 'A change another office needs is queued in the same transaction that saves it, then delivered through an adapter for CAMA, the tax office or the county clerk. Staff can see what failed and why, then retry or correct it.' },
    ],
    inquiry: 'How does your district track parcel changes?',
  },
  {
    slug: 'geofara',
    name: 'Geofara',
    category: 'Field mapping',
    summary: 'Map assets, edit boundaries and record inspections in the field on an Android tablet.',
    headline: 'Bring the map to the inspection.',
    introduction: 'Geofara puts GIS editing tools in the hands of field crews. Draw a feature, record what you see and attach a photo while you’re still on site. The Android tablet workspace keeps the map, layers and inspection form within reach.',
    accent: '#c6e266',
    accentInk: '#566b0c',
    motif: 'field',
    frame: 'tablet',
    frameLabel: 'Geofara',
    badges: ['Android tablet', 'Offline-ready', 'PostGIS sync'],
    callouts: [
      { label: 'Capture on site', value: 'GPS · photo · barcode' },
      { label: 'Hand back', value: 'GeoPackage with photos' },
    ],
    highlights: [
      { value: '8', label: 'typed field kinds, from choice lists to JSON' },
      { value: '1', label: 'tap to save a feature and start the next one' },
      { value: '3', label: 'north references for bearings: true, UTM grid or magnetic' },
    ],
    pitch: {
      lead: 'The inspection happens in the field. The record shouldn’t have to wait for the office.',
      answer: ' Geofara puts the map, the form and the camera in one tablet workspace.',
    },
    image: {
      src: '/products/geofara.webp',
      alt: 'Geofara’s layer panel beside a street map with two labeled valves, a dashed trail and a parcel boundary.',
      caption: 'Valves, a trail and a parcel in the Geofara tablet workspace.',
      credits: basemapCredits,
    },
    screenshotIntro: 'Three views from the Android tablet editor show how field observations become features, records and printed maps.',
    screenshots: [
      {
        title: 'Inspect a mapped tree',
        src: '/products/geofara-inspector.webp', width: 1280, height: 800,
        alt: 'Tree T01 selected on the Golden Gate Park sample map, with a highlighted table row and its feature inspector open.',
        caption: 'Select a tree in the sample inventory to see its species, height, trunk diameter and condition alongside its location on the map.',
        credits: basemapCredits,
      },
      {
        title: 'Shape a trail alignment',
        src: '/products/geofara-curve.webp', width: 1440, height: 900,
        alt: 'An orange arc previews a bend in the selected trail segment, with radius, length and an Apply curve control.',
        caption: 'The vertex editor keeps both endpoints fixed while you set the bend. Read the radius and arc length before applying the curve.',
      },
      {
        title: 'Lay out a field map',
        src: '/products/geofara-layout.webp', width: 1440, height: 900,
        alt: 'Page one of a two-page layout with a Golden Gate Park map, a tree legend, a scale bar and a selected notes box.',
        caption: 'Arrange the map, legend and field notes on a printable sheet. The project saves the layout for its next PDF export.',
      },
    ],
    example: {
      title: 'Inspect a row of assets in one visit',
      description: 'For a valve survey, the crew needs a map it can take offline, a consistent inspection form and a file the office can reopen with the photos attached.',
      steps: [
        { title: 'Prepare the area', description: 'Download the basemap while connected. Set up the asset inspection layer with the fields the crew needs at each stop, including condition and photos.' },
        { title: 'Collect the next observation', description: 'Capture the valve’s position, record its condition and take a photo. “Save & collect next” can keep the inspector’s name and clear the observation fields for the next valve.' },
        { title: 'Return the inspection', description: 'Review the records in the attribute table. Export the layer to GeoPackage to hand over the geometry, attributes and photos together.' },
      ],
    },
    features: [
      { icon: 'crosshair', title: 'Capture the location', description: 'Use the tablet’s GPS or a paired GNSS receiver to collect a point or track. Snap a new boundary to an existing vertex or trace a shared edge.' },
      { icon: 'clipboard-list', title: 'Build a form for the job', description: 'Define required fields and choices, scan an asset barcode or show a follow-up question when an inspection response calls for one.' },
      { icon: 'link', title: 'Keep repeat inspections together', description: 'Link each visit to its parent asset. Open the asset to see its related records, then add a new inspection with its own date, observations and attachments.' },
      { icon: 'pentagon', title: 'Edit shared boundaries', description: 'Move a common corner or insert a vertex on a shared edge. Preview the neighboring polygons involved and apply the edits together.' },
      { icon: 'database', title: 'Sync field edits to PostGIS', description: 'Edit a supported PostGIS layer directly, or take an editable copy offline. On reconnect, compare conflicting tablet and database edits before syncing.' },
      { icon: 'printer', title: 'Print a map for the crew', description: 'Set the paper size and map extent, place a legend and scale bar, and add field notes. Export the saved layout to PDF.' },
    ],
    inquiry: 'What does your crew need to capture in the field?',
  },
  {
    slug: 'leveeguard',
    name: 'LeveeGuard',
    category: 'Flood fight operations',
    summary: 'Record levee patrol observations offline and prepare a daily flood fight log from the district’s event records.',
    headline: 'See what changed since the last levee patrol.',
    introduction: 'LeveeGuard gives field crews and district coordinators a shared record of high water. Crews can photograph what they see on patrol, even without cell service. After sync, the district can review reports by levee station and see which response measures are still in place.',
    accent: '#f4a259',
    accentInk: '#9a4a07',
    motif: 'levee',
    frame: 'window',
    frameLabel: 'Flood Fight · prototype',
    badges: ['Prototype', 'Offline-first', 'Field crews + coordinators'],
    callouts: [
      { label: 'No signal needed', value: 'Saved on the device until sync' },
      { label: 'River stage', value: 'USGS gauge · NWS forecast' },
    ],
    highlights: [
      { value: '39', label: 'items on the demonstration district’s routine inspection checklist' },
      { value: '3', label: 'public data sources: USGS gauges, NWS forecasts and the National Levee Database' },
      { value: '2', label: 'map export formats for observations and measures: GeoJSON and KML' },
    ],
    pitch: {
      lead: 'On a levee, the next shift needs to know what the last one saw.',
      answer: ' LeveeGuard keeps every observation, measure and delivery in one shared record, even when the signal drops.',
    },
    image: {
      src: '/products/leveeguard.webp',
      alt: 'An orange flood barrier and sandbags follow a brick walkway beside the high Mississippi River in Baton Rouge.',
      caption: 'Temporary barriers along the Baton Rouge levee during the Mississippi River flood of May 2011.',
      credits: [{ label: 'U.S. Geological Survey', href: 'https://www.usgs.gov/media/images/tiger-dams-reinforce-baton-rouge-levees' }],
    },
    screenshotIntro: 'The prototype displays the name Flood Fight. These screens use demonstration records to show how a district documents its work.',
    screenshots: [
      {
        title: 'See what needs attention',
        src: '/products/leveeguard-overview.webp', width: 1580, height: 960,
        alt: 'Flood Fight coordinator dashboard for a demonstration district, with event counts, maintenance totals and recent activity.',
        caption: 'The district overview shows three open observations, one response measure in place and an overdue maintenance item. Each count opens the records behind it.',
      },
      {
        title: 'Record an inspection finding',
        src: '/products/leveeguard-inspection.webp', width: 1360, height: 960,
        alt: 'Field inspection checklist showing four rated items and an expanded finding marked minimally acceptable.',
        caption: 'The crew has rated four of 39 items on a routine district inspection. For a finding rated minimally acceptable, the crew can record the station, notes and recommended follow-up.',
      },
      {
        title: 'Compare field reports with river stage',
        src: '/products/leveeguard-event-summary.webp', width: 1360, height: 960,
        alt: 'Printable exercise summary with a Missouri River stage chart and two fictional observations listed by levee station.',
        caption: 'This exercise pairs fictional field reports with June 2019 gauge readings at Hermann, Missouri. The chart marks event activation, the river crest and when the exercise threat passed.',
        credits: [
          { label: 'USGS Hermann gauge', href: 'https://waterdata.usgs.gov/monitoring-location/USGS-06934500/' },
          { label: 'National Weather Service flood stages', href: 'https://water.noaa.gov/gauges/HRNM7' },
        ],
      },
    ],
    example: {
      title: 'Hand off the evening patrol',
      description: 'Two crews can report the same spot hours apart. The next shift needs both accounts, the location along the levee and a record of what the district did that day.',
      steps: [
        { title: 'Record what the crew saw', description: 'Open the event on the field device. With a GPS fix, select the observation type and severity, add a note or photo, and save. The device keeps the record until it can sync.' },
        { title: 'Compare reports at the station', description: 'After sync, the coordinator checks the location, time and severity. If an earlier patrol reported the same feature, link the two observations so the next crew can follow both accounts.' },
        { title: 'Prepare the shift handoff', description: 'Choose the event and date for the daily log. Review the observations, measures placed or removed and material deliveries, then print the log or export its CSV for the incoming shift.' },
      ],
    },
    features: [
      { icon: 'activity', title: 'Read the river gauge', description: 'View recent readings on a hydrograph alongside flood stages and the available forecast crest. The observation time tells the coordinator how current the reading is.' },
      { icon: 'construction', title: 'Track temporary measures', description: 'Keep a record of measures placed during an event and follow their removal status. The next shift can distinguish work still in place from work already removed.' },
      { icon: 'truck', title: 'Account for material deliveries', description: 'Record the supplier, ticket number, material and delivered quantity. Keep the ticket photo and its materials cost entry with the event for later review.' },
      { icon: 'clipboard-check', title: 'Turn findings into follow-up work', description: 'Walk a levee segment with the district inspection checklist. Attach notes and photos to individual findings so a coordinator can review them, record deficiencies and sign off on the inspection.' },
      { icon: 'wrench', title: 'Keep an asset’s maintenance history', description: 'Find a gate, culvert or pump station by levee segment and station. Open its record to review work orders, outstanding deficiencies and past maintenance.' },
      { icon: 'share', title: 'Share an event summary', description: 'Coordinators can issue a read-only guest link to an event summary. District staff can also export mapped observations and measures as GeoJSON or KML.' },
    ],
    inquiry: 'What does your district need for the next patrol handoff?',
  },
];
