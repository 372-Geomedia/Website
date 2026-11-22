import {
  Activity, ClipboardCheck, ClipboardList, Construction, Crosshair, Database, FileSearch,
  FileSpreadsheet, Fuel, History, Landmark, Layers, Link2, Pentagon, Printer, Scale, Search,
  Share2, ShieldCheck, Truck, WifiOff, Waves, Wrench,
} from 'lucide-react';
import type { ProductIconName } from '@/lib/products';

const icons: Record<ProductIconName, typeof Layers> = {
  layers: Layers,
  'file-search': FileSearch,
  'wifi-off': WifiOff,
  crosshair: Crosshair,
  waves: Waves,
  fuel: Fuel,
  search: Search,
  history: History,
  landmark: Landmark,
  scale: Scale,
  'shield-check': ShieldCheck,
  'file-spreadsheet': FileSpreadsheet,
  'clipboard-list': ClipboardList,
  link: Link2,
  pentagon: Pentagon,
  database: Database,
  printer: Printer,
  activity: Activity,
  construction: Construction,
  truck: Truck,
  'clipboard-check': ClipboardCheck,
  wrench: Wrench,
  share: Share2,
};

export function ProductIcon({ name }: { name: ProductIconName }) {
  const Icon = icons[name];
  return <Icon size={22} strokeWidth={1.6} aria-hidden="true" />;
}
