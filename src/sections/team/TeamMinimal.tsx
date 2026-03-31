import ImageSlot from '@/components/ui/ImageSlot';

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image?: any;
}

export interface Props {
  members: TeamMember[];
  heading?: string;
  subheading?: string;
}

export default function TeamMinimal({
  members = [],
  heading = 'Unser Team',
  subheading = 'Die Menschen hinter unserem Unternehmen',
}: Props) {
  return (
    <section id="team" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-16" data-animate="fade-up">
          {members.map((member, i) => (
            <div key={member._id} className="text-center w-28 md:w-32" data-delay={`${((i % 3) + 1) * 100}`}>
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-border">
                <ImageSlot
                  src={member.image}
                  alt={member.name}
                  position={`team-portrait-${i + 1}`}
                  label={`Teamfoto ${member.name}`}
                  briefing={`Porträtfoto von ${member.name}, ${member.role}`}
                  format="square"
                  aspect="1/1"
                  priority="must-have"
                  category="photo-custom"
                  className="w-full h-full rounded-full overflow-hidden"
                  gradientClass="bg-gradient-to-br from-primary/10 to-primary/20"
                />
              </div>

              <h3 className="text-sm font-heading font-medium text-foreground leading-tight">
                {member.name}
              </h3>

              <p className="text-xs text-foreground/50 mt-0.5">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
