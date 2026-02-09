import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Website Design in Udaipur | ₹9,999 Se Shuru | Website Banao Udaipur | SitesBanao",
  description:
    "Udaipur mein professional website banwao sirf ₹9,999 se. Hotel website, restaurant website, wedding venue website — 7 din mein ready. Fateh Sagar, Hiran Magri, Chetak Circle, Sukhadia Circle.",
  keywords:
    "website design Udaipur, web development Udaipur, affordable website Udaipur, business website Udaipur, Udaipur web designer, website banao udaipur, website banane wala udaipur, dukaan ka website, hotel website udaipur, Fateh Sagar, Hiran Magri, Chetak Circle, Sukhadia Circle, sitesbanao",
  alternates: { canonical: "https://sitesbanao.com/udaipur" },
  openGraph: {
    title: "Website Design in Udaipur | ₹9,999 Se Shuru | SitesBanao",
    description:
      "Udaipur mein apni dukaan ka website banwao. ₹9,999 se shuru, 7 din mein ready. Live demo sites dekhein!",
    url: "https://sitesbanao.com/udaipur",
  },
};

const demoSites = [
  { name: "Savage Garden", type: "Restaurant", url: "https://savage-garden.sitesbanao.com", reviews: "4.5★ · 1,800+ reviews" },
  { name: "Jheel's Ginger Coffee Bar", type: "Café & Bakery", url: "https://jheels-ginger.sitesbanao.com", reviews: "4.4★ · 900+ reviews" },
  { name: "Cafe Edelweiss", type: "Café", url: "https://cafe-edelweiss.sitesbanao.com", reviews: "4.6★ · 1,200+ reviews" },
  { name: "First Impression Salon", type: "Heritage Salon", url: "https://first-impression-salon.sitesbanao.com", reviews: "4.5★ · 500+ reviews" },
  { name: "Panna Vilas", type: "Restaurant & Lounge", url: "https://panna-vilas.sitesbanao.com", reviews: "4.3★ · 700+ reviews" },
  { name: "Brew Villa", type: "Café & Restro", url: "https://brew-villa.sitesbanao.com", reviews: "4.4★ · 600+ reviews" },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SitesBanao - Udaipur",
  "description": "Affordable website design for hotels, restaurants, and businesses in Udaipur, Rajasthan.",
  "url": "https://sitesbanao.com/udaipur/",
  "telephone": "+918209904262",
  "address": { "@type": "PostalAddress", "addressLocality": "Udaipur", "addressRegion": "Rajasthan", "addressCountry": "IN" },
  "priceRange": "₹9,999 - ₹19,999",
  "areaServed": { "@type": "City", "name": "Udaipur" },
  "serviceType": ["Website Design", "Web Development", "Hotel Website", "Wedding Venue Website"],
  "parentOrganization": { "@type": "Organization", "name": "SitesBanao", "url": "https://sitesbanao.com" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Udaipur mein website banwane ka kharcha kitna hai?", "acceptedAnswer": { "@type": "Answer", "text": "SitesBanao mein Udaipur ke businesses ke liye website ₹9,999 se shuru hoti hai. Hotels aur wedding venues ke liye Professional plan (₹9,999) recommend karte hain." } },
    { "@type": "Question", "name": "Kya wedding venue ke liye bhi website ban sakti hai?", "acceptedAnswer": { "@type": "Answer", "text": "Haan! Udaipur wedding destination hai. Venue website mein photo gallery, capacity details, pricing packages, aur inquiry form sab included hota hai." } },
    { "@type": "Question", "name": "Website kitne din mein ready hoti hai?", "acceptedAnswer": { "@type": "Answer", "text": "Most websites 24-48 hours mein ready ho jaati hain. Hotels aur restaurants ke liye demo sites pehle se tayyar hain jo jaldi customize ho jaati hain." } },
    { "@type": "Question", "name": "Kya tourists ko attract karne mein website help karegi?", "acceptedAnswer": { "@type": "Answer", "text": "Bilkul! Tourists Google pe 'best restaurant in Udaipur' ya 'hotel near Fateh Sagar' search karte hain. Website hone se aap un searches mein dikhoge aur bookings badhegi." } },
    { "@type": "Question", "name": "Website mein kya kya milega?", "acceptedAnswer": { "@type": "Answer", "text": "Professional design, mobile-friendly layout, Google Maps, WhatsApp button, photo gallery, menu/room details, booking inquiry form, aur free hosting with domain." } },
    { "@type": "Question", "name": "Mujhe technical knowledge nahi hai, kya phir bhi ban sakti hai?", "acceptedAnswer": { "@type": "Answer", "text": "Haan! Aapko sirf photos aur details WhatsApp pe bhejni hain. Baaki design, hosting, domain — sab hum handle karenge." } }
  ]
};

