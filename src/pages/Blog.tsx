import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { SEO } from "@/components/ui/SEO";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: 2024 Trends",
    excerpt: "Explore the emerging AI trends that will reshape how enterprises operate and compete in the coming year.",
    category: "AI Trends",
    author: "Alex Rivera",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Scaling Your Startup with Intelligent Automation",
    excerpt: "Learn how to leverage automation to 10x your team's productivity without increasing headcount.",
    category: "Automation",
    author: "Sarah Chen",
    date: "Jan 10, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Building AI-Ready Data Infrastructure",
    excerpt: "A comprehensive guide to preparing your data infrastructure for AI implementation.",
    category: "Data Strategy",
    author: "Marcus Johnson",
    date: "Jan 5, 2024",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 4,
    title: "ROI of Custom Software vs. Off-the-Shelf Solutions",
    excerpt: "Breaking down the true cost and value of building custom software for your business.",
    category: "Strategy",
    author: "Elena Petrov",
    date: "Dec 28, 2023",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Machine Learning in Production: Best Practices",
    excerpt: "Essential practices for deploying and maintaining ML models in production environments.",
    category: "Engineering",
    author: "Alex Rivera",
    date: "Dec 20, 2023",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: 6,
    title: "The Rise of AI Agents in Business Operations",
    excerpt: "How autonomous AI agents are transforming business processes and decision-making.",
    category: "AI Trends",
    author: "Sarah Chen",
    date: "Dec 15, 2023",
    readTime: "9 min read",
    featured: false,
  },
];

const categories = ["All", "AI Trends", "Automation", "Data Strategy", "Strategy", "Engineering"];

const Blog = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <Layout>
      {/* SEO Metadata */}
      <SEO
        title="Crosiz Blog | AI, Automation & Digital Transformation Insights"
        description="Expert insights on AI, intelligent automation, data strategy, and scalable software systems from the Crosiz team."
        url="https://crosiz.com/blog"
        image="https://crosiz.com/assets/logo.png"
      />
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
            Insights & Articles
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Crosiz{" "}
            <span className="neon-text">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            Thought leadership on AI, automation, and digital transformation from our expert team.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border bg-card">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-card">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 md:p-12 relative overflow-hidden">
                <div className="orb orb-cyan w-64 h-64 -top-32 -right-32 opacity-20" />
                
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground mb-4">
                    Featured
                  </span>
                  <span className="ml-3 px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                    {featuredPost.category}
                  </span>
                  
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 max-w-3xl">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <button className="glow-button inline-flex items-center gap-2">
                    Read Article
                    <ArrowRight size={18} />
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        
        <div className="container-wide relative z-10">
          <SectionHeading
            eyebrow="Latest Articles"
            title="Stay Ahead of the Curve"
            description="Insights and strategies from our team of experts."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <GlassCard key={post.id} delay={index * 0.1}>
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground mb-4">
                  {post.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <button className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
                  Read More <ArrowRight size={14} />
                </button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center relative overflow-hidden max-w-3xl mx-auto"
          >
            <div className="orb orb-purple w-48 h-48 -top-24 -left-24 opacity-30" />
            <div className="orb orb-cyan w-48 h-48 -bottom-24 -right-24 opacity-30" />
            
            <h2 className="font-display text-3xl font-bold text-foreground mb-4 relative z-10">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8 relative z-10">
              Get the latest insights on AI and digital transformation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="glow-button whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
