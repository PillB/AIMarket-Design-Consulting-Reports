import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Oswald } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// ------------------------------------------------------------
// Deployment URL — GitHub Pages.
// Owner: update this if a custom domain is configured.
// `metadataBase` resolves relative OG / canonical / JSON-LD
// URLs against this origin. basePath (`/AIMarket-Design-Consulting-Reports`)
// is appended automatically by Next for asset paths but NOT for
// metadataBase, so we include it here.
// ------------------------------------------------------------
const SITE_URL =
  "https://ursacoffeeperu.github.io/AIMarket-Design-Consulting-Reports";

// ------------------------------------------------------------
// JSON-LD — CafeOrCoffeeShop (schema.org LocalBusiness sub-type).
// Rendered into the static HTML <head> so search engines can read
// it without executing JavaScript.
//
// Owner action items (search for `TODO owner`):
//   1. Verify telephone number once a public line is confirmed.
//   2. Replace `aggregateRating` with real Google Business Profile
//      data once GBP is claimed and reviews are collected. The
//      placeholder below reflects the dossier's brand-quality claim
//      (CAM Café Perú 2025 top-5 award, verified Instagram
//      following); do not publish unverified review counts in
//      production structured data.
//   3. Update `sameAs` Facebook / CoffeePass URLs once the owner
//      confirms the canonical profile slugs.
// ------------------------------------------------------------
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "@id": `${SITE_URL}/#business`,
  name: "Ursa Coffee Roasters",
  alternateName: "Ursa Coffee",
  description:
    "Specialty coffee roastery in Miraflores, Lima, Peru. In-house roasting, Art Nouveau identity, bear motif, and the tagline «Un gramo a la vez.» Strategic dossier and command center for the 2026 brand, product, and marketing plan.",
  image: `${SITE_URL}/logo.svg`,
  logo: `${SITE_URL}/logo.svg`,
  url: SITE_URL,
  // telephone: "+51-1-XXX-XXXX", // TODO owner: verify
  priceRange: "S/. 8–22",
  servesCuisine: ["Specialty Coffee", "Coffee", "Pastries"],
  cuisines: "Specialty Coffee",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alcanfores 183",
    addressLocality: "Miraflores",
    addressRegion: "Lima",
    postalCode: "15074",
    addressCountry: "PE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -12.1217,
    longitude: -77.0297,
  },
  hasMap: "https://www.google.com/maps/search/?api=1&query=Ursa+Coffee+Roasters+Alcanfores+183+Miraflores",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:30",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "08:30",
      closes: "20:00",
    },
  ],
  // TODO owner: replace with verified GBP aggregateRating before publishing.
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: 66,
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.instagram.com/ursacoffeeperu/",
    "https://www.facebook.com/ursacoffeeperu",
    "https://coffeepass.com.pe/ursa-coffee-roasters",
  ],
  knowsAbout: [
    "Specialty coffee",
    "Coffee roasting",
    "Filter coffee",
    "Pour-over",
    "Coffee subscription",
    "Lima coffee scene",
  ],
};

// Inline SVG favicon — outline-only BearMark on a dark-roast disc.
// Matches the in-app brand mark (outline-only, no fill introduced).
const FAVICON_DATA_URI =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='15' fill='%233B2417'/><circle cx='16' cy='16' r='13' fill='none' stroke='%23B8924A' stroke-width='1'/><text x='16' y='22' font-family='Georgia' font-size='16' fill='%23F4EBD9' text-anchor='middle'>U</text></svg>";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ursa Coffee Roasters — Strategic Dossier & Command Center",
    template: "%s · Ursa Coffee",
  },
  description:
    "Research-grounded brand, product, graphic, and marketing plan for Ursa Coffee Roasters, Alcanfores 183, Miraflores, Lima. Preserves the Art Nouveau / bear / roastery identity. No rebrand.",
  applicationName: "Ursa Coffee Strategic Dossier",
  authors: [{ name: "Ursa Coffee Strategic Studio" }],
  creator: "Ursa Coffee Strategic Studio",
  publisher: "Ursa Coffee Strategic Studio",
  keywords: [
    "Ursa Coffee",
    "specialty coffee",
    "Lima",
    "Miraflores",
    "coffee roasters",
    "Peru",
    "brand strategy",
    "coffee subscription",
    "Art Nouveau",
    "café Lima",
    "café Miraflores",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL + "/",
    languages: {
      en: SITE_URL + "/",
      es: SITE_URL + "/",
      "x-default": SITE_URL + "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_PE"],
    url: SITE_URL + "/",
    siteName: "Ursa Coffee Roasters",
    title: "Ursa Coffee Roasters — Strategic Dossier",
    description:
      "A roaster-first growth plan that protects the bear, the gram, and the green. Brand, product, graphic, and marketing plan for Ursa Coffee Roasters, Miraflores, Lima.",
    images: [
      {
        url: "/logo.svg",
        secureUrl: SITE_URL + "/logo.svg",
        width: 512,
        height: 512,
        alt: "Ursa Coffee Roasters — Art Nouveau bear mark on dark-roast disc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ursacoffeeperu",
    creator: "@ursacoffeeperu",
    title: "Ursa Coffee Roasters — Strategic Dossier",
    description:
      "A roaster-first growth plan that protects the bear, the gram, and the green. Miraflores, Lima.",
    images: ["/logo.svg"],
  },
  icons: {
    icon: FAVICON_DATA_URI,
    shortcut: FAVICON_DATA_URI,
    apple: "/logo.svg",
  },
  manifest: "/manifest.json",
  category: "food",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent dark-mode flash: apply saved theme before hydration.
            Light is the project default; dark is opt-in only via localStorage. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ursa-theme');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        {/* JSON-LD structured data for CafeOrCoffeeShop.
            Rendered inline so static-export crawlers see it without JS. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} ${oswald.variable} antialiased bg-background text-foreground`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-ursa-dark-roast focus:px-4 focus:py-2 focus:text-ursa-cream"
        >
          Skip to main content
        </a>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
