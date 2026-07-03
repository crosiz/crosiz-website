# Crosiz — Mega Navigation Spec
> Devsinc-inspired. Hover reveals full-width panel with columns.

---

## Nav Structure
Logo (left)          Services   Work   Company   Resources          Let's Talk (CTA right)
↓
[MEGA MENU PANEL]

---

## Nav Items & Mega Menu Content

### 1. Services (hover → mega menu)
Left column — What We Build:
Web Applications        → /services/web-development
AI & Automation         → /services/ai-automation
Backend Systems         → /services/backend-development
System Design           → /services/system-design
DevOps & Infrastructure → /services/devops
Right column — Specialized:
Mobile Apps             → /services/mobile-app-development
API Development         → /services/api-development
MVP Development         → /services/mvp-development
CRM Development         → /services/crm-development
WebSocket Systems       → /services/websocket-development
Bottom — Featured Callout card:
"Not sure what you need?"
"Book a free 30-min discovery call → "

### 2. Work (hover → mega menu)
Left — Recent Projects (3 cards with image thumbnail + title + tag):
Lead Gen Automation   | Real Estate | n8n
SaaS Platform         | Fintech     | Next.js + Node
AI Dashboard          | Healthcare  | Python + React
Right — By Industry:
Real Estate
Fintech
Healthcare
E-commerce
SaaS
Enterprise
Bottom callout:
"See all 12 case studies →"

### 3. Company (hover → mega menu)
Left:
About Crosiz          → /about
Our Process           → /about#process
Technologies          → /technologies
Careers               → /careers
Right:
Blog                  → /blog
Resources             → /resources
Industries            → /industries
Bottom callout card:
"We're hiring — Frontend, Backend, AI Engineers →"

### 4. Resources (simple dropdown, not mega)
Blog Articles         → /blog
Free Templates        → /resources
Guides & Checklists   → /resources#guides

---

## Mega Menu Component Prompt for Antigravity/Claude Code
Build a Navbar with Mega Menu for Crosiz (Next.js 14, Tailwind, Framer Motion):
Navigation items: Services, Work, Company, Resources + "Let's Talk" CTA button.
Behavior:

Desktop: hover on Services/Work/Company → full-width panel drops down below nav
Panel: backdrop blur dark (#0d0d0d at 95% opacity) + border-bottom 1px #1c1c1c
Panel has 2-3 columns of links with small descriptions + a featured callout card on the right
Mobile: hamburger → slide-in from right full-screen overlay with accordion sections
Sticky on scroll: nav bg transitions transparent → rgba(8,8,8,0.9) + blur(16px)
Active page: nav link gets accent color underline
"Let's Talk": outlined button, accent border, fills on hover left-to-right

Services mega menu columns:
Left col title "WHAT WE BUILD":

Web Applications
AI & Automation
Backend Systems
System Design
DevOps & Infrastructure
Right col title "SPECIALIZED":
Mobile Apps
API Development
MVP Development
CRM Development
WebSocket Systems
Far right: dark callout card "Not sure where to start? Book a free discovery call →"

Work mega menu:
Left: 3 mini project cards (image + name + 2 tags)
Right col: Industries list (Real Estate, Fintech, Healthcare, E-commerce, SaaS)
Bottom: "View all case studies →"
Company mega menu:
Left: About, Our Process, Technologies, Careers
Right: Blog, Resources, Industries
Callout: "We're growing — see open roles →"
Animations:

Panel enters: opacity 0→1 + translateY(-8px→0) in 250ms
Links stagger in with 30ms delay each
Panel exits: fast 150ms
Mobile menu: slides in from right 350ms

Font: Syne for headings, DM Sans for links
Colors: bg #080808, accent #00E5FF, text #F0F0F0, muted #888888
Mark all links with next/link.
Close mega menu on: outside click, escape key, route change.

---

## Mobile Menu Spec
Full screen overlay: bg #080808
X button top right
Logo top left
Sections as accordions:
Services ▼
[list of service links]
Work ▼
[case study links]
Company ▼
[about, careers, etc]
Resources ▼
Bottom:
"Let's Talk" big accent button full width
Email: hello@crosiz.com
LinkedIn | GitHub | Twitter

