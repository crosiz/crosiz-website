import React from 'react';

export function JsonLd({ schema }: { schema: Record<string, any> | Record<string, any>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.item
  }))
});

export const generateServiceSchema = (
  name: string,
  description: string,
  url: string,
  providerName: string = "Crosiz"
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": providerName
  },
  "url": url
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateArticleSchema = (
  headline: string,
  description: string,
  image: string[],
  authorName: string,
  authorUrl: string,
  datePublished: string,
  dateModified: string
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": headline,
  "description": description,
  "image": image,
  "author": {
    "@type": "Person",
    "name": authorName,
    "url": authorUrl
  },
  "publisher": {
    "@type": "Organization",
    "name": "Crosiz",
    "logo": {
      "@type": "ImageObject",
      "url": "https://crosiz.com/crosiz-logo.png"
    }
  },
  "datePublished": datePublished,
  "dateModified": dateModified
});
