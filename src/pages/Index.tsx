import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBy } from "@/components/home/TrustedBy";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedBy />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
    </Layout>
  );
};

export default Index;
