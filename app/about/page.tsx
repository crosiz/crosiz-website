import type { Metadata } from 'next';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { WhyCrosiz } from '@/components/sections/WhyCrosiz';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Crosiz is an engineering-first software development agency. We build intelligent systems, automate operations, and ship digital products that help businesses scale.',
};

const STATS = [
  { value: '2022', label: 'Year founded' },
  { value: '30+', label: 'Projects delivered' },
  { value: '12', label: 'Active clients' },
  { value: '100%', label: 'Remote & global' },
];

const VALUES = [
  {
    title: 'No BS',
    desc: "We don't sell you things you don't need. If an off-the-shelf solution works better for your case, we'll tell you — and help you set it up.",
    num: '01',
  },
  {
    title: 'Shipping > Talking',
    desc: 'We prefer writing code over sitting in meetings. You see progress every day. We iterate fast and communicate when it matters.',
    num: '02',
  },
  {
    title: 'Code That Survives',
    desc: 'We write clean, documented, and testable code. Every architecture decision is made with the next 3 years in mind — not the next 3 weeks.',
    num: '03',
  },
  {
    title: 'Radical Transparency',
    desc: 'Daily updates. Shared project boards. If something is delayed or difficult, you hear it from us first — not after the deadline.',
    num: '04',
  },
  {
    title: 'Client as Partner',
    desc: "You're not a ticket in our queue. We care about your business outcomes, not just deliverables. We succeed when your product succeeds.",
    num: '05',
  },
  {
    title: 'Engineering Excellence',
    desc: 'Security, performance, and accessibility are defaults — not add-ons. We build for the 99th percentile from day one.',
    num: '06',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="pt-32 pb-24 bg-[var(--bg)] border-b border-[var(--border)] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
          }}
        />
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] relative z-10">
          <SectionLabel>About Crosiz</SectionLabel>
          <h1 className="text-h1 mb-6 max-w-4xl">
            We are an engineering team,
            <br />
            <span className="text-[var(--accent)]">not a marketing agency.</span>
          </h1>
          <p className="text-[var(--text-2)] max-w-2xl text-lg leading-relaxed mb-16">
            Most agencies care about how something looks. We care about how it works, how it scales,
            and whether it solves your actual business problems. We build systems that are fast,
            reliable, and built to last.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl">
                <p className="font-display font-extrabold text-3xl text-[var(--accent)] mb-1">{s.value}</p>
                <p className="text-sm text-[var(--text-2)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mission ──────────────────────────────────────── */}
      <div className="py-24 bg-[var(--bg-2)] border-b border-[var(--border)]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Our Mission</SectionLabel>
            <h2 className="text-h2 mb-6">
              Build software that works<br />
              <span className="text-[var(--accent)]">five years from now.</span>
            </h2>
            <div className="space-y-4 text-[var(--text-2)] leading-relaxed">
              <p>
                The software industry is full of agencies that ship fast, collect their fee, and
                disappear. We built Crosiz because we wanted to be the agency we always wished existed
                — one that thinks like a product team, not a contractor.
              </p>
              <p>
                Every system we build is designed to grow with your business. We architect for the
                scale you're planning to reach, not just the scale you're at today. That means no
                shortcuts, no technical debt handed off as "someone else's problem."
              </p>
              <p>
                When we take on a project, we own it — from the first discovery call to post-launch
                monitoring. You get a technical partner, not a vendor.
              </p>
            </div>
          </div>

          {/* Side card */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-[var(--accent)] rounded-full" />
              <span className="font-mono text-xs text-[var(--text-3)] tracking-widest uppercase">Crosiz by the numbers</span>
            </div>
            {[
              { metric: '0', label: 'Projects abandoned mid-way' },
              { metric: '4 hrs', label: 'Average inquiry response time' },
              { metric: '6–10 wk', label: 'Average MVP delivery' },
              { metric: '3 yrs', label: 'Minimum architecture lifespan target' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-3 border-b border-[var(--border)] last:border-0">
                <span className="text-sm text-[var(--text-2)]">{item.label}</span>
                <span className="font-display font-bold text-[var(--text-1)]">{item.metric}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Values ───────────────────────────────────────── */}
      <div className="py-24 bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
          <SectionLabel>Our Values</SectionLabel>
          <h2 className="text-h2 mb-14 max-w-xl">
            How we think.<br />How we work.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.num}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-7 hover:border-[var(--border-hover)] transition-colors duration-300 group"
              >
                <span className="font-display font-extrabold text-3xl text-[var(--text-3)] block mb-4">
                  {v.num}
                </span>
                <h3 className="text-lg font-display font-semibold text-[var(--text-1)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {v.title}
                </h3>
                <p className="text-sm text-[var(--text-2)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why Crosiz + Process ─────────────────────────── */}
      <WhyCrosiz />

      <div id="process">
        <ProcessTimeline />
      </div>

      <CTABanner />
    </>
  );
}
