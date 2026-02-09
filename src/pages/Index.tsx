import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBy } from "@/components/home/TrustedBy";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { SEO } from "@/components/ui/SEO";

const Index = () => {
  return (
    <Layout>
       {/* SEO Metadata */}
       <SEO
        title="AI Systems & Intelligent Software Development | Crosiz"
        description="We help startups and SMBs integrate AI, build intelligent software systems, and scale efficiently."
        url="https://crosiz.com"
        image="https://crosiz.com/og-image.png"
      />

      {/* Page Sections */}
      <HeroSection />
      <TrustedBy />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
    </Layout>
  );
};

export default Index;
