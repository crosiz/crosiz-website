'use client';

import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '10+', label: 'Projects Delivered', desc: 'MVPs to enterprise' },
  { value: '8+', label: 'Technologies', desc: 'In our core stack' },
  { value: '3+', label: 'Countries', desc: 'Clients worldwide' },
  { value: '100%', label: 'Client Satisfaction', desc: 'Zero failed projects' },
];

export function StatBar() {
  return (
    <section className="py-16 bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left px-8 py-8 bg-[var(--bg-card)] hover:bg-[var(--bg-2)] transition-colors duration-300"
            >
              <span className="font-display font-extrabold text-4xl lg:text-5xl text-[var(--text-1)] tracking-tight leading-none mb-2">
                {stat.value}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--accent)] mb-1">
                {stat.label}
              </span>
              <span className="text-xs text-[var(--text-2)]">
                {stat.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
