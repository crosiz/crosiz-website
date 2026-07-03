'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SUGGESTIONS = [
  { label: 'Back to Home', href: '/' },
  { label: 'Our Services', href: '/services' },
  { label: 'Our Work', href: '/work' },
  { label: 'Contact Us', href: '/contact' },
];

// Floating particles
function Particle({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-[var(--accent)] opacity-40"
      style={{ left: x, top: y }}
      animate={{ y: [0, -30, 0], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 3 + (delay * 1.2), delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 0); return () => clearTimeout(t); }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] flex flex-col items-center justify-center relative overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)',
        backgroundSize: '4rem 4rem',
      }} />

      {/* Floating particles */}
      {mounted && [
        { delay: 0, x: '20%', y: '30%' },
        { delay: 0.5, x: '75%', y: '20%' },
        { delay: 1, x: '50%', y: '70%' },
        { delay: 1.5, x: '85%', y: '60%' },
        { delay: 0.8, x: '15%', y: '65%' },
      ].map((p, i) => (
        <Particle key={i} delay={p.delay} x={p.x} y={p.y} />
      ))}

      {/* Glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--accent-glow)] rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 max-w-2xl"
      >
        {/* 404 number */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-6"
        >
          <span
            className="font-display font-extrabold select-none leading-none"
            style={{
              fontSize: 'clamp(8rem, 20vw, 16rem)',
              backgroundImage: 'linear-gradient(135deg, var(--text-3) 0%, var(--text-2) 50%, var(--accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            404
          </span>
        </motion.div>

        {/* Monospace label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-mono text-xs tracking-[0.2em] text-[var(--accent)] uppercase mb-4"
        >
          Page not found
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-h2 mb-4"
        >
          Looks like this page got<br />refactored out of existence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[var(--text-2)] mb-12 leading-relaxed"
        >
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Try one of the links below or head back home.
        </motion.p>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {SUGGESTIONS.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className={
                i === 0
                  ? 'bg-[var(--accent)] text-[var(--text-inv)] font-semibold text-sm px-6 py-3 rounded-[4px] hover:opacity-90 transition-opacity'
                  : 'border border-[var(--border)] text-[var(--text-1)] text-sm px-5 py-3 rounded-[4px] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200'
              }
            >
              {s.label}
            </Link>
          ))}
        </motion.div>

        {/* Terminal-style footer hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 font-mono text-[11px] text-[var(--text-3)]"
        >
          <span className="text-[var(--accent)]">$</span> error: HTTP 404 · path not found ·{' '}
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">cd /home</Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
