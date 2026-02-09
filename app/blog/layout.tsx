import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | SitesBanao - Tips & Insights for Indian Businesses",
  description:
    "Learn how to grow your business online. Tips on websites, digital marketing, and success stories from Indian businesses. By SitesBanao.",
  keywords:
    "business website tips, website cost India, restaurant website, digital marketing India, small business online, sitesbanao blog",
  alternates: { canonical: "https://sitesbanao.com/blog" },
  openGraph: {
    title: "Blog | SitesBanao - Tips for Indian Businesses",
    description: "Learn how to grow your business online with SitesBanao.",
    url: "https://sitesbanao.com/blog",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "SitesBanao Blog",
  description: "Tips and insights for Indian small businesses going online",
  url: "https://sitesbanao.com/blog",
  publisher: {
    "@type": "Organization",
    name: "SitesBanao",
    url: "https://sitesbanao.com",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
