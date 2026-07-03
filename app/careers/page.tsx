import React from 'react';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { CTABanner } from '@/components/sections/CTABanner';
import { Tag } from '@/components/ui/Tag';

export const metadata: Metadata = {
  title: 'Careers at Crosiz — Join Our Engineering Team',
  description: "We're building a world-class engineering team. Remote-friendly positions in frontend, backend, AI, and DevOps. See open roles at Crosiz.",
  alternates: {
    canonical: 'https://crosiz.com/careers',
  },
};

export const revalidate = 60;

export default async function CareersPage() {
  let openRoles: Awaited<ReturnType<typeof prisma.job.findMany>> = [];
  try {
    openRoles = await prisma.job.findMany({
      where: { open: true },
      orderBy: { createdAt: 'desc' },
    });
  } catch {
    // DATABASE_URL not configured — show empty state
  }

  return (
    <>
      <div className="pt-32 pb-20 bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
          <SectionLabel>CAREERS</SectionLabel>
          <h1 className="text-h1 mb-6 max-w-4xl">
            Join the Team Building<br />
            the Future of Software.
          </h1>
          <p className="text-[var(--text-2)] max-w-2xl text-lg mb-12">
            We&apos;re a small, focused team. We hire carefully. We grow deliberately.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mt-16 pt-16 border-t border-[var(--border)]">
            <div>
              <h3 className="text-lg font-semibold mb-2">Remote-first</h3>
              <p className="text-[var(--text-2)] text-sm">Work from anywhere in Pakistan or globally</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Async-friendly</h3>
              <p className="text-[var(--text-2)] text-sm">We don&apos;t micromanage your hours</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Engineers who own</h3>
              <p className="text-[var(--text-2)] text-sm">You&apos;ll have real responsibility from day one</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Honest feedback</h3>
              <p className="text-[var(--text-2)] text-sm">We say what we mean, in both directions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-[var(--bg-2)] min-h-[50vh]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
          <h2 className="text-h2 mb-12">Open Roles</h2>
          
          {openRoles.length > 0 ? (
            <div className="flex flex-col gap-6">
              {openRoles.map((role) => (
                <div key={role.id} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-8 flex flex-col md:flex-row md:items-center justify-between hover:border-[var(--accent)] transition-colors group cursor-pointer">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors">{role.title}</h3>
                    <div className="flex gap-3 flex-wrap">
                      <Tag>{role.department}</Tag>
                      <Tag>{role.location}</Tag>
                      <Tag>{role.type}</Tag>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 shrink-0">
                    <a href={`mailto:hello@crosiz.com?subject=Application for ${role.title}`} className="inline-flex items-center text-[var(--text-1)] font-medium text-sm group-hover:text-[var(--accent)] transition-colors">
                      Apply Now <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-10 max-w-3xl">
              <h3 className="text-2xl font-display font-semibold mb-4">No Open Positions Right Now</h3>
              <p className="text-[var(--text-2)] leading-relaxed mb-6">
                We&apos;re not actively hiring at the moment — but we&apos;re always interested in meeting exceptional engineers.
                If you&apos;re a frontend, backend, AI, or DevOps engineer who cares about craft — drop us your CV.
                We&apos;ll reach out when we have something that fits.
              </p>
              <a href="mailto:hello@crosiz.com" className="inline-flex items-center px-6 py-3 bg-[var(--accent)] text-white text-sm font-semibold rounded-[4px] hover:opacity-90 transition-opacity">
                Send Your CV →
              </a>
            </div>
          )}

          <div className="mt-20 pt-12 border-t border-[var(--border)] max-w-2xl">
            <p className="text-[var(--text-2)] mb-2">Questions about working at Crosiz?</p>
            <a href="mailto:hello@crosiz.com" className="text-[var(--accent)] hover:underline font-medium">Email us at hello@crosiz.com</a>
          </div>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
