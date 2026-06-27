import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/perf-hero.jpg";
import funnelImg from "@/assets/perf-funnel.jpg";
import platformsImg from "@/assets/perf-platforms.jpg";
import resultsImg from "@/assets/perf-results.jpg";

export const Route = createFileRoute("/performance-marketing")({
  head: () => ({
    meta: [
      { title: "Performance Marketing in Pakistan | Shem Advertising" },
      {
        name: "description",
        content:
          "Data-driven performance marketing services in Pakistan, UAE, UK & USA. Meta, Google, TikTok, YouTube & LinkedIn ads built to convert.",
      },
      { property: "og:title", content: "Performance Marketing in Pakistan | Shem Advertising" },
      {
        property: "og:description",
        content:
          "Turn ad spend into real revenue with Shem Advertising's full-funnel performance marketing campaigns.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: PerformanceMarketingPage,
});

/* ---------------- Reusable bits ---------------- */

const BtnPrimary = ({
  children,
  href = "#audit",
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

const CheckIcon = () => (
  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-yellow text-brand-navy">
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </span>
);

const XIcon = () => (
  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-brand-yellow text-brand-yellow">
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  </span>
);

const SectionHeading = ({
  eyebrow,
  title,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) => (
  <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    {eyebrow && (
      <span
        className={`inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
          light
            ? "border border-brand-yellow/40 bg-brand-yellow/10 text-brand-yellow"
            : "border border-brand-navy/15 bg-brand-navy/5 text-brand-navy"
        }`}
      >
        {eyebrow}
      </span>
    )}
    <h2
      className={`mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl ${
        light ? "text-brand-white" : "text-brand-navy"
      }`}
    >
      {title}
    </h2>
  </div>
);

/* ---------------- Page ---------------- */

function PerformanceMarketingPage() {
  return (
    <div className="min-h-screen bg-brand-white font-sans text-brand-black">
      <Nav />
      <Hero />
      <PainPoints />
      <ClicksDontPay />
      <WhyChoose />
      <Platforms />
      <ScaleReady />
      <CaseStudies />
      <FAQs />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-brand-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-extrabold text-brand-navy">
          Shem<span className="text-brand-yellow">.</span>
        </Link>
        <nav className="hidden gap-8 text-sm font-semibold text-brand-navy md:flex">
          <a href="#why" className="hover:text-brand-yellow">Why Us</a>
          <a href="#platforms" className="hover:text-brand-yellow">Platforms</a>
          <a href="#cases" className="hover:text-brand-yellow">Case Studies</a>
          <a href="#faqs" className="hover:text-brand-yellow">FAQs</a>
        </nav>
        <BtnPrimary href="#audit" className="px-5 py-2.5 text-sm">Free Audit</BtnPrimary>
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
            Performance Marketing
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] md:text-5xl lg:text-6xl">
            Turn Ad Spend Into{" "}
            <span className="text-brand-yellow">Real Revenue</span> with Performance Marketing in Pakistan
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-white/85">
            At Shem Advertising, we don’t just run ads we build full-funnel campaigns that convert.
            From Meta to Google, TikTok to YouTube, our data-driven performance marketing services
            help businesses in Pakistan, UAE, UK, and USA grow faster with measurable results.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <BtnPrimary href="#audit">Request a Account Audit</BtnPrimary>
            <a
              href="#platforms"
              className="inline-flex items-center justify-center rounded-full border border-brand-white/30 px-7 py-3.5 font-display font-semibold text-brand-white transition-colors hover:bg-brand-white hover:text-brand-navy"
            >
              See Platforms
            </a>
          </div>
          <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-brand-white/10 pt-6">
            <Stat value="4X" label="Avg. Revenue Growth" />
            <Stat value="3.8X" label="ROAS Delivered" />
            <Stat value="4" label="Countries Served" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-brand-yellow/30 blur-2xl" aria-hidden />
          <img
            src={heroImg}
            alt="Performance marketing analytics dashboard"
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

function PainPoints() {
  const items = [
    "You’re spending money but not getting sales or quality leads",
    "Campaigns aren’t optimized for mobile users in Pakistan",
    "You don’t know which ad or platform is actually working",
    "Boosting posts hasn’t moved the needle",
    "No proper retargeting, testing, or tracking setup",
  ];
  return (
    <section id="audit" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Sound Familiar?"
          center
          title={<>Does this sound familiar?</>}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map((i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-2xl border border-brand-navy/10 bg-brand-white p-5 shadow-sm"
            >
              <XIcon />
              <span className="text-brand-black/85">{i}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-brand-navy p-8 text-center text-brand-white md:p-12">
          <p className="font-display text-xl font-bold md:text-2xl">
            If yes, then you need Shem Advertising’s performance marketing experts to take over.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <BtnPrimary href="mailto:team@shemadvertising.com">Request a Account Audit</BtnPrimary>
            <a
              href="mailto:team@shemadvertising.com"
              className="font-display font-semibold text-brand-yellow hover:underline"
            >
              Email: team@shemadvertising.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClicksDontPay() {
  return (
    <section className="bg-brand-navy/5 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-brand-yellow/30 blur-2xl" aria-hidden />
          <img
            src={resultsImg}
            alt="Results-driven growth"
            width={1280}
            height={960}
            loading="lazy"
            className="relative w-full rounded-3xl shadow-xl"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="ROAS First"
            title={
              <>
                Clicks Don’t Pay the Bills,{" "}
                <span className="text-brand-yellow">Results Do</span>
              </>
            }
          />
          <p className="mt-5 text-lg leading-relaxed text-brand-black/80">
            Too many businesses waste money on ads that look good but don’t convert. We change that
            by focusing on what matters most Return on Ad Spend (ROAS).
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const blocks = [
    {
      t: "Full-Funnel Approach",
      items: [] as string[],
    },
    {
      t: "Data-Driven Optimization",
      items: [
        "Daily campaign monitoring + weekly creative testing",
        "Budget reallocation to best-performing ads",
        "Real-time reporting with 100% transparency",
      ],
    },
    {
      t: "Tracking & Attribution Setup",
      items: [
        "Meta Pixel, Google Tag Manager, UTM Tracking",
        "Know exactly which ads bring revenue, not just clicks",
      ],
    },
    {
      t: "Platform-Specific Ad Campaigns",
      items: ["We build campaigns that actually perform across all major platforms"],
    },
  ];
  return (
    <section id="why" className="bg-brand-navy py-20 text-brand-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow">
            Why Shem
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Why Choose <span className="text-brand-yellow">Shem Advertising?</span>
          </h2>
          <p className="mt-5 text-lg text-brand-white/80">
            We’re not just another marketing agency — we’re your growth partners. Our approach is
            designed to give you maximum ROI, transparency, and long-term results.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {blocks.map((b, i) => (
            <div
              key={b.t}
              className="rounded-2xl border border-brand-white/10 bg-brand-white/5 p-7 transition-all hover:-translate-y-1 hover:border-brand-yellow/50 hover:bg-brand-white/10"
            >
              <div className="font-display text-5xl font-extrabold text-brand-yellow/30">
                0{i + 1}
              </div>
              <h3 className="mt-2 font-display text-xl font-bold text-brand-white">{b.t}</h3>
              {b.items.length > 0 && (
                <ul className="mt-4 space-y-3">
                  {b.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-brand-white/85">
                      <CheckIcon />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  const platforms = [
    {
      n: "01",
      t: "Meta Ads (Facebook & Instagram)",
      lead: "Reach over 50 million users in Pakistan with scroll-stopping creatives.",
      items: [
        "Conversion & lead generation campaigns",
        "Retargeting, Lookalikes & dynamic ads",
        "Ad creatives tailored to Instagram Reels & Facebook Stories",
      ],
    },
    {
      n: "02",
      t: "Google Ads (Search, Shopping, Display, Performance Max)",
      lead: "Capture demand from people actively searching for what you offer.",
      items: [
        "Search ads for high-intent keywords",
        "Smart Shopping campaigns for ecommerce",
        "Retargeting & branded keyword protection",
      ],
    },
    {
      n: "03",
      t: "TikTok Ads",
      lead: "Go viral with native-style content that drives real engagement.",
      items: [
        "UGC-style short videos",
        "Hook-based creative testing",
        "Low CPMs for maximum top-of-funnel impact",
      ],
    },
    {
      n: "04",
      t: "YouTube Ads",
      lead: "Tell your story with video — and capture attention with retargeting.",
      items: [
        "Skippable & non-skippable ad formats",
        "Retarget website visitors & engaged viewers",
        "Great for high-ticket or complex services",
      ],
    },
    {
      n: "05",
      t: "LinkedIn Ads",
      lead: "Target professionals and decision-makers with precision.",
      items: [
        "Lead generation for B2B",
        "Company culture, hiring & high-ticket offers",
        "Message ads, form fills & dynamic carousels",
      ],
    },
  ];
  return (
    <section id="platforms" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Channels"
              title={
                <>
                  Platform-Specific{" "}
                  <span className="text-brand-yellow">Ad Campaigns</span>
                </>
              }
            />
            <p className="mt-5 text-lg leading-relaxed text-brand-black/80">
              We build campaigns that actually perform across all major platforms.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-brand-yellow/30 blur-2xl" aria-hidden />
            <img
              src={platformsImg}
              alt="Ad platforms: Meta, Google, TikTok, YouTube, LinkedIn"
              width={1280}
              height={960}
              loading="lazy"
              className="relative w-full rounded-3xl shadow-xl"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {platforms.map((p) => (
            <div
              key={p.n}
              className="group relative overflow-hidden rounded-2xl border border-brand-navy/10 bg-brand-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-yellow hover:shadow-xl"
            >
              <div className="flex items-start gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-navy font-display text-xl font-extrabold text-brand-yellow">
                  {p.n}
                </div>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-brand-navy">{p.t}</h3>
                  <p className="mt-2 text-brand-black/80">{p.lead}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 pl-1">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-brand-black/85">
                    <CheckIcon />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScaleReady() {
  const items = [
    "Retargeting & lookalike expansion",
    "Geographic testing (Pakistan + international)",
    "Cross-platform scaling for consistent growth",
  ];
  return (
    <section className="bg-brand-navy/5 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Built to Scale"
            title={
              <>
                Scale-Ready <span className="text-brand-yellow">Campaigns</span>
              </>
            }
          />
          <ul className="mt-8 space-y-3">
            {items.map((i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-brand-navy/10 bg-brand-white p-4 text-brand-black/85 shadow-sm"
              >
                <CheckIcon />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-brand-navy/20 blur-2xl" aria-hidden />
          <img
            src={funnelImg}
            alt="Customer journey funnel"
            width={1280}
            height={960}
            loading="lazy"
            className="relative w-full rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const cases = [
    {
      t: "E-Commerce Brand – Lahore",
      challenge: "Low ROAS & inconsistent sales",
      solution: "Full-funnel Meta + Google Ads strategy",
      results: "4X revenue in 6 months | 3.8X ROAS | 35% repeat customers",
    },
    {
      t: "Real Estate Agency – Karachi",
      challenge: "Low-quality leads",
      solution: "Google Search + Meta Lead Form campaigns",
      results: "300+ qualified leads/month | 50% lower cost per lead",
    },
    {
      t: "Online Education Platform – Nationwide",
      challenge: "Poor visibility & traffic",
      solution: "SEO + YouTube Ads + Landing Page redesign",
      results: "10X organic traffic | 4X monthly enrollments | Ranked #1 for 20+ keywords",
    },
  ];
  return (
    <section id="cases" className="bg-brand-navy py-20 text-brand-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow">
            Proof
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Case Studies
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.t}
              className="flex flex-col rounded-2xl border border-brand-white/10 bg-brand-white/5 p-7 transition-all hover:-translate-y-1 hover:border-brand-yellow/50"
            >
              <h3 className="font-display text-lg font-extrabold text-brand-yellow">{c.t}</h3>
              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-white/60">
                    Challenge
                  </div>
                  <p className="mt-1 text-brand-white/90">{c.challenge}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-white/60">
                    Solution
                  </div>
                  <p className="mt-1 text-brand-white/90">{c.solution}</p>
                </div>
                <div className="rounded-xl bg-brand-yellow p-4 text-brand-navy">
                  <div className="text-xs font-extrabold uppercase tracking-wider">Results</div>
                  <p className="mt-1 font-display font-bold leading-snug">{c.results}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQs() {
  const faqs = [
    {
      q: "How soon can I expect results from performance marketing?",
      a: "Usually within the first 2–4 weeks, depending on budget, niche, and platform.",
    },
    {
      q: "What’s the minimum budget I need to start?",
      a: "We recommend starting from PKR 50,000/month for meaningful results, but it depends on your business goals.",
    },
    {
      q: "Do you create the visuals and videos too?",
      a: "Yes! Our creative team designs scroll-stopping ads tailored for each platform.",
    },
    {
      q: "Can you run campaigns for both Pakistan and international markets?",
      a: "Absolutely. We manage campaigns for clients in Pakistan, UAE, UK, and USA.",
    },
    {
      q: "Will I have access to the performance data?",
      a: "Yes, you’ll get transparent reports and real-time insights no hidden numbers.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="FAQs"
          center
          title={<>Got Questions About Performance Marketing?</>}
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
                {isOpen && <div className="px-6 pb-6 text-brand-black/80">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-6 py-20">
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
            Ready to Scale with{" "}
            <span className="text-brand-yellow">Performance Marketing</span> in Pakistan?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-white/85">
            Stop guessing. Start scaling. With Shem Advertising’s performance marketing, every
            rupee is tracked, tested, and optimized for maximum growth.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <BtnPrimary href="mailto:team@shemadvertising.com">Request a Account Audit</BtnPrimary>
          </div>
          <div className="mt-6 text-sm text-brand-white/80">
            Email:{" "}
            <a href="mailto:team@shemadvertising.com" className="text-brand-yellow hover:underline">
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
