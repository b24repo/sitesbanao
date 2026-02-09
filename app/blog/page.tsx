const blogPosts = [
  {
    slug: "why-your-restaurant-needs-a-website-2026",
    title: "Why Your Restaurant Needs a Website in 2026",
    excerpt: "Still relying only on Zomato and Swiggy? Here's why your restaurant needs its own website to grow — and how it costs less than you think.",
    date: "February 5, 2026",
    readTime: "5 min read",
    emoji: "🍽️",
    category: "Restaurants",
  },
  {
    slug: "5-businesses-in-jaipur-crushing-it-online",
    title: "5 Businesses in Jaipur Crushing It Online",
    excerpt: "From pet stores to restaurants, these Jaipur businesses went from zero online presence to professional websites. See their transformation.",
    date: "February 3, 2026",
    readTime: "4 min read",
    emoji: "🏰",
    category: "Success Stories",
  },
  {
    slug: "how-much-does-a-website-cost-in-india",
    title: "How Much Does a Website Cost in India?",
    excerpt: "₹5,000 or ₹5,00,000? We break down exactly what website development costs in India in 2026, and how to get the best value for your money.",
    date: "January 30, 2026",
    readTime: "6 min read",
    emoji: "💰",
    category: "Guides",
  },
  {
    slug: "whatsapp-vs-website-why-you-need-both",
    title: "WhatsApp vs Website: Why You Need Both",
    excerpt: "WhatsApp is great for conversations, but it can't replace a website. Here's why smart businesses use both — and how they work together.",
    date: "January 25, 2026",
    readTime: "4 min read",
    emoji: "📱",
    category: "Digital Marketing",
  },
  {
    slug: "free-demo-website-for-your-business",
    title: "Free Demo Website for Your Business - SitesBanao",
    excerpt: "We'll build a free demo website for your business using your Google Maps photos and reviews. No payment, no commitment. See what's possible.",
    date: "January 20, 2026",
    readTime: "3 min read",
    emoji: "🎁",
    category: "SitesBanao",
  },
];

export default function BlogPage() {
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
            href="https://wa.me/918209904262?text=Hi!%20I%20want%20to%20build%20a%20website"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition shadow-lg shadow-blue-500/25"
          >
            Get Free Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            📝 SitesBanao Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tips & Insights for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Indian Businesses
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn how to grow your business online. Real advice, real examples, no fluff.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 transition"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0 hidden md:block">{post.emoji}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.date}</span>
                      <span className="text-gray-400 text-sm">· {post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                    <span className="inline-block mt-4 text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Read more →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want a Website for Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Starting at just ₹9,999. WhatsApp us for a free demo!
          </p>
          <a
            href="https://wa.me/918209904262?text=Hi!%20I%20read%20your%20blog%20and%20want%20a%20website%20for%20my%20business"
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
            <a href="/blog" className="text-white hover:text-blue-400">Blog</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
