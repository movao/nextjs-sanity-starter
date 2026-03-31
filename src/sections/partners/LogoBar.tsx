export interface Partner {
  name: string;
  logo?: string;
}

export interface Props {
  partners: Partner[];
  heading?: string;
  subheading?: string;
}

export default function LogoBar({
  partners = [],
  heading = 'Unsere Partner',
  subheading = 'Vertraut von führenden Unternehmen',
}: Props) {
  return (
    <section id="partners" className="section bg-muted">
      <div className="container-narrow">
        <div className="text-center mb-16" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-8"
          data-animate="fade-up"
          data-delay="100"
        >
          {partners.map((partner, i) => (
            <div
              key={i}
              className="group flex items-center justify-center px-8 py-5 rounded-2xl
                         bg-card border border-border
                         hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5
                         transition-all duration-300"
              data-animate="fade-up"
              data-delay={String((i + 1) * 100)}
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-auto object-contain grayscale opacity-60
                             group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              ) : (
                <span className="text-lg font-heading text-foreground/60
                                 group-hover:text-foreground transition-colors duration-300">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
