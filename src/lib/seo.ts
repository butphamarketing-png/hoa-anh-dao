import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  image,
  path = "",
  noIndex = false,
}: SeoProps): Metadata {
  const pageTitle = title
    ? `${title} | ${SITE_CONFIG.shortName}`
    : SITE_CONFIG.name;
  const pageDescription = description ?? SITE_CONFIG.description;
  const pageUrl = `${SITE_CONFIG.url}${path}`;
  const pageImage = image ?? `${SITE_CONFIG.url}/logo.png`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: { canonical: pageUrl },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: SITE_CONFIG.name,
      images: [{ url: pageImage, width: 1200, height: 630, alt: pageTitle }],
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Preschool",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.ward,
      addressRegion: SITE_CONFIG.address.district,
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.coordinates.lat,
      longitude: SITE_CONFIG.coordinates.lng,
    },
    sameAs: [SITE_CONFIG.social.facebook],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

export function generateArticleSchema(post: {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: SITE_CONFIG.name },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: { "@type": "ImageObject", url: `${SITE_CONFIG.url}/logo.png` },
    },
    mainEntityOfPage: `${SITE_CONFIG.url}/tin-tuc/${post.slug}`,
  };
}
