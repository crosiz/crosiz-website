'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ArrowRight } from 'lucide-react';

// Hardcoded blog posts — same format will be used when admin adds real posts
const POSTS = [
  {
    slug: 'n8n-vs-zapier',
    title: 'n8n vs Zapier — Which Is Better for Business Automation?',
    excerpt: 'A cost, performance, and flexibility deep-dive for real businesses. We tested both on production workloads.',
    date: 'Jul 24, 2025',
    readTime: '6 min read',
    category: 'Automation',
    gradient: 'linear-gradient(135deg, #EA4B71 0%, #1a0a0d 100%)',
  },
  {
    slug: 'ai-agents-nodejs',
    title: 'How to Build an AI Agent with OpenAI and Node.js',
    excerpt: 'Step-by-step guide to building custom AI agents that perform tasks, use tools, and automate workflows at scale.',
    date: 'Jul 12, 2025',
    readTime: '8 min read',
    category: 'AI Engineering',
    gradient: 'linear-gradient(135deg, #10A37F 0%, #041a12 100%)',
  },
  {
    slug: 'nextjs-performance',
    title: 'Next.js Performance Tips That Actually Work',
    excerpt: 'Stop relying on generic advice. Here is how we optimize Core Web Vitals and load times for our enterprise clients.',
    date: 'Jun 28, 2025',
    readTime: '5 min read',
    category: 'Performance',
    gradient: 'linear-gradient(135deg, #0066FF 0%, #000d1a 100%)',
  },
];

export function BlogPreview() {
  return (
    <section className="py-28 bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <SectionLabel>From The Blog</SectionLabel>
            <h2 className="text-h2">We Write What We Know.</h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-2)] hover:text-[var(--accent)] transition-colors border border-[var(--border-hover)] hover:border-[var(--accent)] px-5 py-2.5 rounded-[4px]"
          >
            See All Articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--border-hover)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Cover — gradient image */}
              <Link href={`/blog/${post.slug}`} className="block">
                <div
                  className="w-full aspect-[16/9] transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ background: post.gradient }}
                  aria-label={post.title}
                />
              </Link>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--accent)]">
                    {post.category}
                  </span>
                  <span className="text-[var(--border-hover)]">·</span>
                  <span className="font-mono text-[10px] text-[var(--text-3)]">{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="flex-1">
                  <h3 className="text-base font-display font-semibold text-[var(--text-1)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed line-clamp-2">{post.excerpt}</p>
                </Link>
                <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="text-xs text-[var(--text-3)] font-mono">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-medium text-[var(--text-2)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
                  >
                    Read <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
