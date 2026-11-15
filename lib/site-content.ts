export const company = {
  name: '372 GeoMedia',
  url: 'https://372geomedia.com',
  email: 'support@372geomedia.com',
  experience: { years: '50+', description: 'years of combined team experience' },
};

// "Talk with us" is the last navigation item. The header and mobile menu
// render it as a button rather than a plain link.
export const talk = { label: 'Talk with us', href: '/talk' };

export const navigation = [
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
];

export function isActiveRoute(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
