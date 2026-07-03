import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crosiz.com"),
  title: {
    default: "Crosiz | AI Systems & Software Development Agency",
    template: "%s | Crosiz",
  },
  description:
    "Crosiz builds intelligent software, AI automations, and digital products for startups and enterprises. From MVPs to full-scale platforms — shipped fast, built to last.",
  keywords: [
    "software development agency",
    "AI automation agency",
    "web application development",
    "custom software development",
    "Next.js development agency",
    "n8n automation",
    "SaaS development",
    "backend development",
    "API development",
    "MVP development",
    "software agency Pakistan",
    "software agency remote",
  ],
  authors: [{ name: "Crosiz Technologies", url: "https://crosiz.com" }],
  creator: "Crosiz",
  publisher: "Crosiz",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://crosiz.com" },
  openGraph: {
    title: "Crosiz — AI Systems & Software Development Agency",
    description:
      "We build intelligent software, automate operations, and ship digital products that help businesses scale. MVPs to enterprise platforms.",
    url: "https://crosiz.com",
    siteName: "Crosiz",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://crosiz.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Crosiz — AI Systems & Software Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@crosiz",
    creator: "@crosiz",
    title: "Crosiz — AI Systems & Software Development Agency",
    description:
      "We build intelligent software, automate operations, and ship digital products that help businesses scale.",
    images: ["https://crosiz.com/opengraph-image.png"],
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Crosiz",
  url: "https://crosiz.com",
  logo: "https://crosiz.com/crosiz-logo.png",
  description:
    "Crosiz is a software development and AI automation agency building intelligent systems, web applications, and digital products for startups and enterprises.",
  email: "hello@crosiz.com",
  areaServed: "Worldwide",
  serviceType: [
    "Web Application Development",
    "AI & Automation",
    "Backend Development",
    "Mobile App Development",
    "MVP Development",
    "SaaS Development",
  ],
  sameAs: [
    "https://www.linkedin.com/company/crosiz/",
    "https://twitter.com/crosiz",
    "https://github.com/crosiz",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Crosiz",
  url: "https://crosiz.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://crosiz.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    // No 'dark' class by default = light mode
    >
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--text-1)]">
        {/* Skip-to-content for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded focus:bg-[var(--accent)] focus:text-white focus:font-semibold focus:text-sm"
        >
          Skip to main content
        </a>
        <Navbar />
        <main className="flex-1 mt-20" id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
