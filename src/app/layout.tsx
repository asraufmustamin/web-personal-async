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
  title: "Muhammad Asrauf Mustamin - Portofolio",
  description: "Portofolio resmi Muhammad Asrauf Mustamin, Lulusan Sistem dan Teknologi Informasi Cumlaude (IPK 3,93/4,00). Spesialis IT Business Analyst & System Analyst yang fokus pada perancangan alur bisnis, pemodelan sistem terpadu, UAT, dan transformasi digital.",
  keywords: [
    "Muhammad Asrauf Mustamin",
    "Portofolio Asrauf Mustamin",
    "IT Business Analyst",
    "System Analyst",
    "Portfolio BA SA",
    "Business Analyst Makassar",
    "System Analyst Indonesia",
    "Analisis Kebutuhan Sistem",
    "Sistem Informasi Desa Cenrana",
    "SPK TOPSIS",
    "UAT Testing",
    "SDLC",
    "Institut Teknologi dan Bisnis Nobel Indonesia",
  ],
  authors: [{ name: "Muhammad Asrauf Mustamin" }],
  creator: "Muhammad Asrauf Mustamin",
  publisher: "Muhammad Asrauf Mustamin",
  verification: {
    google: "google51fc19d406a7d5a7",
  },
  metadataBase: new URL("https://asraufmustamin.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muhammad Asrauf Mustamin - Portofolio",
    description: "Portofolio resmi Muhammad Asrauf Mustamin. Lulusan Cumlaude IT & Sistem Informasi. IT Business Analyst & System Analyst dengan studi kasus nyata end-to-end.",
    url: "https://asraufmustamin.site",
    siteName: "Muhammad Asrauf Mustamin - Portofolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Asrauf Mustamin - Portofolio",
    description: "Portofolio resmi IT Business Analyst & System Analyst. Lulusan Cumlaude Sistem dan Teknologi Informasi.",
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
              jobTitle: "IT Business Analyst & System Analyst",
              description: "Muhammad Asrauf Mustamin adalah seorang IT Business Analyst, System Analyst, dan Peneliti Lulusan Sistem dan Teknologi Informasi (IPK 3,93/4,00 Cumlaude) dari Institut Teknologi dan Bisnis Nobel Indonesia.",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Institut Teknologi dan Bisnis Nobel Indonesia"
              },
              sameAs: [
                "https://www.linkedin.com/in/asrauf-mustamin",
                "https://github.com/asraufmustamin",
                "https://www.instagram.com/asrfmst22_/",
                "https://garuda.kemdikbudristek.go.id/author/detail/3858054"
              ],
              knowsAbout: [
                "IT Business Analyst",
                "System Analyst",
                "Requirements Engineering",
                "User Acceptance Testing (UAT)",
                "SDLC Management",
                "ERD & Database Modeling",
                "Sistem Informasi Manajemen",
                "Publikasi Ilmiah & Pengabdian Masyarakat",
                "UI/UX & Web Development"
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
