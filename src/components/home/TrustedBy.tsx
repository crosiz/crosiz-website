import { motion } from "framer-motion";

const logos = [
  "TechCorp",
  "InnovateLabs",
  "FutureScale",
  "DataDriven",
  "GrowthAI",
  "NextGen",
];

export const TrustedBy = () => {
  return (
    <section className="py-16 border-y border-border relative overflow-hidden">
      <div className="container-wide">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-8"
        >
          Trusted by Industry Leaders
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-2xl font-display font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-default"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};