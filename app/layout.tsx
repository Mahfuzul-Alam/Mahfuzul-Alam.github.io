import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { personalData } from "@/data/personal";

export const metadata: Metadata = {
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
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.name} — ${personalData.title}`,
    description: personalData.headline,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-apple-bg text-apple-text min-h-screen flex flex-col selection:bg-apple-blue selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
