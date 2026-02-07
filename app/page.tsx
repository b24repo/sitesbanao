export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-gray-900">SitesBanao</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
            <a href="#portfolio" className="hover:text-blue-600 transition">Portfolio</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </nav>
          <a
            href="https://wa.me/918209904262?text=Hi!%20I%20want%20to%20build%20a%20website"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition shadow-lg shadow-blue-500/25"
          >
            Get Free Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            {'🚀 Websites for Indian Businesses'}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Professional Website<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Starting ₹4,999
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            We build beautiful, mobile-friendly websites for local businesses. 
            No technical knowledge needed - just tell us what you need!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/918209904262?text=Hi!%20I%20need%20a%20website%20for%20my%20business"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-xl shadow-blue-500/25"
            >
              📱 WhatsApp Us Now
            </a>
            <a
              href="#pricing"
              className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition"
            >
              View Pricing
            </a>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> 7-Day Delivery
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Free Hosting (1 Year)
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Mobile Responsive
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> SEO Optimized
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect for Local Businesses</h2>
            <p className="text-gray-600">We specialize in websites for India&apos;s growing businesses</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: "🍕", name: "Restaurants & Cafés", desc: "Menus, reservations, delivery" },
              { emoji: "💇", name: "Salons & Spas", desc: "Services, booking, gallery" },
              { emoji: "🏥", name: "Doctors & Clinics", desc: "Appointments, credentials" },
              { emoji: "📚", name: "Tutors & Coaches", desc: "Courses, testimonials" },
              { emoji: "🛠️", name: "Service Providers", desc: "Plumbers, electricians" },
              { emoji: "🏪", name: "Retail Shops", desc: "Product showcase" },
              { emoji: "💼", name: "Consultants", desc: "Portfolio, booking" },
              { emoji: "🎂", name: "Bakeries", desc: "Menu, orders, gallery" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-blue-50 hover:shadow-lg transition">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You Get</h2>
            <p className="text-gray-600">Everything you need to get online</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Design</h3>
              <p className="text-gray-600">
                Unique design matching your brand. We use your logo, colors, and photos 
                to create something that feels like YOU.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Friendly</h3>
              <p className="text-gray-600">
                Your website looks perfect on phones, tablets, and computers. 
                80% of your customers will visit from mobile!
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Google Ready</h3>
              <p className="text-gray-600">
                SEO optimized so customers can find you on Google. 
                We set up Google Maps, reviews, and local search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600">No hidden fees. Pay once, own forever.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-200 transition">
              <div className="text-sm font-semibold text-gray-500 mb-2">STARTER</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">₹4,999</div>
              <div className="text-gray-500 mb-6">one-time payment</div>
              <ul className="space-y-3 mb-8">
                {[
                  "1-Page Website",
                  "Mobile Responsive",
                  "WhatsApp Button",
                  "Google Maps",
                  "Contact Form",
                  "1 Year Free Hosting",
                  "5 Days Delivery",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/918209904262?text=Hi!%20I%20want%20the%20Starter%20package%20(₹4,999)"
                className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold text-center transition"
              >
                Get Started
              </a>
            </div>

            {/* Standard - Popular */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative transform md:scale-105 shadow-2xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="text-sm font-semibold text-blue-200 mb-2">STANDARD</div>
              <div className="text-4xl font-bold mb-1">₹9,999</div>
              <div className="text-blue-200 mb-6">one-time payment</div>
              <ul className="space-y-3 mb-8">
                {[
                  "5-Page Website",
                  "Custom Design",
                  "Mobile Responsive",
                  "WhatsApp Integration",
                  "Google Maps + Reviews",
                  "Contact Form",
                  "Basic SEO Setup",
                  "1 Year Free Hosting",
                  "7 Days Delivery",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-yellow-400">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/918209904262?text=Hi!%20I%20want%20the%20Standard%20package%20(₹9,999)"
                className="block w-full bg-white text-blue-600 py-3 rounded-xl font-bold text-center hover:bg-blue-50 transition"
              >
                Get Started
              </a>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-purple-200 transition">
              <div className="text-sm font-semibold text-gray-500 mb-2">PRO</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">₹19,999</div>
              <div className="text-gray-500 mb-6">one-time payment</div>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited Pages",
                  "Premium Design",
                  "Advanced SEO",
                  "Online Booking System",
                  "WhatsApp Catalog",
                  "Google Business Setup",
                  "Social Media Links",
                  "Analytics Dashboard",
                  "1 Year Free Hosting",
                  "Priority Support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="text-purple-500">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/918209904262?text=Hi!%20I%20want%20the%20Pro%20package%20(₹19,999)"
                className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold text-center transition"
              >
                Get Started
              </a>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8">
            Need something custom? <a href="https://wa.me/918209904262" className="text-blue-600 hover:underline">Let&apos;s talk</a>
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400">From idea to live website in 7 days</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Tell Us", desc: "Share your business details, logo, and what you need via WhatsApp" },
              { step: "2", title: "We Design", desc: "Our team creates a custom design and shows you a preview" },
              { step: "3", title: "You Review", desc: "Give feedback, request changes until you love it" },
              { step: "4", title: "Go Live!", desc: "We launch your website and hand over the keys" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-gray-600">Recent websites we&apos;ve built for local businesses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Bake Affaire", type: "Café & Bakery", color: "from-amber-400 to-orange-500" },
              { name: "Cakes & More", type: "Bakery", color: "from-pink-400 to-rose-500" },
              { name: "Lotus Hut", type: "Café", color: "from-emerald-400 to-teal-500" },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className={`aspect-video bg-gradient-to-br ${item.color} rounded-2xl mb-4 flex items-center justify-center group-hover:shadow-xl transition`}>
                  <span className="text-white text-4xl font-bold opacity-50">{item.name[0]}</span>
                </div>
                <h3 className="font-bold text-gray-900">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.type}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8">
            More examples coming soon! We&apos;re a new team with big ambitions 🚀
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Do I need technical knowledge?", a: "Not at all! Just tell us about your business. We handle everything technical." },
              { q: "What about hosting and domain?", a: "We include 1 year of free hosting. You can use your own domain or we help you buy one (~₹800/year)." },
              { q: "How long does it take?", a: "Most websites are ready in 5-7 days. Complex projects may take 10-14 days." },
              { q: "Can I update the website myself?", a: "Yes! We provide a simple guide. Or you can WhatsApp us for changes (small updates free for first 3 months)." },
              { q: "What if I don't like it?", a: "We offer unlimited revisions until you're 100% happy. Your satisfaction is guaranteed." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Online?</h2>
          <p className="text-xl text-blue-100 mb-8">
            WhatsApp us now for a free consultation. No pressure, just honest advice.
          </p>
          <a
            href="https://wa.me/918209904262?text=Hi!%20I%20want%20to%20build%20a%20website%20for%20my%20business"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition shadow-2xl"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp: +91 82099 04262
          </a>
          <p className="mt-6 text-blue-200">
            {'📍 Proudly serving businesses across India 🇮🇳'}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-bold text-xl">SitesBanao</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional websites for Indian businesses. Fast, affordable, beautiful.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Business Websites</li>
                <li>Restaurant Menus</li>
                <li>Service Portfolios</li>
                <li>Landing Pages</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Pricing</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Starter - ₹4,999</li>
                <li>Standard - ₹9,999</li>
                <li>Pro - ₹19,999</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📱 +91 82099 04262</li>
                <li>📍 India</li>
                <li>✉️ WhatsApp preferred</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            {'© 2026 SitesBanao. Made in India'} <span className="inline-block ml-1">🇮🇳</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918209904262?text=Hi!%20I%20need%20a%20website"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition transform hover:scale-110 z-50"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
