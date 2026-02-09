import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Website Design in Jaipur | ₹9,999 Se Shuru | Website Banao Jaipur | SitesBanao",
  description:
    "Jaipur mein professional website banwao sirf ₹9,999 se. Dukaan ka website, restaurant website, salon website — 7 din mein ready. C-Scheme, Malviya Nagar, Vaishali Nagar, Mansarovar, Tonk Road.",
  keywords:
    "website design Jaipur, web development Jaipur, affordable website Jaipur, business website Jaipur, Jaipur web designer, website banao jaipur, jaipur mein website banwao, dukaan ka website, sasta website jaipur, website banane wala jaipur, C-Scheme, Malviya Nagar, Vaishali Nagar, Mansarovar, Tonk Road, sitesbanao",
  alternates: { canonical: "https://sitesbanao.com/jaipur" },
  openGraph: {
    title: "Website Design in Jaipur | ₹9,999 Se Shuru | SitesBanao",
    description:
      "Jaipur mein apni dukaan ka website banwao. ₹9,999 se shuru, 7 din mein ready. Live demo sites dekhein!",
    url: "https://sitesbanao.com/jaipur",
  },
};

const demoSites = [
  { name: "Donor Aquarists", type: "Aquarium & Pet Store", url: "https://donoraquarists.sitesbanao.com", img: "/portfolio/donor-aquarists.png", reviews: "4.5★ · 150+ reviews" },
  { name: "The Dogfather", type: "Pet Store & Grooming", url: "https://thedogfather.sitesbanao.com", img: "/portfolio/the-dogfather.png", reviews: "4.6★ · 300+ reviews" },
  { name: "Evershine Kerala", type: "Restaurant", url: "https://evershinekerala.sitesbanao.com", img: "/portfolio/evershine-kerala.png", reviews: "4.3★ · 500+ reviews" },
  { name: "Shyam Darbaar", type: "Restaurant & Banquet", url: "https://shyamdarbaar.sitesbanao.com", img: "/portfolio/shyam-darbaar.png", reviews: "4.4★ · 400+ reviews" },
  { name: "Jharokha Restro", type: "Restaurant", url: "https://jharokharestro.sitesbanao.com", img: "/portfolio/jharokha-restro.png", reviews: "4.2★ · 250+ reviews" },
  { name: "Whisk & Knead Co", type: "Bakery & Café", url: "https://whiskandknead.sitesbanao.com", img: "/portfolio/whisk-and-knead.png", reviews: "New" },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SitesBanao - Jaipur",
  "description": "Affordable website design for local businesses in Jaipur. Starting at ₹9,999.",
  "url": "https://sitesbanao.com/jaipur/",
  "telephone": "+918209904262",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN"
  },
  "priceRange": "₹9,999 - ₹19,999",
  "areaServed": { "@type": "City", "name": "Jaipur" },
  "serviceType": ["Website Design", "Web Development", "Business Website"],
  "parentOrganization": { "@type": "Organization", "name": "SitesBanao", "url": "https://sitesbanao.com" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Jaipur mein website banwane ka kharcha kitna hai?", "acceptedAnswer": { "@type": "Answer", "text": "SitesBanao mein Jaipur ke businesses ke liye website ₹9,999 se shuru hoti hai. Yeh price mein design, hosting, mobile optimization, aur custom domain sab included hai." } },
    { "@type": "Question", "name": "How long does it take to build a website for my Jaipur business?", "acceptedAnswer": { "@type": "Answer", "text": "Most websites are ready within 24-48 hours. We already have demo sites prepared for restaurants, salons, and shops in Jaipur that can be customized quickly." } },
    { "@type": "Question", "name": "Kya website se sach mein customers aayenge?", "acceptedAnswer": { "@type": "Answer", "text": "Haan! Google pe 88% log local business search karte hain. Website hone se aapki dukaan Google Maps aur Search mein dikhti hai, jisse naye customers aate hain." } },
    { "@type": "Question", "name": "Website mein kya kya milega?", "acceptedAnswer": { "@type": "Answer", "text": "Aapko milega: professional design, mobile-friendly layout, Google Maps integration, WhatsApp button, photo gallery, menu/services page, contact form, aur free hosting with domain." } },
    { "@type": "Question", "name": "Kya baad mein changes kar sakte hain website mein?", "acceptedAnswer": { "@type": "Answer", "text": "Haan bilkul! Hum unlimited minor changes free mein karte hain. Menu update, photos change, timing update — sab WhatsApp pe batao, hum kar denge." } },
    { "@type": "Question", "name": "Mere paas technical knowledge nahi hai, kya phir bhi website ban sakti hai?", "acceptedAnswer": { "@type": "Answer", "text": "Bilkul! Aapko kuch nahi karna. Bas apni photos, menu/services list, aur contact details WhatsApp pe bhejo — baaki sab hum karenge. 7 din mein website ready!" } }
  ]
};

