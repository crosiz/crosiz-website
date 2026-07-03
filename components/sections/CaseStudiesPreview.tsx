import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';

// Mock data, in real app fetched from Supabase
const CASE_STUDIES = [
  {
    slug: 'lead-gen-automation',
    title: 'Lead Generation Automation',
    industry: 'Real Estate',
    tech: 'n8n',
    problem: 'Manual lead handling losing 4hrs/day',
    result: '85% faster response time',
    coverImage: '/illustrations/how-to-generate-leads-automation-header.png',
    gradient: null,
    featured: true,
  },
  {
    slug: 'saas-platform',
    title: 'SaaS Platform Redesign',
    industry: 'Fintech',
    tech: 'Next.js',
    problem: 'High churn rate due to poor UX',
    result: '40% increase in retention',
    coverImage: '/illustrations/saas-illustration.jpg',
    gradient: 'from-[#0066FF]/20 via-[#0044cc]/10 to-[#001133]',
    featured: false,
  },
  {
    slug: 'ai-dashboard',
    title: 'AI Analytics Dashboard',
    industry: 'Healthcare',
    tech: 'Python + React',
    problem: 'Data scattered across 5 tools',
    result: 'Unified view, saving 10hrs/wk',
    coverImage: '/illustrations/ai-illustration.png',
    gradient: 'from-[#00E5FF]/15 via-[#006666]/10 to-[#001111]',
    featured: false,
  },
];

export function CaseStudiesPreview() {
  const featured = CASE_STUDIES.find(c => c.featured) || CASE_STUDIES[0];
  const rest = CASE_STUDIES.filter(c => !c.featured).slice(0, 2);

  return (
    <section className="py-32 bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
        <SectionLabel>Work That Speaks</SectionLabel>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-h2 max-w-2xl">
            Problems We&apos;ve<br />Eliminated.&nbsp;
          </h2>
          <Link href="/work">
            <Button variant="ghost">View All Work →</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Card */}
          <Link href={`/work/${featured.slug}`} className="lg:col-span-8 group block h-full">
            <div className="bg-[var(--bg-card)] rounded-[8px] border border-[var(--border)] overflow-hidden h-full transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1">
              <div className="w-full aspect-[16/9] relative overflow-hidden bg-[var(--bg-3)]">
                {featured.coverImage ? (
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${featured.gradient}`} />
                )}
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-40" />
              </div>
              <div className="p-8 md:p-10">
                <div className="flex gap-3 mb-6">
                  <Tag>{featured.industry}</Tag>
                  <Tag>{featured.tech}</Tag>
                </div>
                <h3 className="text-h3 mb-4">{featured.title}</h3>
                <div className="space-y-2 mb-8">
                  <p className="text-[var(--text-2)]"><span className="text-[var(--text-1)] font-medium">Problem:</span> {featured.problem}</p>
                  <p className="text-[var(--text-2)]"><span className="text-[var(--accent)] font-medium">Result:</span> {featured.result}</p>
                </div>
                <span className="text-[var(--accent)] font-medium flex items-center group-hover:translate-x-2 transition-transform">
                  Read Case Study <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Side Cards */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {rest.map(study => (
              <Link key={study.slug} href={`/work/${study.slug}`} className="group block flex-1">
                <div className="bg-[var(--bg-card)] rounded-[8px] border border-[var(--border)] overflow-hidden h-full transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1 flex flex-col">
                  <div className="w-full aspect-video relative overflow-hidden bg-[var(--bg-3)]">
                    {study.coverImage ? (
                      <Image
                        src={study.coverImage}
                        alt={study.title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${study.gradient}`} />
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex gap-2 mb-4">
                      <Tag className="!text-[10px] !px-2 !py-1">{study.industry}</Tag>
                    </div>
                    <h3 className="text-lg font-display font-semibold mb-3">{study.title}</h3>
                    <p className="text-sm text-[var(--text-2)] mb-4 flex-1">
                      <span className="text-[var(--accent)]">{study.result}</span>
                    </p>
                    <span className="text-[var(--text-1)] text-sm font-medium flex items-center group-hover:text-[var(--accent)] transition-colors">
                      Read <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
