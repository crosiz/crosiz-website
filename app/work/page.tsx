'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { CTABanner } from '@/components/sections/CTABanner';
import { ArrowUpRight } from 'lucide-react';

const CASE_STUDIES = [
  {
    slug: 'lead-gen-automation',
    title: 'Lead Generation Automation',
    subtitle: 'Real estate agency drowning in manual follow-ups — automated end-to-end',
    industry: 'Real Estate',
    tech: 'n8n',
    techStack: ['n8n', 'Supabase', 'Twilio', 'OpenAI'],
    problem: 'Manual lead handling taking 4+ hrs/day, losing hot leads to slow response',
    result: '85% faster response time · 60% more conversions',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
    accentColor: '#e94560',
    featured: true,
  },
  {
    slug: 'saas-platform',
    title: 'SaaS Platform Redesign',
    subtitle: 'Fintech startup losing users due to legacy architecture and poor DX',
    industry: 'Fintech',
    tech: 'Next.js',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    problem: 'High churn rate due to poor UX and slow page loads (7s FCP)',
    result: '40% increase in retention · FCP down to 0.9s',
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #001233 40%, #002776 100%)',
    accentColor: '#4361ee',
    featured: false,
  },
  {
    slug: 'ai-dashboard',
    title: 'AI Analytics Dashboard',
    subtitle: 'Healthcare platform unifying 5 data sources into one intelligent view',
    industry: 'Healthcare',
    tech: 'Python + React',
    techStack: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    problem: 'Data scattered across 5 disconnected tools, 10+ hrs/week in manual reporting',
    result: 'Unified real-time view · saving 10hrs/wk per analyst',
    gradient: 'linear-gradient(135deg, #0d1b2a 0%, #0a2640 40%, #0a3d62 100%)',
    accentColor: '#00b4d8',
    featured: false,
  },
  {
    slug: 'ecommerce-scaling',
    title: 'High-Volume E-commerce',
    subtitle: 'E-commerce store crashing under Black Friday load every year',
    industry: 'E-commerce',
    tech: 'Node.js + Redis',
    techStack: ['Node.js', 'Redis', 'PostgreSQL', 'AWS'],
    problem: 'Site crashes during flash sales, losing $40k+ per hour of downtime',
    result: 'Zero downtime during BFCM · handled 10x normal traffic',
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #2d1515 40%, #541a1a 100%)',
    accentColor: '#f72585',
    featured: false,
  },
];

const INDUSTRIES = ['All', 'Real Estate', 'Fintech', 'Healthcare', 'E-commerce'];

const GLOBAL_STATS = [
  { value: '30+', label: 'Projects shipped' },
  { value: '98%', label: 'On-time delivery rate' },
  { value: '12', label: 'Active clients' },
  { value: '4', label: 'Industries served' },
];

export default function WorkPage() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.industry === filter);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <div className="pt-32 pb-16 bg-[var(--bg)] border-b border-[var(--border)] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
          }}
        />
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] relative z-10">
          <SectionLabel>Our Work</SectionLabel>
          <h1 className="text-h1 mb-6 max-w-3xl">
            Problems we&apos;ve<br />
            <span className="text-[var(--accent)]">eliminated.</span>
          </h1>
          <p className="text-[var(--text-2)] max-w-xl text-lg leading-relaxed mb-12">
            Real results from real projects. Every case study shows the problem we solved,
            the stack we chose, and the measurable outcome.
          </p>

          {/* Aggregate stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GLOBAL_STATS.map((s) => (
              <div key={s.label} className="p-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl">
                <p className="font-display font-extrabold text-2xl text-[var(--accent)] mb-0.5">{s.value}</p>
                <p className="text-xs text-[var(--text-2)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Filter + Grid ─────────────────────────────────────────── */}
      <div className="py-16 bg-[var(--bg-2)]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">

          {/* Filter pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  filter === ind
                    ? 'bg-[var(--accent)] text-[var(--text-inv)] border-[var(--accent)]'
                    : 'bg-[var(--bg-card)] text-[var(--text-2)] border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Case Study cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filtered.map((study, i) => (
                <motion.div
                  key={study.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link href={`/work/${study.slug}`} className="group block h-full">
                    <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] overflow-hidden h-full transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-xl flex flex-col">

                      {/* Cover */}
                      <div
                        className="w-full aspect-[16/8] relative overflow-hidden"
                        style={{ background: study.gradient }}
                      >
                        {/* Industry pill */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span
                            className="text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                            style={{ background: `${study.accentColor}22`, color: study.accentColor, border: `1px solid ${study.accentColor}55` }}
                          >
                            {study.industry}
                          </span>
                        </div>
                        {/* Tech pills */}
                        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                          {study.techStack.map((t) => (
                            <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded bg-black/40 text-white/80 backdrop-blur-sm">
                              {t}
                            </span>
                          ))}
                        </div>
                        {/* Arrow */}
                        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowUpRight size={16} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-7 flex-1 flex flex-col">
                        <h3 className="text-xl font-display font-semibold text-[var(--text-1)] mb-1 group-hover:text-[var(--accent)] transition-colors duration-300">
                          {study.title}
                        </h3>
                        <p className="text-sm text-[var(--text-2)] mb-5 leading-relaxed">{study.subtitle}</p>

                        <div className="space-y-3 flex-1">
                          <div className="p-3.5 bg-[var(--bg-3)] rounded-lg border border-[var(--border)]">
                            <p className="text-[10px] font-mono text-[var(--text-3)] uppercase tracking-widest mb-1">Problem</p>
                            <p className="text-sm text-[var(--text-2)]">{study.problem}</p>
                          </div>
                          <div className="p-3.5 rounded-lg" style={{ background: `${study.accentColor}0D`, border: `1px solid ${study.accentColor}33` }}>
                            <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: study.accentColor }}>Result</p>
                            <p className="text-sm font-medium text-[var(--text-1)]">{study.result}</p>
                          </div>
                        </div>

                        <div className="mt-5 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                          <span className="text-xs font-mono text-[var(--text-3)]">{study.tech}</span>
                          <span className="text-sm font-medium text-[var(--text-2)] group-hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1">
                            Read case study <ArrowUpRight size={13} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Approach teaser ───────────────────────────────────────── */}
      <div className="py-20 bg-[var(--bg)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { num: '01', title: 'Define the problem', desc: 'We start by deeply understanding the business problem — not just the technical brief.' },
            { num: '02', title: 'Pick the right tools', desc: 'No cargo-culting. We choose tech that fits the problem, not the other way around.' },
            { num: '03', title: 'Ship and measure', desc: 'We deliver, monitor, and iterate. Results are the only metric that matters.' },
          ].map((step) => (
            <div key={step.num} className="p-7 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl">
              <span className="font-display font-extrabold text-3xl text-[var(--text-3)] block mb-3">{step.num}</span>
              <h3 className="text-base font-display font-semibold text-[var(--text-1)] mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--text-2)] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <CTABanner />
    </>
  );
}
