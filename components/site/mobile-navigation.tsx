'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { isActiveRoute, navigation, talk } from '@/lib/site-content';
import { Arrow } from './arrow';

function Menu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  return <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger className="menu-trigger" aria-label="Open navigation">
      <span>Menu</span><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M2 6h16M2 13h16" stroke="currentColor" strokeWidth="1.5" /></svg>
    </SheetTrigger>
    <SheetContent className="mobile-menu">
      <SheetTitle className="mobile-menu-title">Menu</SheetTitle>
      <nav aria-label="Mobile navigation">
        {navigation.map(link => <Link href={link.href} key={link.href} aria-current={isActiveRoute(pathname, link.href) ? 'page' : undefined} onClick={event => {
          if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) setOpen(false);
        }}>{link.label}<Arrow diagonal /></Link>)}
      </nav>
      <Link className="button button-red" href={talk.href} aria-current={isActiveRoute(pathname, talk.href) ? 'page' : undefined} onClick={() => setOpen(false)}>{talk.label} <Arrow diagonal /></Link>
    </SheetContent>
  </Sheet>;
}

export function MobileNavigation() {
  const pathname = usePathname();
  // A route change resets dialog state, including browser Back/Forward navigation.
  return <Menu key={pathname} pathname={pathname} />;
}
