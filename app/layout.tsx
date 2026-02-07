import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SitesBanao - Professional Websites for Indian Businesses | Starting ₹4,999",
  description:
    "SitesBanao builds professional, mobile-friendly websites for small businesses in India. Custom designs, 7-day delivery, starting at just ₹4,999. Serving Jaipur, Indore & all of India. 500+ businesses trust us.",
  keywords: [
    "website design India",
    "website design Jaipur",
    "website design Indore",
    "affordable website India",
    "business website India",
    "small business website",
    "web development Jaipur",
    "web development Indore",
    "professional website ₹4999",
    "sitesbanao",
    "website agency India",
    "restaurant website India",
    "salon website India",
    "gym website India",
    "doctor website India",
    "local business website",
  ].join(", "),
  authors: [{ name: "SitesBanao", url: "https://sitesbanao.com" }],
  creator: "SitesBanao",
  publisher: "SitesBanao",
  metadataBase: new URL("https://sitesbanao.com"),
  alternates: {
    canonical: "https://sitesbanao.com",
  },
  openGraph: {
    title: "SitesBanao - Professional Websites for Indian Businesses | ₹4,999",
    description:
      "Get a professional website for your business in 7 days. Custom designs, mobile-friendly, SEO-ready. Starting ₹4,999. Trusted by 500+ businesses across India.",
    url: "https://sitesbanao.com",
    siteName: "SitesBanao",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SitesBanao - Professional Websites Starting ₹4,999",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SitesBanao - Professional Websites for Indian Businesses",
    description:
      "Custom websites for small businesses starting ₹4,999. 7-day delivery. Mobile-friendly. SEO-ready.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification when ready
    // google: "your-verification-code",
  },
  category: "technology",
};

// JSON-LD Schema for LocalBusiness + WebSite
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://sitesbanao.com/#website",
      url: "https://sitesbanao.com",
      name: "SitesBanao",
      description:
        "Professional website design and development for Indian small businesses",
      publisher: {
        "@id": "https://sitesbanao.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://sitesbanao.com/#organization",
      name: "SitesBanao",
      url: "https://sitesbanao.com",
      description:
        "SitesBanao is a website design agency serving small businesses across India. We build professional, mobile-friendly websites starting at ₹4,999 with 7-day delivery.",
      foundingDate: "2025",
      areaServed: [
        {
          "@type": "City",
          name: "Jaipur",
          containedInPlace: { "@type": "State", name: "Rajasthan" },
        },
        {
          "@type": "City",
          name: "Indore",
          containedInPlace: { "@type": "State", name: "Madhya Pradesh" },
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-82099-04262",
        contactType: "sales",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: [],
    },
    {
      "@type": "Service",
      "@id": "https://sitesbanao.com/#service",
      name: "Website Design & Development",
      provider: {
        "@id": "https://sitesbanao.com/#organization",
      },
      description:
        "Professional website design and development for small businesses in India including restaurants, salons, gyms, clinics, pet stores, and more.",
      areaServed: { "@type": "Country", name: "India" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Website Packages",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Basic Website",
            description:
              "Single page professional website with WhatsApp integration, Google Maps, mobile responsive design",
            price: "4999",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            name: "Standard Website",
            description:
              "Multi-page website with contact forms, SEO optimization, social media integration",
            price: "9999",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            name: "Pro Website",
            description:
              "Full-featured website with booking system, payment integration, admin dashboard",
            price: "19999",
            priceCurrency: "INR",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://sitesbanao.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a website cost for a small business in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At SitesBanao, professional websites for small businesses start at just ₹4,999 for a single-page site. Multi-page sites start at ₹9,999, and full-featured sites with booking/payment start at ₹19,999. All prices include mobile-responsive design, WhatsApp integration, and Google Maps.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We deliver most websites within 7 days. Basic single-page websites can be ready in 3-4 days. Complex multi-page sites with custom features may take 10-14 days.",
          },
        },
        {
          "@type": "Question",
          name: "Do you build websites for restaurants, salons, and local shops?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We specialize in websites for local Indian businesses including restaurants, salons, gyms, clinics, pet stores, coaching centers, boutiques, jewellery shops, and more. We use your Google Maps photos and reviews to create authentic, professional websites.",
          },
        },
        {
          "@type": "Question",
          name: "Is the website mobile-friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. All our websites are fully responsive and optimized for mobile devices. Over 80% of Indian internet users browse on mobile, so we design mobile-first.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide hosting and domain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide fast, reliable hosting on Vercel's global CDN. We can also help you set up a custom domain (like yourbusiness.com) or host your site on a sitesbanao.com subdomain for free.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://sitesbanao.com" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Jaipur" />
        <meta name="geo.position" content="26.9124;75.7873" />
        <meta name="ICBM" content="26.9124, 75.7873" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
