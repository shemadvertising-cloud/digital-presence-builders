import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/brand-hero.jpg";
import logoImg from "@/assets/brand-logo.jpg";
import identityImg from "@/assets/brand-identity.jpg";
import stationeryImg from "@/assets/brand-stationery.jpg";
import processImg from "@/assets/brand-process.jpg";

export const Route = createFileRoute("/branding-design")({
  head: () => ({
    meta: [
      { title: "Branding & Design Agency in Karachi | Shem Advertising" },
      {
        name: "description",
        content:
          "Premium branding & design services in Karachi. Logos, identity systems, stationery and brand strategy crafted to make your business unforgettable.",
      },
      { property: "og:title", content: "Branding & Design Agency in Karachi | Shem Advertising" },
      {
        property: "og:description",
        content:
          "Branding is the soul of your business. Shem Advertising builds identities that stand out, connect deeply, and drive growth.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: BrandingDesignPage,
});

/* ───────────── shared bits ───────────── */

const serif = "font-['Fraunces'] tracking-tight";

const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div
    className={`inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] ${
      light ? "text-brand-yellow" : "text-brand-navy/70"
    }`}
  >
    <span
      className={`h-px w-8 ${light ? "bg-brand-yellow" : "bg-brand-navy/40"}`}
      aria-hidden
    />
    {children}
  </div>
);

const GoldButton = ({
  children,
  href = "#connect",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) => (
  <a
    href={href}
    className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-brand-yellow px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.18em] text-brand-navy shadow-[0_20px_50px_-20px_rgba(255,192,10,0.9)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_30px_70px_-20px_rgba(255,192,10,0.95)] ${className}`}
  >
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    <span className="relative">{children}</span>
    <span className="relative text-base">→</span>
  </a>
);

const GhostButton = ({
  children,
  href = "#connect",
}: {
  children: React.ReactNode;
  href?: string;
}) => (
  <a
    href={href}
    className="inline-flex items-center gap-3 rounded-full border border-brand-white/30 px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-brand-white transition-colors hover:border-brand-yellow hover:text-brand-yellow"
  >
    {children}
    <span>→</span>
  </a>
);

/* ───────────── PAGE ───────────── */

function BrandingDesignPage() {
  return (
    <div className="bg-brand-white text-brand-navy antialiased">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <Link to="/" className="flex items-center gap-2 text-brand-white">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-yellow font-display font-black text-brand-navy">
              S
            </span>
            <span className="font-display text-base font-bold tracking-wide">
              SHEM ADVERTISING
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-brand-white/85 md:flex">
            <Link to="/" className="hover:text-brand-yellow">Website Development</Link>
            <Link to="/performance-marketing" className="hover:text-brand-yellow">Performance Marketing</Link>
            <span className="text-brand-yellow">Branding & Design</span>
          </nav>
          <a
            href="#connect"
            className="hidden rounded-full bg-brand-yellow px-5 py-2 text-sm font-bold text-brand-navy md:inline-flex"
          >
            Start Project
          </a>
        </div>
      </header>

      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden bg-brand-navy text-brand-white">
        {/* decorative gold grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,192,10,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,192,10,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-brand-yellow/20 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand-yellow/30 blur-[120px]"
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-28 pt-36 md:grid-cols-12 md:gap-10 md:px-10 md:pt-44">
          <div className="md:col-span-7">
            <Eyebrow light>Branding Studio · Karachi</Eyebrow>
            <h1
              className={`mt-6 ${serif} text-5xl font-light leading-[1.02] md:text-7xl lg:text-[88px]`}
            >
              Branding{" "}
              <span className="italic text-brand-yellow">&amp; Design</span>
              <br />
              <span className="text-brand-white/70">that becomes</span>
              <br />
              your business's <span className="italic">soul</span>.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-brand-white/75">
              At Shem Advertising, we believe branding is more than just a logo it's
              the soul of your business. A strong brand doesn't just make a good
              first impression, it creates a lasting connection with your audience.
              As a full-service branding agency in Karachi, we help businesses
              define their identity, stand out from competitors, and build
              recognition that drives growth.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-white/75">
              Whether you're a startup looking for your first logo or an
              established company ready for a rebrand, we create strategic and
              creative branding solutions tailored to your vision.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <GoldButton>Start Your Brand</GoldButton>
              <GhostButton href="#work">See What We Do</GhostButton>
            </div>

            <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-brand-white/15 pt-8">
              {[
                ["12+", "Years Crafting Brands"],
                ["180+", "Identities Designed"],
                ["100%", "In-House Studio"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className={`${serif} text-3xl font-light text-brand-yellow`}>{n}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-brand-white/55">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-brand-yellow/20 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-white/10 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.7)]">
                <img
                  src={heroImg}
                  alt="Premium navy and gold brand identity flat lay"
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-brand-yellow/40 bg-brand-navy/90 p-5 backdrop-blur sm:block">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-yellow">
                    <span className="font-display font-black text-brand-navy">★</span>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-brand-white/60">
                      Trusted by
                    </div>
                    <div className="font-display text-sm font-semibold text-brand-white">
                      Startups & Enterprises
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* marquee divider */}
        <div className="relative border-y border-brand-white/10 bg-brand-navy/60 py-5">
          <div className="flex items-center gap-12 overflow-hidden whitespace-nowrap font-display text-lg uppercase tracking-[0.3em] text-brand-white/40">
            <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] items-center gap-12 px-6">
              {Array.from({ length: 2 }).flatMap((_, i) =>
                ["Logo Design", "★", "Brand Identity", "★", "Stationery", "★", "Brand Strategy", "★", "Print Collateral", "★", "Social Branding", "★"].map(
                  (t, j) => (
                    <span
                      key={`${i}-${j}`}
                      className={t === "★" ? "text-brand-yellow" : ""}
                    >
                      {t}
                    </span>
                  ),
                ),
              )}
            </div>
          </div>
          <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
        </div>
      </section>

      {/* ───── WHY CHOOSE ───── */}
      <section id="work" className="relative overflow-hidden bg-brand-white py-28 md:py-36">
        <div
          aria-hidden
          className={`pointer-events-none absolute -right-32 top-10 ${serif} text-[280px] font-light leading-none text-brand-navy/[0.04] md:text-[420px]`}
        >
          01
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <Eyebrow>01 — Why Shem</Eyebrow>
            <h2 className={`mt-5 ${serif} text-4xl font-light leading-[1.05] md:text-6xl`}>
              Why Choose Shem as Your{" "}
              <span className="italic text-brand-navy">Branding Partner?</span>
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-brand-navy/75">
              There are countless branding companies out there, but very few
              combine creativity with strategy the way we do.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-brand-navy/75">
              At Shem Advertising, we don't just make things look beautiful we
              give your brand a story, voice, and personality that resonates.
            </p>
            <div className="mt-10">
              <GoldButton>Book a Brand Consultation</GoldButton>
            </div>
          </div>

          <div className="md:col-span-7">
            <ul className="divide-y divide-brand-navy/10 border-y border-brand-navy/10">
              {[
                ["Custom Logo & Brand Identity Design", "Marks crafted with meaning, recall and longevity."],
                ["Stationery & Print Collateral", "Business cards, letterheads, brochures executed flawlessly."],
                ["Brand Guidelines & Strategy", "A complete playbook that keeps your brand consistent."],
                ["Digital & Social Media Branding", "On-brand presence across every digital surface."],
                ["Consistent, Professional Image", "A single, polished voice across every channel."],
              ].map(([t, d], i) => (
                <li
                  key={t}
                  className="group flex items-start gap-6 py-6 transition-colors hover:bg-brand-navy/[0.02]"
                >
                  <span className={`${serif} mt-1 w-10 text-2xl font-light text-brand-yellow`}>
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-lg font-bold text-brand-navy md:text-xl">
                        {t}
                      </h3>
                      <span className="text-brand-yellow transition-transform group-hover:translate-x-1">
                        ↗
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-brand-navy/65">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───── LOGO DESIGN ───── */}
      <section className="relative overflow-hidden bg-brand-navy py-28 text-brand-white md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,192,10,0.8), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,192,10,0.6), transparent 45%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-6">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-brand-yellow/20 blur-3xl" aria-hidden />
              <div className="relative overflow-hidden rounded-3xl border border-brand-yellow/30 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.8)]">
                <img
                  src={logoImg}
                  alt="Premium gold monogram logo design process"
                  width={1200}
                  height={1408}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <Eyebrow light>02 — Logo Design</Eyebrow>
            <h2 className={`mt-5 ${serif} text-4xl font-light leading-[1.05] md:text-6xl`}>
              Logos That{" "}
              <span className="italic text-brand-yellow">Define</span> Your Identity
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-brand-white/75">
              A logo is often the first interaction customers have with your
              brand make it unforgettable. Our designers craft unique,
              meaningful, and impactful logos that reflect your values and set
              you apart in a competitive market.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-brand-white/75">
              We go beyond visuals: each logo is strategically designed to
              differentiate your brand and create strong recall.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {["Discover", "Sketch", "Refine", "Deliver"].map((s, i) => (
                <div
                  key={s}
                  className="rounded-2xl border border-brand-white/10 bg-brand-white/[0.03] p-5"
                >
                  <div className={`${serif} text-2xl font-light text-brand-yellow`}>0{i + 1}</div>
                  <div className="mt-2 font-display text-sm font-semibold uppercase tracking-[0.15em]">
                    {s}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── COMPLETE IDENTITY ───── */}
      <section className="relative overflow-hidden bg-brand-white py-28 md:py-36">
        <div
          aria-hidden
          className={`pointer-events-none absolute -left-20 top-10 ${serif} text-[280px] font-light leading-none text-brand-navy/[0.04] md:text-[420px]`}
        >
          03
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-6">
            <Eyebrow>03 — Brand Identity</Eyebrow>
            <h2 className={`mt-5 ${serif} text-4xl font-light leading-[1.05] md:text-6xl`}>
              Complete{" "}
              <span className="italic">Brand Identity</span> Solutions
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-brand-navy/75">
              From colors and typography to marketing collaterals, we build
              brand identities that leave a strong footprint. As a professional
              branding firm, our team ensures your brand communicates trust,
              authority, and relevance.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-brand-navy/75">
              Whether you need flyers, brochures, or presentation designs, we
              create consistent visuals that amplify your business presence both
              online and offline.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full border-2 border-brand-navy/15 bg-brand-navy" />
                <div>
                  <div className="font-display text-sm font-bold">#103D67</div>
                  <div className="text-xs text-brand-navy/55">Signature Navy</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full border-2 border-brand-navy/15 bg-brand-yellow" />
                <div>
                  <div className="font-display text-sm font-bold">#FFC00A</div>
                  <div className="text-xs text-brand-navy/55">Signature Gold</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full border-2 border-brand-navy/15 bg-brand-white" />
                <div>
                  <div className="font-display text-sm font-bold">#FFFFFF</div>
                  <div className="text-xs text-brand-navy/55">Pure White</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-brand-navy/10 blur-3xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-navy/10 shadow-[0_50px_120px_-40px_rgba(16,61,103,0.4)]">
                <img
                  src={identityImg}
                  alt="Brand identity system with guidelines, palette and typography"
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── STATIONERY ───── */}
      <section className="relative overflow-hidden bg-brand-navy py-28 text-brand-white md:py-36">
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="order-2 md:order-1 md:col-span-6">
            <Eyebrow light>04 — Stationery & Print</Eyebrow>
            <h2 className={`mt-5 ${serif} text-4xl font-light leading-[1.05] md:text-6xl`}>
              Stationery &{" "}
              <span className="italic text-brand-yellow">Marketing</span> Materials
              That Impress
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-brand-white/75">
              Imagine handing over a business card that instantly builds
              credibility. Our design agency in Karachi develops professional
              stationery, brochures, and promotional materials that reinforce
              your brand's quality and reliability.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-brand-white/75">
              From corporate kits to event materials, we make sure your branding
              is polished, professional, and unforgettable.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Business Cards",
                "Letterheads",
                "Brochures",
                "Envelopes",
                "Folders",
                "Corporate Kits",
                "Event Collateral",
                "Presentations",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-brand-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-span-6">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-brand-yellow/20 blur-3xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-yellow/30 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.7)]">
                <img
                  src={stationeryImg}
                  alt="Premium navy and gold stationery suite"
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── TRUSTED FIRM ───── */}
      <section className="relative overflow-hidden bg-brand-white py-28 md:py-36">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
          <Eyebrow>05 — Karachi · Worldwide</Eyebrow>
          <h2 className={`mt-6 ${serif} text-4xl font-light leading-[1.05] md:text-6xl`}>
            Your Trusted{" "}
            <span className="italic">Branding Firm</span> in Karachi
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-brand-navy/75">
            As a creative branding firm, we've helped businesses in Karachi and
            beyond turn ideas into recognizable identities.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-brand-navy/75">
            Whether you're launching a new venture or scaling an existing
            business, Shem Advertising ensures your brand not only looks great
            but also connects deeply with your target audience.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              ["Strategy First", "Every visual rooted in a clear business idea."],
              ["Crafted by Hand", "An in-house studio of designers & strategists."],
              ["Built to Last", "Identities engineered for years of relevance."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="group rounded-3xl border border-brand-navy/10 bg-brand-white p-8 text-left transition-all hover:-translate-y-1 hover:border-brand-yellow hover:shadow-[0_30px_80px_-30px_rgba(16,61,103,0.3)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-yellow font-display text-lg font-black text-brand-navy">
                  ✦
                </div>
                <h3 className={`mt-5 ${serif} text-2xl font-light`}>{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── GET STARTED ───── */}
      <section className="relative overflow-hidden bg-brand-white pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-navy p-10 text-brand-white md:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 20%, rgba(255,192,10,0.9), transparent 35%), radial-gradient(circle at 10% 90%, rgba(255,192,10,0.6), transparent 40%)",
              }}
            />
            <div className="relative grid items-center gap-10 md:grid-cols-2">
              <div>
                <Eyebrow light>06 — Get Started</Eyebrow>
                <h2 className={`mt-5 ${serif} text-4xl font-light leading-[1.05] md:text-5xl`}>
                  Get Started with{" "}
                  <span className="italic text-brand-yellow">Shem Advertising</span>
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-brand-white/80">
                Don't let your business blend into the crowd. Partner with Shem
                Advertising, the trusted branding agency in Karachi, and give
                your brand the voice, image, and recognition it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <section id="connect" className="relative overflow-hidden bg-brand-navy py-28 text-brand-white md:py-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,192,10,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,192,10,0.6) 1px, transparent 1px)",
            backgroundSize: "96px 96px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-yellow/15 blur-[160px]"
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
          <Eyebrow light>Let's Talk</Eyebrow>
          <h2
            className={`mx-auto mt-6 ${serif} text-5xl font-light leading-[1] md:text-7xl lg:text-[96px]`}
          >
            WE ARE WAITING
            <br />
            <span className="italic text-brand-yellow">to hear from you!</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-brand-white/75">
            Don't Beat Around The Bush. Tell Us About Your Project.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <GoldButton href="mailto:team@shemadvertising.com">Connect Today</GoldButton>
            <GhostButton href="https://shemadvertising.com">Visit shemadvertising.com</GhostButton>
          </div>

          <div className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-brand-white/10 pt-10 text-sm text-brand-white/70">
            <a href="mailto:team@shemadvertising.com" className="hover:text-brand-yellow">
              team@shemadvertising.com
            </a>
            <span className="hidden text-brand-white/20 md:inline">·</span>
            <a href="https://shemadvertising.com" className="hover:text-brand-yellow">
              shemadvertising.com
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-black py-10 text-center text-xs uppercase tracking-[0.3em] text-brand-white/40">
        © Shem Advertising · Branding & Design Studio · Karachi
      </footer>
    </div>
  );
}
