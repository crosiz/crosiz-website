'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TECHNOLOGIES = [
  'React', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL',
  'AWS', 'Docker', 'n8n', 'OpenAI', 'Supabase', 'TypeScript',
  'Prisma', 'Redis', 'Kubernetes', 'Tailwind', 'LangChain', 'Anthropic'
];

export function LogoTicker() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-12 border-y border-[var(--border)] overflow-hidden bg-[var(--bg-2)]">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] mb-8 text-center">
        <h3 className="text-xs-label text-[var(--text-2)]">Technologies We Build With</h3>
      </div>

      <div
        className="flex w-full cursor-default select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex whitespace-nowrap min-w-full items-center gap-16 px-8"
          animate={{ x: paused ? undefined : ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 40 }}
          style={paused ? { transform: 'translateX(var(--ticker-pause-x, 0%))' } : undefined}
        >
          {[...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="text-xl md:text-2xl font-display font-bold text-[var(--text-3)] transition-colors duration-300 hover:text-[var(--accent)] flex items-center"
            >
              {tech}
              <span className="text-[var(--border)] ml-16 select-none">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
