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
  title: "SitesBanao - Professional Websites Starting ₹4,999 | Indore",
  description: "Get a professional, mobile-friendly website for your business. Custom designs, fast delivery, affordable pricing. Based in Indore, serving all of India.",
  keywords: "website design indore, web development, business website, affordable website, sitesbanao",
  openGraph: {
    title: "SitesBanao - Professional Websites Starting ₹4,999",
    description: "Get a professional website for your business. Custom designs, 7-day delivery, starting ₹4,999.",
    url: "https://sitesbanao.com",
    siteName: "SitesBanao",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
