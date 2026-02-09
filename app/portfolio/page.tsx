import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | 100+ Live Demo Websites | SitesBanao",
  description:
    "See 100+ live demo websites built by SitesBanao for restaurants, cafés, salons, hotels & pet stores across Jaipur, Jodhpur, Udaipur & Indore. Starting ₹9,999.",
  keywords:
    "website portfolio India, demo websites, restaurant website examples, salon website design, SitesBanao portfolio, live website demos",
  alternates: { canonical: "https://sitesbanao.com/portfolio" },
  openGraph: {
    title: "Portfolio | 100+ Live Websites | SitesBanao",
    description: "Click to visit live websites we've built for businesses across India.",
    url: "https://sitesbanao.com/portfolio",
  },
};

interface DemoSite { name: string; type: string; url: string; img?: string; reviews: string; }
interface CityData { name: string; emoji: string; color: string; bg: string; sites: DemoSite[]; }

const cities: CityData[] = [
  {
    name: "Jaipur",
    emoji: "🏰",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    sites: [
      { name: "Donor Aquarists", type: "Aquarium & Pet Store", url: "https://donoraquarists.sitesbanao.com", img: "/portfolio/donor-aquarists.png", reviews: "4.5★ · 150+ reviews" },
      { name: "The Dogfather", type: "Pet Store & Grooming", url: "https://thedogfather.sitesbanao.com", img: "/portfolio/the-dogfather.png", reviews: "4.6★ · 300+ reviews" },
      { name: "Evershine Kerala", type: "Restaurant", url: "https://evershinekerala.sitesbanao.com", img: "/portfolio/evershine-kerala.png", reviews: "4.3★ · 500+ reviews" },
      { name: "Shyam Darbaar", type: "Restaurant & Banquet", url: "https://shyamdarbaar.sitesbanao.com", img: "/portfolio/shyam-darbaar.png", reviews: "4.4★ · 400+ reviews" },
      { name: "Jharokha Restro", type: "Restaurant", url: "https://jharokharestro.sitesbanao.com", img: "/portfolio/jharokha-restro.png", reviews: "4.2★ · 250+ reviews" },
      { name: "Whisk & Knead Co", type: "Bakery & Café", url: "https://whiskandknead.sitesbanao.com", img: "/portfolio/whisk-and-knead.png", reviews: "New" },
    ],
  },
  {
    name: "Jodhpur",
    emoji: "🏜️",
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
    sites: [
      { name: "Cafe Laalten", type: "Art Cafe", url: "https://cafe-laalten.sitesbanao.com", img: "/portfolio/cafe-laalten.png", reviews: "4.5★ · 800+ reviews" },
      { name: "On The Rocks", type: "Asian Fusion Restaurant", url: "https://on-the-rocks-jodhpur.sitesbanao.com", img: "/portfolio/on-the-rocks-jodhpur.png", reviews: "4.4★ · 1,200+ reviews" },
      { name: "Expose Salon", type: "Beauty Salon", url: "https://expose-salon.sitesbanao.com", img: "/portfolio/expose-salon.png", reviews: "4.3★ · 400+ reviews" },
      { name: "Vegetrainian", type: "Theme Restaurant", url: "https://vegetrainian.sitesbanao.com", img: "/portfolio/vegetrainian.png", reviews: "4.5★ · 2,000+ reviews" },
      { name: "Love Over Coffee", type: "Café", url: "https://love-over-coffee.sitesbanao.com", img: "/portfolio/love-over-coffee.png", reviews: "4.4★ · 600+ reviews" },
      { name: "Jhankar Haveli", type: "Heritage Hotel & Restaurant", url: "https://jhankar-haveli.sitesbanao.com", img: "/portfolio/jhankar-haveli.png", reviews: "4.6★ · 1,500+ reviews" },
    ],
  },
  {
    name: "Udaipur",
    emoji: "🏖️",
    color: "from-teal-500 to-cyan-500",
    bg: "bg-teal-50",
    sites: [
      { name: "Savage Garden", type: "Restaurant", url: "https://savage-garden.sitesbanao.com", reviews: "4.5★ · 1,800+ reviews" },
      { name: "Jheel's Ginger Coffee Bar", type: "Café & Bakery", url: "https://jheels-ginger.sitesbanao.com", reviews: "4.4★ · 900+ reviews" },
      { name: "Cafe Edelweiss", type: "Café", url: "https://cafe-edelweiss.sitesbanao.com", reviews: "4.6★ · 1,200+ reviews" },
      { name: "First Impression Salon", type: "Heritage Salon", url: "https://first-impression-salon.sitesbanao.com", reviews: "4.5★ · 500+ reviews" },
      { name: "Panna Vilas", type: "Restaurant & Lounge", url: "https://panna-vilas.sitesbanao.com", reviews: "4.3★ · 700+ reviews" },
      { name: "Brew Villa", type: "Café & Restro", url: "https://brew-villa.sitesbanao.com", reviews: "4.4★ · 600+ reviews" },
    ],
  },
  {
    name: "Indore",
    emoji: "🏙️",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    sites: [
      { name: "Bake Affaire", type: "Café & Bakery", url: "https://bake-affaire.vercel.app", img: "/portfolio/bake-affaire.png", reviews: "Popular" },
    ],
  },
];

export default function PortfolioPage() {
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
            href="https://wa.me/918209904262?text=Hi!%20I%20saw%20your%20portfolio.%20I%20want%20a%20website%20too!"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition shadow-lg shadow-blue-500/25"
          >
            Get Your Website
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            🎨 Our Work
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            100+ Live Websites{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Built for Indian Businesses
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real businesses. Real websites. Click any site below to visit it live.
            Dekhiye aur decide kariye — your business could be next! 🚀
          </p>
        </div>
      </section>

      {/* City Sections */}
      {cities.map((city) => (
        <section key={city.name} className={`py-16 px-4 ${city.bg}`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {city.emoji} {city.name} — {city.sites.length} Demo Sites
              </h2>
              <a href={`/${city.name.toLowerCase()}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Visit {city.name} page →
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {city.sites.map((site, i) => (
                <a
                  key={i}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="aspect-video rounded-2xl mb-4 overflow-hidden group-hover:shadow-xl transition group-hover:scale-[1.02] bg-gray-100">
                    {site.img ? (
                      <img
                        src={site.img}
                        alt={`${site.name} website by SitesBanao`}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${city.color} flex items-center justify-center`}>
                        <span className="text-white text-2xl font-bold">{site.name[0]}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition">
                    {site.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{site.type}</p>
                  <p className="text-yellow-600 text-xs mt-1">{site.reviews}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Total Count */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Your Business Could Be Next!</h2>
          <p className="text-xl text-blue-100 mb-4">
            100+ businesses already trust SitesBanao. Starting at just ₹9,999.
          </p>
          <p className="text-blue-200 mb-8">
            Apni dukaan ka bhi demo dekhein — bilkul free!
          </p>
          <a
            href="https://wa.me/918209904262?text=Hi!%20I%20saw%20your%20portfolio.%20Please%20build%20a%20demo%20for%20my%20business"
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
            <a href="/pricing" className="hover:text-blue-400">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
