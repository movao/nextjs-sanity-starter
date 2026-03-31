export interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface Props {
  stats: Stat[];
  heading?: string;
  subheading?: string;
}

export default function StatsHighlight({
  stats = [],
  heading = 'In Zahlen',
  subheading = 'Das haben wir bisher erreicht',
}: Props) {
  const [featured, ...rest] = stats;

  return (
    <section id="stats-highlight" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        {featured && (
          <div
            className="text-center mb-12 p-10 rounded-2xl bg-card border border-border"
            data-animate="fade-up"
            data-delay="100"
          >
            <div className="text-6xl md:text-7xl font-heading text-primary mb-3">
              {featured.prefix && <span>{featured.prefix}</span>}
              {featured.value}
              {featured.suffix && <span>{featured.suffix}</span>}
            </div>
            <div className="text-lg text-foreground/60">
              {featured.label}
            </div>
          </div>
        )}

        {rest.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {rest.map((stat, i) => (
              <div
                key={i}
                className="text-center p-6"
                data-animate="fade-up"
                data-delay={(i + 2) * 100}
              >
                <div className="text-display font-heading text-primary mb-2">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  {stat.value}
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <div className="text-subtitle text-foreground/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
