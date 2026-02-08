import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  User, 
  Building2, 
  Mail, 
  Phone, 
  Briefcase, 
  Users, 
  MessageSquare,
  Target,
  DollarSign,
  Calendar,
  Radio,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const industries = [
  "Startup",
  "Enterprise",
  "E-commerce",
  "Fintech",
  "Healthcare",
  "Logistics",
  "Marketing Agency",
  "Other",
];

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
];

const budgetRanges = [
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000+",
];

const timelines = [
  "Immediate (within 1 month)",
  "Short-term (1-3 months)",
  "Medium-term (3-6 months)",
  "Long-term (6+ months)",
  "Exploratory / No rush",
];

const referralSources = [
  "Google Search",
  "LinkedIn",
  "Referral",
  "Social Media",
  "Industry Event",
  "News / Press",
  "Other",
];

const trustBadges = [
  { icon: Shield, text: "Enterprise Security" },
  { icon: Clock, text: "24hr Response" },
  { icon: Zap, text: "Fast Deployment" },
];

const Inquiry = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phone: "",
    industry: "",
    companySize: "",
    challenges: "",
    requirements: "",
    budget: "",
    timeline: "",
    referralSource: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Our team will review your request and get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    setFormData({
      fullName: "",
      companyName: "",
      businessEmail: "",
      phone: "",
      industry: "",
      companySize: "",
      challenges: "",
      requirements: "",
      budget: "",
      timeline: "",
      referralSource: "",
    });
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";
  const selectClasses =
    "w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer";
  const labelClasses = "block text-sm font-medium text-foreground mb-2";

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="orb orb-cyan w-96 h-96 -top-48 -left-48" />
        <div className="orb orb-purple w-80 h-80 bottom-0 -right-40" />

        <div className="container-wide relative z-10 py-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6"
          >
            Business Inquiry
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Let's Build Something{" "}
            <span className="neon-text">Extraordinary</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Tell us about your business and challenges. We'll craft a tailored solution that drives real results.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <GlassCard className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" />
                      Contact Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className={labelClasses}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="companyName" className={labelClasses}>
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Acme Corporation"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="businessEmail" className={labelClasses}>
                          Business Email *
                        </label>
                        <input
                          type="email"
                          id="businessEmail"
                          name="businessEmail"
                          required
                          value={formData.businessEmail}
                          onChange={handleChange}
                          placeholder="john@acme.com"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClasses}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className={inputClasses}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Details */}
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      Company Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="industry" className={labelClasses}>
                          Industry *
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          required
                          value={formData.industry}
                          onChange={handleChange}
                          className={selectClasses}
                        >
                          <option value="">Select your industry</option>
                          {industries.map((ind) => (
                            <option key={ind} value={ind}>
                              {ind}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="companySize" className={labelClasses}>
                          Company Size *
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleChange}
                          className={selectClasses}
                        >
                          <option value="">Select company size</option>
                          {companySizes.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Project Details
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="challenges" className={labelClasses}>
                          Current Business Challenges *
                        </label>
                        <textarea
                          id="challenges"
                          name="challenges"
                          required
                          rows={4}
                          value={formData.challenges}
                          onChange={handleChange}
                          placeholder="Describe the main challenges you're facing..."
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="requirements" className={labelClasses}>
                          AI / Software Requirements *
                        </label>
                        <textarea
                          id="requirements"
                          name="requirements"
                          required
                          rows={4}
                          value={formData.requirements}
                          onChange={handleChange}
                          placeholder="What solutions are you looking for?"
                          className={inputClasses}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="budget" className={labelClasses}>
                            Budget Range *
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            required
                            value={formData.budget}
                            onChange={handleChange}
                            className={selectClasses}
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>
                                {range}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="timeline" className={labelClasses}>
                            Project Timeline *
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            required
                            value={formData.timeline}
                            onChange={handleChange}
                            className={selectClasses}
                          >
                            <option value="">Select timeline</option>
                            {timelines.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                      <Radio className="w-5 h-5 text-primary" />
                      Additional Information
                    </h3>
                    <div>
                      <label htmlFor="referralSource" className={labelClasses}>
                        How did you hear about Crosiz?
                      </label>
                      <select
                        id="referralSource"
                        name="referralSource"
                        value={formData.referralSource}
                        onChange={handleChange}
                        className={selectClasses}
                      >
                        <option value="">Select an option</option>
                        {referralSources.map((source) => (
                          <option key={source} value={source}>
                            {source}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="glow-button w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Inquiry
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              </GlassCard>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* What happens next */}
              <GlassCard className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  What Happens Next?
                </h3>
                <ol className="space-y-4">
                  {[
                    "Our team reviews your inquiry",
                    "We schedule a discovery call",
                    "We present a tailored solution proposal",
                    "Begin your transformation journey",
                  ].map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </GlassCard>

              {/* Trust badges */}
              <GlassCard className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Why Trust Crosiz?
                </h3>
                <div className="space-y-4">
                  {trustBadges.map((badge) => (
                    <div key={badge.text} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <badge.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground text-sm font-medium">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Response time */}
              <GlassCard className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="font-display font-semibold text-foreground">
                    We respond within 24 hours
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Your inquiry is important to us. Our team will carefully review your 
                  submission and reach out promptly.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Inquiry;
