/**
 * Blog-Detailseite
 *
 * Fuer Demo: statische Pfade aus demoBlogPosts.
 * Fuer Sanity: ersetze generateStaticParams und den Post-Lookup
 * mit echten Sanity-Abfragen.
 */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { demoBlogPosts } from '@/data/demo';
import { siteConfig } from '@/config';
import { getBlogPostSchema, getBreadcrumbSchema } from '@/lib/jsonld';

// -- Statische Pfade aus Demo-Daten --
export function generateStaticParams() {
  return demoBlogPosts.map((post) => ({
    slug: post.slug.current,
  }));
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// -- Dynamische Metadata --
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = demoBlogPosts.find((p) => p.slug.current === params.slug);
  if (!post) return { title: 'Beitrag nicht gefunden' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = demoBlogPosts.find((p) => p.slug.current === params.slug);

  if (!post) {
    notFound();
  }

  const jsonld = [
    getBlogPostSchema({
      title: post.title,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      author: post.author,
    }),
    getBreadcrumbSchema([
      { name: 'Start', url: siteConfig.url },
      { name: 'Blog', url: `${siteConfig.url}/blog` },
      { name: post.title, url: `${siteConfig.url}/blog/${post.slug.current}` },
    ]),
  ];

  return (
    <>
      {/* JSON-LD Strukturierte Daten */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />

      <article className="section">
        <div className="container-narrow max-w-3xl mx-auto px-4">
          {/* Zurueck Link */}
          <a
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurueck zur Uebersicht
          </a>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              {post.author && (
                <>
                  <span>·</span>
                  <span>{post.author}</span>
                </>
              )}
            </div>

            <h1 className="text-display text-foreground">
              {post.title}
            </h1>
          </header>

          {/* Inhalt */}
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            {post.excerpt && (
              <p className="text-xl text-foreground/60 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* Sanity Block Content wuerde hier gerendert */}
            <p className="text-muted-foreground italic">
              [Hier wird der Sanity Rich-Text-Inhalt gerendert wenn das CMS verbunden ist]
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
