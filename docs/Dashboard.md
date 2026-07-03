md# Crosiz — Admin Dashboard Spec
> Simple. Fast. You log in, do the thing, log out.

---

## Auth

Supabase Auth (email + password). One admin account.
Protected via middleware — if not logged in → redirect /admin/login.

```ts
// middleware.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // check supabase session
    // if no session → redirect to /admin/login
  }
}
```

---

## Dashboard Pages

### /admin (overview)
Stats cards:
Total Projects: 12 | Published: 8 | Drafts: 4
Total Blog Posts: 20 | Published: 15 | Drafts: 5
Open Jobs: 3
Contact Submissions: 47 (last 30 days)
Recent activity list
Quick action buttons: + New Project | + New Post | + New Job

---

### /admin/projects
List: Table view
Columns: Cover | Title | Industry | Status (published/draft) | Date | Edit | Delete
[ + Add Project ] button → /admin/projects/new
Form fields:
Title *
Slug * (auto-generated from title, editable)
Industry * (dropdown)
Cover Image * (upload to Supabase Storage)
Tags (comma-separated or tag input)
Tech Stack (tag input)
Problem * (textarea)
Solution * (textarea)
Architecture Notes (textarea)
Outcome * (textarea)
Stats (repeater: label + value, add/remove)
Timeline *
Additional Images (multi-upload)
Featured toggle
Published toggle
[Save Draft]  [Publish]

---

### /admin/blog
List: Table view
Columns: Title | Tags | Status | Date | Read time | Edit | Delete
[ + New Post ] → /admin/blog/new
Form fields:
Title *
Slug * (auto from title)
Excerpt * (max 160 chars — shown in Google)
Cover Image *
Tags (tag input)
Content * (MDX/Markdown editor — use simple textarea or CodeMirror)
Read Time (auto-calculated or manual)
Published toggle
[Save Draft]  [Publish]

---

### /admin/jobs
List: Table view
Columns: Title | Department | Type | Status (open/closed) | Date | Edit | Delete
[ + New Job ] → /admin/jobs/new
Form fields:
Title * (e.g. "Senior Backend Engineer")
Department * (dropdown: Frontend, Backend, AI/ML, DevOps, Automation, Design, PM)
Type * (dropdown: Full-time, Part-time, Contract, Remote)
Location * (e.g. "Remote — Pakistan/Global")
Description * (textarea — what they'll do)
Requirements (repeater: text input rows, add/remove)
Open toggle (open = shows on careers page)
[Save]  [Close Role]

---

## Dashboard Prompt for Claude Code
Build an admin dashboard for Crosiz (Next.js 14 App Router + TypeScript + Tailwind + Supabase):
Auth: Supabase email/password. Middleware protects /admin/* routes.
Login page at /admin/login with email + password form.
Dashboard layout:
Left sidebar: Logo, nav links (Overview, Projects, Blog, Jobs), Logout
Right: main content area
Design: very dark (#080808 bg), sidebar #0d0d0d, clean minimal — no gradients
Pages to build:

/admin (overview)

Stats cards: total projects, published posts, open jobs, contact submissions
Quick actions: + New Project, + New Post, + New Job


/admin/projects/new and /admin/projects/[id]
Fields: title, slug (auto), industry, coverImage (file upload), tags, techStack,
problem, solution, architecture, outcome, stats (repeater with label+value),
timeline, featured toggle, published toggle
Actions: Save Draft, Publish, Delete
/admin/blog/new and /admin/blog/[id]
Fields: title, slug (auto), excerpt (max 160 chars), coverImage, tags,
content (markdown textarea with preview toggle), readTime, published toggle
Actions: Save Draft, Publish, Delete
/admin/jobs/new and /admin/jobs/[id]
Fields: title, department (dropdown), type (dropdown), location,
description, requirements (repeater), open toggle
Actions: Save, Close Role, Delete

All forms use React controlled state (no HTML form element).
On save: POST to /api/admin/[resource] → Prisma → Supabase.
Show success/error toast on submit.
Redirect to list page after create.
Images upload to Supabase Storage, return public URL stored in DB.

