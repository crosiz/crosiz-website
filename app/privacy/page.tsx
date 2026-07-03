import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Crosiz collects, uses, and protects your personal data.',
};

const LAST_UPDATED = 'July 3, 2025';

const SECTIONS = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us, such as when you:
    
• Fill out our contact or inquiry form (name, email, company, project details)
• Subscribe to our newsletter (email address)
• Book a discovery call via our scheduling tool (name, email, calendar data)
• Communicate with us by email or other means

We may also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages visited. This is collected through standard server logs and analytics tools.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:

• Respond to your inquiries and project requests
• Schedule and conduct discovery calls
• Send you requested information about our services
• Send you our newsletter if you have subscribed (you may unsubscribe at any time)
• Improve our website and services
• Comply with legal obligations

We do not sell, trade, or rent your personal information to third parties. We do not use your data for automated decision-making or profiling.`,
  },
  {
    title: '3. Data Sharing',
    content: `We may share your information with trusted third-party service providers who assist us in operating our business, including:

• Email service providers (for newsletter delivery)
• Scheduling tools (e.g., Calendly, for booking management)
• Website analytics providers
• Cloud hosting providers

All third parties we work with are required to maintain the confidentiality and security of your data and may only use it for the specific purpose for which it was shared.`,
  },
  {
    title: '4. Data Retention',
    content: `We retain your personal information only as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. Contact form submissions are retained for 2 years. Newsletter subscription data is retained until you unsubscribe.`,
  },
  {
    title: '5. Your Rights',
    content: `Depending on your location, you may have the following rights regarding your personal data:

• The right to access the personal data we hold about you
• The right to request correction of inaccurate data
• The right to request deletion of your data
• The right to withdraw consent at any time
• The right to object to processing of your data
• The right to data portability

To exercise any of these rights, please contact us at privacy@crosiz.com. We will respond to all requests within 30 days.`,
  },
  {
    title: '6. Cookies',
    content: `Our website uses essential cookies that are necessary for the website to function properly. We do not use tracking cookies or advertising cookies. You can control cookie settings through your browser preferences. Disabling essential cookies may affect the functionality of our website.`,
  },
  {
    title: '7. Security',
    content: `We implement industry-standard security measures to protect your personal information, including HTTPS encryption, secure data storage, and access controls. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.`,
  },
  {
    title: '8. Third-Party Links',
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: '9. Children\'s Privacy',
    content: `Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will delete such information immediately.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated "Last Updated" date. Your continued use of our website after changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: '11. Contact Us',
    content: `If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:

Crosiz Technologies
Email: privacy@crosiz.com
General: hello@crosiz.com`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Header */}
      <div className="pt-32 pb-16 border-b border-[var(--border)] bg-[var(--bg-2)]">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="text-h1 mb-4">Privacy Policy</h1>
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
          <article className="prose-like max-w-3xl">
            <p className="text-[var(--text-2)] mb-12 leading-relaxed text-base border-l-2 border-[var(--accent)] pl-4">
              At Crosiz, we respect your privacy and are committed to protecting your personal data.
              This Privacy Policy explains how we collect, use, and safeguard the information you
              provide when you interact with our website and services.
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
                Have questions about how we handle your data?{' '}
                <Link href="/contact" className="text-[var(--accent)] hover:underline font-medium">
                  Contact us
                </Link>{' '}
                or email{' '}
                <a href="mailto:privacy@crosiz.com" className="text-[var(--accent)] hover:underline">
                  privacy@crosiz.com
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
