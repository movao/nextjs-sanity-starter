/**
 * Blog-Uebersichtsseite
 */
import type { Metadata } from 'next';
import BlogGrid from '@/sections/blog/BlogGrid';
import { demoBlogPosts } from '@/data/demo';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Neuigkeiten und Beitraege aus unserem Blog.',
};

export default function BlogPage() {
  return (
    <BlogGrid
      posts={demoBlogPosts}
      heading="Blog"
      subheading="Neuigkeiten und aktuelle Beitraege"
    />
  );
}
