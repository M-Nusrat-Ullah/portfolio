import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { SITE_URL, links, profile } from "@/data/site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const defaultTitle = `${profile.name}: ${profile.headline}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: defaultTitle, template: `%s | ${profile.name}` },
  description: profile.description,
  authors: [{ name: profile.name, url: links.github }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: profile.name,
    title: defaultTitle,
    description: profile.oneLiner,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: defaultTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: profile.oneLiner,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f12" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: SITE_URL,
  image: `${SITE_URL}/avatar.jpg`,
  worksFor: { "@type": "Organization", name: "Nybsys (Pvt.) Ltd.", url: "https://nybsys.com" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Daffodil International University" },
    { "@type": "CollegeOrUniversity", name: "Jahangirnagar University" },
  ],
  sameAs: [links.github, links.linkedin, links.codeforces, links.leetcode],
  knowsAbout: ["5G core networks", "RADIUS / EAP-AKA", "Kubernetes", "Telecom platforms", "Machine learning"],
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "Bangladesh" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SiteHeader />
          <main id="main" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
