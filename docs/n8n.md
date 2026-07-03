md# Crosiz — n8n Integration Plan (Future)

---

## Self-Host n8n on Crosiz Infrastructure

Subdomain: n8n.crosiz.com
Host: Railway / Render / VPS (DigitalOcean $6/mo)

---

## Contact Form Workflow (Phase 1)
Contact form submitted on crosiz.com
↓
POST /api/contact (Next.js route)
↓
Save to Supabase (ContactSubmission table)
↓
POST to n8n webhook: N8N_WEBHOOK_URL
↓
n8n workflow:

Parse body (name, email, company, service, message, budget)
Classify priority (AI node — budget + service type)
Create Notion page "New Lead: [name] — [service]"
Add row to Airtable CRM base
Send Slack notification to #leads channel
Send thank-you email to client (Gmail/Resend)
Schedule follow-up reminder (3 days later)
Mark n8nSent = true in Supabase


---

## API Route Ready for n8n (build this now, connect later)

```ts
// app/api/contact/route.ts
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, company, service, message, budget } = body

  // Validate
  if (!name || !email || !service || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  // Save to DB
  const submission = await prisma.contactSubmission.create({
    data: { name, email, company, service, message, budget }
  })

  // Fire n8n webhook (non-blocking — don't await)
  if (process.env.N8N_WEBHOOK_URL) {
    fetch(process.env.N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...body, submissionId: submission.id }),
    }).catch(console.error)
  }

  return NextResponse.json({ success: true })
}
```

---

## Future Workflows to Build

| Workflow | Trigger | Actions |
|---|---|---|
| Contact Lead | Form submit | Notion + Airtable + Slack + Email |
| New Blog Published | Admin publishes | Tweet draft + LinkedIn post draft |
| Job Application | Careers form | Email to hello@ + Notion page |
| Discovery Call Booked | Calendly webhook | Notion prep doc + Slack |
| Invoice Follow-up | Cron daily | Check unpaid → email reminder |
| Weekly Report | Cron Monday 9am | GSC data + Vercel analytics → Slack |