export default function UdaipurPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-gray-900">SitesBanao</span>
          </a>
          <a
            href="https://wa.me/918209904262?text=Hi!%20I%20need%20a%20website%20for%20my%20Udaipur%20business"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition shadow-lg shadow-blue-500/25"
          >
            Get Free Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            🏖️ Websites for Udaipur Businesses
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Website Design in Udaipur |<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Websites Starting ₹9,999
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            We build beautiful, mobile-friendly websites for businesses across the City of Lakes — from Fateh Sagar
            to Hiran Magri, Chetak Circle, Sukhadia Circle, and Ambamata.
          </p>
          <p className="text-lg font-medium text-cyan-600 mb-4">
            🇮🇳 Apni dukaan ka website banwao — 7 din mein ready!
          </p>
          <p className="text-gray-500 mb-10">
            Hotel ho ya restaurant, wedding venue ho ya café — ₹9,999 mein professional website pao.
          </p>
          <a
            href="https://wa.me/918209904262?text=Hi!%20I%20need%20a%20website%20for%20my%20Udaipur%20business"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-xl shadow-blue-500/25"
          >
            📱 WhatsApp: +91 82099 04262
          </a>
        </div>
      </section>

      {/* Live Udaipur Sites */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Live Websites We&apos;ve Built for Udaipur Businesses
            </h2>
            <p className="text-gray-600">Click to visit — these are real, live websites</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {demoSites.map((site, i) => (
              <a
                key={i}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="aspect-video rounded-2xl mb-4 overflow-hidden group-hover:shadow-xl transition group-hover:scale-[1.02] bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2">{
                      site.type.includes("Café") || site.type.includes("Café") ? "☕" :
                      site.type.includes("Salon") ? "💇" :
                      site.type.includes("Lounge") ? "🍸" : "🍽️"
                    }</div>
                    <p className="text-gray-500 text-xs font-medium">{site.name}</p>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition">
                  {site.name}
                </h3>
                <p className="text-gray-500 text-sm">{site.type}</p>
                <p className="text-yellow-600 text-xs mt-1">{site.reviews}</p>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://wa.me/918209904262?text=Hi!%20I%20saw%20your%20Udaipur%20demos.%20I%20want%20a%20website%20for%20my%20business"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg"
            >
              💬 Your business could be next — WhatsApp us!
            </a>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Serving All Areas of Udaipur
          </h2>
          <p className="text-gray-600 mb-8">
            No matter where your business is located in Udaipur, we&apos;ve got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Fateh Sagar", "Hiran Magri", "Chetak Circle", "Sukhadia Circle", "Ambamata", "Sector 14", "Ashok Nagar", "University Road", "Bhatt Ji Ki Bari", "Saheli Nagar"].map(
              (area) => (
                <span
                  key={area}
                  className="bg-white border border-gray-200 px-4 py-2 rounded-full text-gray-700 text-sm"
                >
                  📍 {area}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Aksar Poochhe Jaane Wale Sawaal (FAQ)
          </h2>
          <p className="text-gray-600 text-center mb-12">Udaipur website design ke baare mein common questions</p>
          <div className="space-y-6">
            {[
              { q: "Udaipur mein website banwane ka kharcha kitna hai?", a: "SitesBanao mein Udaipur ke businesses ke liye website ₹9,999 se shuru hoti hai. Hotels aur wedding venues ke liye Professional plan (₹9,999) recommend karte hain." },
              { q: "Kya wedding venue ke liye bhi website ban sakti hai?", a: "Haan! Udaipur wedding destination hai. Venue website mein photo gallery, capacity details, pricing packages, aur inquiry form sab included hota hai." },
              { q: "Website kitne din mein ready hoti hai?", a: "Most websites 24-48 hours mein ready ho jaati hain. Hotels aur restaurants ke liye demo sites pehle se tayyar hain jo jaldi customize ho jaati hain." },
              { q: "Kya tourists ko attract karne mein website help karegi?", a: "Bilkul! Tourists Google pe 'best restaurant in Udaipur' ya 'hotel near Fateh Sagar' search karte hain. Website hone se aap un searches mein dikhoge aur bookings badhegi." },
              { q: "Website mein kya kya milega?", a: "Professional design, mobile-friendly layout, Google Maps, WhatsApp button, photo gallery, menu/room details, booking inquiry form, aur free hosting with domain." },
              { q: "Mujhe technical knowledge nahi hai, kya phir bhi ban sakti hai?", a: "Haan! Aapko sirf photos aur details WhatsApp pe bhejni hain. Baaki design, hosting, domain — sab hum handle karenge." },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">❓ {faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Your Udaipur Business Online?</h2>
          <p className="text-xl text-blue-100 mb-8">
            WhatsApp us now. Free consultation, no pressure.
          </p>
          <a
            href="https://wa.me/918209904262?text=Hi!%20I%20need%20a%20website%20for%20my%20Udaipur%20business"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition shadow-2xl"
          >
            📱 WhatsApp: +91 82099 04262
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition mb-4 inline-block">
            ← Back to Home
          </a>
          <p className="text-gray-400 text-sm mt-4">
            © 2026 SitesBanao. Based in Indore | Serving businesses across Rajasthan &amp; India
          </p>
          <div className="flex justify-center gap-4 mt-4 text-sm text-gray-500">
            <a href="/jaipur" className="hover:text-blue-400">Jaipur</a>
            <span>·</span>
            <a href="/jodhpur" className="hover:text-blue-400">Jodhpur</a>
            <span>·</span>
            <a href="/udaipur" className="text-white hover:text-blue-400">Udaipur</a>
            <span>·</span>
            <a href="/indore" className="hover:text-blue-400">Indore</a>
            <span>·</span>
            <a href="/blog" className="hover:text-blue-400">Blog</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
