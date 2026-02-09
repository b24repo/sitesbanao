import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Demo Website for Your Business - SitesBanao",
  description: "We'll build a free demo website for your business using your Google Maps photos and reviews. No payment, no commitment. See what your business looks like online.",
  keywords: "free demo website, free business website India, free website trial, sitesbanao free demo, website for my business free",
  alternates: { canonical: "https://sitesbanao.com/blog/free-demo-website-for-your-business" },
  openGraph: {
    title: "Free Demo Website for Your Business - SitesBanao",
    description: "We build a free demo website for your business. No payment needed.",
    url: "https://sitesbanao.com/blog/free-demo-website-for-your-business",
    type: "article",
  },
};

export default function FreeDemoBlogPost() {
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
            <span className="bg-yellow-50 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">SitesBanao</span>
            <span className="text-gray-400 text-sm ml-3">January 20, 2026 · 3 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Free Demo Website for Your Business
          </h1>

          <div className="text-lg text-gray-700 space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              What if you could see exactly what your business looks like with a professional website —
              <strong> before paying a single rupee</strong>? That&apos;s exactly what we offer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">🎁 How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                <div>
                  <h3 className="font-bold text-gray-900">Send us your business name</h3>
                  <p className="text-gray-600 text-base">Just WhatsApp us your business name and city. That&apos;s it.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-gray-900">We build your demo</h3>
                  <p className="text-gray-600 text-base">We pull your photos from Google Maps, your reviews, your menu/services — and build a real website in 24-48 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-gray-900">You see it live</h3>
                  <p className="text-gray-600 text-base">We send you a live link. Browse it on your phone. Share it with friends. It&apos;s real.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                <div>
                  <h3 className="font-bold text-gray-900">You decide</h3>
                  <p className="text-gray-600 text-base">Love it? Pay and we customize it further. Not interested? No problem, no hard feelings.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">🔥 Real Demos We&apos;ve Built</h2>
            <p>Here are some businesses that started with a free demo and loved it:</p>
            <div className="grid gap-3 mt-4">
              {[
                { name: "Cafe Laalten", city: "Jodhpur", url: "https://cafe-laalten.sitesbanao.com" },
                { name: "Donor Aquarists", city: "Jaipur", url: "https://donoraquarists.sitesbanao.com" },
                { name: "Savage Garden", city: "Udaipur", url: "https://savage-garden.sitesbanao.com" },
                { name: "Bake Affaire", city: "Indore", url: "https://bake-affaire.vercel.app" },
              ].map((site) => (
                <a key={site.name} href={site.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition">
                  <div>
                    <span className="font-bold text-gray-900">{site.name}</span>
                    <span className="text-gray-500 text-sm ml-2">· {site.city}</span>
                  </div>
                  <span className="text-blue-600 text-sm font-medium">Visit →</span>
                </a>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">❓ Why Free?</h2>
            <p>
              Simple: <strong>seeing is believing</strong>. Most business owners don&apos;t know what a
              website can look like for their specific business. Once they see it, they get it.
              90% of our demo clients convert to paying customers.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mt-12 text-center border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🎁 Get Your Free Demo Website</h3>
              <p className="text-gray-600 mb-6">Just send us your business name on WhatsApp. We&apos;ll do the rest.</p>
              <a
                href="https://wa.me/918209904262?text=Hi!%20I%20want%20a%20free%20demo%20website%20for%20my%20business.%20Business%20name:%20"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-xl"
              >
                💬 Get Free Demo on WhatsApp
              </a>
              <p className="text-sm text-gray-500 mt-4">No payment · No commitment · 24-48hr delivery</p>
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
