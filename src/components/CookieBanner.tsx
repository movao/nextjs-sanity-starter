'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookies-accepted')) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setVisible(false);

    // === Hier Analytics-Scripts laden falls gewünscht ===
    // loadAnalytics();
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[100]"
      role="dialog"
      aria-label="Cookie-Hinweis"
    >
      <div className="bg-foreground/95 backdrop-blur-lg border-t border-border">
        <div className="container-narrow py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/70 text-center sm:text-left">
            Diese Website nutzt nur technisch notwendige Cookies.
            Mehr dazu in unserer{' '}
            <a href="/datenschutz" className="text-accent hover:text-background underline">
              Datenschutzerklärung
            </a>.
          </p>

          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleAccept}
              className="px-5 py-2 text-sm font-medium rounded-lg bg-primary text-background hover:bg-primary/90 transition-colors"
            >
              Verstanden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
