const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SitesBanao - Jaipur",
  description: "Professional website design and development for businesses in Jaipur. Starting ₹9,999.",
  url: "https://sitesbanao.com/jaipur",
  telephone: "+91-82099-04262",
  areaServed: { "@type": "City", name: "Jaipur", containedInPlace: { "@type": "State", name: "Rajasthan" } },
  address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressRegion: "Rajasthan", addressCountry: "IN" },
  priceRange: "₹9,999 - ₹24,999",
};

export default function JaipurLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
