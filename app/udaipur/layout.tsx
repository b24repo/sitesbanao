const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SitesBanao - Udaipur",
  description: "Professional website design and development for businesses in Udaipur. Starting ₹9,999.",
  url: "https://sitesbanao.com/udaipur",
  telephone: "+91-82099-04262",
  areaServed: { "@type": "City", name: "Udaipur", containedInPlace: { "@type": "State", name: "Rajasthan" } },
  address: { "@type": "PostalAddress", addressLocality: "Udaipur", addressRegion: "Rajasthan", addressCountry: "IN" },
  priceRange: "₹9,999 - ₹24,999",
};

export default function UdaipurLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
