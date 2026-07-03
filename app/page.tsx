import { Hero } from '@/components/sections/Hero';
import { LogoTicker } from '@/components/sections/LogoTicker';
import { StatBar } from '@/components/sections/StatBar';
import { CaseStudiesPreview } from '@/components/sections/CaseStudiesPreview';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { WhyCrosiz } from '@/components/sections/WhyCrosiz';
import { TechStackGrid } from '@/components/sections/TechStackGrid';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { CTABanner } from '@/components/sections/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <StatBar />
      <CaseStudiesPreview />
      <ServicesGrid />
      <ProcessTimeline />
      <WhyCrosiz />
      <TechStackGrid />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
