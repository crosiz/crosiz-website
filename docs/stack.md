md# Crosiz — Full Stack & Architecture

---

## Core Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 App Router | SSR/SSG, metadata API, image opt |
| Language | TypeScript | Safety, DX |
| Styling | Tailwind CSS v3 | Fast, Bigfolio-style utility |
| Animations | Framer Motion | Scroll triggers, mega menu, page transitions |
| Database | Supabase (PostgreSQL) | Auth + DB + Storage in one — free tier generous |
| ORM | Prisma | Type-safe queries |
| Auth | Supabase Auth | Simple email/password for admin |
| CMS | Self-built dashboard | Next.js API routes + Supabase |
| Deployment | Vercel | Edge CDN, preview deploys, analytics |
| Future | n8n (self-hosted) | Contact form → Slack/Airtable/Notion/Email |

---

## Performance Strategy (Nothing Loads Until Needed)

```tsx
// Dynamic imports for heavy sections
const CaseStudies = dynamic(() => import('@/components/sections/CaseStudies'), {
  loading: () => ,
  ssr: false,   // client-only heavy animations
})

const TechStack = dynamic(() => import('@/components/sections/TechStack'))
const Pricing   = dynamic(() => import('@/components/sections/Pricing'))

// Images — always lazy by default with next/image
// Only add priority={true} to hero image (LCP)

// Fonts — self-hosted via next/font, no layout shift
```

### What to lazy load
- Case studies grid (images)
- Tech stack section
- Testimonials (if video)
- Pricing cards
- Blog preview section
- Dashboard components (completely code-split)

### What to NOT lazy load
- Navbar
- Hero section
- Footer
- Any above-the-fold content

---

## Folder Structure
crosiz-website/
├── app/
│   ├── layout.tsx                 ← root layout, metadata, fonts
│   ├── page.tsx                   ← homepage /
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx               ← /services overview
│   │   ├── web-development/page.tsx
│   │   ├── ai-automation/page.tsx
│   │   ├── backend-development/page.tsx
│   │   ├── system-design/page.tsx
│   │   ├── devops/page.tsx
│   │   ├── mobile-app-development/page.tsx
│   │   ├── api-development/page.tsx
│   │   ├── mvp-development/page.tsx
│   │   └── crm-development/page.tsx
│   ├── work/
│   │   ├── page.tsx               ← /work all case studies
│   │   └── [slug]/page.tsx        ← /work/lead-gen-automation
│   ├── industries/page.tsx
│   ├── technologies/page.tsx
│   ├── blog/
│   │   ├── page.tsx               ← /blog list
│   │   └── [slug]/page.tsx        ← /blog/how-to-build-ai-agents
│   ├── resources/page.tsx
│   ├── careers/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   │
│   ├── admin/                     ← DASHBOARD (protected)
│   │   ├── layout.tsx             ← auth guard
│   │   ├── page.tsx               ← dashboard overview
│   │   ├── jobs/
│   │   │   ├── page.tsx           ← list jobs
│   │   │   ├── new/page.tsx       ← create job
│   │   │   └── [id]/page.tsx      ← edit job
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   ├── new/page.tsx
│   │   │   └── [id]/page.tsx
│   │   └── blog/
│   │       ├── page.tsx
│   │       ├── new/page.tsx
│   │       └── [id]/page.tsx
│   │
│   └── api/
│       ├── contact/route.ts        ← contact form → n8n webhook
│       ├── admin/
│       │   ├── jobs/route.ts
│       │   ├── projects/route.ts
│       │   └── blog/route.ts
│       └── revalidate/route.ts     ← ISR revalidation
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              ← with mega menu
│   │   ├── MegaMenu.tsx
│   │   └── Footer.tsx
│   ├── sections/                   ← homepage sections
│   ├── ui/                         ← Button, Tag, Card, etc.
│   ├── admin/                      ← dashboard UI components
│   └── seo/                        ← JsonLd, Breadcrumb, etc.
│
├── lib/
│   ├── supabase.ts
│   ├── prisma.ts
│   ├── seo.ts
│   └── utils.ts
│
├── prisma/
│   └── schema.prisma
│
└── public/
├── robots.txt
├── sitemap.xml
└── og/                         ← OG images per page

---

## Prisma Schema (Supabase PostgreSQL)

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Project {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  industry    String
  problem     String   @db.Text
  solution    String   @db.Text
  architecture String  @db.Text
  outcome     String   @db.Text
  techStack   String[] // ["Next.js", "Node.js", "n8n"]
  tags        String[]
  stats       Json     // [{ label: "Faster Response", value: "85%" }]
  coverImage  String
  images      String[]
  timeline    String
  featured    Boolean  @default(false)
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model BlogPost {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  excerpt     String
  content     String   @db.Text  // MDX or HTML
  coverImage  String
  tags        String[]
  published   Boolean  @default(false)
  readTime    Int      // minutes
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Job {
  id          String   @id @default(cuid())
  title       String
  department  String   // Frontend, Backend, AI, DevOps
  type        String   // Full-time, Contract, Remote
  location    String
  description String   @db.Text
  requirements String[] 
  open        Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model ContactSubmission {
  id          String   @id @default(cuid())
  name        String
  email       String
  company     String?
  service     String
  message     String   @db.Text
  budget      String?
  n8nSent     Boolean  @default(false)
  createdAt   DateTime @default(now())
}
```

---

## Installation Commands

```bash
npx create-next-app@latest crosiz-website \
  --typescript --tailwind --eslint --app \
  --import-alias "@/*"

cd crosiz-website

npm install framer-motion lucide-react clsx \
  tailwind-merge @prisma/client prisma \
  @supabase/supabase-js @supabase/ssr \
  next-mdx-remote gray-matter

npx prisma init
```

---

## Environment Variables (.env.local)

```bash
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_SUPABASE_URL="https://xxx.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
SUPABASE_SERVICE_ROLE_KEY="..."
N8N_WEBHOOK_URL="https://your-n8n.crosiz.com/webhook/contact"
ADMIN_SECRET="your-revalidation-secret"
NEXT_PUBLIC_SITE_URL="https://crosiz.com"
```