import ImageSlot from '@/components/ui/ImageSlot';

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  author?: string;
}

export interface Props {
  posts: BlogPost[];
  heading?: string;
  subheading?: string;
  limit?: number;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogGrid({
  posts = [],
  heading = 'Aktuelles',
  subheading = 'Neuigkeiten und Wissenswertes',
  limit = 3,
}: Props) {
  const displayPosts = posts.slice(0, limit);

  return (
    <section id="blog" className="section bg-background">
      <div className="container-narrow">
        {(heading || subheading) && (
          <div className="text-center mb-16" data-animate="fade-up">
            {heading && <h2 className="section-heading">{heading}</h2>}
            {subheading && <p className="section-subheading mx-auto">{subheading}</p>}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-animate="fade-up">
          {displayPosts.map((post, i) => (
            <article
              key={post._id}
              data-delay={`${((i % 3) + 1) * 100}`}
              className="group rounded-2xl overflow-hidden bg-card border border-border
                         hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <ImageSlot
                position={`blog-thumbnail-${i + 1}`}
                label={`Beitragsbild: ${post.title}`}
                briefing={`Titelbild für Blogbeitrag "${post.title}"`}
                format="landscape"
                aspect="16/10"
                priority="nice-to-have"
                category="photo-stock"
                className="aspect-[16/10] overflow-hidden"
                gradientClass="bg-gradient-to-br from-primary/10 to-primary/15"
              />

              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-foreground/50 mb-3">
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  {post.author && (
                    <>
                      <span>&middot;</span>
                      <span>{post.author}</span>
                    </>
                  )}
                </div>

                <h3 className="text-lg font-heading text-foreground group-hover:text-primary transition-colors">
                  <a href={`/blog/${post.slug.current}`}>
                    {post.title}
                  </a>
                </h3>

                {post.excerpt && (
                  <p className="mt-2 text-foreground/60 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                )}

                <a
                  href={`/blog/${post.slug.current}`}
                  className="inline-flex items-center mt-4 text-sm font-medium text-primary hover:text-primary/80"
                >
                  Weiterlesen
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {posts.length > limit && (
          <div className="text-center mt-12">
            <a href="/blog" className="btn-secondary">
              Alle Beiträge ansehen
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
