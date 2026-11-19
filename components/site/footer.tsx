import Link from 'next/link';
import { company, navigation, talk } from '@/lib/site-content';

export function Footer() {
  return <footer className="site-footer">
    <div className="shell footer-inner">
      <Link className="footer-brand" href="/">372 <span>GeoMedia</span></Link>
      <nav aria-label="Footer navigation">{[...navigation, talk].map(link => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav>
      <a href={`mailto:${company.email}`}>{company.email}</a>
    </div>
  </footer>;
}
