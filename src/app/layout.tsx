import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://nusrat-ullah.vercel.app"; // we'll update after deploy

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "M. Nusrat Ullah — Software Engineer | AI/ML & MLOps",
    template: "%s | M. Nusrat Ullah",
  },
  description:
    "Software Engineer specializing in AI/ML, MLOps, and production-grade systems. Building RAG, LLM, and Kubernetes-based solutions at Nybsys. MSc in CSE (AI/ML) at Jahangirnagar University.",
  keywords: [
    "M. Nusrat Ullah",
    "Nusrat Ullah",
    "Software Engineer",
    "AI Engineer",
    "ML Engineer",
    "MLOps Engineer",
    "RAG Systems",
    "LLM Applications",
    "Kubernetes",
    "Python Developer",
    "Bangladesh Developer",
    "Dhaka Software Engineer",
    "FastAPI",
    "Next.js Developer",
  ],
  authors: [{ name: "M. Nusrat Ullah", url: "https://github.com/M-Nusrat-Ullah" }],
  creator: "M. Nusrat Ullah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "M. Nusrat Ullah — Software Engineer | AI/ML & MLOps",
    description:
      "Building production RAG, LLM, and Kubernetes systems. AI/ML engineer with research background and 1200+ competitive programming problems solved.",
    siteName: "M. Nusrat Ullah",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "M. Nusrat Ullah — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Nusrat Ullah — Software Engineer | AI/ML & MLOps",
    description:
      "Building production RAG, LLM, and Kubernetes systems. AI/ML engineer at Nybsys.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* JSON-LD Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "M. Nusrat Ullah",
              url: SITE_URL,
              image: `${SITE_URL}/og-image.png`,
              jobTitle: "Junior Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Nybsys (Pvt) Ltd.",
                url: "https://nybsys.com",
              },
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Daffodil International University",
                },
                {
                  "@type": "CollegeOrUniversity",
                  name: "Jahangirnagar University",
                },
              ],
              sameAs: [
                "https://github.com/M-Nusrat-Ullah",
                "https://www.linkedin.com/in/nusrat-ullah-tahmid",
                "https://codeforces.com/profile/demonlord",
                "https://leetcode.com/u/nusrat_ullah/",
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "MLOps",
                "Kubernetes",
                "Python",
                "FastAPI",
                "RAG Systems",
                "Large Language Models",
                "5G Networks",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                addressCountry: "Bangladesh",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}