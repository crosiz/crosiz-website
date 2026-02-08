import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@crosiz.com",
    href: "mailto:hello@crosiz.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Innovation Drive, Tech City, TC 12345",
    href: "#",
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
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
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Let's Start a{" "}
            <span className="neon-text">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            Have a question or ready to transform your business? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <GlassCard key={info.title} delay={index * 0.1} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                <a
                  href={info.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {info.value}
                </a>
              </GlassCard>
            ))}
          </div>

          {/* Main CTA */}
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
              Fill out our detailed business inquiry form and our team will get back to you within 24 hours.
            </p>
            <Link
              to="/inquiry"
              className="glow-button inline-flex items-center gap-2 relative z-10"
            >
              Submit Business Inquiry
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-6">Connect with us on social media</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 relative">
        <div className="absolute inset-0 bg-card grid-pattern opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="glass-card p-8 text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Our Headquarters
            </h3>
            <p className="text-muted-foreground">
              123 Innovation Drive, Tech City, TC 12345
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
