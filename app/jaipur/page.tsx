import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design in Jaipur | Professional Websites Starting ₹4,999 | SitesBanao",
  description:
    "Get a professional website for your Jaipur business starting ₹4,999. We serve businesses in C-Scheme, Malviya Nagar, Vaishali Nagar, Mansarovar, Tonk Road. 7-day delivery, mobile-friendly, SEO-ready.",
  keywords:
    "website design Jaipur, web development Jaipur, affordable website Jaipur, business website Jaipur, Jaipur web designer, C-Scheme, Malviya Nagar, Vaishali Nagar, Mansarovar, Tonk Road, sitesbanao",
  alternates: { canonical: "https://sitesbanao.com/jaipur" },
  openGraph: {
    title: "Website Design in Jaipur | Starting ₹4,999 | SitesBanao",
    description:
      "Professional websites for Jaipur businesses. 7-day delivery. See our live demo sites!",
    url: "https://sitesbanao.com/jaipur",
  },
};

const demoSites = [
  { name: "Donor Aquarists", type: "Aquarium & Pet Store", url: "https://donoraquarists.sitesbanao.com", color: "from-blue-400 to-cyan-500" },
  { name: "The Dogfather", type: "Pet Store", url: "https://thedogfather.sitesbanao.com", color: "from-amber-400 to-orange-500" },
  { name: "Evershine Kerala", type: "Restaurant", url: "https://evershinekerala.sitesbanao.com", color: "from-emerald-400 to-teal-500" },
  { name: "Shyam Darbaar", type: "Restaurant", url: "https://shyamdarbaar.sitesbanao.com", color: "from-purple-400 to-pink-500" },
  { name: "Jharokha Restro", type: "Restaurant", url: "https://jharokharestro.sitesbanao.com", color: "from-red-400 to-rose-500" },
];

export default function JaipurPage() {
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
              Professional Websites Starting ₹4,999
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            We build beautiful, mobile-friendly websites for businesses across Jaipur — from C-Scheme
            to Malviya Nagar, Vaishali Nagar, Mansarovar, and Tonk Road.
          </p>
          <p className="text-gray-500 mb-10">
            Whether you run a restaurant, pet store, salon, or clinic — get online in just 7 days.
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
          <div className="grid md:grid-cols-3 gap-8">
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
            <a href="/indore" className="hover:text-blue-400">Indore</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
