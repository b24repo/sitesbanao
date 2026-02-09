import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About SitesBanao | India's Affordable Website Design Agency",
  description:
    "SitesBanao builds professional websites for Indian small businesses starting ₹9,999. Founded by Virendra Vaishnav. 1,334+ leads, 100+ demo sites across Jaipur, Jodhpur, Udaipur & Indore.",
  keywords:
    "about sitesbanao, website design agency India, affordable website India, Virendra Vaishnav, web development company Jaipur Indore",
  alternates: { canonical: "https://sitesbanao.com/about" },
  openGraph: {
    title: "About SitesBanao | India's Affordable Website Agency",
    description: "1,334+ leads. 100+ demo sites. 4 cities. Starting ₹9,999. Learn our story.",
    url: "https://sitesbanao.com/about",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SitesBanao",
  url: "https://sitesbanao.com",
  logo: "https://sitesbanao.com/og-image.png",
  foundingDate: "2025",
  founder: { "@type": "Person", name: "Virendra Vaishnav" },
  description:
    "SitesBanao is an affordable website design agency serving small businesses across India. Professional websites starting ₹9,999 with 7-day delivery.",
  telephone: "+918209904262",
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "City", name: "Jodhpur" },
    { "@type": "City", name: "Udaipur" },
    { "@type": "City", name: "Indore" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-82099-04262",
    contactType: "sales",
    availableLanguage: ["English", "Hindi"],
  },
  numberOfEmployees: { "@type": "QuantitativeValue", value: 2 },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

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
            href="https://wa.me/918209904262?text=Hi!%20I%20want%20to%20know%20more%20about%20SitesBanao"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition shadow-lg shadow-blue-500/25"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            🇮🇳 Made in India, for India
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SitesBanao
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Har Indian business ko professional website milni chahiye — affordable price mein.
            That&apos;s the mission behind SitesBanao.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story — Hamari Kahaani</h2>
          <p className="text-gray-600 leading-relaxed">
            India mein 6 crore+ small businesses hain — restaurants, salons, clinics, pet stores, coaching centers.
            Lekin inme se 95% ke paas website nahi hai. Kyun? Kyunki traditional agencies ₹50,000–₹2,00,000 charge karti hain,
            freelancers unreliable hote hain, aur DIY tools ke liye technical knowledge chahiye.
          </p>
          <p className="text-gray-600 leading-relaxed">
            2025 mein, <strong>Virendra Vaishnav</strong> ne SitesBanao start kiya with a simple idea:
            pehle website banao, phir dikhao. Humne Google Maps se businesses find kiye, unke photos aur reviews
            use karke demo websites banayi, aur WhatsApp pe bhej di. Response? Incredible.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Aaj hum <strong>4 cities</strong> mein kaam kar rahe hain — Jaipur, Jodhpur, Udaipur, aur Indore.
            <strong> 100+ demo sites</strong> banayi hain aur <strong>1,334+ leads</strong> generate kiye hain.
            Aur pricing? <strong>₹9,999 se shuru</strong> — kyunki har dukaan professional dikhni chahiye.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Numbers That Matter</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "1,334+", label: "Leads Generated" },
              { num: "100+", label: "Demo Sites Built" },
              { num: "4", label: "Cities Active" },
              { num: "₹9,999", label: "Starting Price" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{s.num}</div>
                <div className="text-blue-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team — Hamari Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">V</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Virendra Vaishnav</h3>
              <p className="text-blue-600 font-medium mb-3">Founder</p>
              <p className="text-gray-600 text-sm">
                Tech enthusiast who believes every Indian business deserves a professional online presence.
                Handles product, development, and strategy.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sachin</h3>
              <p className="text-green-600 font-medium mb-3">Sales Lead</p>
              <p className="text-gray-600 text-sm">
                The voice of SitesBanao. Connects with business owners, understands their needs,
                and ensures every client gets the perfect website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Make professional websites accessible and affordable for every small business in India.
          </p>
          <p className="text-lg text-gray-500">
            Har chhoti dukaan ko Google pe dikhana — yahi hamara mission hai. 🇮🇳
          </p>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cities We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { city: "Jaipur", leads: "265 leads", emoji: "🏰", color: "bg-pink-50 text-pink-700", href: "/jaipur" },
              { city: "Jodhpur", leads: "498 leads", emoji: "🏜️", color: "bg-blue-50 text-blue-700", href: "/jodhpur" },
              { city: "Udaipur", leads: "51 leads", emoji: "🏖️", color: "bg-teal-50 text-teal-700", href: "/udaipur" },
              { city: "Indore", leads: "520 leads", emoji: "🏙️", color: "bg-orange-50 text-orange-700", href: "/indore" },
            ].map((c) => (
              <a key={c.city} href={c.href} className={`${c.color} rounded-2xl p-6 text-center hover:scale-105 transition block`}>
                <div className="text-3xl mb-2">{c.emoji}</div>
                <h3 className="font-bold text-lg">{c.city}</h3>
                <p className="text-sm opacity-75">{c.leads}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Want a Website for Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            WhatsApp karo — free consultation, koi pressure nahi.
          </p>
          <a
            href="https://wa.me/918209904262?text=Hi!%20I%20want%20a%20website%20for%20my%20business"
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
            <a href="/portfolio" className="hover:text-blue-400">Portfolio</a>
            <span>·</span>
            <a href="/pricing" className="hover:text-blue-400">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
