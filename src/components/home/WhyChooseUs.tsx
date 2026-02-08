import { motion } from "framer-motion";
import { Shield, Zap, Users, Award, Clock, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols and compliance with industry standards.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Go from concept to production in weeks, not months.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "World-class engineers and AI specialists with proven track records.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "500%+ ROI achieved for our clients across industries.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support and monitoring for your solutions.",
  },
  {
    icon: Target,
    title: "Goal-Focused",
    description: "Every solution is tailored to your specific business objectives.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="orb orb-cyan w-80 h-80 -bottom-40 -left-40 opacity-20" />
      
      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="Why Crosiz"
          title="Built for Scale, Designed for Success"
          description="We combine deep technical expertise with business acumen to deliver solutions that drive real results."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};