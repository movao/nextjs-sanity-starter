interface GalleryImage {
  src?: string;
  alt: string;
  caption?: string;
}

interface GalleryGridProps {
  images?: GalleryImage[];
  heading?: string;
  subheading?: string;
}

export default function GalleryGrid({
  images = [],
  heading = 'Galerie',
  subheading = 'Eindrücke aus unserer Arbeit',
}: GalleryGridProps) {
  return (
    <section id="gallery-grid" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6" data-animate="fade-up" data-delay="100">
          {images.map((image, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              data-delay={i * 80}
            >
              {image.src ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
                <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-primary/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                    />
                  </svg>
                </div>
              )}

              {image.caption && (
                <div className="p-4">
                  <p className="text-subtitle text-foreground/60">
                    {image.caption}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
