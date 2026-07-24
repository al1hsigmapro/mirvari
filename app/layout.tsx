import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import Preloader from "@/components/preloader";
import CustomCursor from "@/components/cursor";
import Navbar from "@/components/navbar";
import { siteConfig } from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "MIRVARI — Ресторан азербайджанской и европейской кухни",
    template: "%s | MIRVARI",
  },
  description: siteConfig.description,
  keywords: [
    "MIRVARI", "Мирвари", "ресторан", "азербайджанская кухня", "европейская кухня",
    "банкетный зал", "шашлык", "лав-гриль", "свадьба", "корпоратив", "Астана",
  ],
  authors: [{ name: "MIRVARI" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteConfig.url,
    title: "MIRVARI — Ресторан азербайджанской и европейской кухни",
    description: siteConfig.description,
    siteName: "MIRVARI",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "MIRVARI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MIRVARI — Ресторан",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: siteConfig.url },
};

export const viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "MIRVARI",
  image: siteConfig.ogImage,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  priceRange: "₸₸₸",
  servesCuisine: ["Azerbaijani", "European", "Georgian", "Caucasian"],
  address: { "@type": "PostalAddress", streetAddress: siteConfig.address, addressLocality: "Астана", addressCountry: "KZ" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Sunday"], opens: "11:00", closes: "00:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday","Saturday"], opens: "11:00", closes: "02:00" },
  ],
  sameAs: [siteConfig.instagram],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "487" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="bg-ink-950 text-white antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
