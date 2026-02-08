import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const testimonials = [
  {
    quote: "Crosiz transformed our operations with their AI solution. We saw a 400% increase in productivity within the first quarter.",
    author: "Sarah Chen",
    role: "CEO, TechVentures",
    rating: 5,
  },
  {
    quote: "The custom software they built handles 10x more transactions than our previous system, with zero downtime.",
    author: "Michael Roberts",
    role: "CTO, FinScale",
    rating: 5,
  },
  {
    quote: "Their team's expertise in AI integration helped us automate 85% of our manual processes. Game-changing.",
    author: "Emily Watson",
    role: "VP Operations, LogiPro",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="orb orb-purple w-96 h-96 top-1/2 -right-48 opacity-20" />
      
      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Real results from businesses that trusted us with their digital transformation."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={testimonial.author} delay={index * 0.1}>
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
