'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/components/ui/Button';
import { Button } from '@/components/ui/Button';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';

// ── Logo: dual-mode transparent logo image ─────────────────────────────────────
function CrosizLogo() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const check = () => setDark(document.documentElement.classList.contains('dark'));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
      <Image
        src={dark ? '/crosiz-logo-transparrent.png' : '/crosiz-logo-trans-black.png'}
        alt="Crosiz"
        width={140}
        height={44}
        className="h-11 w-auto object-contain"
        priority
      />
    </motion.div>
  );
}

// ── Theme toggle ───────────────────────────────────────────────────────────────
function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('crosiz-theme');
    const isDark = stored === 'dark';
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem('crosiz-theme', next ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="w-9 h-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] hover:border-[var(--border-hover)] hover:text-[var(--text-1)] transition-all duration-200"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? 'sun' : 'moon'}
          initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
          transition={{ duration: 0.2 }}
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

// ── Nav data ───────────────────────────────────────────────────────────────────
const SERVICES_BUILD = [
  { name: 'Web Applications', href: '/services/web-development', desc: 'Next.js, React, TypeScript' },
  { name: 'AI & Automation', href: '/services/ai-automation', desc: 'n8n, OpenAI, LangChain' },
  { name: 'Backend Systems', href: '/services/backend-development', desc: 'Node.js, NestJS, FastAPI' },
  { name: 'System Design', href: '/services/system-design', desc: 'Architecture & scalability' },
  { name: 'DevOps & Infrastructure', href: '/services/devops', desc: 'Docker, K8s, CI/CD' },
];

const SERVICES_SPECIALIZED = [
  { name: 'Mobile Apps', href: '/services/mobile-app-development', desc: 'React Native, Expo' },
  { name: 'API Development', href: '/services/api-development', desc: 'REST, GraphQL, Webhooks' },
  { name: 'MVP Development', href: '/services/mvp-development', desc: '0 → launched in 6–10 wk' },
  { name: 'CRM Development', href: '/services/crm-development', desc: 'Custom pipelines' },
  { name: 'WebSocket Systems', href: '/services/websocket-development', desc: 'Real-time everything' },
];

const WORK_PROJECTS = [
  { name: 'Lead Gen Automation', industry: 'Real Estate', tech: 'n8n', href: '/work/lead-gen-automation', gradient: 'linear-gradient(135deg,#1a1a2e 0%,#0f3460 100%)' },
  { name: 'SaaS Platform', industry: 'Fintech', tech: 'Next.js', href: '/work/saas-platform', gradient: 'linear-gradient(135deg,#0a0a1a 0%,#002776 100%)' },
  { name: 'AI Dashboard', industry: 'Healthcare', tech: 'Python', href: '/work/ai-dashboard', gradient: 'linear-gradient(135deg,#0d1b2a 0%,#0a3d62 100%)' },
];

const COMPANY_LINKS = [
  { name: 'About Crosiz', href: '/about', desc: 'Our team and mission' },
  { name: 'Our Process', href: '/about#process', desc: 'How we work' },
  { name: 'Technologies', href: '/technologies', desc: 'Our tech stack' },
  { name: 'Careers', href: '/careers', desc: 'Join the team' },
];

const COMPANY_LEARN = [
  { name: 'Blog', href: '/blog', desc: 'Technical articles' },
  { name: 'Resources', href: '/resources', desc: 'Free templates' },
  { name: 'Industries', href: '/industries', desc: 'Sectors we serve' },
];

const RESOURCES = [
  { name: 'Blog Articles', href: '/blog' },
  { name: 'Free Templates', href: '/resources' },
  { name: 'Guides & Checklists', href: '/resources#guides' },
];

