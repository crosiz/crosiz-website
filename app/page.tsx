import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import { LogoTicker } from '@/components/sections/LogoTicker';
import { StatBar } from '@/components/sections/StatBar';
import { JsonLd } from '@/components/seo/JsonLd';

const CaseStudiesPreview = dynamic(() => import('@/components/sections/CaseStudiesPreview').then(mod => mod.CaseStudiesPreview));
const ServicesGrid = dynamic(() => import('@/components/sections/ServicesGrid').then(mod => mod.ServicesGrid));
const ProcessTimeline = dynamic(() => import('@/components/sections/ProcessTimeline').then(mod => mod.ProcessTimeline));
const WhyCrosiz = dynamic(() => import('@/components/sections/WhyCrosiz').then(mod => mod.WhyCrosiz));
const TechStackGrid = dynamic(() => import('@/components/sections/TechStackGrid').then(mod => mod.TechStackGrid));
const BlogPreview = dynamic(() => import('@/components/sections/BlogPreview').then(mod => mod.BlogPreview));
const CTABanner = dynamic(() => import('@/components/sections/CTABanner').then(mod => mod.CTABanner));

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Crosiz",
    "image": "https://crosiz.com/crosiz-logo.png",
    "@id": "https://crosiz.com",
    "url": "https://crosiz.com",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Remote",
      "addressCountry": "Global"
    }
  };

  return (
    <>
      <JsonLd schema={localBusinessSchema} />
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
