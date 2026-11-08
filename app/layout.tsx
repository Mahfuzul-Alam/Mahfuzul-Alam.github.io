import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { CookieBanner } from "@/components/shared/CookieBanner";
import { MobileBottomDock } from "@/components/navigation/MobileBottomDock";
import { Analytics } from "@/components/shared/Analytics";
import { personalData } from "@/data/personal";

export const metadata: Metadata = {
  metadataBase: new URL("https://mahfuzul-alam.github.io"),
  title: {
    default: `${personalData.name} — ${personalData.title}`,
    template: `%s | ${personalData.name}`,
  },
  description: `${personalData.headline} ${personalData.shortBio}`,
  keywords: [
    "Mahfuzul Alam",
    "Software Development Engineer in Test",
    "SDET",
    "Test Automation",
    "Playwright",
    "Cypress",
    "Selenium",
    "Software Quality Engineering",
    "Applied AI in Software Engineering",
    "Reliability Engineering",
    "Dhaka, Bangladesh",
  ],
  authors: [{ name: personalData.name, url: personalData.github }],
  creator: personalData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mahfuzul-alam.github.io/",
    title: `${personalData.name} — ${personalData.title}`,
    description: personalData.headline,
    siteName: `${personalData.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${personalData.name} — ${personalData.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.name} — ${personalData.title}`,
    description: personalData.headline,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-apple-bg text-apple-text min-h-screen flex flex-col selection:bg-apple-blue selection:text-white pb-24 md:pb-0">
        <Analytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomDock />
        <CookieBanner />
      </body>
    </html>
  );
}
