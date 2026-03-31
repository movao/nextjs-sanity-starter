import type { Metadata } from 'next';
import { siteConfig } from '../config';
import { design } from '../config/design';
import { generateThemeCSS } from '../design/apply-theme';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import ScrollReveal from '../components/ScrollReveal';
import './globals.css';

// Theme CSS aus dem aktiven Design-Profil generieren
const themeCSS = generateThemeCSS(design);

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: 'website',
    url: siteConfig.url,
    locale: 'de_DE',
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  alternates: {
    languages: {
      de: siteConfig.url,
      'x-default': siteConfig.url,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language}>
      <head>
        {/* Design-Profil: CSS Custom Properties */}
        <style dangerouslySetInnerHTML={{ __html: themeCSS }} />

        {/* Fonts: Lokal eingebunden (DSGVO-konform, kein Google Fonts Request) */}
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </head>

      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navigation />

        <main className="flex-1 pt-16" id="main-content">
          {children}
        </main>

        <Footer />
        <CookieBanner />
        <ScrollReveal />
      </body>
    </html>
  );
}
