import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
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
  title: "Muhammad Asrauf Mustamin | ASYNC Studio",
  description: "Portfolio resmi Muhammad Asrauf Mustamin. Menampilkan proyek unggulan, keahlian desain web, dan pengalaman profesional di bawah payung ASYNC Studio.",
  keywords: ["Muhammad Asrauf Mustamin", "ASYNC", "Portfolio", "Web Developer", "UI/UX Designer", "Website Makassar", "Freelance Developer"],
  authors: [{ name: "Muhammad Asrauf Mustamin" }],
  creator: "Muhammad Asrauf Mustamin",
  openGraph: {
    title: "Muhammad Asrauf Mustamin | ASYNC Studio",
    description: "Portfolio resmi Muhammad Asrauf Mustamin. Menampilkan proyek unggulan, keahlian desain web, dan pengalaman profesional.",
    url: "https://web-personal-async.vercel.app/", // Bisa diganti dengan domain asli nanti
    siteName: "ASYNC Portfolio",
    locale: "id_ID",
    type: "website",
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
      </head>
      <body className={`${outfit.variable} ${plusJakartaSans.variable} font-sans bg-bg-main text-text-main antialiased selection:bg-primary/30 selection:text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
