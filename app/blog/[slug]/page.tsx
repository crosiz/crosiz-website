import type { Metadata } from 'next';
import type { BlogPost } from '.prisma/client';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { CTABanner } from '@/components/sections/CTABanner';
import { ArrowLeft, Clock, Calendar, ArrowUpRight } from 'lucide-react';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true },
    });
    return posts.map((post: { slug: string }) => ({ slug: post.slug }));
  } catch {
    // DATABASE_URL not set in this environment — pages will be rendered on demand
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });

  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} — Crosiz Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://crosiz.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: post.coverImage ? [post.coverImage] : [],
      publishedTime: post.createdAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
    },
  };
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug }
  });

  if (!post || !post.published) notFound();

  // Fetch a couple of related/latest posts for the sidebar
  const relatedPosts = await prisma.blogPost.findMany({
    where: { published: true, slug: { not: slug } },
    take: 2,
    orderBy: { createdAt: 'desc' }
  });

  // Basic markdown parsing for the content
  const paragraphs = post.content.split('\n').filter((l: string) => l.trim());

  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.coverImage ? [post.coverImage] : [],
    datePublished: post.createdAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: [{
      '@type': 'Organization',
      name: 'Crosiz Engineering',
      url: 'https://crosiz.com'
    }]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[var(--bg)]">
        {/* Cover */}
        <div
          className="w-full h-72 md:h-96 mt-20 bg-[var(--bg-3)] bg-cover bg-center"
          style={{ backgroundImage: post.coverImage ? `url(${post.coverImage})` : 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg) 100%)' }}
        />

        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">

            {/* Main article */}
            <article className="py-14">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[var(--text-2)] hover:text-[var(--accent)] transition-colors mb-8">
                <ArrowLeft size={14} /> Back to Blog
              </Link>
              <div className="flex flex-wrap items-center gap-4 mb-5">
                {post.tags[0] && (
                  <>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--accent)]">{post.tags[0]}</span>
                    <span className="text-[var(--border-hover)]">·</span>
                  </>
                )}
                <span className="text-xs text-[var(--text-3)] flex items-center gap-1">
                  <Calendar size={11} />
                  {post.createdAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="text-[var(--border-hover)]">·</span>
                <span className="text-xs text-[var(--text-3)] flex items-center gap-1">
                  <Clock size={11} />
                  {post.readTime} min read
                </span>
              </div>
              <h1 className="text-h2 mb-6">{post.title}</h1>
              <p className="text-lg text-[var(--text-2)] leading-relaxed mb-10 pb-10 border-b border-[var(--border)]">{post.excerpt}</p>

              <div className="space-y-4">
                {paragraphs.map((line: string, i: number) => {
                  if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-display font-bold text-[var(--text-1)] mt-10 mb-3">{line.slice(3)}</h2>;
                  if (line.startsWith('# ')) return <h1 key={i} className="text-3xl font-display font-bold text-[var(--text-1)] mt-10 mb-3">{line.slice(2)}</h1>;
                  if (line.startsWith('- ')) return <li key={i} className="text-[var(--text-2)] ml-5 list-disc leading-relaxed">{line.slice(2)}</li>;
                  return <p key={i} className="text-[var(--text-2)] leading-relaxed">{line}</p>;
                })}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block py-14">
              <div className="sticky top-28 space-y-5">
                <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5">
                  <p className="text-xs-label text-[var(--text-3)] mb-3">Written by</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-dim)] border border-[var(--border)] flex items-center justify-center font-display font-bold text-[var(--accent)] text-sm">C</div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-1)]">Crosiz Engineering</p>
                      <p className="text-xs text-[var(--text-3)]">Software & AI Agency</p>
                    </div>
                  </div>
                </div>

                {relatedPosts.length > 0 && (
                  <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5">
                    <p className="text-xs-label text-[var(--text-3)] mb-4">Latest Articles</p>
                    <div className="space-y-4">
                      {relatedPosts.map((r: BlogPost) => (
                        <Link key={r.slug} href={`/blog/${r.slug}`} className="group flex items-start gap-3">
                          <div
                            className="w-10 h-10 rounded-lg shrink-0 bg-cover bg-center bg-[var(--bg-3)]"
                            style={{ backgroundImage: r.coverImage ? `url(${r.coverImage})` : 'none' }}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-[var(--text-1)] group-hover:text-[var(--accent)] transition-colors line-clamp-2 leading-snug">{r.title}</p>
                            <p className="text-[10px] text-[var(--text-3)] mt-0.5">{r.readTime} min read</p>
                          </div>
                          <ArrowUpRight size={12} className="text-[var(--text-3)] shrink-0 mt-0.5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-[var(--accent-dim)] rounded-xl p-5" style={{ border: '1px solid rgba(var(--accent-rgb), 0.3)' }}>
                  <p className="text-sm font-semibold text-[var(--text-1)] mb-2">Need help with this?</p>
                  <p className="text-xs text-[var(--text-2)] mb-4 leading-relaxed">We build exactly these systems for clients.</p>
                  <Link href="/contact" className="text-xs font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1">Talk to us →</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
