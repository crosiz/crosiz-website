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
  'backend-development': {
    title: 'Backend Systems',
    desc: 'High-performance APIs, microservices, and data pipelines built for scale and reliability.',
    tech: ['Node.js', 'PostgreSQL', 'Redis', 'NestJS', 'FastAPI'],
    process: [
      { title: 'Database Design', desc: 'Structuring data for efficient querying and scalability.' },
      { title: 'API Development', desc: 'Building secure and performant REST or GraphQL endpoints.' },
      { title: 'Optimization', desc: 'Implementing caching and performance improvements.' }
    ]
  },
  'system-design': {
    title: 'System Design',
    desc: 'Architecture review, design sprints, and scalability planning before you write a line of code.',
    tech: ['AWS', 'Docker', 'Kubernetes', 'Architecture', 'Cloud'],
    process: [
      { title: 'Requirements Gathering', desc: 'Understanding business needs and technical constraints.' },
      { title: 'Architecture Mapping', desc: 'Designing the high-level system components and interactions.' },
      { title: 'Scalability Planning', desc: 'Ensuring the system can handle future growth.' }
    ]
  },
  'devops': {
    title: 'DevOps & CI/CD',
    desc: 'Docker, Kubernetes, GitHub Actions, and zero-downtime deployments. Ship faster with confidence.',
    tech: ['GitHub Actions', 'Vercel', 'Linux', 'Kubernetes', 'Docker'],
    process: [
      { title: 'Infrastructure Setup', desc: 'Provisioning servers and cloud resources securely.' },
      { title: 'Pipeline Creation', desc: 'Automating testing and deployment workflows.' },
      { title: 'Monitoring', desc: 'Setting up alerts and logging for system health.' }
    ]
  },
  'mobile-app-development': {
    title: 'Mobile Applications',
    desc: 'Cross-platform iOS and Android apps built with React Native. Native performance, shared codebase.',
    tech: ['React Native', 'Expo', 'Swift', 'iOS', 'Android'],
    process: [
      { title: 'UI/UX Design', desc: 'Crafting intuitive mobile experiences.' },
      { title: 'App Development', desc: 'Building the application using cross-platform frameworks.' },
      { title: 'App Store Launch', desc: 'Handling submission and approval processes.' }
    ]
  },
  'api-development': {
    title: 'API Development',
    desc: 'RESTful and GraphQL APIs, third-party integrations, and webhook systems built for developer experience.',
    tech: ['REST', 'GraphQL', 'FastAPI', 'Node.js'],
    process: [
      { title: 'API Design', desc: 'Defining endpoints, methods, and data structures.' },
      { title: 'Implementation', desc: 'Coding the logic with proper authentication.' },
      { title: 'Documentation', desc: 'Providing clear guides for developers.' }
    ]
  },
  'mvp-development': {
    title: 'MVP Development',
    desc: 'Got an idea? We validate, design, and ship your MVP in 6–10 weeks. Lean scope, real code.',
    tech: ['Supabase', 'Next.js', 'Vercel', 'Full-stack'],
    process: [
      { title: 'Scope Definition', desc: 'Identifying core features for the initial release.' },
      { title: 'Rapid Prototyping', desc: 'Building out functionality quickly.' },
      { title: 'Beta Launch', desc: 'Releasing to early users for feedback.' }
    ]
  },
  'crm-development': {
    title: 'CRM Development',
    desc: 'Custom CRM systems built around your actual sales workflow. Complete ownership, no vendor lock-in.',
    tech: ['Prisma', 'PostgreSQL', 'React', 'Node.js'],
    process: [
      { title: 'Workflow Analysis', desc: 'Mapping out your specific sales and customer processes.' },
      { title: 'Custom Development', desc: 'Building features tailored to your needs.' },
      { title: 'Data Migration', desc: 'Moving existing customer data to the new system.' }
    ]
  },
  'websocket-development': {
    title: 'WebSocket Systems',
    desc: 'Real-time chat, live dashboards, collaborative tools, and notification systems.',
    tech: ['Socket.io', 'Redis', 'Node.js', 'Real-time'],
    process: [
      { title: 'Event Planning', desc: 'Defining the real-time events and data flow.' },
      { title: 'WebSocket Integration', desc: 'Setting up bidirectional communication.' },
      { title: 'Load Testing', desc: 'Ensuring the system handles concurrent connections.' }
    ]
  }
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
