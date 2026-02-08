import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Lock, Server, Cloud, Brain } from "lucide-react";

const techCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    technologies: [
      "TensorFlow",
      "PyTorch",
      "OpenAI GPT",
      "Hugging Face",
      "scikit-learn",
      "Keras",
      "LangChain",
      "Vector DBs",
    ],
  },
  {
    title: "Frontend Development",
    icon: Zap,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "Svelte",
      "React Native",
      "Electron",
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    technologies: [
      "Node.js",
      "Python",
      "Go",
      "GraphQL",
      "REST APIs",
      "FastAPI",
      "Django",
      "NestJS",
    ],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    technologies: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Vercel",
      "Supabase",
      "Firebase",
      "Cloudflare",
      "DigitalOcean",
    ],
  },
  {
    title: "Database & Storage",
    icon: Server,
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Pinecone",
      "Weaviate",
      "S3",
      "Snowflake",
    ],
  },
  {
    title: "Security & DevOps",
    icon: Shield,
    technologies: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "OAuth 2.0",
      "JWT",
      "WAF",
      "SOC 2",
    ],
  },
];

const capabilities = [
  {
    icon: Brain,
    title: "Custom AI Models",
    description: "Proprietary models trained on your data for maximum relevance and accuracy.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 compliant infrastructure with end-to-end encryption.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for speed and scale—handling millions of requests seamlessly.",
  },
  {
    icon: Cloud,
    title: "Cloud Agnostic",
    description: "Deploy anywhere—we work with your preferred cloud provider.",
  },
];

const Technology = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="orb orb-purple w-96 h-96 -top-48 -left-48" />
        <div className="orb orb-cyan w-80 h-80 bottom-0 -right-40" />

        <div className="container-wide relative z-10 py-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6"
          >
            Technology Stack
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Built with{" "}
            <span className="neon-text">Best-in-Class</span>{" "}
            Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            We leverage the most powerful and reliable technologies to build 
            solutions that scale and perform.
          </motion.p>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Stack"
            title="Technologies We Master"
            description="A comprehensive toolkit for building world-class solutions."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category, index) => (
              <GlassCard key={category.title} delay={index * 0.1}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm bg-muted text-muted-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="orb orb-cyan w-80 h-80 top-1/4 -right-40 opacity-20" />

        <div className="container-wide relative z-10">
          <SectionHeading
            eyebrow="Capabilities"
            title="What Sets Us Apart"
            description="Technical excellence combined with business understanding."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <cap.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground text-sm">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Focus */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">
                Security First
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Your data security is our top priority. We implement industry-leading 
                security practices at every layer of our solutions.
              </p>
              <ul className="space-y-4">
                {[
                  "SOC 2 Type II Compliant",
                  "End-to-end Encryption",
                  "Regular Security Audits",
                  "GDPR & HIPAA Ready",
                  "24/7 Monitoring",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <Lock className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 relative overflow-hidden">
                <div className="orb orb-cyan w-48 h-48 -top-24 -right-24 opacity-30" />
                <div className="orb orb-purple w-32 h-32 -bottom-16 -left-16 opacity-30" />
                
                <div className="relative z-10 aspect-square flex items-center justify-center">
                  <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-float">
                    <Shield className="w-16 h-16 text-primary-foreground" />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="orb orb-purple w-64 h-64 -bottom-32 -left-32 opacity-20" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Ready to leverage cutting-edge technology for your business?
            </p>
            <Link
              to="/inquiry"
              className="glow-button inline-flex items-center gap-2"
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

export default Technology;
