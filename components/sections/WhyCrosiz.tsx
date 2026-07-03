'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Code2, Zap, MessageSquare, Layers, Handshake } from 'lucide-react';

const REASONS = [
  {
    icon: <Code2 size={22} />,
    title: 'Engineering First',
    desc: 'Architecture decisions are made for 3 years from now, not 3 months. We don\'t cut corners.',
    stat: '0 hacks',
  },
  {
    icon: <Zap size={22} />,
    title: 'Performance Focused',
    desc: 'Every millisecond matters. We optimize for Core Web Vitals, load time, and scale from day one.',
    stat: '<100ms',
  },
  {
    icon: <MessageSquare size={22} />,
    title: 'Transparent Communication',
    desc: 'Daily standups, shared project boards, zero technical jargon unless you want it.',
    stat: 'Daily updates',
  },
  {
    icon: <Layers size={22} />,
    title: 'Scalable Architecture',
    desc: 'Systems that grow with your business — not ones you have to rebuild when you hit 10x traffic.',
    stat: '10x ready',
  },
  {
    icon: <Handshake size={22} />,
    title: 'Long-term Partnership',
    desc: 'We work best with clients who want a team, not a vendor. Most of our clients come back.',
    stat: '90% retention',
  },
];

export function WhyCrosiz() {
  return (
    <section className="py-28 bg-[var(--bg-2)] border-b border-[var(--border)]">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] flex flex-col lg:flex-row gap-16">

        <div className="lg:w-1/3">
          <div className="relative lg:sticky lg:top-28">
            <SectionLabel>Why Crosiz</SectionLabel>
            <h2 className="text-h2 leading-tight mt-3">
              We Write Code<br />
              <span className="text-[var(--accent)]">That Runs</span><br />
              in 5 Years.
            </h2>
            <p className="text-[var(--text-2)] mt-5 text-sm leading-relaxed max-w-xs">
              Most agencies ship fast and disappear. We design for longevity and
              own every decision we make.
            </p>
          </div>
        </div>

        {/* Right: Feature cards */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6
                hover:border-[var(--accent)] hover:shadow-[0_0_24px_rgba(0,229,255,0.06)]
                transition-all duration-300 group cursor-default
                ${i === REASONS.length - 1 && REASONS.length % 2 !== 0 ? 'md:col-span-2 md:max-w-sm' : ''}`}
            >
              {/* Stat badge — top right */}
              <span className="absolute top-4 right-4 font-mono text-[10px] text-[var(--accent)] bg-[var(--accent-dim)] px-2 py-0.5 rounded-full tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {reason.stat}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-3)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] mb-5 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-dim)] transition-all duration-300">
                {reason.icon}
              </div>

              <h3 className="text-lg font-display font-semibold text-[var(--text-1)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-sm text-[var(--text-2)] leading-relaxed">{reason.desc}</p>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
