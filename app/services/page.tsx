import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Full-stack software development services — web applications, AI automation, backend systems, mobile apps, MVPs, and more. Built to scale.',
};

const SERVICES = [
  {
    num: '01',
    title: 'Web Applications',
    desc: 'From marketing sites to enterprise SaaS platforms. We build fast, accessible, conversion-optimized web applications using Next.js and React.',
    result: 'From landing pages to complex SaaS',
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL'],
    slug: 'web-development',
  },
  {
    num: '02',
    title: 'AI & Automation',
    desc: 'Automate repetitive operations, build AI-powered workflows, and integrate LLMs into your product. We use n8n, OpenAI, and custom Python agents.',
    result: 'Reduce manual ops by up to 80%',
    tags: ['n8n', 'OpenAI', 'Python', 'LangChain'],
    slug: 'ai-automation',
  },
  {
    num: '03',
    title: 'Backend Systems',
    desc: 'High-performance APIs, microservices, and data pipelines. Built with Node.js, NestJS, or FastAPI — designed for the scale you plan to reach.',
    result: 'APIs handling millions of requests',
    tags: ['Node.js', 'NestJS', 'FastAPI', 'Redis'],
    slug: 'backend-development',
  },
  {
    num: '04',
    title: 'System Design',
    desc: 'Architecture review, design sprints, and scalability planning before you write a line of code. We prevent technical debt before it happens.',
    result: 'Architecture that scales before you need it',
    tags: ['Architecture', 'Database Design', 'Cloud', 'Security'],
    slug: 'system-design',
  },
  {
    num: '05',
    title: 'DevOps & CI/CD',
    desc: 'Docker, Kubernetes, GitHub Actions, and zero-downtime deployments. Ship faster with confidence — automated from dev to production.',
    result: 'Ship faster, break nothing',
    tags: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'],
    slug: 'devops',
  },
  {
    num: '06',
    title: 'Mobile Applications',
    desc: 'Cross-platform iOS and Android apps built with React Native. Native performance, shared codebase, faster time to market.',
    result: 'iOS & Android built for retention',
    tags: ['React Native', 'Expo', 'iOS', 'Android'],
    slug: 'mobile-app-development',
  },
  {
    num: '07',
    title: 'API Development',
    desc: 'RESTful and GraphQL APIs, third-party integrations, and webhook systems. Clean, documented, and built for developer experience.',
    result: 'Integrations that just work',
    tags: ['REST', 'GraphQL', 'Webhooks', 'OpenAPI'],
    slug: 'api-development',
  },
  {
    num: '08',
    title: 'MVP Development',
    desc: 'Got an idea? We validate, design, and ship your MVP in 6–10 weeks. Lean scope, real code — ready to raise or launch.',
    result: '0 → launched in 6–10 weeks',
    tags: ['Rapid Prototyping', 'Full-stack', 'Launch-ready'],
    slug: 'mvp-development',
  },
  {
    num: '09',
    title: 'CRM Development',
    desc: 'Custom CRM systems built around your actual sales workflow — not a generic tool you have to adapt to. Complete ownership, no vendor lock-in.',
    result: 'Custom pipelines built for your workflow',
    tags: ['CRM', 'Sales Automation', 'Custom', 'Integrations'],
    slug: 'crm-development',
  },
  {
    num: '10',
    title: 'WebSocket Systems',
    desc: 'Real-time chat, live dashboards, collaborative tools, and notification systems. Low-latency at scale using WebSocket and Socket.io.',
    result: 'Real-time everything',
    tags: ['WebSocket', 'Socket.io', 'Real-time', 'Node.js'],
    slug: 'websocket-development',
  },
];

const STATS = [
  { value: '10+', label: 'Services delivered' },
  { value: '6–10 wk', label: 'Average MVP timeline' },
  { value: '80%', label: 'Ops reduction via automation' },
  { value: '∞', label: 'Scale-first architecture' },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="pt-32 pb-20 bg-[var(--bg)] border-b border-[var(--border)] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
          }}
        />
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] relative z-10">
          <SectionLabel>What We Do</SectionLabel>
          <h1 className="text-h1 mb-6 max-w-4xl">
            We build systems,<br />
            <span className="text-[var(--accent)]">not just websites.</span>
          </h1>
          <p className="text-[var(--text-2)] max-w-2xl text-lg leading-relaxed mb-12">
            A complete technical partner — from infrastructure and architecture down to the
            pixel-perfect UI. Every service is delivered with the same engineering standard.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="p-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl">
                <p className="font-display font-extrabold text-2xl text-[var(--accent)] mb-1">{s.value}</p>
                <p className="text-sm text-[var(--text-2)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services List ─────────────────────────────────────── */}
      <div className="py-8 bg-[var(--bg-2)]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
          {SERVICES.map((service, i) => (
            <Link key={service.num} href={`/services/${service.slug}`} className="group block">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 border-b border-[var(--border)] py-10 hover:border-[var(--accent)] transition-colors duration-300">

                {/* Number */}
                <span className="font-display font-bold text-2xl text-[var(--text-3)] group-hover:text-[var(--accent)] transition-colors w-12 shrink-0">
                  {service.num}
                </span>

                {/* Title + desc */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl md:text-4xl font-display font-semibold text-[var(--text-1)] group-hover:text-[var(--accent)] transition-colors mb-2">
                    {service.title}
                  </h2>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed max-w-2xl mb-4">
                    {service.desc}
                  </p>
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono tracking-wide px-2.5 py-1 rounded-full bg-[var(--bg-3)] border border-[var(--border)] text-[var(--text-2)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Result badge */}
                <div className="hidden md:block text-right shrink-0 max-w-[180px]">
                  <p className="text-xs text-[var(--text-3)] mb-2">Outcome</p>
                  <p className="text-sm font-medium text-[var(--text-1)]">{service.result}</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex w-11 h-11 rounded-full border border-[var(--border)] items-center justify-center text-[var(--text-2)] group-hover:bg-[var(--accent)] group-hover:text-[var(--text-inv)] group-hover:border-[var(--accent)] transition-all duration-300 shrink-0 text-lg">
                  ↗
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Process teaser ────────────────────────────────────── */}
      <div className="py-24 bg-[var(--bg)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] text-center">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-h2 mb-4">From first call to production.</h2>
          <p className="text-[var(--text-2)] max-w-xl mx-auto mb-8">
            Every project follows the same 7-step process — designed to eliminate surprises
            and keep you informed at every milestone.
          </p>
          <Link
            href="/about#process"
            className="inline-flex items-center gap-2 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-1)] hover:text-[var(--accent)] px-6 py-3 rounded-[4px] text-sm font-medium transition-all duration-200"
          >
            View our process →
          </Link>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
