'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';



export function Hero() {
  return (
    <section className="relative flex flex-col justify-start lg:min-h-screen lg:justify-center overflow-hidden">
      {/* Background Grid — visible in both light and dark modes */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      />

      {/* Accent Glow — top left */}
      <div className="absolute -top-32 -left-32 w-[700px] h-[700px] bg-[var(--accent-glow)] rounded-full blur-[160px] pointer-events-none opacity-40" />
      {/* Secondary glow — bottom right */}
      <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-[rgba(0,102,255,0.07)] rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] w-full pt-24 md:pt-28 lg:pt-20 pb-10 md:pb-14 lg:pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_540px] gap-8 xl:gap-20 items-center">

          {/* ── LEFT: Copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="flex flex-col"
          >
            <SectionLabel>Software &amp; AI Agency</SectionLabel>

            {/* Headline — strictly constrained to left column */}
            <h1
              className="font-display font-extrabold tracking-tight mb-4"
              style={{
                fontSize: 'clamp(2rem, 5.5vw, 4.25rem)',
                lineHeight: 1.05,
              }}
            >
              We Build Software<br />
              That{' '}
              <span className="text-[var(--accent)]">Grows</span><br />
              Businesses.
            </h1>

            <p className="text-sm sm:text-base text-[var(--text-2)] max-w-md mb-6 leading-relaxed">
              From MVPs to enterprise platforms — we engineer intelligent systems,
              automate operations, and help ambitious businesses scale with confidence.
            </p>

            <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="default" className="w-full sm:w-auto">Book Discovery Call</Button>
              </Link>
              <Link href="/work" className="w-full sm:w-auto">
                <Button variant="ghost" className="w-full sm:w-auto">View Case Studies →</Button>
              </Link>
            </div>


          </motion.div>

          {/* ── RIGHT: Dashboard Mockup ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >


            {/* Floating stat — top left */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -left-14 top-16 z-20 bg-[var(--bg-2)] border border-[var(--border)] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[rgba(0,210,106,0.12)] flex items-center justify-center text-[var(--green)] text-sm font-bold">↑</div>
              <div>
                <div className="text-sm font-semibold text-[var(--text-1)] leading-none">85% Faster</div>
                <div className="text-[11px] text-[var(--text-2)] mt-0.5">Processing Time</div>
              </div>
            </motion.div>

            {/* Floating stat — bottom right */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -right-10 bottom-10 z-20 bg-[var(--bg-2)] border border-[var(--border)] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[rgba(0,229,255,0.1)] flex items-center justify-center text-[var(--accent)] text-sm font-bold">↓</div>
              <div>
                <div className="text-sm font-semibold text-[var(--text-1)] leading-none">63% Cost</div>
                <div className="text-[11px] text-[var(--text-2)] mt-0.5">Reduction</div>
              </div>
            </motion.div>

            {/* Floating stat — top right */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -right-8 top-32 z-20 bg-[var(--bg-2)] border border-[var(--border)] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[rgba(255,184,0,0.12)] flex items-center justify-center text-[var(--text-1)] text-sm font-bold">★</div>
              <div>
                <div className="text-sm font-semibold text-[var(--text-1)] leading-none">10+ Projects</div>
                <div className="text-[11px] text-[var(--text-2)] mt-0.5">Delivered</div>
              </div>
            </motion.div>

            {/* Main mockup card */}
            <div className="relative w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 h-11 border-b border-[var(--border)] bg-[var(--bg-2)]">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <div className="flex-1 mx-4 h-5 bg-[var(--bg-3)] rounded-full" />
              </div>

              {/* Dashboard body */}
              <div className="flex gap-0">
                {/* Sidebar */}
                <div className="w-[110px] shrink-0 bg-[var(--bg-2)] border-r border-[var(--border)] p-4 space-y-3 min-h-[340px]">
                  <div className="h-2 bg-[var(--accent)] opacity-40 rounded w-3/4" />
                  <div className="h-2 bg-[var(--bg-3)] rounded w-full" />
                  <div className="h-2 bg-[var(--bg-3)] rounded w-4/5" />
                  <div className="h-2 bg-[var(--bg-3)] rounded w-full" />
                  <div className="mt-6 h-2 bg-[var(--bg-3)] rounded w-full" />
                  <div className="h-2 bg-[var(--bg-3)] rounded w-3/4" />
                  <div className="h-2 bg-[var(--bg-3)] rounded w-5/6" />
                </div>

                {/* Main content */}
                <div className="flex-1 p-5 space-y-4">
                  {/* Stat cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Revenue', color: 'var(--accent)' },
                      { label: 'Active', color: 'var(--green)' },
                      { label: 'Cost', color: 'var(--text-2)' },
                    ].map((s) => (
                      <div key={s.label} className="bg-[var(--bg-3)] rounded-lg p-3 border border-[var(--border)]">
                        <div className="text-[11px] font-mono mb-2" style={{ color: s.color }}>{s.label}</div>
                        <div className="h-3 bg-[var(--bg)] rounded w-2/3" />
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="bg-[var(--bg-3)] rounded-lg border border-[var(--border)] p-4" style={{ height: '120px' }}>
                    <svg viewBox="0 0 200 55" className="w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,45 L30,38 L60,28 L90,32 L120,18 L150,12 L180,6 L200,3 L200,55 L0,55 Z" fill="url(#cg)" />
                      <path d="M0,45 L30,38 L60,28 L90,32 L120,18 L150,12 L180,6 L200,3" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Table rows */}
                  <div className="space-y-2">
                    {[
                      { w: '3/5', accent: 'rgba(0,210,106,0.35)' },
                      { w: '4/5', accent: 'rgba(0,229,255,0.3)' },
                      { w: '1/2', accent: 'rgba(255,184,0,0.3)' },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded bg-[var(--bg-3)] shrink-0" />
                        <div className={`h-2 bg-[var(--bg-3)] rounded flex-1`} />
                        <div className="h-2 w-10 rounded" style={{ background: r.accent }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
