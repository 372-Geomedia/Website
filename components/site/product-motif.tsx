import type { ProductMotifName } from '@/lib/products';

// Decorative line art for the product pages. Everything is generated from
// fixed numbers, so the markup is identical on every build. Strokes use
// currentColor; the page sets that to the product's accent.

const W = 1440;
const H = 720;
const n = (value: number) => value.toFixed(1);

function seeded(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Strata: stacked, gently dipping reflectors with a well bore and sand picks. */
const strataLayers = 17;
const wellX = 1070;

function strataY(layer: number, x: number) {
  const base = 40 + layer * 42;
  const amplitude = 12 + (layer % 5) * 4;
  const phase = layer * 0.62;
  const dip = (x / W) * (layer % 2 ? 26 : 38);
  return base + dip + Math.sin(x / 210 + phase) * amplitude + Math.sin(x / 83 + phase * 2) * 3.5;
}

function Strata() {
  const lines = Array.from({ length: strataLayers }, (_, layer) => {
    const points: string[] = [];
    for (let x = -20; x <= W + 20; x += 20) points.push(`${n(x)} ${n(strataY(layer, x))}`);
    return { layer, d: `M${points.join(' L')}` };
  });
  const picks = [3, 6, 9, 12];
  return (
    <>
      {lines.map(({ layer, d }) => (
        <path key={layer} d={d} strokeWidth={layer % 4 === 0 ? 1.6 : 1} opacity={0.28 + (layer % 4 === 0 ? 0.32 : (layer % 3) * 0.08)} />
      ))}
      <path d={`M${wellX} 0V${H}`} strokeDasharray="3 7" opacity=".7" />
      {picks.map(layer => (
        <g key={layer}>
          <circle cx={wellX} cy={n(strataY(layer, wellX))} r="6" fill="#151d1c" strokeWidth="1.6" />
          <path d={`M${wellX + 12} ${n(strataY(layer, wellX))}h46`} opacity=".7" />
          <text x={wellX + 66} y={n(strataY(layer, wellX) + 4)} stroke="none" fill="currentColor" fontSize="12" letterSpacing="1.5">{`SAND ${46 - layer * 2}`}</text>
        </g>
      ))}
    </>
  );
}

/* GISMaster: a lattice of parcels, one of them divided by a dashed new boundary. */
function Parcels() {
  const random = seeded(372);
  const cols = 12;
  const rows = 8;
  const gx = 150;
  const gy = 110;
  const grid = Array.from({ length: rows + 1 }, (_, r) =>
    Array.from({ length: cols + 1 }, (_, c) => ({
      x: c * gx + (c === 0 || c === cols ? 0 : (random() - 0.5) * 54),
      y: r * gy + (r === 0 || r === rows ? 0 : (random() - 0.5) * 44),
    })),
  );
  const cells: { key: string; d: string }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const [a, b, d, e] = [grid[r][c], grid[r][c + 1], grid[r + 1][c + 1], grid[r + 1][c]];
      cells.push({ key: `${r}-${c}`, d: `M${n(a.x)} ${n(a.y)}L${n(b.x)} ${n(b.y)}L${n(d.x)} ${n(d.y)}L${n(e.x)} ${n(e.y)}Z` });
    }
  }
  const [ta, tb, tc, td] = [grid[3][7], grid[3][8], grid[4][8], grid[4][7]];
  const mid = (p: { x: number; y: number }, q: { x: number; y: number }) => ({ x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 });
  const top = mid(ta, tb);
  const bottom = mid(td, tc);
  const centre = (p: { x: number; y: number }, q: { x: number; y: number }, s: { x: number; y: number }, t: { x: number; y: number }) => ({ x: (p.x + q.x + s.x + t.x) / 4, y: (p.y + q.y + s.y + t.y) / 4 });
  const left = centre(ta, top, bottom, td);
  const right = centre(top, tb, tc, bottom);
  return (
    <g transform="translate(-120 -80) rotate(-9 720 360)">
      {cells.map(cell => <path key={cell.key} d={cell.d} opacity=".34" />)}
      <path d={`M${n(ta.x)} ${n(ta.y)}L${n(top.x)} ${n(top.y)}L${n(bottom.x)} ${n(bottom.y)}L${n(td.x)} ${n(td.y)}Z`} fill="currentColor" fillOpacity=".14" strokeWidth="1.6" />
      <path d={`M${n(top.x)} ${n(top.y)}L${n(tb.x)} ${n(tb.y)}L${n(tc.x)} ${n(tc.y)}L${n(bottom.x)} ${n(bottom.y)}Z`} fill="currentColor" fillOpacity=".06" strokeWidth="1.6" />
      <path d={`M${n(top.x)} ${n(top.y)}L${n(bottom.x)} ${n(bottom.y)}`} strokeWidth="2.4" strokeDasharray="10 7" />
      {[ta, tb, tc, td].map((p, i) => <circle key={i} cx={n(p.x)} cy={n(p.y)} r="5" fill="#151d1c" strokeWidth="1.8" />)}
      {[top, bottom].map((p, i) => <circle key={i} cx={n(p.x)} cy={n(p.y)} r="6" fill="currentColor" stroke="none" />)}
      <text x={n(left.x)} y={n(left.y + 8)} textAnchor="middle" stroke="none" fill="currentColor" fontSize="26" letterSpacing="3">LOT A</text>
      <text x={n(right.x)} y={n(right.y + 8)} textAnchor="middle" stroke="none" fill="currentColor" fontSize="26" letterSpacing="3">LOT B</text>
    </g>
  );
}

