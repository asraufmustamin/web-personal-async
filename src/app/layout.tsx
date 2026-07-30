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
  description: "Portofolio Muhammad Asrauf Mustamin, Fresh Graduate Sistem dan Teknologi Informasi Cumlaude (IPK 3,93/4,00) dari ITB Nobel Indonesia. Berfokus mengejar karier sebagai IT Business Analyst & System Analyst melalui studi kasus proyek nyata.",
  keywords: [
    "Muhammad Asrauf Mustamin",
    "Portofolio Asrauf Mustamin",
    "Fresh Graduate IT",
    "Lulusan Baru Sistem Informasi",
    "Aspiring IT Business Analyst",
    "Aspiring System Analyst",
    "LinkedIn Asrauf Mustamin",
    "GitHub Asrauf Mustamin",
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
    description: "Portofolio Muhammad Asrauf Mustamin — Fresh Graduate Sistem & Teknologi Informasi Cumlaude (IPK 3,93/4,00). Bersemangat mengejar karier sebagai IT Business Analyst & System Analyst.",
    url: "https://asraufmustamin.site",
    siteName: "Muhammad Asrauf Mustamin - Portofolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Asrauf Mustamin - Portofolio",
    description: "Portofolio Fresh Graduate Sistem & Teknologi Informasi Cumlaude (IPK 3,93/4,00). Aspiring IT Business Analyst & System Analyst.",
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
import InteractiveBackground from "@/components/ui/InteractiveBackground";

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
              jobTitle: "Fresh Graduate | Aspiring IT Business Analyst & System Analyst",
              description: "Muhammad Asrauf Mustamin adalah Lulusan Baru (Fresh Graduate) Sistem dan Teknologi Informasi dengan predikat Cumlaude (IPK 3,93/4,00) dari Institut Teknologi dan Bisnis Nobel Indonesia. Bersemangat mengejar karier sebagai IT Business Analyst & System Analyst melalui penerapan langsung studi kasus proyek.",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Institut Teknologi dan Bisnis Nobel Indonesia"
              },
              sameAs: [
                "https://www.linkedin.com/in/muhammadasraufmustamin/",
                "https://github.com/asraufmustamin",
                "https://www.instagram.com/asrfmst22_/",
                "https://garuda.kemdikbudristek.go.id/author/detail/3858054"
              ],
              knowsAbout: [
                "Business Analysis",
                "System Analysis",
                "Requirements Engineering",
                "User Acceptance Testing (UAT)",
                "SDLC Management",
                "ERD & Database Modeling",
                "Sistem Informasi Manajemen",
                "Fresh Graduate IT"
              ]
            })
          }}
        />
      </head>
      <body className={`${outfit.variable} ${plusJakartaSans.variable} font-sans bg-bg-main text-text-main antialiased selection:bg-primary/30 selection:text-white overflow-x-hidden relative`}>
        <CustomCursor />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} themes={["light", "dark", "custom"]}>
          <InteractiveBackground />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
