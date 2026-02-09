import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Businesses in Jaipur Crushing It Online | SitesBanao Blog",
  description: "From pet stores to restaurants, these 5 Jaipur businesses went from zero online presence to professional websites. See their real websites and transformation.",
  keywords: "Jaipur business website, website design Jaipur, Jaipur online business, small business Jaipur, sitesbanao Jaipur",
  alternates: { canonical: "https://sitesbanao.com/blog/5-businesses-in-jaipur-crushing-it-online" },
  openGraph: {
    title: "5 Businesses in Jaipur Crushing It Online",
    description: "Real Jaipur businesses with real websites. See the transformation.",
    url: "https://sitesbanao.com/blog/5-businesses-in-jaipur-crushing-it-online",
    type: "article",
  },
};

const businesses = [
  {
    name: "Donor Aquarists",
    type: "Aquarium & Pet Store",
    url: "https://donoraquarists.sitesbanao.com",
    reviews: "4.5★ · 150+ Google reviews",
    story: "Jaipur's premier aquarium store was getting customers only through word-of-mouth and Instagram. Now they have a professional website showcasing their exotic fish collection, aquarium setups, and maintenance services. Customers can browse products and WhatsApp directly for orders.",
  },
  {
    name: "The Dogfather",
    type: "Pet Store & Grooming",
    url: "https://thedogfather.sitesbanao.com",
    reviews: "4.6★ · 300+ Google reviews",
    story: "With a catchy name and great reviews, The Dogfather needed a website that matched their brand energy. Their site now showcases grooming services, pet accessories, and allows pet parents to book grooming appointments via WhatsApp.",
  },
  {
    name: "Evershine Kerala",
    type: "South Indian Restaurant",
    url: "https://evershinekerala.sitesbanao.com",
    reviews: "4.3★ · 500+ Google reviews",
    story: "This authentic Kerala restaurant in Jaipur had amazing food but no online menu. Now customers can browse their full menu with photos, see their Google reviews, and place orders directly — saving the 20% Zomato commission.",
  },
  {
    name: "Shyam Darbaar",
    type: "Restaurant & Banquet Hall",
    url: "https://shyamdarbaar.sitesbanao.com",
    reviews: "4.4★ · 400+ Google reviews",
    story: "Shyam Darbaar needed to showcase both their restaurant and banquet hall services. Their website now serves as a complete portfolio — menu, event spaces, pricing, and direct booking via WhatsApp.",
  },
  {
    name: "Jharokha Restro",
    type: "Restaurant",
    url: "https://jharokharestro.sitesbanao.com",
    reviews: "4.2★ · 250+ Google reviews",
    story: "A popular Jaipur eatery that was invisible online beyond Google Maps. Their new website brings their ambiance to life with photos, menu, and a direct connection to customers without paying platform commissions.",
  },
];

export default function JaipurBusinessesBlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-gray-900">SitesBanao</span>
          </a>
          <a href="/blog" className="text-gray-600 hover:text-blue-600 font-medium text-sm">← All Posts</a>
        </div>
      </header>

      <article className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <span className="bg-pink-50 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full">Success Stories</span>
            <span className="text-gray-400 text-sm ml-3">February 3, 2026 · 4 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            5 Businesses in Jaipur Crushing It Online
          </h1>

          <div className="text-lg text-gray-700 space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              Jaipur is booming. From pet stores to restaurants, local businesses are going online
              and seeing real results. Here are 5 Jaipur businesses we built websites for — and how
              it&apos;s helping them grow.
            </p>

            {businesses.map((biz, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 mt-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-700 text-sm font-bold px-3 py-1 rounded-full">#{i + 1}</span>
                  <h2 className="text-2xl font-bold text-gray-900">{biz.name}</h2>
                </div>
                <p className="text-sm text-gray-500 mb-1">{biz.type} · {biz.reviews}</p>
                <p className="text-gray-700 mt-3 leading-relaxed">{biz.story}</p>
                <a
                  href={biz.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
                >
                  Visit their website →
                </a>
              </div>
            ))}

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Want Your Jaipur Business Here?</h3>
              <p className="text-gray-600 mb-6">We build professional websites for Jaipur businesses starting ₹9,999. See our <a href="/jaipur" className="text-blue-600 hover:underline">Jaipur page</a> for more.</p>
              <a
                href="https://wa.me/918209904262?text=Hi!%20I%20have%20a%20business%20in%20Jaipur%20and%20need%20a%20website"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition shadow-xl"
              >
                📱 WhatsApp Us for Free Demo
              </a>
            </div>
          </div>
        </div>
      </article>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <a href="/blog" className="text-blue-400 hover:text-blue-300 transition mb-4 inline-block">← Back to Blog</a>
          <p className="text-gray-400 text-sm mt-4">© 2026 SitesBanao. Based in Indore &amp; Jaipur | Serving businesses across India</p>
        </div>
      </footer>
    </div>
  );
}
