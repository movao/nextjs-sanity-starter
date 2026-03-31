export interface Props {
  heading?: string;
  subheading?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
}

export default function MapEmbed({
  heading = 'Standort',
  subheading = 'Hier finden Sie uns',
  lat = 51.1657,
  lng = 10.4515,
  zoom = 15,
}: Props) {
  /* Calculate bounding box from center + zoom for OSM embed */
  const offset = 360 / Math.pow(2, zoom + 1);
  const bbox = `${lng - offset}%2C${lat - offset}%2C${lng + offset}%2C${lat + offset}`;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <section id="map" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-10" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div
          className="w-full rounded-2xl overflow-hidden border border-border shadow-lg"
          data-animate="fade-up"
          data-delay="100"
        >
          <iframe
            title="OpenStreetMap Standort"
            src={mapSrc}
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        <p className="text-center text-foreground/40 text-sm mt-4" data-animate="fade-up" data-delay="200">
          Kartendaten &copy;{' '}
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors"
          >
            OpenStreetMap
          </a>
          -Mitwirkende
        </p>
      </div>
    </section>
  );
}
