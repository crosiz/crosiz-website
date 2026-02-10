import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  Rocket, 
  Building2, 
  ShoppingCart, 
  Landmark, 
  Heart,
  Truck,
  Megaphone,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { SEO } from "@/components/ui/SEO";

const industries = [
  {
    icon: Rocket,
    title: "Startups",
    description: "Accelerate your growth with AI-powered solutions designed for rapid scaling.",
    benefits: ["MVP development", "Scalable architecture", "AI automation", "Growth analytics"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Building2,
    title: "Enterprises",
    description: "Digital transformation solutions for large-scale operations and complex systems.",
    benefits: ["Legacy modernization", "Process automation", "Custom integrations", "Enterprise AI"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Boost conversions and customer experience with intelligent commerce solutions.",
    benefits: ["Personalization engines", "Inventory optimization", "Demand forecasting", "Customer analytics"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Landmark,
    title: "Fintech",
    description: "Secure, compliant, and innovative solutions for the financial sector.",
    benefits: ["Fraud detection", "Risk assessment", "Regulatory compliance", "Trading algorithms"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Transform patient care with AI-driven diagnostics and operational efficiency.",
    benefits: ["Diagnostic AI", "Patient analytics", "Workflow automation", "HIPAA compliance"],
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Optimize supply chain and delivery operations with intelligent automation.",
    benefits: ["Route optimization", "Demand prediction", "Inventory management", "Real-time tracking"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Megaphone,
    title: "Marketing Agencies",
    description: "Empower creative teams with AI tools for content, analytics, and automation.",
    benefits: ["Content generation", "Campaign optimization", "Audience insights", "Performance AI"],
    color: "from-pink-500 to-purple-500",
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* SEO Metadata */}
      <SEO
        title="Crosiz Industries | AI & Custom Software Solutions for Every Sector"
        description="Discover how Crosiz delivers AI, automation, and software solutions across startups, enterprises, e-commerce, fintech, healthcare, logistics, and marketing agencies."
        url="https://crosiz.com/industries"
        image="https://crosiz.com/assets/logo.png"
      />

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
            Industries We Serve
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Solutions for <span className="neon-text">Every Industry</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            We bring deep domain expertise and cutting-edge AI technology to 
            transform businesses across diverse sectors.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <GlassCard
                key={industry.title}
                delay={index * 0.1}
                className="group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {industry.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {industry.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/inquiry"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  aria-label={`Learn more about ${industry.title} solutions`}
                >
                  Learn More About {industry.title} <ArrowRight size={16} />
                </Link>
              </GlassCard>
            ))}

            {/* CTA Card */}
            <GlassCard className="flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/10 to-secondary/10">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Don't See Your Industry?
              </h3>
              <p className="text-muted-foreground mb-6">
                We work with businesses across all sectors. Let's discuss your unique needs.
              </p>
              <Link to="/inquiry" className="glow-button">
                Contact Us
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Cross-Industry Expertise */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="orb orb-cyan w-80 h-80 top-1/4 -right-40 opacity-20" />

        <div className="container-wide relative z-10">
          <SectionHeading
            eyebrow="Our Approach"
            title="Cross-Industry Expertise"
            description="We leverage insights from multiple industries to deliver innovative solutions."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              {
                title: "Pattern Recognition",
                description: "We identify successful patterns across industries and adapt them to your unique context.",
              },
              {
                title: "Best Practices",
                description: "Drawing from diverse projects, we implement proven strategies that drive results.",
              },
              {
                title: "Innovation Transfer",
                description: "Technologies pioneered in one sector often transform others—we make those connections.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl font-bold neon-text">{index + 1}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
