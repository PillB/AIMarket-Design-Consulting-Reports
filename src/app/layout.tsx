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

export const metadata: Metadata = {
  title: "Ursa Coffee Roasters — Strategic Dossier & Command Center",
  description:
    "Research-grounded brand, product, graphic, and marketing plan for Ursa Coffee Roasters, Alcanfores 183, Miraflores, Lima. Preserves the Art Nouveau / bear / roastery identity. No rebrand.",
  keywords: [
    "Ursa Coffee",
    "specialty coffee",
    "Lima",
    "Miraflores",
    "coffee roasters",
    "Peru",
    "brand strategy",
  ],
  authors: [{ name: "Ursa Coffee Strategic Studio" }],
  icons: {
    icon:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='15' fill='%233B2417'/><circle cx='16' cy='16' r='13' fill='none' stroke='%23B8924A' stroke-width='1'/><text x='16' y='22' font-family='Georgia' font-size='16' fill='%23F4EBD9' text-anchor='middle'>U</text></svg>",
  },
  openGraph: {
    title: "Ursa Coffee Roasters — Strategic Dossier",
    description:
      "A roaster-first growth plan that protects the bear, the gram, and the green.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorant.variable} ${oswald.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
