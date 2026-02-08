import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "AI Strategy", path: "/services" },
    { name: "Custom Software", path: "/services" },
    { name: "Business Automation", path: "/services" },
    { name: "AI Integration", path: "/services" },
  ],
  resources: [
    { name: "Case Studies", path: "/case-studies" },
    { name: "Technology Stack", path: "/technology" },
    { name: "Industries", path: "/industries" },
    { name: "Business Inquiry", path: "/inquiry" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@crosiz.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container-wide relative">
        {/* CTA Section */}
        <div className="py-16 border-b border-border">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="orb orb-cyan w-64 h-64 -top-32 -left-32" />
            <div className="orb orb-purple w-64 h-64 -bottom-32 -right-32" />
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 relative z-10">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Let's discuss how AI and custom software can accelerate your growth.
            </p>
            <Link
              to="/inquiry"
              className="glow-button inline-flex items-center gap-2 relative z-10"
            >
              Book a Strategy Call
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Links Section */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl" />
                <div className="absolute inset-0.5 bg-background rounded-xl flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-xl">C</span>
                </div>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Crosiz
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Empowering businesses to scale with AI-driven solutions and custom software excellence.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Crosiz. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
