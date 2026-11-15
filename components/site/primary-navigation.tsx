'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isActiveRoute, navigation, talk } from '@/lib/site-content';
import { Arrow } from './arrow';

export function PrimaryNavigation() {
  const pathname = usePathname();
  const current = (href: string) => (isActiveRoute(pathname, href) ? 'page' : undefined);
  return <nav className="desktop-nav" aria-label="Main navigation">
    {navigation.map(link => <Link href={link.href} key={link.href} aria-current={current(link.href)}>{link.label}</Link>)}
    <Link className="header-cta" href={talk.href} aria-current={current(talk.href)}>{talk.label} <Arrow diagonal /></Link>
  </nav>;
}
