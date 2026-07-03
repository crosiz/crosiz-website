'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

export function CTABanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-28 bg-[var(--bg-2)] relative overflow-hidden border-y border-[var(--border)]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--accent-glow)] rounded-full blur-[150px] pointer-events-none opacity-60" />

      <div className="mx-auto max-w-4xl px-[var(--gutter)] text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel className="justify-center">Start Today</SectionLabel>
          <h2 className="text-h1 mb-5">
            Ready to Build<br />
            <span className="text-[var(--accent)]">Something Real?</span>
          </h2>
          <p className="text-body text-[var(--text-2)] mb-10 max-w-xl mx-auto">
            Tell us what you&apos;re working on. First call is always free.
            No decks, no sales pitch — just a real conversation.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--text-inv)] font-semibold px-8 py-4 rounded-[4px] transition-colors hover:bg-[var(--accent-2)]"
              >
                Book Discovery Call <ArrowRight size={16} />
              </motion.button>
            </Link>
            <a href="mailto:hello@crosiz.com">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 border border-[var(--border-hover)] text-[var(--text-1)] font-medium px-8 py-4 rounded-[4px] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
              >
                <Mail size={16} />
                hello@crosiz.com
              </motion.button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {['Free 30-min discovery call', 'No commitment required', 'Response within 4 hours'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-[var(--text-2)]">
                <CheckCircle2 size={14} className="text-[var(--green)]" />
                {item}
              </div>
            ))}
          </div>

          {/* Newsletter strip */}
          <div className="border-t border-[var(--border)] pt-10">
            <p className="text-sm text-[var(--text-2)] mb-4">
              Or subscribe to our newsletter — practical articles on AI, automation &amp; software architecture.
            </p>
            {submitted ? (
              <div className="flex items-center justify-center gap-2 text-[var(--green)] font-medium">
                <CheckCircle2 size={18} />
                You&apos;re on the list! We&apos;ll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-2.5 bg-[var(--bg-3)] border border-[var(--border)] rounded-[4px] text-sm text-[var(--text-1)] placeholder-[var(--text-3)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
                <Button size="small" type="submit">Subscribe</Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
