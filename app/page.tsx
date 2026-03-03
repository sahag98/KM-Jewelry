import type { Metadata } from "next";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "KM Jewelry | Expert Jewelry & Diamond Setting for Over 40 Years",
  description:
    "KM Jewelry offers expert diamond setting, polishing, maintenance and custom jewelry services by Kevork Arzoumanian, a professional with over 40 years of experience.",
  keywords: [
    "jewelry",
    "diamond setting",
    "custom jewelry",
    "jewelry maintenance",
    "jewelry polishing",
  ],
  openGraph: {
    title: "KM Jewelry | Expert Jewelry & Diamond Setting",
    description:
      "Custom jewelry services by a professional with over 40 years of experience.",
    url: "https://kmjewelry.com",
    siteName: "KM Jewelry",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KM Jewelry",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Gallery />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