export default function JaipurPage() {
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
            href="https://wa.me/918209904262?text=Hi!%20I%20need%20a%20website%20for%20my%20Jaipur%20business"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition shadow-lg shadow-blue-500/25"
          >
            Get Free Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            🏰 Websites for Jaipur Businesses
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Website Design in Jaipur |<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Websites Starting ₹9,999
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            We build beautiful, mobile-friendly websites for businesses across Jaipur — from C-Scheme
            to Malviya Nagar, Vaishali Nagar, Mansarovar, and Tonk Road.
          </p>
          <p className="text-lg font-medium text-pink-600 mb-4">
            🇮🇳 Apni dukaan ka website banwao — 7 din mein ready!
          </p>
          <p className="text-gray-500 mb-10">
            Restaurant ho ya salon, pet store ho ya clinic — ₹9,999 mein professional website pao.
          </p>
          <a
            href="https://wa.me/918209904262?text=Hi!%20I%20need%20a%20website%20for%20my%20Jaipur%20business"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-xl shadow-blue-500/25"
          >
            📱 WhatsApp: +91 82099 04262
          </a>
        </div>
      </section>

      {/* Live Jaipur Sites */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Live Websites We&apos;ve Built for Jaipur Businesses
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
                <div className="aspect-video rounded-2xl mb-4 overflow-hidden group-hover:shadow-xl transition group-hover:scale-[1.02]">
                  <img
                    src={site.img}
                    alt={`${site.name} website`}
                    className="w-full h-full object-cover object-top"
                  />
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
              href="https://wa.me/918209904262?text=Hi!%20I%20saw%20your%20Jaipur%20demos.%20I%20want%20a%20website%20for%20my%20business"
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
            Serving All Areas of Jaipur
          </h2>
          <p className="text-gray-600 mb-8">
            No matter where your business is located in Jaipur, we&apos;ve got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["C-Scheme", "Malviya Nagar", "Vaishali Nagar", "Mansarovar", "Tonk Road", "Raja Park", "Sodala", "Jagatpura", "Sanganer", "Sitapura"].map(
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
          <p className="text-gray-600 text-center mb-12">Jaipur website design ke baare mein common questions</p>
          <div className="space-y-6">
            {[
              { q: "Jaipur mein website banwane ka kharcha kitna hai?", a: "SitesBanao mein Jaipur ke businesses ke liye website ₹9,999 se shuru hoti hai. Yeh price mein design, hosting, mobile optimization, aur custom domain sab included hai." },
              { q: "Website kitne din mein ready hoti hai?", a: "Most websites 24-48 hours mein ready ho jaati hain. Humne Jaipur ke restaurants, salons, aur shops ke liye demo sites pehle se tayyar rakhi hain jo jaldi customize ho jaati hain." },
              { q: "Kya website se sach mein customers aayenge?", a: "Haan! Google pe 88% log local business search karte hain. Website hone se aapki dukaan Google Maps aur Search mein dikhti hai, jisse naye customers aate hain." },
              { q: "Website mein kya kya milega?", a: "Professional design, mobile-friendly layout, Google Maps integration, WhatsApp button, photo gallery, menu/services page, contact form, aur free hosting with domain — sab included hai." },
              { q: "Kya baad mein changes kar sakte hain?", a: "Haan bilkul! Hum unlimited minor changes free mein karte hain. Menu update, photos change, timing update — sab WhatsApp pe batao, hum kar denge." },
              { q: "Mere paas technical knowledge nahi hai, kya phir bhi website ban sakti hai?", a: "Bilkul! Aapko kuch nahi karna. Bas apni photos, menu/services list, aur contact details WhatsApp pe bhejo — baaki sab hum karenge. 7 din mein website ready!" },
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
          <h2 className="text-4xl font-bold mb-4">Ready to Get Your Jaipur Business Online?</h2>
          <p className="text-xl text-blue-100 mb-8">
            WhatsApp us now. Free consultation, no pressure.
          </p>
          <a
            href="https://wa.me/918209904262?text=Hi!%20I%20need%20a%20website%20for%20my%20Jaipur%20business"
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
            © 2026 SitesBanao. Based in Indore &amp; Jaipur | Serving businesses across India
          </p>
          <div className="flex justify-center gap-4 mt-4 text-sm text-gray-500">
            <a href="/jaipur" className="text-white hover:text-blue-400">Jaipur</a>
            <span>·</span>
            <a href="/jodhpur" className="hover:text-blue-400">Jodhpur</a>
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
