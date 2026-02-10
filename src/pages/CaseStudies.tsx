import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, TrendingUp, Clock, Zap } from "lucide-react";
import { SEO } from "@/components/ui/SEO";

const caseStudies = [
  {
    id: 1,
    client: "TechVentures Inc.",
    industry: "Fintech",
    title: "400% Productivity Increase with AI Automation",
    problem: "Manual document processing causing delays and errors in loan approvals.",
    solution: "Implemented AI-powered document extraction and verification system with automated workflows.",
    results: [
      { metric: "400%", label: "Productivity Increase" },
      { metric: "85%", label: "Error Reduction" },
      { metric: "2hrs", label: "To 10min Processing" },
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    client: "LogiPro Global",
    industry: "Logistics",
    title: "Real-time Route Optimization Saves $2M Annually",
    problem: "Inefficient delivery routes leading to high fuel costs and delayed shipments.",
    solution: "Deployed AI-driven route optimization with real-time traffic and weather integration.",
    results: [
      { metric: "$2M", label: "Annual Savings" },
      { metric: "30%", label: "Fuel Reduction" },
      { metric: "45%", label: "Faster Deliveries" },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    client: "HealthFirst",
    industry: "Healthcare",
    title: "AI Diagnostics Improves Patient Outcomes",
    problem: "Long wait times for diagnostic results affecting patient care quality.",
    solution: "Implemented AI-assisted diagnostic imaging analysis with physician review workflow.",
    results: [
      { metric: "60%", label: "Faster Diagnosis" },
      { metric: "95%", label: "Accuracy Rate" },
      { metric: "3x", label: "Patient Throughput" },
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    client: "RetailMax",
    industry: "E-commerce",
    title: "Personalization Engine Boosts Revenue 250%",
    problem: "Generic product recommendations leading to low conversion rates.",
    solution: "Built custom AI recommendation engine with real-time personalization.",
    results: [
      { metric: "250%", label: "Revenue Increase" },
      { metric: "180%", label: "Conversion Lift" },
      { metric: "45%", label: "Higher AOV" },
    ],
    color: "from-orange-500 to-red-500",
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* SEO Metadata */}
      <SEO
        title="Crosiz Case Studies | Real AI & Software Success Stories"
        description="Explore real-world case studies showcasing how Crosiz delivers measurable results through AI, automation, and custom software solutions."
        url="https://crosiz.com/case-studies"
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
            Success Stories
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Real Results,{" "}
            <span className="neon-text">Real Impact</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            Discover how we've helped businesses across industries achieve 
            extraordinary outcomes with AI and custom software.
          </motion.p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-card">
        <div className="container-wide space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${study.color} text-white`}>
                        {study.industry}
                      </span>
                      <span className="text-muted-foreground text-sm">{study.client}</span>
                    </div>
                    
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                      {study.title}
                    </h2>

                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-xs">!</span>
                          The Problem
                        </h4>
                        <p className="text-muted-foreground">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-primary" />
                          Our Solution
                        </h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="flex flex-col justify-center">
                    <h4 className="font-display font-semibold text-foreground mb-6 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      The Results
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result) => (
                        <div
                          key={result.label}
                          className="glass-card p-4 text-center"
                        >
                          <div className="font-display text-2xl md:text-3xl font-bold neon-text mb-1">
                            {result.metric}
                          </div>
                          <div className="text-muted-foreground text-xs">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="orb orb-cyan w-64 h-64 -top-32 -right-32 opacity-20" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join the ranks of industry leaders who have transformed their businesses with Crosiz.
            </p>
            <Link
              to="/inquiry"
              className="glow-button inline-flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
