import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pricing | Website Design Starting ₹9,999 | SitesBanao",
  description:
    "Professional website design packages for Indian businesses. Basic ₹9,999, Standard ₹14,999, Pro ₹19,999. Mobile-friendly, SEO-ready, 7-day delivery. No hidden costs.",
  keywords:
    "website design cost India, website price India, affordable website packages, ₹9999 website, cheap website India, website banane ka kharcha, SitesBanao pricing",
  alternates: { canonical: "https://sitesbanao.com/pricing" },
  openGraph: {
    title: "Website Pricing | ₹9,999 Se Shuru | SitesBanao",
    description: "3 plans. No hidden costs. Professional websites for Indian businesses.",
    url: "https://sitesbanao.com/pricing",
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "SitesBanao Website Design",
  description: "Professional website design for Indian small businesses",
  brand: { "@type": "Brand", name: "SitesBanao" },
  offers: [
    { "@type": "Offer", name: "Basic", price: "9999", priceCurrency: "INR", description: "Single-page professional website" },
    { "@type": "Offer", name: "Standard", price: "14999", priceCurrency: "INR", description: "Multi-page website with SEO" },
    { "@type": "Offer", name: "Pro", price: "19999", priceCurrency: "INR", description: "Full-featured website with booking system" },
  ],
};

const plans = [
  {
    name: "Basic",
    price: "₹9,999",
    tagline: "Perfect for getting started",
    color: "border-blue-200 bg-blue-50",
    badge: "",
    features: [
      "Single-page professional website",
      "Mobile-responsive design",
      "WhatsApp button integration",
      "Google Maps embed",
      "Photo gallery (up to 10 photos)",
      "Contact information section",
      "Free hosting (1 year)",
      "Free subdomain (business.sitesbanao.com)",
      "7-day delivery",
      "3 months free support",
    ],
    notIncluded: [
      "Custom domain (.com)",
      "Multiple pages",
      "SEO optimization",
      "Booking system",
    ],
  },
  {
    name: "Standard",
    price: "₹14,999",
    tagline: "Most Popular — Best Value",
    color: "border-purple-400 bg-purple-50 ring-2 ring-purple-400",
    badge: "⭐ POPULAR",
    features: [
      "Multi-page website (up to 5 pages)",
      "Mobile-responsive design",
      "WhatsApp button integration",
      "Google Maps embed",
      "Photo gallery (unlimited photos)",
      "Contact form with email notifications",
      "SEO optimization (meta tags, schema)",
      "Social media integration",
      "Custom domain setup help",
      "Free hosting (1 year)",
      "7-day delivery",
      "6 months free support",
      "Unlimited minor changes",
    ],
    notIncluded: [
      "Booking/appointment system",
      "Payment integration",
      "Admin dashboard",
    ],
  },
  {
    name: "Pro",
    price: "₹19,999",
    tagline: "Everything you need",
    color: "border-amber-400 bg-amber-50",
    badge: "🚀 FULL POWER",
    features: [
      "Unlimited pages",
      "Mobile-responsive design",
      "WhatsApp button integration",
      "Google Maps embed",
      "Photo & video gallery",
      "Contact form with email notifications",
      "Advanced SEO optimization",
      "Social media integration",
      "Custom domain (.com) included",
      "Free hosting (1 year)",
      "Online booking/appointment system",
      "Menu/catalog with pricing",
      "Google Analytics setup",
      "5-day priority delivery",
      "12 months free support",
      "Unlimited changes",
    ],
    notIncluded: [],
  },
];

const faqs = [
  { q: "Kya hidden charges hain?", a: "Nahi, bilkul nahi. Jo price likha hai, wohi final price hai. Koi hidden cost nahi — hosting, design, development sab included hai." },
  { q: "Kya EMI ya installments mein pay kar sakte hain?", a: "Haan! Hum 2 installments mein payment accept karte hain — 50% advance, 50% delivery ke baad." },
  { q: "Domain ka kya hoga?", a: "Basic plan mein aapko free subdomain milta hai (yourbusiness.sitesbanao.com). Standard mein hum domain setup mein help karte hain. Pro mein custom .com domain included hai." },
  { q: "Hosting free hai?", a: "Haan! Pehle saal ki hosting bilkul free hai saare plans mein. Uske baad ₹1,999/year hosting renewal hota hai." },
  { q: "Website ke baad changes kaun karega?", a: "Hum! WhatsApp pe batao kya change karna hai — menu update, photos change, timing update — hum kar denge. Support period mein sab free hai." },
  { q: "Kitne din mein website ready hogi?", a: "Basic aur Standard: 7 din. Pro: 5 din. Agar humne pehle se aapke business ka demo banaya hai, toh 24-48 hours mein ready ho sakti hai." },
  { q: "Kya refund milega agar pasand nahi aayi?", a: "Hum pehle demo dikhate hain. Agar demo pasand nahi aaya, toh koi charge nahi. Payment sirf tab karo jab satisfied ho." },
  { q: "Kya website Google pe dikhegi?", a: "Haan! Standard aur Pro plans mein SEO optimization included hai. Basic plan mein bhi website Google pe index hoti hai, par advanced SEO Standard se milta hai." },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="pricing-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />

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
            href="https://wa.me/918209904262?text=Hi!%20I%20want%20to%20know%20about%20pricing"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition shadow-lg shadow-blue-500/25"
          >
            Get Free Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            💰 Simple, Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Website Packages{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Starting ₹9,999
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden costs. No surprises. Choose a plan that fits your business.
            Sabhi plans mein hosting aur support included hai.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-3xl border-2 p-8 relative ${plan.color}`}>
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{plan.tagline}</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                {plan.price}
                <span className="text-base font-normal text-gray-500"> / one-time</span>
              </div>
              <a
                href={`https://wa.me/918209904262?text=Hi!%20I'm%20interested%20in%20the%20${plan.name}%20plan%20(${plan.price})`}
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-full font-bold text-center transition shadow-lg shadow-blue-500/25 mb-6"
              >
                WhatsApp Us →
              </a>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5">✓</span> {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="mt-0.5">✗</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Aksar Poochhe Jaane Wale Sawaal (FAQ)
          </h2>
          <p className="text-gray-600 text-center mb-12">Pricing ke baare mein common questions</p>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
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
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-4">
            Pehle free demo dekhein, phir decide karein. Koi pressure nahi.
          </p>
          <p className="text-blue-200 mb-8">
            💡 Hum pehle aapke business ka demo website banate hain — bilkul free!
          </p>
          <a
            href="https://wa.me/918209904262?text=Hi!%20I%20want%20a%20free%20demo%20website%20for%20my%20business"
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
            <a href="/jaipur" className="hover:text-blue-400">Jaipur</a>
            <span>·</span>
            <a href="/jodhpur" className="hover:text-blue-400">Jodhpur</a>
            <span>·</span>
            <a href="/udaipur" className="hover:text-blue-400">Udaipur</a>
            <span>·</span>
            <a href="/indore" className="hover:text-blue-400">Indore</a>
            <span>·</span>
            <a href="/blog" className="hover:text-blue-400">Blog</a>
            <span>·</span>
            <a href="/about" className="hover:text-blue-400">About</a>
            <span>·</span>
            <a href="/portfolio" className="hover:text-blue-400">Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
