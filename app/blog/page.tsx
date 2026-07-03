import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Tag } from '@/components/ui/Tag';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Blog — Software, AI & Automation Insights — Crosiz',
  description: 'Practical articles on AI automation, system design, Next.js, Node.js, and building scalable software. Written by the Crosiz engineering team.',
  alternates: {
    canonical: 'https://crosiz.com/blog',
  },
};

export const revalidate = 60; // Revalidate every minute if ISR is needed

export default async function BlogPage() {
  let posts: Awaited<ReturnType<typeof prisma.blogPost.findMany>> = [];
  try {
    posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    });
  } catch {
    // DATABASE_URL not configured — show empty state
  }

  return (
    <>
      <div className="pt-32 pb-20 bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
          <SectionLabel>FROM THE BLOG</SectionLabel>
          <h1 className="text-h1 mb-6 max-w-4xl">
            We Write What We Know.
          </h1>
          <p className="text-[var(--text-2)] max-w-2xl text-lg mb-12">
            Practical articles on software, AI, and automation. No filler. No fluff. Just insights from engineers who build things every day.
          </p>
        </div>
      </div>

      <div className="py-24 bg-[var(--bg-2)] min-h-[50vh]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
              <div className="bg-[var(--bg-card)] rounded-[8px] border border-[var(--border)] overflow-hidden h-full transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1 flex flex-col">
                <div 
                  className="w-full aspect-[4/3] bg-[var(--bg-3)] bg-cover bg-center"
                  style={{ backgroundImage: post.coverImage ? `url(${post.coverImage})` : 'none' }}
                />
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {post.tags.map(t => <Tag key={t} className="!text-[10px] !px-2 !py-1">{t}</Tag>)}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors">{post.title}</h3>
                  <p className="text-sm text-[var(--text-2)] mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-xs font-mono uppercase tracking-wider text-[var(--text-2)]">
                    <span>{post.createdAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          {posts.length === 0 && (
            <div className="col-span-full text-center py-12 text-[var(--text-2)]">
              No blog posts published yet. Check back soon.
            </div>
          )}
        </div>
      </div>

      <CTABanner />
    </>
  );
}
