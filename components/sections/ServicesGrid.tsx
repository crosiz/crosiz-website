import React from 'react';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Tag } from '@/components/ui/Tag';

const SERVICES = [
  { num: '01', title: 'Web Applications', result: 'From landing pages to complex SaaS platforms', tech: ['Next.js', 'React', 'Tailwind'], slug: 'web-development' },
  { num: '02', title: 'AI & Automation', result: 'Reduce manual ops by up to 80%', tech: ['OpenAI', 'n8n', 'Python'], slug: 'ai-automation' },
  { num: '03', title: 'Backend Systems', result: 'APIs that handle millions of requests', tech: ['Node.js', 'PostgreSQL', 'Redis'], slug: 'backend-development' },
  { num: '04', title: 'System Design', result: 'Architecture that scales before you need it', tech: ['AWS', 'Docker', 'Kubernetes'], slug: 'system-design' },
  { num: '05', title: 'DevOps & CI/CD', result: 'Ship faster, break nothing', tech: ['GitHub Actions', 'Vercel', 'Linux'], slug: 'devops' },
  { num: '06', title: 'Mobile Applications', result: 'iOS & Android built for retention', tech: ['React Native', 'Expo', 'Swift'], slug: 'mobile-app-development' },
  { num: '07', title: 'API Development', result: 'Integrations that just work', tech: ['REST', 'GraphQL', 'FastAPI'], slug: 'api-development' },
  { num: '08', title: 'MVP Development', result: '0 → launched in 6–10 weeks', tech: ['Supabase', 'Next.js', 'Vercel'], slug: 'mvp-development' },
  { num: '09', title: 'CRM Development', result: 'Custom pipelines built for your workflow', tech: ['Prisma', 'PostgreSQL', 'React'], slug: 'crm-development' },
  { num: '10', title: 'WebSocket Systems', result: 'Real-time everything — chat, dashboards, feeds', tech: ['Socket.io', 'Redis', 'Node.js'], slug: 'websocket-development' },
];

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function ServicesGrid() {
  return (
    <section className="py-32 bg-[var(--bg-2)] border-b border-[var(--border)]">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
        <SectionLabel>What We Do</SectionLabel>
        <h2 className="text-h2 max-w-2xl mb-16">
          Engineering Digital<br />
          Products That Scale.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <Link key={service.num} href={`/services/${service.slug}`} className="group min-w-0">
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[8px] p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] flex flex-col min-w-0 overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-display text-4xl font-bold text-[var(--text-3)] group-hover:text-[var(--accent-glow)] transition-colors">
                    {service.num}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] group-hover:bg-[var(--accent)] group-hover:text-black group-hover:border-[var(--accent)] transition-all shrink-0">
                    <ArrowIcon />
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-semibold mb-2">{service.title}</h3>
                <p className="text-[var(--text-2)] mb-8 flex-1">{service.result}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tech.map(t => (
                    <Tag key={t} className="!bg-transparent group-hover:border-[var(--border-hover)]">{t}</Tag>
                  ))}
                </div>
                
                <span className="text-sm font-medium text-[var(--text-1)] group-hover:text-[var(--accent)] transition-colors">
                  Learn more <span className="ml-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
