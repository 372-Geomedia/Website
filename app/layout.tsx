import type { Metadata } from 'next';
import { Sora, IBM_Plex_Mono } from 'next/font/google';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import './globals.css';

const sans = Sora({ variable: '--font-sora', subsets: ['latin'], display: 'swap' });
const mono = IBM_Plex_Mono({ variable: '--font-plex-mono', subsets: ['latin'], weight: ['400', '500'], display: 'swap' });
const siteDescription = '372 GeoMedia builds maps, GIS platforms and field applications for emergency response, environmental monitoring and community planning.';

export const metadata: Metadata = {
  title: '372 GeoMedia — See the Whole Picture',
  description: siteDescription,
  metadataBase: new URL('https://geomedia-372.jasonjordan00.chatgpt.site'),
  openGraph: {
    title: '372 GeoMedia — See the Whole Picture',
    description: siteDescription,
    type: 'website',
    locale: 'en_US',
  },
  icons: { icon: '/logo.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header />
    <main id="main-content" tabIndex={-1}>{children}</main>
    <Footer />
  </body></html>;
}
