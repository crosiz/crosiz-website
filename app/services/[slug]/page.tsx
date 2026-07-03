import React from 'react';
import { notFound } from 'next/navigation';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { CTABanner } from '@/components/sections/CTABanner';
import { Tag } from '@/components/ui/Tag';

const SERVICES_DATA: Record<string, any> = {
  'web-development': {
    title: 'Web Applications',
    desc: 'From landing pages to complex SaaS platforms, we build high-performance web applications tailored to your business needs.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    process: [
      { title: 'Architecture Planning', desc: 'We define the optimal tech stack and scalable system design.' },
      { title: 'Development Sprints', desc: 'Iterative building with daily progress updates.' },
      { title: 'Performance Tuning', desc: 'Optimizing Core Web Vitals and load times before launch.' }
    ]
  },
  'ai-automation': {
    title: 'AI & Automation',
    desc: 'Reduce manual operations and scale your output by integrating intelligent agents and workflow automations into your business.',
    tech: ['OpenAI', 'n8n', 'Python', 'LangChain'],
    process: [
      { title: 'Workflow Audit', desc: 'Identifying bottlenecks and repetitive tasks ripe for automation.' },
      { title: 'Agent Development', desc: 'Building custom AI agents tailored to your specific workflows.' },
      { title: 'Integration', desc: 'Connecting the automation seamlessly into your existing tools.' }
    ]
  },
  // Adding a fallback for others to avoid boilerplate
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = SERVICES_DATA[slug] || {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    desc: 'Custom engineered solutions tailored to your unique business requirements and scalable for the future.',
    tech: ['Node.js', 'React', 'PostgreSQL'],
    process: [
      { title: 'Discovery', desc: 'Understanding your goals and constraints.' },
      { title: 'Implementation', desc: 'Building the solution with precision.' },
      { title: 'Deployment', desc: 'Shipping securely to production.' }
    ]
  };

  return (
    <>
      <div className="pt-32 pb-20 bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
          <SectionLabel>Service Details</SectionLabel>
          <h1 className="text-h1 mb-6 max-w-4xl">{data.title}</h1>
          <p className="text-[var(--text-2)] max-w-2xl text-lg mb-8">
            {data.desc}
          </p>
          <div className="flex flex-wrap gap-3">
            {data.tech.map((t: string) => <Tag key={t}>{t}</Tag>)}
          </div>
        </div>
      </div>

      <div className="py-24 bg-[var(--bg-2)]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
          <h2 className="text-h2 mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.process.map((step: any, i: number) => (
              <div key={i} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-8">
                <span className="font-mono text-[var(--accent)] mb-4 block">0{i + 1}</span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[var(--text-2)] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
