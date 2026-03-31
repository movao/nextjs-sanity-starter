/**
 * 404 Not Found
 */
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <p className="text-8xl font-bold text-primary/20">404</p>
        <h1 className="text-2xl font-heading font-bold text-foreground">
          Seite nicht gefunden
        </h1>
        <p className="text-foreground/60">
          Die angeforderte Seite existiert leider nicht oder wurde verschoben.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          Zurueck zur Startseite
        </Link>
      </div>
    </section>
  );
}
