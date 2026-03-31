'use client';

import { useEffect } from 'react';

/**
 * ScrollReveal – Intersection Observer für [data-animate] Elemente.
 * Portiert aus dem Astro BaseLayout <script> Tag.
 *
 * Einmal im Layout einbinden, danach funktionieren alle
 * data-animate="fade-up|fade-in|scale-in" Attribute automatisch.
 */
export default function ScrollReveal() {
  useEffect(() => {
    // Animationen deaktivieren wenn vom Nutzer gewünscht
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-animate]').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
