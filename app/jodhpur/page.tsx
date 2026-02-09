import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Website Design in Jodhpur | ₹9,999 Se Shuru | Website Banao Jodhpur | SitesBanao",
  description:
    "Jodhpur mein professional website banwao sirf ₹9,999 se. Dukaan ka website, restaurant website, hotel website — 7 din mein ready. Clock Tower, Sardarpura, Paota, Ratanada, Shastri Nagar.",
  keywords:
    "website design Jodhpur, web development Jodhpur, affordable website Jodhpur, business website Jodhpur, Jodhpur web designer, website banao jodhpur, website banane wala jodhpur, dukaan ka website, sasta website jodhpur, Clock Tower, Sardarpura, Paota, Ratanada, Shastri Nagar, sitesbanao",
  alternates: { canonical: "https://sitesbanao.com/jodhpur" },
  openGraph: {
    title: "Website Design in Jodhpur | ₹9,999 Se Shuru | SitesBanao",
    description:
      "Jodhpur mein apni dukaan ka website banwao. ₹9,999 se shuru, 7 din mein ready. Live demo sites dekhein!",
    url: "https://sitesbanao.com/jodhpur",
  },
};

const demoSites = [
  { name: "Cafe Laalten", type: "Art Cafe", url: "https://cafe-laalten.sitesbanao.com", img: "/portfolio/cafe-laalten.png", reviews: "4.5★ · 800+ reviews" },
  { name: "On The Rocks", type: "Asian Fusion Restaurant", url: "https://on-the-rocks-jodhpur.sitesbanao.com", img: "/portfolio/on-the-rocks.png", reviews: "4.4★ · 1,200+ reviews" },
  { name: "Expose Salon", type: "Beauty Salon", url: "https://expose-salon.sitesbanao.com", img: "/portfolio/expose-salon.png", reviews: "4.3★ · 400+ reviews" },
  { name: "Vegetrainian", type: "Theme Restaurant", url: "https://vegetrainian.sitesbanao.com", img: "/portfolio/vegetrainian.png", reviews: "4.5★ · 2,000+ reviews" },
  { name: "Love Over Coffee", type: "Café", url: "https://love-over-coffee.sitesbanao.com", img: "/portfolio/love-over-coffee.png", reviews: "4.4★ · 600+ reviews" },
  { name: "Jhankar Haveli", type: "Heritage Hotel & Restaurant", url: "https://jhankar-haveli.sitesbanao.com", img: "/portfolio/jhankar-haveli.png", reviews: "4.6★ · 1,500+ reviews" },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SitesBanao - Jodhpur",
  "description": "Affordable website design for local businesses in Jodhpur, Rajasthan. Starting at ₹9,999.",
  "url": "https://sitesbanao.com/jodhpur/",
  "telephone": "+918209904262",
  "address": { "@type": "PostalAddress", "addressLocality": "Jodhpur", "addressRegion": "Rajasthan", "addressCountry": "IN" },
  "priceRange": "₹9,999 - ₹19,999",
  "areaServed": { "@type": "City", "name": "Jodhpur" },
  "serviceType": ["Website Design", "Web Development", "Business Website"],
  "parentOrganization": { "@type": "Organization", "name": "SitesBanao", "url": "https://sitesbanao.com" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Jodhpur mein website banwane ka cost kitna hai?", "acceptedAnswer": { "@type": "Answer", "text": "SitesBanao mein Jodhpur businesses ke liye website ₹9,999 se shuru hoti hai. Design, hosting, domain sab included hai." } },
    { "@type": "Question", "name": "Jodhpur mein kaunsi businesses ko website chahiye?", "acceptedAnswer": { "@type": "Answer", "text": "Jodhpur ke restaurants, hotels, guest houses, handicraft shops, salons, aur clinics — sabko website se faayda hota hai. Tourism city hone se online presence aur bhi zaroori hai." } },
    { "@type": "Question", "name": "Website kitne din mein ready hoti hai?", "acceptedAnswer": { "@type": "Answer", "text": "Most websites 24-48 hours mein ready ho jaati hain. Humne Jodhpur ke cafes, hotels, aur salons ke liye demo sites pehle se tayyar rakhi hain." } },
    { "@type": "Question", "name": "Kya website mobile pe bhi chalegi?", "acceptedAnswer": { "@type": "Answer", "text": "Haan! Saari websites mobile-friendly hoti hain. 80% customers phone se search karte hain, isliye humari har website mobile pe perfect dikhti hai." } },
    { "@type": "Question", "name": "Website mein kya kya milega?", "acceptedAnswer": { "@type": "Answer", "text": "Professional design, WhatsApp button, Google Maps, photo gallery, menu/services page, contact form, free hosting aur domain — sab included." } },
    { "@type": "Question", "name": "Mujhe technical knowledge nahi hai, kya website ban sakti hai?", "acceptedAnswer": { "@type": "Answer", "text": "Bilkul! Aapko sirf photos aur details WhatsApp pe bhejni hain. Baaki sab hum karenge — design se lekar hosting tak." } }
  ]
};

