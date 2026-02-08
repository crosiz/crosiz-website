import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Target, Eye, Heart, Rocket, Users, Award, Globe, Zap } from "lucide-react";

const values = [
  { icon: Target, title: "Excellence", description: "We pursue excellence in every solution we deliver." },
  { icon: Heart, title: "Integrity", description: "Transparent partnerships built on trust and honesty." },
  { icon: Rocket, title: "Innovation", description: "Pushing boundaries with cutting-edge technology." },
  { icon: Users, title: "Collaboration", description: "Working together to achieve extraordinary results." },
];

const timeline = [
  { year: "2019", title: "Founded", description: "Crosiz was born with a vision to democratize AI for businesses." },
  { year: "2020", title: "First Enterprise Client", description: "Landed our first Fortune 500 client, proving our scalability." },
  { year: "2021", title: "Global Expansion", description: "Expanded operations to serve clients across 15+ countries." },
  { year: "2022", title: "AI Research Lab", description: "Launched dedicated R&D lab for proprietary AI solutions." },
  { year: "2023", title: "100+ Team Members", description: "Grew to a team of world-class engineers and strategists." },
  { year: "2024", title: "Industry Recognition", description: "Named Top AI Solutions Provider by TechReview." },
];

const team = [
  { name: "Alex Rivera", role: "CEO & Founder", initial: "AR" },
  { name: "Sarah Chen", role: "CTO", initial: "SC" },
  { name: "Marcus Johnson", role: "VP Engineering", initial: "MJ" },
  { name: "Elena Petrov", role: "Head of AI", initial: "EP" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="orb orb-cyan w-96 h-96 -top-48 -left-48" />
        <div className="orb orb-purple w-80 h-80 bottom-0 -right-40" />

        <div className="container-wide relative z-10 py-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6"
          >
            About Crosiz
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Empowering the Future of{" "}
            <span className="neon-text">Business</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            We're on a mission to help businesses unlock their full potential through 
            AI-driven innovation and custom software excellence.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the world's most trusted partner for AI-driven business transformation, 
                enabling organizations of all sizes to compete and thrive in the digital age.
              </p>
            </GlassCard>

            <GlassCard className="p-8" delay={0.1}>
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional AI solutions and custom software that drives measurable 
                business outcomes, while building lasting partnerships with our clients.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="orb orb-cyan w-64 h-64 top-1/4 -right-32 opacity-20" />

        <div className="container-wide relative z-10">
          <SectionHeading
            eyebrow="Our Values"
            title="What Drives Us"
            description="The principles that guide every decision we make and every solution we build."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <GlassCard key={value.title} delay={index * 0.1} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Journey"
            title="Building the Future"
            description="From a bold idea to a global AI solutions leader."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="text-primary font-display font-bold text-lg">{item.year}</span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-1">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="orb orb-purple w-96 h-96 -bottom-48 -left-48 opacity-20" />

        <div className="container-wide relative z-10">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet the Team"
            description="World-class experts driving innovation at Crosiz."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <GlassCard key={member.name} delay={index * 0.1} className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 text-2xl font-display font-bold text-primary-foreground">
                  {member.initial}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Globe, value: "15+", label: "Countries Served" },
              { icon: Users, value: "100+", label: "Team Members" },
              { icon: Award, value: "50+", label: "Awards Won" },
              { icon: Zap, value: "150+", label: "Projects Delivered" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-3xl md:text-4xl font-bold neon-text mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
