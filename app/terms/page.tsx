import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions governing the use of Crosiz services.',
};

const LAST_UPDATED = 'July 3, 2025';

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the Crosiz website (crosiz.com) or engaging our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.

These terms apply to all visitors, clients, and others who access or use our services. "Services" refers to software development, AI automation, consulting, and any other services provided by Crosiz Technologies.`,
  },
  {
    title: '2. Services Description',
    content: `Crosiz provides custom software development, AI and automation solutions, web application development, backend systems, mobile applications, and related technical consulting services. The specific scope, timeline, and deliverables for any project are defined in a separate Statement of Work (SOW) or project agreement signed between Crosiz and the client.`,
  },
  {
    title: '3. Project Agreements',
    content: `All client engagements are governed by a separate project agreement or Statement of Work (SOW) which will include:

• Detailed scope of work and deliverables
• Project timeline and milestones
• Payment terms and schedule
• Intellectual property ownership
• Revision and change request process
• Acceptance criteria

In the event of a conflict between these Terms of Service and a signed project agreement, the project agreement shall take precedence.`,
  },
  {
    title: '4. Payment Terms',
    content: `Unless otherwise specified in a project agreement:

• Projects require a deposit before work commences (typically 30–50% of total project value)
• Remaining payments are milestone-based as defined in the project agreement
• Invoices are due within 14 days of issue
• Late payments may incur interest at 1.5% per month
• Crosiz reserves the right to pause work on accounts with outstanding invoices`,
  },
  {
    title: '5. Intellectual Property',
    content: `Upon receipt of full payment for a project, Crosiz assigns to the client all intellectual property rights in the custom deliverables created specifically for that project, excluding:

• Pre-existing code, libraries, frameworks, and tools owned by Crosiz or third parties
• Open-source components (governed by their respective licenses)
• Crosiz's proprietary development methodologies and internal tools

Crosiz retains the right to display completed work in its portfolio unless the client requests confidentiality in writing.`,
  },
  {
    title: '6. Confidentiality',
    content: `Crosiz treats all client information, project details, and business data as strictly confidential. We will not disclose confidential information to third parties without your written consent, except as required by law. Clients may request a separate Non-Disclosure Agreement (NDA) before sharing sensitive information.`,
  },
  {
    title: '7. Client Responsibilities',
    content: `To ensure project success, clients agree to:

• Provide timely feedback and approvals as required
• Designate a primary point of contact with decision-making authority
• Supply necessary access, credentials, and materials
• Review and approve deliverables within agreed timeframes
• Communicate changes to requirements promptly

Delays caused by client inaction may affect project timelines and could result in additional costs.`,
  },
  {
    title: '8. Revision and Change Requests',
    content: `Our project agreements include a defined number of revision rounds. Changes to the project scope, requirements, or deliverables beyond the agreed scope will be handled through a change request process, which may result in additional time and cost. Crosiz will provide written estimates for any out-of-scope work before proceeding.`,
  },
  {
    title: '9. Warranties and Disclaimers',
    content: `Crosiz warrants that services will be performed in a professional and workmanlike manner consistent with industry standards. We provide a bug-fix warranty period of 30 days after project delivery for defects in our deliverables (excluding issues caused by client modifications, third-party services, or changed requirements).

THE WEBSITE AND SERVICES ARE PROVIDED "AS IS" WITHOUT ANY OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.`,
  },
  {
    title: '10. Limitation of Liability',
    content: `To the maximum extent permitted by law, Crosiz's total liability for any claims arising from a project or engagement shall not exceed the total fees paid by the client for that specific project in the 12 months preceding the claim.

Crosiz shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities.`,
  },
  {
    title: '11. Termination',
    content: `Either party may terminate a project engagement with 14 days written notice. In the event of termination:

• The client is responsible for payment for all work completed up to the termination date
• Crosiz will deliver all completed work to the client upon receipt of final payment
• Any unused retainer amounts will be refunded on a pro-rata basis

Crosiz may immediately terminate an engagement if the client breaches these terms or fails to make required payments.`,
  },
  {
    title: '12. Governing Law',
    content: `These Terms of Service shall be governed by and construed in accordance with applicable law. Any disputes arising from these terms or our services shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration.`,
  },
  {
    title: '13. Changes to Terms',
    content: `We reserve the right to update these Terms of Service at any time. We will provide notice of significant changes by updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated terms. Existing project agreements are not affected by changes to these terms.`,
  },
  {
    title: '14. Contact',
    content: `For questions about these Terms of Service, please contact us at:

Crosiz Technologies
Email: legal@crosiz.com
General: hello@crosiz.com`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Header */}
      <div className="pt-32 pb-16 border-b border-[var(--border)] bg-[var(--bg-2)]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="text-h1 mb-4">Terms of Service</h1>
          <p className="text-[var(--text-2)] text-base">
            Last updated: <span className="text-[var(--text-1)] font-medium">{LAST_UPDATED}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-20">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16">

          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-2">
              <p className="text-xs-label text-[var(--text-3)] mb-4">Contents</p>
              {SECTIONS.map((s) => (
                <a
                  key={s.title}
                  href={`#${s.title.replace(/\s+/g, '-').toLowerCase()}`}
                  className="block text-sm text-[var(--text-2)] hover:text-[var(--accent)] transition-colors py-1"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </aside>

          {/* Body */}
          <article className="max-w-3xl">
            <p className="text-[var(--text-2)] mb-12 leading-relaxed text-base border-l-2 border-[var(--accent)] pl-4">
              Please read these Terms of Service carefully before engaging with Crosiz. By using our
              website or services, you agree to these terms. These terms are designed to be fair,
              transparent, and protect both parties.
            </p>

            {SECTIONS.map((section) => (
              <section
                key={section.title}
                id={section.title.replace(/\s+/g, '-').toLowerCase()}
                className="mb-12"
              >
                <h2 className="text-xl font-display font-semibold text-[var(--text-1)] mb-4 pb-3 border-b border-[var(--border)]">
                  {section.title}
                </h2>
                <div className="text-[var(--text-2)] leading-relaxed whitespace-pre-line text-sm">
                  {section.content}
                </div>
              </section>
            ))}

            <div className="mt-16 p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl">
              <p className="text-sm text-[var(--text-2)]">
                Have questions about our terms?{' '}
                <Link href="/contact" className="text-[var(--accent)] hover:underline font-medium">
                  Contact us
                </Link>{' '}
                or email{' '}
                <a href="mailto:legal@crosiz.com" className="text-[var(--accent)] hover:underline">
                  legal@crosiz.com
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
