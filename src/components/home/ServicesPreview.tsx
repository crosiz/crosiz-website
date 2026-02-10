import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Brain, 
  Code2, 
  Workflow, 
  Cpu, 
  Layers,
  ArrowRight 
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "Develop a comprehensive AI roadmap tailored to your business goals and market position.",
    color: "text-primary",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Build scalable, high-performance software solutions that drive operational excellence.",
    color: "text-secondary",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Automate repetitive tasks and streamline workflows to maximize productivity.",
    color: "text-primary",
  },
  {
    icon: Cpu,
    title: "AI Integration & Deployment",
    description: "Seamlessly integrate AI capabilities into your existing systems and infrastructure.",
    color: "text-secondary",
  },
  {
    icon: Layers,
    title: "SaaS & Product Engineering",
    description: "Transform your ideas into market-ready products with our end-to-end engineering.",
    color: "text-primary",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="orb orb-purple w-96 h-96 -top-48 -right-48 opacity-20" />
      
      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="Our Services"
          title="Transform Your Business with AI-Powered Solutions"
          description="We deliver end-to-end solutions that combine cutting-edge AI technology with custom software development to accelerate your growth."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            // Generate unique anchor for each service for descriptive links
            const linkId = service.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

            return (
              <GlassCard key={service.title} delay={index * 0.1}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={`/services#${linkId}`}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More About {service.title} <ArrowRight size={16} />
                </Link>
              </GlassCard>
            );
          })}

          {/* CTA Card */}
          <GlassCard delay={0.5} className="flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Ready to Scale?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can transform your business.
            </p>
            <Link to="/inquiry" className="glow-button">
              Get Started
            </Link>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
