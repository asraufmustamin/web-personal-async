import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Asrauf Mustamin — IT Business Analyst & System Analyst Portfolio",
  description: "Portfolio profesional Muhammad Asrauf Mustamin. Aspiring IT Business Analyst & System Analyst dengan studi kasus nyata: Sistem Informasi Desa Cenrana & SPK TOPSIS. Menguasai analisis kebutuhan, pemodelan sistem, UAT, dan manajemen proyek end-to-end.",
  keywords: [
    "Muhammad Asrauf Mustamin",
    "IT Business Analyst",
    "System Analyst",
    "Portfolio BA",
    "Business Analyst Indonesia",
    "System Analyst Makassar",
    "Analisis Kebutuhan Sistem",
    "UAT Testing",
    "SDLC",
    "Studi Kasus Sistem Informasi",
    "SPK TOPSIS",
    "Sistem Informasi Desa",
    "Project Management",
    "Requirements Engineering",
  ],
  authors: [{ name: "Muhammad Asrauf Mustamin" }],
  creator: "Muhammad Asrauf Mustamin",
  publisher: "Muhammad Asrauf Mustamin",
  verification: {
    google: "google6b3a1b8073277a94",
  },
  metadataBase: new URL("https://asraufmustamin.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Asrauf Mustamin — IT Business Analyst & System Analyst",
    description: "Aspiring IT BA & System Analyst. Studi kasus nyata end-to-end: dari analisis kebutuhan, pemodelan ERD & arsitektur, hingga UAT dan serah terima sistem.",
    url: "https://asraufmustamin.site",
    siteName: "Asrauf Mustamin | IT BA & SA Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asrauf Mustamin — IT Business Analyst & System Analyst",
    description: "Portfolio profesional dengan studi kasus nyata Sistem Informasi Desa Cenrana & SPK TOPSIS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Asrauf Mustamin",
              url: "https://asraufmustamin.site",
              jobTitle: "Aspiring IT Business Analyst & System Analyst",
              description: "Fresh graduate Sistem Informasi dengan pengalaman nyata dalam analisis kebutuhan, pemodelan sistem, UAT, dan manajemen proyek end-to-end.",
              sameAs: [
                "https://www.linkedin.com/in/asrauf-mustamin",
                "https://github.com/asraufmustamin",
                "https://www.instagram.com/asrfmst22_/"
              ],
              knowsAbout: [
                "Business Analysis",
                "System Analysis",
                "Requirements Engineering",
                "User Acceptance Testing (UAT)",
                "SDLC Management",
                "ERD & Database Modeling",
                "Stakeholder Management",
                "Web Development",
                "UI/UX Design"
              ]
            })
          }}
        />
      </head>
      <body className={`${outfit.variable} ${plusJakartaSans.variable} font-sans bg-bg-main text-text-main antialiased selection:bg-primary/30 selection:text-white overflow-x-hidden`}>
        <CustomCursor />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
