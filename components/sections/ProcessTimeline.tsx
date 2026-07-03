'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';

const STEPS = [
  { num: '01', title: 'Discovery', desc: 'We learn your business, constraints, and goals. No assumptions.' },
  { num: '02', title: 'Planning', desc: 'Roadmap, milestones, and stack decisions — documented before we write a line of code.' },
  { num: '03', title: 'Architecture', desc: 'System design, database schema, API contracts. Built to scale from day one.' },
  { num: '04', title: 'Development', desc: 'Sprints. Daily updates. You see progress every single day.' },
  { num: '05', title: 'Testing', desc: 'Unit, integration, and user testing. QA before you touch it.' },
  { num: '06', title: 'Deployment', desc: 'CI/CD pipelines. Zero-downtime deployments. Monitored from day one.' },
  { num: '07', title: 'Support', desc: "We don't disappear after launch. Ongoing support, monitoring, and iteration." },
];

export function ProcessTimeline() {
  return (
    <section className="py-32 bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">

        {/* Header */}
        <div className="text-center mb-24">
          <SectionLabel className="justify-center">How We Work</SectionLabel>
          <h2 className="text-h2">
            From First Call to<br />
            <span className="text-[var(--accent)]">Live in Production.</span>
          </h2>
          <p className="text-[var(--text-2)] mt-5 max-w-xl mx-auto text-base leading-relaxed">
            A structured, transparent process — so you always know exactly where your project stands.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-[var(--border)] -translate-x-1/2" />

          {STEPS.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
                className={`relative flex items-center w-full mb-14 ${isLeft ? 'justify-start' : 'justify-end'}`}
              >
                {/* Card — occupies 46% of width */}
                <div className={`w-[46%] ${isLeft ? 'pr-10' : 'pl-10'}`}>
                  <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--border-hover)] transition-colors duration-300 group">
                    {/* Step number */}
                    <span className="font-display font-extrabold text-3xl text-[var(--text-3)] leading-none block mb-4">
                      {step.num}
                    </span>
                    <h3 className="text-lg font-display font-semibold text-[var(--text-1)] mb-2">{step.title}</h3>
                    <p className="text-sm text-[var(--text-2)] leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)] shadow-[0_0_12px_rgba(0,229,255,0.5)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
