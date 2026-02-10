import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SEO } from "@/components/ui/SEO";

import { 
  Brain, 
  Code2, 
  Workflow, 
  Cpu, 
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const services = [
  {
    id: "ai-strategy",
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "Develop a comprehensive AI roadmap tailored to your business goals and market position.",
    outcomes: [
      "Custom AI readiness assessment",
      "Technology roadmap development",
      "ROI projections and business case",
      "Implementation timeline planning",
    ],
    useCases: [
      "Digital transformation planning",
      "AI opportunity identification",
      "Technology stack evaluation",
      "Change management strategy",
    ],
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    description: "Build scalable, high-performance software solutions that drive operational excellence.",
    outcomes: [
      "Scalable architecture design",
      "Full-stack development",
      "Legacy system modernization",
      "API development & integration",
    ],
    useCases: [
      "Enterprise applications",
      "Customer portals",
      "Internal tools & dashboards",
      "Mobile applications",
    ],
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Business Process Automation",
    description: "Automate repetitive tasks and streamline workflows to maximize productivity.",
    outcomes: [
      "Process analysis & optimization",
      "Workflow automation design",
      "RPA implementation",
      "Integration with existing systems",
    ],
    useCases: [
      "Document processing",
      "Customer service automation",
      "Data entry & validation",
      "Reporting & analytics",
    ],
  },
  {
    id: "ai-integration",
    icon: Cpu,
    title: "AI Integration & Deployment",
    description: "Seamlessly integrate AI capabilities into your existing systems and infrastructure.",
    outcomes: [
      "AI model development",
      "System integration",
      "Performance optimization",
      "Continuous improvement setup",
    ],
    useCases: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision solutions",
      "Recommendation engines",
    ],
  },
  {
    id: "saas-engineering",
    icon: Layers,
    title: "SaaS & Product Engineering",
    description: "Transform your ideas into market-ready products with our end-to-end engineering.",
    outcomes: [
      "Product strategy & design",
      "MVP development",
      "Scalable infrastructure",
      "Continuous deployment",
    ],
    useCases: [
      "SaaS platform development",
      "Product iterations",
      "Multi-tenant architecture",
      "Subscription management",
    ],
  },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "Deep dive into your business challenges and opportunities." },
  { step: "02", title: "Strategy", description: "Develop a tailored solution roadmap aligned with your goals." },
  { step: "03", title: "Development", description: "Build and iterate with agile methodology and constant feedback." },
  { step: "04", title: "Deployment", description: "Launch with confidence, backed by thorough testing." },
  { step: "05", title: "Optimization", description: "Continuous improvement and scaling based on real data." },
];

const Services = () => {
  return (
    <Layout>
      {/* SEO Metadata */}
      <SEO
        title="Crosiz Services | AI, Software & Automation Solutions"
        description="Explore Crosiz's end-to-end services, including AI strategy, custom software development, business process automation, AI integration, and SaaS engineering. Transform your business with our expert solutions."
        url="https://crosiz.com/services"
        image="https://crosiz.com/assets/logo.png"
      />
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="orb orb-cyan w-96 h-96 -top-48 -right-48" />
        <div className="orb orb-purple w-80 h-80 bottom-0 -left-40" />

        <div className="container-wide relative z-10 py-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            End-to-End{" "}
            <span className="neon-text">AI & Software</span>{" "}
            Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            From strategy to deployment, we deliver comprehensive solutions that 
            transform your business and drive measurable results.
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-card">
        <div className="container-wide space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      Business Outcomes
                    </h4>
                    <ul className="space-y-3">
                      {service.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-secondary" />
                      Use Cases
                    </h4>
                    <ul className="space-y-3">
                      {service.useCases.map((useCase) => (
                        <li key={useCase} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/inquiry"
                  className="glow-button inline-flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Visual */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <GlassCard className="p-8 relative overflow-hidden">
                  <div className="orb orb-cyan w-48 h-48 -top-24 -right-24 opacity-30" />
                  <div className="orb orb-purple w-32 h-32 -bottom-16 -left-16 opacity-30" />
                  
                  <div className="relative z-10 aspect-video flex items-center justify-center">
                    <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-float">
                      <service.icon className="w-16 h-16 text-primary-foreground" />
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="orb orb-purple w-96 h-96 top-1/2 -translate-y-1/2 -right-48 opacity-20" />

        <div className="container-wide relative z-10">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Deliver Excellence"
            description="A proven methodology that ensures successful outcomes for every project."
          />

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary to-transparent z-0" />
                )}
                
                <div className="glass-card p-6 relative z-10">
                  <span className="font-display text-4xl font-bold neon-text">{step.step}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-3 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center relative overflow-hidden"
          >
            <div className="orb orb-cyan w-64 h-64 -top-32 -left-32" />
            <div className="orb orb-purple w-64 h-64 -bottom-32 -right-32" />
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 relative z-10">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Let's discuss how our solutions can help you achieve your goals.
            </p>
            <Link
              to="/inquiry"
              className="glow-button inline-flex items-center gap-2 relative z-10"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
