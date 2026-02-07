import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design in Indore | Professional Websites Starting ₹9,999 | SitesBanao",
  description:
    "Get a professional website for your Indore business starting ₹9,999. We serve businesses in Vijay Nagar, Palasia, Sapna Sangeeta, AB Road, South Tukoganj. 7-day delivery, mobile-friendly, SEO-ready.",
  keywords:
    "website design Indore, web development Indore, affordable website Indore, business website Indore, Indore web designer, Vijay Nagar, Palasia, Sapna Sangeeta, AB Road, South Tukoganj, sitesbanao",
  alternates: { canonical: "https://sitesbanao.com/indore" },
  openGraph: {
    title: "Website Design in Indore | Starting ₹9,999 | SitesBanao",
    description:
      "Professional websites for Indore businesses. 7-day delivery. See our live demo sites!",
    url: "https://sitesbanao.com/indore",
  },
};

const demoSites = [
  { name: "Bake Affaire", type: "Café & Bakery", url: "https://bake-affaire.vercel.app", color: "from-yellow-400 to-amber-500" },
];

export default function IndorePage() {
  return (
    <div className="min-h-screen bg-white">

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
            href="https://wa.me/918209904262?text=Hi!%20I%20need%20a%20website%20for%20my%20Indore%20business"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition shadow-lg shadow-blue-500/25"
          >
            Get Free Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            🏙️ Websites for Indore Businesses
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Website Design in Indore |<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Websites Starting ₹9,999
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            We build beautiful, mobile-friendly websites for businesses across Indore — from Vijay Nagar
            to Palasia, Sapna Sangeeta, AB Road, and South Tukoganj.
          </p>
          <p className="text-gray-500 mb-10">
            Whether you run a bakery, restaurant, salon, or coaching center — get online in just 7 days.
          </p>
          <a
            href="https://wa.me/918209904262?text=Hi!%20I%20need%20a%20website%20for%20my%20Indore%20business"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-xl shadow-blue-500/25"
          >
            📱 WhatsApp: +91 82099 04262
          </a>
        </div>
      </section>

      {/* Live Indore Sites */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Live Websites We&apos;ve Built for Indore Businesses
            </h2>
            <p className="text-gray-600">Click to visit — these are real, live websites</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-md md:max-w-none mx-auto">
            {demoSites.map((site, i) => (
              <a
                key={i}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  className={`aspect-video bg-gradient-to-br ${site.color} rounded-2xl mb-4 flex items-center justify-center group-hover:shadow-xl transition group-hover:scale-[1.02]`}
                >
                  <span className="text-white text-4xl font-bold opacity-50">
                    {site.name[0]}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition">
                  {site.name}
                </h3>
                <p className="text-gray-500 text-sm">{site.type}</p>
              </a>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8">
            More Indore projects coming soon! <a href="https://wa.me/918209904262" className="text-blue-600 hover:underline">Be our next success story →</a>
          </p>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Serving All Areas of Indore
          </h2>
          <p className="text-gray-600 mb-8">
            No matter where your business is located in Indore, we&apos;ve got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Vijay Nagar", "Palasia", "Sapna Sangeeta", "AB Road", "South Tukoganj", "MG Road", "Bhawarkua", "Rajwada", "Scheme No. 78", "Nipania"].map(
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

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Your Indore Business Online?</h2>
          <p className="text-xl text-blue-100 mb-8">
            WhatsApp us now. Free consultation, no pressure.
          </p>
          <a
            href="https://wa.me/918209904262?text=Hi!%20I%20need%20a%20website%20for%20my%20Indore%20business"
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
            <a href="/indore" className="text-white hover:text-blue-400">Indore</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
