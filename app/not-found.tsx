import Link from 'next/link';
import { Arrow } from '@/components/site/arrow';

export default function NotFound() {
  return <section className="not-found shell"><p className="eyebrow">404</p><h1>Page not found</h1><div className="hero-actions"><Link className="button button-red" href="/">Back to the homepage <Arrow /></Link><Link className="text-link" href="/capabilities">Explore capabilities <Arrow diagonal /></Link></div></section>;
}
