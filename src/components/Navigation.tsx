'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(window.location.pathname === '/');

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Skip-to-Content (Barrierefreiheit) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-background focus:rounded-lg"
      >
        Zum Inhalt springen
      </a>

      <header
        className={`fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}
      >
        <nav className="container-narrow flex items-center justify-between h-16 md:h-20" aria-label="Hauptnavigation">
          {/* Logo / Firmenname */}
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            {siteConfig.logoUrl ? (
              <img src={siteConfig.logoUrl} alt={siteConfig.name} className="h-8 md:h-10 w-auto object-contain" />
            ) : (
              <span className="font-heading text-xl md:text-2xl text-foreground">{siteConfig.name}</span>
            )}
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={isHome ? item.href : `/${item.href}`}
                  className="text-base font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button Desktop */}
          <a href={isHome ? '#contact' : '/#contact'} className="hidden md:inline-flex btn-primary text-sm py-2 px-5">
            Kontakt
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground/70 hover:text-foreground"
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-border bg-background" role="menu">
            <ul className="container-narrow py-4 space-y-1">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={isHome ? item.href : `/${item.href}`}
                    className="block py-3 text-foreground/70 hover:text-primary font-medium transition-colors"
                    role="menuitem"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={isHome ? '#contact' : '/#contact'}
                  className="btn-primary w-full text-center text-sm py-2 block"
                  role="menuitem"
                  onClick={closeMenu}
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Spacer für fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
}