export default function JodhpurPage() {
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
            href="https://wa.me/918209904262?text=Hi!%20I%20need%20a%20website%20for%20my%20Jodhpur%20business"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition shadow-lg shadow-blue-500/25"
          >
            Get Free Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            🏰 Websites for Jodhpur Businesses
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Website Design in Jodhpur |<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Websites Starting ₹9,999
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            We build beautiful, mobile-friendly websites for businesses across the Blue City — from Clock Tower
            to Sardarpura, Paota, Ratanada, and Shastri Nagar.
          </p>
          <p className="text-lg font-medium text-amber-600 mb-4">
            🇮🇳 Apni dukaan ka website banwao — 7 din mein ready!
          </p>
          <p className="text-gray-500 mb-10">
            Café ho ya hotel, salon ho ya handicraft shop — ₹9,999 mein professional website pao.
          </p>
          <a
            href="https://wa.me/918209904262?text=Hi!%20I%20need%20a%20website%20for%20my%20Jodhpur%20business"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-xl shadow-blue-500/25"
          >
            📱 WhatsApp: +91 82099 04262
          </a>
        </div>
      </section>

      {/* Live Jodhpur Sites */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Live Websites We&apos;ve Built for Jodhpur Businesses
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
                <div className="aspect-video rounded-2xl mb-4 overflow-hidden group-hover:shadow-xl transition group-hover:scale-[1.02] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2">{
                      site.type.includes("Cafe") || site.type.includes("Café") ? "☕" :
                      site.type.includes("Salon") ? "💇" :
                      site.type.includes("Hotel") ? "🏰" : "🍽️"
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
              href="https://wa.me/918209904262?text=Hi!%20I%20saw%20your%20Jodhpur%20demos.%20I%20want%20a%20website%20for%20my%20business"
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
            Serving All Areas of Jodhpur
          </h2>
          <p className="text-gray-600 mb-8">
            No matter where your business is located in Jodhpur, we&apos;ve got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Clock Tower", "Sardarpura", "Paota", "Ratanada", "Shastri Nagar", "Chopasni Road", "Pal Road", "Basni", "Pratap Nagar", "Kamla Nehru Nagar"].map(
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
          <p className="text-gray-600 text-center mb-12">Jodhpur website design ke baare mein common questions</p>
          <div className="space-y-6">
            {[
              { q: "Jodhpur mein website banwane ka cost kitna hai?", a: "SitesBanao mein Jodhpur businesses ke liye website ₹9,999 se shuru hoti hai. Design, hosting, domain sab included hai." },
              { q: "Jodhpur mein kaunsi businesses ko website chahiye?", a: "Jodhpur ke restaurants, hotels, guest houses, handicraft shops, salons, aur clinics — sabko website se faayda hota hai. Tourism city hone se online presence aur bhi zaroori hai." },
              { q: "Website kitne din mein ready hoti hai?", a: "Most websites 24-48 hours mein ready ho jaati hain. Humne Jodhpur ke cafes, hotels, aur salons ke liye demo sites pehle se tayyar rakhi hain." },
              { q: "Kya website mobile pe bhi chalegi?", a: "Haan! Saari websites mobile-friendly hoti hain. 80% customers phone se search karte hain, isliye humari har website mobile pe perfect dikhti hai." },
              { q: "Website mein kya kya milega?", a: "Professional design, WhatsApp button, Google Maps, photo gallery, menu/services page, contact form, free hosting aur domain — sab included." },
              { q: "Mujhe technical knowledge nahi hai, kya website ban sakti hai?", a: "Bilkul! Aapko sirf photos aur details WhatsApp pe bhejni hain. Baaki sab hum karenge — design se lekar hosting tak." },
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
          <h2 className="text-4xl font-bold mb-4">Ready to Get Your Jodhpur Business Online?</h2>
          <p className="text-xl text-blue-100 mb-8">
            WhatsApp us now. Free consultation, no pressure.
          </p>
          <a
            href="https://wa.me/918209904262?text=Hi!%20I%20need%20a%20website%20for%20my%20Jodhpur%20business"
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
            <a href="/jodhpur" className="text-white hover:text-blue-400">Jodhpur</a>
            <span>·</span>
            <a href="/udaipur" className="hover:text-blue-400">Udaipur</a>
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
