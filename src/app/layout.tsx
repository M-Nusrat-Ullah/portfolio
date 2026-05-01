import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "M. Nusrat Ullah — Software Engineer | AI/ML & MLOps",
  description:
    "Software Engineer specializing in AI/ML, MLOps, and production-grade systems. Building RAG, LLM, and Kubernetes-based solutions.",
  keywords: [
    "M. Nusrat Ullah",
    "Software Engineer",
    "AI/ML",
    "MLOps",
    "RAG",
    "LLM",
    "Kubernetes",
    "Python",
    "Bangladesh",
  ],
  authors: [{ name: "M. Nusrat Ullah" }],
  openGraph: {
    title: "M. Nusrat Ullah — Software Engineer",
    description: "AI/ML & MLOps Engineer building production RAG & LLM systems.",
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
      </body>
    </html>
  );
}