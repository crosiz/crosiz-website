# Crosiz — SEO Strategy
> Goal: look like Devsinc on Google — sitelinks, rich results, authority.

---

## Why Devsinc Has Sitelinks and You Don't (Yet)

1. They have 5+ distinct, properly linked internal pages
2. Each page has unique title + meta description
3. JSON-LD schema is present
4. Domain has age + backlinks
5. Google Search Console is set up + pages requested for indexing

You fix 1–4 immediately. #5 takes time.

---

## Metadata Per Page

```ts
// lib/seo.ts — helper
export function meta(title: string, description: string, path: string) {
  return {
    title,
    description,
    alternates: { canonical: `https://crosiz.com${path}` },
    openGraph: {
      title, description,
      url: `https://crosiz.com${path}`,
      siteName: 'Crosiz',
      type: 'website',
      images: [{ url: `https://crosiz.com/og${path}.png` }],
    },
    twitter: {
      card: 'summary_large_image',
      title, description,
    },
  }
}
```

| Page | Title | Description |
|---|---|---|
| / | Crosiz — AI Systems & Software Development Agency | We build intelligent software, automate operations, and ship digital products that help businesses scale. |
| /about | About Crosiz — Our Story, Team & Mission | Crosiz is a software and AI agency built by engineers who care about quality, performance, and long-term partnerships. |
| /services | Software Development Services — Crosiz | From web apps to AI automation — explore every service Crosiz offers for startups and growing businesses. |
| /services/ai-automation | AI & Automation Services — Crosiz | We build intelligent automation systems that reduce manual work by up to 80%. n8n, OpenAI, and custom AI pipelines. |
| /services/web-development | Web Application Development — Crosiz | Custom web applications built with Next.js, React, and Node.js. Fast, scalable, and production-ready. |
| /work | Case Studies — Crosiz Work | See how Crosiz has helped businesses automate workflows, build platforms, and scale with intelligent software. |
| /blog | Blog — Software, AI & Automation Insights | Articles on AI automation, system design, Next.js, Node.js, APIs, and building scalable software. |
| /careers | Careers at Crosiz | We're building a world-class engineering team. See open roles at Crosiz — remote-friendly positions. |
| /contact | Contact Crosiz — Let's Build Together | Ready to start a project? Book a free discovery call or reach us at hello@crosiz.com. |
| /technologies | Technologies We Use — Crosiz | Every tool, framework, and platform in the Crosiz stack — from React to Kubernetes to LangChain. |

---

## JSON-LD Schemas

### Organization (homepage root layout)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Crosiz",
  "url": "https://crosiz.com",
  "logo": "https://crosiz.com/logo.png",
  "description": "AI-driven software agency helping businesses build intelligent systems and scale faster.",
  "email": "hello@crosiz.com",
  "sameAs": [
    "https://linkedin.com/company/crosiz",
    "https://github.com/crosiz",
    "https://twitter.com/crosiz"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PK"
  }
}
```

### Service (each /services/[slug] page)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI & Automation Development",
  "provider": { "@type": "Organization", "name": "Crosiz" },
  "description": "We build intelligent automation systems using n8n, OpenAI, and custom pipelines.",
  "url": "https://crosiz.com/services/ai-automation"
}
```

### BlogPosting (each /blog/[slug])
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Build AI Agents with n8n",
  "author": { "@type": "Organization", "name": "Crosiz" },
  "publisher": { "@type": "Organization", "name": "Crosiz" },
  "datePublished": "2024-01-15",
  "description": "...",
  "url": "https://crosiz.com/blog/..."
}
```

### BreadcrumbList (inner pages)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://crosiz.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://crosiz.com/services" },
    { "@type": "ListItem", "position": 3, "name": "AI Automation", "item": "https://crosiz.com/services/ai-automation" }
  ]
}
```

---

## robots.txt
User-agent: *
Allow: /
Disallow: /admin
Sitemap: https://crosiz.com/sitemap.xml

## Dynamic sitemap (app/sitemap.ts)
```ts
import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await prisma.project.findMany({ where: { published: true } })
  const posts    = await prisma.blogPost.findMany({ where: { published: true } })

  const staticPages = [
    '/', '/about', '/services', '/work', '/blog',
    '/careers', '/contact', '/technologies', '/resources', '/industries',
    '/services/web-development', '/services/ai-automation',
    '/services/backend-development', '/services/system-design',
    '/services/devops', '/services/mobile-app-development',
    '/services/api-development', '/services/mvp-development',
    '/services/crm-development', '/services/websocket-development',
  ].map(url => ({
    url: `https://crosiz.com${url}`,
    lastModified: new Date(),
    priority: url === '/' ? 1 : 0.8,
  }))

  const projectPages = projects.map(p => ({
    url: `https://crosiz.com/work/${p.slug}`,
    lastModified: p.updatedAt,
    priority: 0.7,
  }))

  const blogPages = posts.map(p => ({
    url: `https://crosiz.com/blog/${p.slug}`,
    lastModified: p.updatedAt,
    priority: 0.7,
  }))

  return [...staticPages, ...projectPages, ...blogPages]
}
```

---

## Blog SEO Topics (write these first)

These will rank and bring clients:
1. "n8n vs Zapier — Which is Better for Business Automation?"
2. "How to Build an AI Agent with OpenAI and Node.js"
3. "Next.js 14 Performance Tips That Actually Work"
4. "Why Your Startup Needs a Custom CRM (And How to Build One)"
5. "FastAPI vs Node.js — Which Backend Should You Choose?"
6. "How to Automate Lead Generation with n8n"
7. "WebSocket vs REST — When to Use Real-time"
8. "MVP Development Checklist — 0 to Launched in 8 Weeks"
9. "System Design for Startups — Start Right, Scale Later"
10. "AI Automation for Real Estate — Cut Manual Work by 80%"

---

## After Launch Checklist

- [ ] Add site to Google Search Console
- [ ] Submit sitemap: https://crosiz.com/sitemap.xml
- [ ] Request indexing for: / , /about, /services, /work, /contact, /careers
- [ ] Add site to Bing Webmaster Tools
- [ ] Set up Vercel Analytics
- [ ] Link LinkedIn company page to website
- [ ] Add website to GitHub profile
- [ ] Create first blog post and index it
- [ ] Get 3–5 backlinks (submit to directories, post on LinkedIn)