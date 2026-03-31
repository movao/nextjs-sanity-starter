import ImageSlot from '@/components/ui/ImageSlot';

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  image?: any;
}

export interface Props {
  members: TeamMember[];
  heading?: string;
  subheading?: string;
}

export default function TeamGrid({
  members = [],
  heading = 'Unser Team',
  subheading = 'Die Menschen hinter unserem Unternehmen',
}: Props) {
  return (
    <section id="team" className="section-alt">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10" data-animate="fade-up">
          {members.map((member, i) => (
            <div key={member._id} className="text-center group" data-delay={`${((i % 3) + 1) * 100}`}>
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-card shadow-lg">
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

              <h3 className="text-xl font-heading text-foreground">
                {member.name}
              </h3>

              <p className="text-primary font-medium text-sm mt-1">
                {member.role}
              </p>

              {member.bio && (
                <p className="text-foreground/60 mt-3 text-base leading-relaxed max-w-xs mx-auto">
                  {member.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
