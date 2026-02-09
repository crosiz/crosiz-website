// components/SEO.tsx
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export const SEO = ({ title, description, url, image }: SEOProps) => (
  
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {url && <link rel="canonical" href={url} />}
    <meta name="robots" content="index, follow" />

    {/* OpenGraph */}
    {url && <meta property="og:url" content={url} />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {image && <meta property="og:image" content={image} />}
    <meta property="og:type" content="website" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && <meta name="twitter:image" content={image} />}
  </Helmet>
);
