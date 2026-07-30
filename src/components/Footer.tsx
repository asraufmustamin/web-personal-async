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

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export default function Footer() {
  return (
    <FooterComponent
      logo={<img src="/logo-async-gold.png" alt="ASYNC Logo" className="w-[140px] md:w-[180px] h-auto object-contain" />}
      brandName=""
      socialLinks={[
        {
          icon: <InstagramIcon className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" />,
          href: "https://www.instagram.com/asrfmst22_/",
          label: "Instagram",
        },
        {
          icon: <LinkedInIcon className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" />,
          href: "https://www.linkedin.com/in/muhammadasraufmustamin/",
          label: "LinkedIn",
        },
        {
          icon: <GitHubIcon className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" />,
          href: "https://github.com/asraufmustamin",
          label: "GitHub",
        }
      ]}
      mainLinks={[
        { href: "#beranda", label: "Beranda" },
        { href: "#tentang", label: "Tentang" },
        { href: "#keahlian", label: "Keahlian" },
        { href: "#proyek", label: "Portofolio" },
        { href: "#kontak", label: "Kontak" },
      ]}
      legalLinks={[]}
      copyright={{
        text: `© ${new Date().getFullYear()} ASYNC by Asrauf Mustamin. Built with passion.`,
        license: "All rights reserved",
      }}
    />
  );
}

