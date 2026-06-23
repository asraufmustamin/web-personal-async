import { Button } from "@/components/ui/button";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const defaultCompanies = [
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg",
    alt: "Arc",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg",
    alt: "Descript",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg",
    alt: "Mercury",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg",
    alt: "Ramp",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg",
    alt: "Retool",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg",
    alt: "Watershed",
  },
];

const defaultAchievements = [
  { label: "Companies Supported", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

export const About3 = ({
  title = "About Us",
  description = "Shadcnblocks is a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age.",
  mainImage = {
    src: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    alt: "placeholder",
  },
  secondaryImage = {
    src: "https://shadcnblocks.com/images/block/placeholder-2.svg",
    alt: "placeholder",
  },
  breakout = {
    src: "https://shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
    title: "Hundreds of blocks at Shadcnblocks.com",
    description:
      "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
    buttonText: "Discover more",
    buttonUrl: "https://shadcnblocks.com",
  },
  companiesTitle = "Valued by clients worldwide",
  companies = defaultCompanies,
  achievementsTitle = "Our Achievements in Numbers",
  achievementsDescription = "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="py-16 md:py-24" id="tentang">
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left items-end">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-main tracking-tighter">
            {title.split(' ')[0]} <span className="gradient-text">{title.split(' ').slice(1).join(' ')}</span>.
          </h2>
          <p className="text-text-muted font-medium leading-relaxed">{description}</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-3xl object-cover lg:col-span-2 shadow-lg"
          />
          <div className="flex flex-col gap-5 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-5 rounded-3xl bg-bg-card border border-black/5 p-6 shadow-sm hover:shadow-md transition-shadow md:w-1/2 lg:w-auto">
              <img
                src={breakout.src}
                alt={breakout.alt}
                className="mr-auto h-12 object-contain"
              />
              <div>
                <p className="mb-2 text-xl font-bold text-text-main">{breakout.title}</p>
                <p className="text-text-muted text-sm leading-relaxed font-medium">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto rounded-xl border-black/10 font-bold" asChild>
                <a href={breakout.buttonUrl}>
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-3xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto shadow-sm"
            />
          </div>
        </div>
        
        {/* Achievements */}
        <div className="relative overflow-hidden rounded-3xl bg-bg-card border border-black/5 p-8 md:p-12 mt-16 shadow-sm">
          <div className="flex flex-col gap-4 text-center md:text-left z-10 relative">
            <h3 className="text-3xl font-bold font-serif tracking-tight text-text-main">{achievementsTitle}</h3>
            <p className="max-w-screen-sm text-text-muted font-medium">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center z-10 relative">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-2" key={item.label + idx}>
                <span className="text-4xl md:text-5xl font-bold gradient-text">
                  {item.value}
                </span>
                <p className="font-bold text-text-muted text-sm uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-0 hidden h-full w-full bg-[linear-gradient(to_right,rgba(248,157,10,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,157,10,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </div>
      </div>
    </section>
  );
};
