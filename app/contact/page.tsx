'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { Mail, MapPin, Loader2, CheckCircle2, Calendar } from 'lucide-react';

function useCalendly() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const openCalendly = () => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/rafaykhan2k22/30min' });
    } else {
      window.open('https://calendly.com/rafaykhan2k22/30min', '_blank');
    }
  };
  return { openCalendly };
}

export default function ContactPage() {
  const { openCalendly } = useCalendly();
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', service: '', budget: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed');
      setIsSuccess(true);
    } catch {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = 'w-full bg-[var(--bg-3)] border border-[var(--border)] rounded-[4px] py-3 px-4 text-sm text-[var(--text-1)] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--text-3)]';

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[var(--bg)] relative overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)',
        backgroundSize: '4rem 4rem',
      }} />

      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

        {/* ── Left ─────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <SectionLabel>Contact Us</SectionLabel>
          <h1 className="text-h1 mb-6">Let&apos;s build<br />something.</h1>
          <p className="text-[var(--text-2)] mb-12 max-w-md leading-relaxed">
            Whether you need a custom SaaS platform, an AI integration, or a complete digital
            transformation — we&apos;re here to help.
          </p>

          <div className="space-y-8">
            {/* Book a call CTA */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--accent-dim)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] shrink-0">
                <Calendar size={20} />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">Book a Discovery Call</h4>
                <p className="text-sm text-[var(--text-2)] mb-3">Free 30-min call. No pitch — just a real conversation about your project.</p>
                <button
                  onClick={openCalendly}
                  className="text-sm font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                >
                  Open calendar &amp; book a time →
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-3)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">Email</h4>
                <a href="mailto:hello@crosiz.com" className="text-[var(--text-2)] hover:text-[var(--accent)] transition-colors text-sm">
                  hello@crosiz.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-3)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">Location</h4>
                <p className="text-[var(--text-2)] text-sm">Remote / Global · EST &amp; CET</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Right: Form ────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-glow)] rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            {isSuccess ? (
              <div className="min-h-[420px] flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[rgba(0,135,90,0.1)] flex items-center justify-center text-[var(--green)] mb-2">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-display font-semibold">Message Received</h3>
                <p className="text-[var(--text-2)] max-w-xs">Thanks for reaching out! We&apos;ll get back to you within 4 hours.</p>
                <Button variant="ghost" onClick={() => setIsSuccess(false)} className="mt-8">Send another message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs-label text-[var(--text-2)]">Name</label>
                    <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputClass} />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs-label text-[var(--text-2)]">Work Email</label>
                    <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-xs-label text-[var(--text-2)]">Company (Optional)</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-xs-label text-[var(--text-2)]">Project Type</label>
                    <select required id="service" name="service" value={formData.service} onChange={handleChange} className={inputClass + ' appearance-none'}>
                      <option value="" disabled>Select a service</option>
                      <option>Web Development</option>
                      <option>AI &amp; Automation</option>
                      <option>Backend System</option>
                      <option>Mobile App</option>
                      <option>MVP / Prototype</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="budget" className="text-xs-label text-[var(--text-2)]">Budget Range</label>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={inputClass + ' appearance-none'}>
                      <option value="" disabled>Select a range</option>
                      <option>Under $5k</option>
                      <option>$5k–$15k</option>
                      <option>$15k–$50k</option>
                      <option>$50k+</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs-label text-[var(--text-2)]">Project Details</label>
                  <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={4}
                    className={inputClass + ' resize-none'}
                    placeholder="Tell us about your goals, timeline, and challenges…"
                  />
                </div>

                {error && <p className="text-[var(--red)] text-sm">{error}</p>}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? <><Loader2 className="animate-spin mr-2" size={18} />Sending…</> : 'Send Inquiry →'}
                </Button>

                <p className="text-center text-xs text-[var(--text-3)]">
                  Prefer a call?{' '}
                  <button type="button" onClick={openCalendly} className="text-[var(--accent)] hover:underline">
                    Book a meeting instead
                  </button>
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