/* Geofara: a graticule, a GPS track, snapped boundary corners and a crosshair. */
function Field() {
  const track = 'M60 590C220 560 300 470 430 470S610 560 760 500S960 330 1090 300S1250 250 1340 190';
  const vertices: [number, number][] = [[60, 590], [250, 540], [430, 470], [598, 520], [760, 500], [930, 372], [1090, 300], [1220, 262]];
  const parcel: [number, number][] = [[560, 150], [900, 120], [960, 280], [700, 330], [540, 260]];
  const polygon = `M${parcel.map(([x, y]) => `${x} ${y}`).join('L')}Z`;
  return (
    <>
      {Array.from({ length: 13 }, (_, i) => <path key={`v${i}`} d={`M${i * 120} 0V${H}`} opacity=".1" />)}
      {Array.from({ length: 7 }, (_, i) => <path key={`h${i}`} d={`M0 ${i * 120}H${W}`} opacity=".1" />)}
      <path d={polygon} strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" fill="currentColor" fillOpacity=".06" />
      {parcel.map(([x, y], i) => <rect key={i} x={x - 5} y={y - 5} width="10" height="10" fill="#151d1c" strokeWidth="1.6" />)}
      <path d={track} strokeWidth="2.4" strokeDasharray="14 9" />
      {vertices.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5" fill="#151d1c" strokeWidth="1.8" />)}
      <g transform="translate(1340 190)">
        <circle r="74" opacity=".25" strokeDasharray="3 6" />
        <circle r="42" opacity=".45" />
        <circle r="9" fill="currentColor" stroke="none" />
        <path d="M-96 0h60M36 0h60M0-96v60M0 36v60" strokeWidth="1.6" />
      </g>
      <text x="1130" y="104" stroke="none" fill="currentColor" fontSize="13" letterSpacing="1.5" opacity=".8">29.69600, −95.30250</text>
      <text x="70" y="636" stroke="none" fill="currentColor" fontSize="13" letterSpacing="1.5" opacity=".8">TRACK · 8 VERTICES</text>
    </>
  );
}

/* LeveeGuard: river, levee crest with stationing, and a hydrograph cresting over flood stage. */
function Levee() {
  const crest = 'M-20 352L1460 318';
  const ticks = Array.from({ length: 17 }, (_, i) => 20 + i * 90);
  const water = Array.from({ length: 11 }, (_, i) => {
    const y = 430 + i * 28;
    const points: string[] = [];
    for (let x = -20; x <= W + 20; x += 20) points.push(`${n(x)} ${n(y + Math.sin(x / 120 + i * 0.9) * (3 + i * 0.5))}`);
    return { i, d: `M${points.join(' L')}` };
  });
  const hydrograph = 'M40 250C220 248 380 236 520 200S760 70 900 62S1120 110 1240 168S1360 214 1420 222';
  return (
    <>
      {water.map(({ i, d }) => <path key={i} d={d} opacity={0.5 - i * 0.035} />)}
      <path d={crest} strokeWidth="2.4" />
      {ticks.map((x, i) => {
        const y = 352 - ((x + 20) / (W + 40)) * 34;
        return (
          <g key={x}>
            <path d={`M${x} ${n(y)}v${i % 3 === 0 ? 20 : 11}`} opacity=".8" />
            {i % 3 === 0 && <text x={x - 16} y={n(y + 38)} stroke="none" fill="currentColor" fontSize="12" letterSpacing="1.2" opacity=".8">{`${12 + i / 3}+00`}</text>}
          </g>
        );
      })}
      <path d="M0 150H1440" strokeDasharray="4 8" opacity=".55" />
      <text x="40" y="140" stroke="none" fill="currentColor" fontSize="12" letterSpacing="2" opacity=".8">FLOOD STAGE</text>
      <path d={hydrograph} strokeWidth="2.6" />
      <circle cx="900" cy="62" r="7" fill="#151d1c" strokeWidth="2" />
      <path d="M900 78V318" strokeDasharray="2 6" opacity=".6" />
      <text x="916" y="58" stroke="none" fill="currentColor" fontSize="12" letterSpacing="2">CREST</text>
    </>
  );
}

const motifs: Record<ProductMotifName, () => React.JSX.Element> = {
  strata: Strata,
  parcels: Parcels,
  field: Field,
  levee: Levee,
};

export function ProductMotif({ name, className = 'pdp-motif' }: { name: ProductMotifName; className?: string }) {
  const Motif = motifs[name];
  return (
    <svg className={className} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fontFamily="var(--font-plex-mono), monospace" aria-hidden="true" focusable="false">
      <Motif />
    </svg>
  );
}
