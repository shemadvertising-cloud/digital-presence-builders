import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/web-dev-hero.jpg";
import designImg from "@/assets/web-design-process.jpg";
import teamImg from "@/assets/web-dev-team.jpg";
import responsiveImg from "@/assets/web-responsive.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Website Development Services in Karachi | Shem Advertising" },
      {
        name: "description",
        content:
          "Leading website development company in Karachi. We build custom, SEO-friendly, mobile-responsive websites and e-commerce stores that convert.",
      },
      { property: "og:title", content: "Website Development Services in Karachi | Shem Advertising" },
      {
        property: "og:description",
        content:
          "Custom websites, e-commerce, and web apps built by Karachi's trusted web development team. Book a free consultation today.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: WebsiteDevelopmentPage,
});

/* ---------------- Reusable bits ---------------- */

const BtnPrimary = ({
  children,
  href = "#contact",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-7 py-3.5 font-display font-bold text-brand-navy shadow-[0_10px_30px_-10px_rgba(255,192,10,0.6)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(255,192,10,0.75)] ${className}`}
  >
    {children}
    <span aria-hidden>→</span>
  </a>
);

const SectionHeading = ({
  eyebrow,
  title,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  center?: boolean;
}) => (
  <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    {eyebrow && (
      <span className="inline-block rounded-full border border-brand-navy/15 bg-brand-navy/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy">
        {eyebrow}
      </span>
    )}
    <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-brand-navy md:text-4xl lg:text-5xl">
      {title}
    </h2>
  </div>
);

const CheckIcon = () => (
  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-yellow text-brand-navy">
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </span>
);

/* ---------------- Page ---------------- */

function WebsiteDevelopmentPage() {
  return (
    <div className="min-h-screen bg-brand-white font-sans text-brand-black">
      <Nav />
      <Hero />
      <Intro />
      <WhyChoose />
      <FirstImpression />
      <DevCompany />
      <Industries />
      <WhyPrefer />
      <FAQs />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-brand-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-extrabold text-brand-navy">
          Shem<span className="text-brand-yellow">.</span>
        </a>
        <nav className="hidden gap-8 text-sm font-semibold text-brand-navy md:flex">
          <a href="#why" className="hover:text-brand-yellow">Why Us</a>
          <a href="#services" className="hover:text-brand-yellow">Services</a>
          <a href="#industries" className="hover:text-brand-yellow">Industries</a>
          <a href="#faqs" className="hover:text-brand-yellow">FAQs</a>
        </nav>
        <BtnPrimary href="#contact" className="px-5 py-2.5 text-sm">Book a Call</BtnPrimary>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-brand-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(255,192,10,0.35), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(255,192,10,0.18), transparent)" }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-block rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
            Website Development Services in Karachi
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] md:text-5xl lg:text-6xl">
            We Don’t Just Build Websites —
            <span className="text-brand-yellow"> We Build Digital Experiences.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-white/80">
            Visually stunning, blazing-fast, and conversion-driven websites engineered by
            Karachi’s trusted web development team.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <BtnPrimary href="#contact">Book a Free Consultation</BtnPrimary>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-brand-white/30 px-7 py-3.5 font-display font-semibold text-brand-white transition-colors hover:bg-brand-white hover:text-brand-navy"
            >
              Explore Services
            </a>
          </div>
          <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-brand-white/10 pt-6">
            <Stat value="50+" label="Projects Delivered" />
            <Stat value="100%" label="Custom Designed" />
            <Stat value="24/7" label="Support" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-brand-yellow/30 blur-2xl" aria-hidden />
          <img
            src={heroImg}
            alt="Website development workspace by Shem Advertising"
            width={1536}
            height={1024}
            className="relative w-full rounded-3xl shadow-2xl ring-1 ring-brand-white/10"
          />
        </div>
      </div>
    </section>
  );
}

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="font-display text-2xl font-extrabold text-brand-yellow md:text-3xl">{value}</div>
    <div className="mt-1 text-xs uppercase tracking-wider text-brand-white/70">{label}</div>
  </div>
);

function Intro() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 text-center">
      <h2 className="font-display text-3xl font-extrabold leading-tight text-brand-navy md:text-4xl">
        Our Website Development Services in Karachi help businesses build
        high-performing digital experiences.
      </h2>
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-brand-black/80">
        At Shem Advertising, we don’t just create websites, we build digital experiences. As a
        leading website development company in Karachi, our mission is to deliver websites that
        are not only visually stunning but also optimized for performance, sales, and scalability.
      </p>
      <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-brand-black/80">
        Whether you need a business website, e-commerce store, or custom web application, our web
        developers in Karachi combine creativity with technical expertise to help your brand stand
        out online.
      </p>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { t: "Custom Website Design", d: "unique, brand-focused designs (no cookie-cutter templates)." },
    { t: "Mobile-Friendly Websites", d: "responsive across all devices (Google loves this)." },
    { t: "SEO-Friendly Development", d: "built with clean code & optimized structure." },
    { t: "Fast-Loading Pages", d: "speed-optimized for higher rankings & better UX." },
    { t: "E-Commerce Solutions", d: "seamless online stores with secure payment integration." },
    { t: "Ongoing Support & Maintenance", d: "we don’t just deliver, we stay with you." },
  ];
  return (
    <section id="why" className="bg-brand-navy py-20 text-brand-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Why Choose Our Website Development Services in Karachi?
          </h2>
          <p className="mt-5 text-lg text-brand-white/80">
            Our Website Development Services in Karachi are designed to deliver speed, performance,
            and conversions. Here’s why businesses trust Shem Advertising’s website design &
            development services:
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.t}
              className="group relative overflow-hidden rounded-2xl border border-brand-white/10 bg-brand-white/5 p-7 transition-all hover:-translate-y-1 hover:border-brand-yellow/50 hover:bg-brand-white/10"
            >
              <div className="font-display text-5xl font-extrabold text-brand-yellow/30">
                0{i + 1}
              </div>
              <h3 className="mt-2 font-display text-xl font-bold text-brand-white">{it.t}</h3>
              <p className="mt-2 text-brand-white/75">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FirstImpression() {
  const items = [
    "Intuitive user experience (UX)",
    "Eye-catching layouts & visuals",
    "Clear call-to-actions (CTAs)",
    "Optimized landing pages for lead generation",
    "Interactive, mobile-first designs",
  ];
  return (
    <section id="services" className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 rounded-3xl bg-brand-yellow/30 blur-2xl" aria-hidden />
          <img
            src={designImg}
            alt="Web design process at Shem Advertising"
            width={1280}
            height={896}
            loading="lazy"
            className="relative w-full rounded-3xl shadow-xl"
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Web Design"
            title={
              <>
                Website Development Services in Karachi –{" "}
                <span className="text-brand-yellow">A First Impression That Lasts</span>
              </>
            }
          />
          <p className="mt-5 text-lg leading-relaxed text-brand-black/80">
            Your website design is the first thing customers notice. That’s why we provide
            professional web design services in Karachi, ensuring your site looks modern,
            user-friendly, and conversion-driven.
          </p>
          <p className="mt-4 font-display font-bold text-brand-navy">Our web design company focuses on</p>
          <ul className="mt-4 space-y-3">
            {items.map((i) => (
              <li key={i} className="flex items-start gap-3 text-brand-black/85">
                <CheckIcon />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function DevCompany() {
  const items = [
    { t: "Custom Web Development", d: "tailor-made solutions for your business." },
    { t: "E-Commerce Development", d: "Shopify, WooCommerce, Magento." },
    { t: "CMS Development", d: "WordPress, Drupal, Joomla." },
    { t: "Web Applications", d: "portals, dashboards, booking systems." },
    { t: "API Integrations", d: "payment gateways, CRMs, third-party tools." },
  ];
  return (
    <section className="bg-brand-navy/5 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Development"
            title={
              <>
                Web Development Company in Karachi{" "}
                <span className="text-brand-yellow">Turning Ideas into Reality</span>
              </>
            }
          />
          <p className="mt-5 text-lg leading-relaxed text-brand-black/80">
            From simple corporate websites to complex web applications, our development team builds
            scalable, secure, and high-performing websites.
          </p>
          <p className="mt-4 font-display font-bold text-brand-navy">Our expertise includes</p>
          <ul className="mt-4 space-y-3">
            {items.map((it) => (
              <li key={it.t} className="flex items-start gap-3 text-brand-black/85">
                <CheckIcon />
                <span>
                  <strong className="text-brand-navy">{it.t}</strong> – {it.d}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-brand-navy/20 blur-2xl" aria-hidden />
          <img
            src={teamImg}
            alt="Shem Advertising web development team"
            width={1280}
            height={896}
            loading="lazy"
            className="relative w-full rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const items = [
    "E-Commerce & Retail",
    "Corporate & SMEs",
    "Healthcare & Clinics",
    "Education & E-Learning",
    "Real Estate & Property",
    "Startups & Tech Companies",
  ];
  return (
    <section id="industries" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Industries"
          center
          title={<>Industries We Serve</>}
        />
        <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-brand-black/80">
          Our website development services in Karachi cater to businesses of all sizes and industries
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div
              key={i}
              className="group flex items-center gap-4 rounded-2xl border border-brand-navy/10 bg-brand-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-yellow hover:shadow-lg"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-navy text-brand-yellow transition-colors group-hover:bg-brand-yellow group-hover:text-brand-navy">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
              </div>
              <span className="font-display font-bold text-brand-navy">{i}</span>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-center text-brand-black/75">
          As a trusted provider of Website Development Services in Karachi, we ensure every project
          meets international performance standards.
        </p>
      </div>
    </section>
  );
}

function WhyPrefer() {
  const items = [
    "Local expertise with a global standard of development",
    "Transparent pricing & no hidden costs",
    "In-house team of designers & developers",
    "Proven track record of 50+ successful website projects",
    "SEO + Performance Marketing integration (extra advantage vs normal dev companies)",
  ];
  return (
    <section className="bg-brand-navy py-20 text-brand-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-brand-yellow/30 blur-2xl" aria-hidden />
          <img
            src={responsiveImg}
            alt="Responsive websites built by Shem Advertising"
            width={1280}
            height={896}
            loading="lazy"
            className="relative w-full rounded-3xl shadow-2xl"
          />
        </div>
        <div>
          <span className="inline-block rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow">
            The Shem Edge
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Why Businesses in Karachi Prefer{" "}
            <span className="text-brand-yellow">Shem Advertising</span>
          </h2>
          <ul className="mt-8 space-y-4">
            {items.map((i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-brand-white/10 bg-brand-white/5 p-4 text-brand-white/90"
              >
                <CheckIcon />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FAQs() {
  const faqs = [
    {
      q: "How much does website development in Karachi cost?",
      a: "It depends on your needs. A basic business site may start from PKR 50,000, while advanced e-commerce solutions cost more.",
    },
    {
      q: "Do you offer custom website design or use templates?",
      a: "We specialize in custom web design services tailored to your brand identity.",
    },
    {
      q: "Will my website be SEO-friendly?",
      a: "Yes! We develop websites optimized for Google ranking, speed, and user experience.",
    },
    {
      q: "Can you also maintain and update my website after launch?",
      a: "Absolutely! Our packages include ongoing website maintenance and support.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="FAQs"
          center
          title={<>FAQs – Website Design & Development in Karachi</>}
        />
        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border bg-brand-white transition-all ${
                  isOpen ? "border-brand-yellow shadow-lg" : "border-brand-navy/15"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display font-bold text-brand-navy">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-yellow text-brand-navy transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-brand-black/80">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-brand-navy p-10 text-center text-brand-white md:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(255,192,10,0.4), transparent)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(255,192,10,0.25), transparent)" }}
        />
        <div className="relative">
          <h2 className="font-display text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Get Started with the{" "}
            <span className="text-brand-yellow">Best Website Development Company</span> in Karachi
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-white/85">
            Your website should be more than just an online presence — it should be a
            lead-generating machine. Partner with Shem Advertising, the trusted name in website
            development in Karachi, and let us design, develop, and optimize your digital home.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <BtnPrimary href="mailto:team@shemadvertising.com">Book a Free Consultation Today</BtnPrimary>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-brand-white/80">
            <a href="https://shemadvertising.com" className="hover:text-brand-yellow">
              shemadvertising.com
            </a>
            <span aria-hidden className="text-brand-yellow">•</span>
            <a href="mailto:team@shemadvertising.com" className="hover:text-brand-yellow">
              team@shemadvertising.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-brand-navy/10 bg-brand-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-brand-navy md:flex-row">
        <div className="font-display font-bold">
          Shem Advertising<span className="text-brand-yellow">.</span>
        </div>
        <div>© {new Date().getFullYear()} Shem Advertising. All rights reserved.</div>
      </div>
    </footer>
  );
}
