import React from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Tag } from '@/components/ui/Tag';
import { CTABanner } from '@/components/sections/CTABanner';

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <>
      <div className="pt-32 pb-20 bg-[var(--bg)]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] text-center">
          <SectionLabel className="justify-center">Case Study</SectionLabel>
          <h1 className="text-h1 mb-8">{title}</h1>
          <div className="flex justify-center gap-3">
            <Tag>Industry: Tech</Tag>
            <Tag>Next.js</Tag>
            <Tag>PostgreSQL</Tag>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] mb-24">
        <div className="w-full aspect-video bg-[var(--bg-3)] rounded-xl border border-[var(--border)] overflow-hidden">
          {/* Main cover image */}
        </div>
      </div>

      <div className="py-20 bg-[var(--bg-2)] border-y border-[var(--border)]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-display font-semibold mb-6 text-[var(--accent)]">The Problem</h2>
            <p className="text-[var(--text-2)] mb-12 text-lg">
              The client was struggling with legacy monolithic architecture that caused frequent downtime during peak traffic events, resulting in lost revenue and poor customer experience.
            </p>

            <h2 className="text-2xl font-display font-semibold mb-6 text-[var(--accent)]">The Solution</h2>
            <p className="text-[var(--text-2)] text-lg">
              We migrated their monolithic backend to a scalable microservices architecture using Next.js and Node.js. We implemented Redis caching and deployed the entire infrastructure on AWS using Kubernetes for automated scaling.
            </p>
          </div>
          <div>
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-8 sticky top-32">
              <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)] mb-6">Key Outcomes</h3>
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <span className="text-[var(--green)] mr-4 text-xl mt-1">↗</span>
                  <div>
                    <strong className="block text-[var(--text-1)] text-2xl font-display">Zero Downtime</strong>
                    <span className="text-[var(--text-2)] text-sm">During highest traffic events</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--green)] mr-4 text-xl mt-1">↗</span>
                  <div>
                    <strong className="block text-[var(--text-1)] text-2xl font-display">40% Faster</strong>
                    <span className="text-[var(--text-2)] text-sm">Page load times across the app</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--green)] mr-4 text-xl mt-1">↘</span>
                  <div>
                    <strong className="block text-[var(--text-1)] text-2xl font-display">60% Reduction</strong>
                    <span className="text-[var(--text-2)] text-sm">In monthly infrastructure costs</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
