import IconWrapper from '@/components/ui/IconWrapper';

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Props {
  services: Service[];
  heading?: string;
  subheading?: string;
}

export default function ServicesCards({
  services = [],
  heading = 'Unsere Leistungen',
  subheading = 'Was wir für Sie tun können',
}: Props) {
  return (
    <section id="services" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-10" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-animate="fade-up">
          {services.map((service, i) => (
            <div
              key={service._id}
              data-delay={`${((i % 3) + 1) * 100}`}
              className="group p-8 rounded-2xl bg-card border border-border
                         hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5
                         transition-all duration-300"
            >
              {service.icon && (
                <IconWrapper icon={service.icon} className="mb-5" />
              )}

              <h3 className="text-xl font-heading text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
