import React from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TechStackGrid } from '@/components/sections/TechStackGrid';
import { CTABanner } from '@/components/sections/CTABanner';

export default function TechnologiesPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
          <SectionLabel>Technologies</SectionLabel>
          <h1 className="text-h1 mb-6 max-w-4xl">
            The right tools for<br />
            the right job.
          </h1>
          <p className="text-[var(--text-2)] max-w-2xl text-lg">
            We are technology agnostic, but we have strong opinions. We use the tools that provide the best developer experience, highest performance, and most reliable scalability.
          </p>
        </div>
      </div>

      <TechStackGrid />

      <CTABanner />
    </>
  );
}
