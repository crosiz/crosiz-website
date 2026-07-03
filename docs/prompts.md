# Crosiz — Claude Code / Antigravity Prompts

## Context block — paste at top of EVERY session
Project: Crosiz website — AI & Software Development Agency
Stack: Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, Supabase, Prisma
Design: Dark bg #080808, accent #00E5FF, fonts: Syne (display) + DM Sans (body) + JetBrains Mono (code/labels)
Style: Editorial dark agency. NOT AI-looking. Results-focused copy. Bigfolio + Devsinc inspired.
Rules:

Use next/link for links, next/image for images
No HTML <form> elements — use controlled React state
All animations use Framer Motion
Lazy load with dynamic() anything below the fold
Every section has a label (JetBrains Mono, uppercase, accent color) above the heading
Tailwind only — no inline styles except CSS variables


---

## Prompt 1 — Mega Nav
Build the Navbar component for Crosiz.
See MEGAMENU.md for full spec.
The nav has: Logo | Services (mega) | Work (mega) | Company (mega) | Resources (dropdown) | Let's Talk button
Desktop: hover triggers full-width panel below nav
Mobile: hamburger → full screen overlay
Use Framer Motion for all animations.
Close on: outside click, Escape key, route change (usePathname).

---

## Prompt 2 — Full Homepage
Build app/page.tsx for Crosiz.
Import sections in this order (all lazy loaded with dynamic() except Hero):

Hero — headline "We Build Software That Grows Businesses." + animated dashboard mockup right side
LogoTicker — tech stack marquee
StatBar — 4 honest stats
CaseStudiesPreview — 3 project cards from Supabase (fetch published, limit 3)
ServicesGrid — 10 services with result statements
ProcessTimeline — 7 steps animated vertical timeline
WhyCrosiz — 5 differentiators
TechStackGrid — grouped by category
BlogPreview — 3 latest posts from Supabase
CTABanner — "Ready to Build?" section

Data fetching: use Next.js server components for case studies + blog (fetch from Supabase server-side).
Add metadata export with title and description from SEO.md

---

## Prompt 3 — Admin Dashboard
Build the complete admin dashboard for Crosiz at /admin.
Full spec in DASHBOARD.md.
Auth: Supabase. Middleware in middleware.ts protects all /admin routes.
Build: layout with sidebar, overview page, projects CRUD, blog CRUD, jobs CRUD.
Design: very dark, minimal, no gradients. Just functional.
Forms: controlled React state, no <form> tags.

---

## Prompt 4 — Services Page + Individual Service Pages
Build app/services/page.tsx (overview of all 10 services).
Then build a dynamic template at app/services/[slug]/page.tsx.
Generate static params for all 10 slugs (generateStaticParams).
Each service page has: Hero, Problem section, What We Build, Process, Tech Stack, CTA.
Add metadata per service using the title/description from SEO.md.
Add BreadcrumbList JSON-LD schema.
Use Framer Motion scroll animations.

---

## Prompt 5 — Blog System
Build the blog system for Crosiz.
/blog page: grid of post cards, fetch from Supabase (published only), sorted by date.
/blog/[slug]: full post page with:

Reading progress bar (top, accent color, fixed)
Table of contents sidebar (desktop, sticky)
MDX rendered content with syntax highlighting (use next-mdx-remote)
Author block (Crosiz team)
Related posts (same tags, limit 2)
CTA to book a call
BlogPosting JSON-LD schema
Metadata: dynamic from Supabase post data.


---

## Prompt 6 — Contact Page + API Route
Build app/contact/page.tsx for Crosiz.
Left side: contact info (email, WhatsApp, Calendly link, LinkedIn, office hours, response time)
Right side: contact form (name, email, company optional, service dropdown — all 10 services, budget dropdown optional, message)
Form state: controlled React, no HTML form tag.
On submit: POST to /api/contact
Build /api/contact/route.ts:

Validate fields
Save to Supabase via Prisma (ContactSubmission model)
Fire N8N_WEBHOOK_URL (non-blocking fetch, ignore errors)
Return { success: true }
Show success message after submit. Show error if it fails.