'use client';

import { Footer as FooterComponent } from "@/components/ui/footer";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 4l11.733 16h4.267l-11.733-16z" /><path d="M4 20l6.768-6.768m2.46-2.46L20 4" /></svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export default function Footer() {
  return (
    <FooterComponent
      logo={<img src="/logo async gold.png" alt="ASYNC Logo" className="w-[140px] md:w-[180px] h-auto object-contain" />}
      brandName=""
      socialLinks={[
        {
          icon: <InstagramIcon className="h-5 w-5 text-gray-600" />,
          href: "#",
          label: "Instagram",
        },
        {
          icon: <FacebookIcon className="h-5 w-5 text-gray-600" />,
          href: "#",
          label: "Facebook",
        },
        {
          icon: <XIcon className="h-5 w-5 text-gray-600" />,
          href: "#",
          label: "X",
        },
      ]}
      mainLinks={[
        { href: "#beranda", label: "Beranda" },
        { href: "#tentang", label: "Tentang" },
        { href: "#keahlian", label: "Keahlian" },
        { href: "#proyek", label: "Proyek" },
        { href: "#kontak", label: "Kontak" },
      ]}
      legalLinks={[
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Terms of Service" },
      ]}
      copyright={{
        text: `© ${new Date().getFullYear()} ASYNC. Built with passion.`,
        license: "All rights reserved",
      }}
    />
  );
}
