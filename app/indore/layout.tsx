const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SitesBanao - Indore",
  description: "Professional website design and development for businesses in Indore. Starting ₹9,999.",
  url: "https://sitesbanao.com/indore",
  telephone: "+91-82099-04262",
  areaServed: { "@type": "City", name: "Indore", containedInPlace: { "@type": "State", name: "Madhya Pradesh" } },
  address: { "@type": "PostalAddress", addressLocality: "Indore", addressRegion: "Madhya Pradesh", addressCountry: "IN" },
  priceRange: "₹9,999 - ₹24,999",
};

export default function IndoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
