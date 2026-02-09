const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SitesBanao - Jodhpur",
  description: "Professional website design and development for businesses in Jodhpur. Starting ₹9,999.",
  url: "https://sitesbanao.com/jodhpur",
  telephone: "+91-82099-04262",
  areaServed: { "@type": "City", name: "Jodhpur", containedInPlace: { "@type": "State", name: "Rajasthan" } },
  address: { "@type": "PostalAddress", addressLocality: "Jodhpur", addressRegion: "Rajasthan", addressCountry: "IN" },
  priceRange: "₹9,999 - ₹24,999",
};

export default function JodhpurLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
