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
  alternates: {
    canonical: "https://mahfuzul-alam.github.io/",
  },
  verification: {
    google: "BgZm8HG7YVZz2QO7pLeFe8e3M2JJzKVl_QUeCvSn1AY",
  },
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Security & Privacy Hardening */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), payment=()" />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(!s&&d)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://mahfuzul-alam.github.io/#person",
                  "name": personalData.name,
                  "jobTitle": personalData.title,
                  "description": `${personalData.headline} ${personalData.shortBio}`,
                  "url": "https://mahfuzul-alam.github.io/",
                  "image": "https://mahfuzul-alam.github.io/images/mahfuzul-alam.jpg",
                  "sameAs": [personalData.github, personalData.linkedin],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Dhaka",
                    "addressCountry": "Bangladesh"
                  },
                  "alumniOf": {
                    "@type": "EducationalOrganization",
                    "name": "American International University-Bangladesh (AIUB)"
                  },
                  "knowsAbout": [
                    "Software Development Engineer in Test (SDET)",
                    "Test Automation Engineering",
                    "Playwright",
                    "Cypress",
                    "Selenium WebDriver",
                    "End-to-End (E2E) Testing",
                    "CI/CD Reliability",
                    "Applied AI in Software Testing",
                    "Heuristic Flakiness Detection"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mahfuzul-alam.github.io/#website",
                  "url": "https://mahfuzul-alam.github.io/",
                  "name": `${personalData.name} — Portfolio & SDET Engineering Hub`,
                  "description": personalData.headline,
                  "publisher": {
                    "@id": "https://mahfuzul-alam.github.io/#person"
                  }
                }
              ]
            }),
          }}
        />
      </head>
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