// ── Mobile accordion ───────────────────────────────────────────────────────────
function MobileAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--border)]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 text-left text-base font-medium text-[var(--text-1)]"
      >
        {title}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={18} className="text-[var(--text-2)]" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pb-4 space-y-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main Navbar ────────────────────────────────────────────────────────────────
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setActiveMenu(null); setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveMenu(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const linkCls = (active: boolean) =>
    cn('text-sm font-medium transition-colors hover:text-[var(--accent)] flex items-center gap-1',
      active ? 'text-[var(--accent)]' : 'text-[var(--text-1)]');

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled || activeMenu
            ? 'bg-[var(--bg-nav)] backdrop-blur-md border-b border-[var(--border)] shadow-sm'
            : 'bg-transparent border-b border-transparent'
        )}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Crosiz — Home">
            <CrosizLogo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">

            {/* Services */}
            <div className="relative h-20 flex items-center" onMouseEnter={() => setActiveMenu('services')}>
              <Link href="/services" className={linkCls(pathname.startsWith('/services'))}>
                Services
                <ChevronDown size={13} className={cn('transition-transform duration-200', activeMenu === 'services' ? 'rotate-180' : '')} />
              </Link>
            </div>

            {/* Work */}
            <div className="relative h-20 flex items-center" onMouseEnter={() => setActiveMenu('work')}>
              <Link href="/work" className={linkCls(pathname.startsWith('/work'))}>
                Work
                <ChevronDown size={13} className={cn('transition-transform duration-200', activeMenu === 'work' ? 'rotate-180' : '')} />
              </Link>
            </div>

            {/* Company */}
            <div className="relative h-20 flex items-center" onMouseEnter={() => setActiveMenu('company')}>
              <Link href="/about" className={linkCls(pathname === '/about' || pathname === '/careers')}>
                Company
                <ChevronDown size={13} className={cn('transition-transform duration-200', activeMenu === 'company' ? 'rotate-180' : '')} />
              </Link>
            </div>

            {/* Resources — small dropdown anchored directly below this word */}
            <div className="relative h-20 flex items-center" onMouseEnter={() => setActiveMenu('resources')}>
              <span className={cn(linkCls(pathname.startsWith('/blog') || pathname.startsWith('/resources')), 'cursor-default')}>
                Resources
                <ChevronDown size={13} className={cn('transition-transform duration-200', activeMenu === 'resources' ? 'rotate-180' : '')} />
              </span>

              {/* Anchored small dropdown */}
              <AnimatePresence>
                {activeMenu === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6, transition: { duration: 0.12 } }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-52 border border-[var(--border)] bg-[var(--bg)] rounded-xl py-2 shadow-2xl"
                  >
                    {RESOURCES.map((item, i) => (
                      <motion.div key={item.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}>
                        <Link
                          href={item.href}
                          className="text-sm text-[var(--text-1)] hover:text-[var(--accent)] hover:bg-[var(--bg-3)] transition-colors block px-4 py-2.5 rounded-lg mx-1"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right: theme + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/contact">
              <Button variant="ghost" className="border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--text-inv)]">
                Let&apos;s Talk
              </Button>
            </Link>
          </div>

          <button className="lg:hidden text-[var(--text-1)]" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={28} />
          </button>
        </div>

        {/* ── Full-width Mega Menus ──────────────────────────────────────────── */}
        <AnimatePresence>

          {/* SERVICES */}
          {activeMenu === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute top-20 left-0 right-0 border-b border-[var(--border)] bg-[var(--bg)] py-12 shadow-2xl"
            >
              <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] grid grid-cols-12 gap-8">
                <div className="col-span-4">
                  <h4 className="text-xs-label text-[var(--accent)] mb-5">What We Build</h4>
                  <ul className="space-y-3">
                    {SERVICES_BUILD.map((s, i) => (
                      <motion.li key={s.name} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                        <Link href={s.href} className="group block">
                          <span className="text-sm font-medium text-[var(--text-1)] group-hover:text-[var(--accent)] transition-colors block leading-tight">{s.name}</span>
                          <span className="text-xs text-[var(--text-3)]">{s.desc}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-4">
                  <h4 className="text-xs-label text-[var(--accent)] mb-5">Specialized</h4>
                  <ul className="space-y-3">
                    {SERVICES_SPECIALIZED.map((s, i) => (
                      <motion.li key={s.name} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                        <Link href={s.href} className="group block">
                          <span className="text-sm font-medium text-[var(--text-1)] group-hover:text-[var(--accent)] transition-colors block leading-tight">{s.name}</span>
                          <span className="text-xs text-[var(--text-3)]">{s.desc}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-4">
                  <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border)] h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[var(--accent-dim)] flex items-center justify-center mb-4 text-[var(--accent)]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                      </div>
                      <h3 className="font-display font-semibold text-lg mb-2">Not sure where to start?</h3>
                      <p className="text-sm text-[var(--text-2)] leading-relaxed">
                        Book a free 30-min discovery call to discuss your project requirements and architecture.
                      </p>
                    </div>
                    <Link href="/contact" className="mt-5 text-[var(--accent)] font-semibold text-sm flex items-center gap-1 hover:underline">
                      Book discovery call →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* WORK */}
          {activeMenu === 'work' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute top-20 left-0 right-0 border-b border-[var(--border)] bg-[var(--bg)] py-12 shadow-2xl"
            >
              <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] grid grid-cols-12 gap-8">
                <div className="col-span-8">
                  <h4 className="text-xs-label text-[var(--accent)] mb-5">Recent Projects</h4>
                  <div className="grid grid-cols-3 gap-5">
                    {WORK_PROJECTS.map((p, i) => (
                      <motion.div key={p.name} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="group">
                        <Link href={p.href} className="block">
                          <div className="aspect-video rounded-xl mb-3 border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors overflow-hidden"
                            style={{ background: p.gradient }} />
                          <h5 className="font-medium text-sm text-[var(--text-1)] mb-0.5">{p.name}</h5>
                          <p className="text-xs text-[var(--text-2)]">{p.industry} · {p.tech}</p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="col-span-4 pl-8 border-l border-[var(--border)]">
                  <h4 className="text-xs-label text-[var(--accent)] mb-5">By Industry</h4>
                  <ul className="space-y-3 mb-6">
                    {['Real Estate', 'Fintech', 'Healthcare', 'E-commerce', 'SaaS', 'Enterprise'].map((ind, i) => (
                      <motion.li key={ind} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}>
                        <span className="text-sm text-[var(--text-1)] hover:text-[var(--accent)] transition-colors cursor-pointer">{ind}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Link href="/work" className="text-[var(--accent)] font-semibold text-sm hover:underline">
                    View all case studies →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* COMPANY */}
          {activeMenu === 'company' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute top-20 left-0 right-0 border-b border-[var(--border)] bg-[var(--bg)] py-12 shadow-2xl"
            >
              <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] grid grid-cols-12 gap-8">
                <div className="col-span-4">
                  <h4 className="text-xs-label text-[var(--accent)] mb-5">Company</h4>
                  <ul className="space-y-3">
                    {COMPANY_LINKS.map((item, i) => (
                      <motion.li key={item.name} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                        <Link href={item.href} className="group block">
                          <span className="text-sm font-medium text-[var(--text-1)] group-hover:text-[var(--accent)] transition-colors block leading-tight">{item.name}</span>
                          <span className="text-xs text-[var(--text-3)]">{item.desc}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-4">
                  <h4 className="text-xs-label text-[var(--accent)] mb-5">Learn</h4>
                  <ul className="space-y-3">
                    {COMPANY_LEARN.map((item, i) => (
                      <motion.li key={item.name} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                        <Link href={item.href} className="group block">
                          <span className="text-sm font-medium text-[var(--text-1)] group-hover:text-[var(--accent)] transition-colors block leading-tight">{item.name}</span>
                          <span className="text-xs text-[var(--text-3)]">{item.desc}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-4">
                  <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border)] h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[var(--accent-dim)] flex items-center justify-center mb-4 text-[var(--accent)]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                      </div>
                      <h3 className="font-display font-semibold text-lg mb-2">We&apos;re growing</h3>
                      <p className="text-sm text-[var(--text-2)] leading-relaxed">
                        Join a team building intelligent software for forward-thinking companies worldwide.
                      </p>
                    </div>
                    <Link href="/careers" className="mt-5 text-[var(--accent)] font-semibold text-sm hover:underline">
                      See open roles →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </header>

      {/* ── Mobile Menu ───────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[var(--bg)] flex flex-col"
          >
            <div className="flex h-20 items-center justify-between px-[var(--gutter)] border-b border-[var(--border)]">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <CrosizLogo />
              </Link>
              <button className="text-[var(--text-1)]" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={28} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-[var(--gutter)] py-4">
              <MobileAccordion title="Services">
                {[...SERVICES_BUILD, ...SERVICES_SPECIALIZED].map((s) => (
                  <Link key={s.name} href={s.href} onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm text-[var(--text-1)] hover:text-[var(--accent)] transition-colors">
                    {s.name}
                  </Link>
                ))}
              </MobileAccordion>

              <MobileAccordion title="Work">
                {WORK_PROJECTS.map((p) => (
                  <Link key={p.name} href={p.href} onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm text-[var(--text-1)] hover:text-[var(--accent)] transition-colors">
                    {p.name}
                  </Link>
                ))}
                <Link href="/work" onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-sm font-semibold text-[var(--accent)]">
                  View all case studies →
                </Link>
              </MobileAccordion>

              <MobileAccordion title="Company">
                {COMPANY_LINKS.map((item) => (
                  <Link key={item.name} href={item.href} onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm text-[var(--text-1)] hover:text-[var(--accent)] transition-colors">
                    {item.name}
                  </Link>
                ))}
              </MobileAccordion>

              <MobileAccordion title="Resources">
                {RESOURCES.map((item) => (
                  <Link key={item.name} href={item.href} onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm text-[var(--text-1)] hover:text-[var(--accent)] transition-colors">
                    {item.name}
                  </Link>
                ))}
              </MobileAccordion>

              <div className="pt-6 mt-2 border-t border-[var(--border)]">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full text-base py-5">Let&apos;s Talk</Button>
                </Link>
                <div className="mt-5 flex items-center justify-between">
                  <a href="mailto:hello@crosiz.com" className="text-sm text-[var(--text-2)] hover:text-[var(--accent)] transition-colors">
                    hello@crosiz.com
                  </a>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
