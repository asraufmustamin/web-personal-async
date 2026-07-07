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
  title: "Muhammad Asrauf Mustamin | ASYNC by Asrauf Mustamin",
  description: "Portfolio resmi Muhammad Asrauf Mustamin. Menampilkan proyek unggulan, keahlian desain web, dan pengalaman profesional di bawah payung ASYNC by Asrauf Mustamin.",
  keywords: ["Muhammad Asrauf Mustamin", "ASYNC", "Portfolio", "Web Developer", "UI/UX Designer", "Website Makassar", "Freelance Developer"],
  authors: [{ name: "Muhammad Asrauf Mustamin" }],
  creator: "Muhammad Asrauf Mustamin",
  verification: {
    google: "google6b3a1b8073277a94",
  },
  alternates: {
    canonical: "https://asraufmustamin.vercel.app/",
  },
  openGraph: {
    title: "Muhammad Asrauf Mustamin | ASYNC by Asrauf Mustamin",
    description: "Portfolio resmi Muhammad Asrauf Mustamin. Menampilkan proyek unggulan, keahlian desain web, dan pengalaman profesional.",
    url: "https://asraufmustamin.vercel.app/",
    siteName: "ASYNC by Asrauf Mustamin",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
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
              url: "https://asraufmustamin.vercel.app/",
              jobTitle: "Digital Solution Partner & Systems Analyst",
              sameAs: [
                "https://www.linkedin.com/in/asrauf-mustamin",
                "https://github.com/asraufmustamin"
              ],
              knowsAbout: [
                "Web Development",
                "System Analysis",
                "Data Management",
                "UI/UX Design"
              ]
            })
          }}
        />
      </head>
      <body className={`${outfit.variable} ${plusJakartaSans.variable} font-sans bg-bg-main text-text-main antialiased selection:bg-primary/30 selection:text-white overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
