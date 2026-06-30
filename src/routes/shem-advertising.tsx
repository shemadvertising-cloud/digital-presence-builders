import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Megaphone,
  TrendingUp,
  Code2,
  Palette,
  Search,
  ShoppingCart,
  BarChart3,
  Users,
  MapPin,
  Wallet,
  Star,
  Quote,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
} from "lucide-react";
import heroImg from "@/assets/shem-hero.jpg";

export const Route = createFileRoute("/shem-advertising")({
  head: () => ({
    meta: [
      { title: "Shem Advertising — Karachi & Dubai Digital Marketing Agency" },
      {
        name: "description",
        content:
          "Performance marketing, SEO, web development & branding agency in Karachi with a Dubai presence. Book a free 20-minute growth strategy call.",
      },
      { property: "og:title", content: "Shem Advertising — Get a Free Growth Strategy Call" },
      {
        property: "og:description",
        content:
          "Pakistan's performance marketing agency for Meta Ads, SEO, e-commerce, and branding — trusted by brands scaling locally and into Dubai/UAE.",
      },
    ],
  }),
  component: ShemPage,
});

const NAVY = "#103D67";
const GOLD = "#FFC00A";

function scrollToForm() {
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Counter({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              setVal(Math.floor(p * to));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const SERVICES = [
  { icon: Megaphone, name: "Social Media Marketing", desc: "Build a loyal audience and turn followers into paying customers." },
  { icon: TrendingUp, name: "Performance Marketing", desc: "ROAS-focused Meta, Google & TikTok campaigns that scale profitably." },
  { icon: Code2, name: "Website Development", desc: "Fast, SEO-ready websites built to convert visitors into leads." },
  { icon: Palette, name: "Branding & Design", desc: "Distinct visual identities that make your brand impossible to ignore." },
  { icon: Search, name: "SEO & Organic Growth", desc: "Rank higher on Google and own your category long-term." },
  { icon: ShoppingCart, name: "E-Commerce", desc: "End-to-end online stores engineered for repeat purchases." },
];

const WHY = [
  { icon: BarChart3, title: "Results-First Reporting", desc: "Every report shows revenue and ROAS — not vanity likes or impressions." },
  { icon: Users, title: "A Dedicated Team, Not a Ticket Queue", desc: "Work directly with strategists who know your brand by name." },
  { icon: MapPin, title: "Karachi + Dubai Presence", desc: "Local insight in Pakistan, regional reach across the UAE." },
  { icon: Wallet, title: "Transparent Pricing, No Hidden Costs", desc: "Clear scopes, clear deliverables, clear invoices — always." },
];

const TESTIMONIALS = [
  {
    name: "Ahmed Raza",
    role: "Marketing Executive",
    quote:
      "Honestly, the team is amazing! They really listened, understood what I wanted, and delivered even better than I expected.",
  },
  {
    name: "Fatima Khalid",
    role: "Brand Strategist",
    quote:
      "Very professional and creative people. They kept me updated at every step and made everything look effortless.",
  },
  {
    name: "Hassan Mir",
    role: "Business Consultant",
    quote: "What I liked most was their communication — always clear, fast, and helpful.",
  },
];

const SERVICE_OPTIONS = [
  "Social Media Marketing",
  "Performance Marketing",
  "Website Development",
  "Branding & Design",
  "SEO & Organic Growth",
  "Lead Generation",
  "E-Commerce",
];

const BUDGET_OPTIONS = [
  "AED 1,000–2,000",
  "AED 2,000–4,000",
  "AED 4,000–6,000",
  "AED 6,000–8,000",
  "AED 8,000–10,000",
  "Above AED 10,000",
];

function ShemPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ scrollBehavior: "smooth", color: "#000", background: "#fff", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      {/* HEADER */}
      <header
        className="sticky top-0 z-50 w-full border-b"
        style={{ background: "#fff", borderColor: "rgba(16,61,103,0.12)" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="text-xl font-extrabold tracking-tight md:text-2xl" style={{ color: NAVY }}>
            SHEM <span style={{ color: GOLD }}>•</span> ADVERTISING
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {["Home", "Services", "About Us", "Contact Us"].map((l) => (
              <a key={l} href="#" className="text-sm font-semibold hover:opacity-70" style={{ color: NAVY }}>
                {l}
              </a>
            ))}
          </nav>
          <button
            onClick={scrollToForm}
            className="rounded-lg px-4 py-2.5 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:px-5"
            style={{ background: GOLD, color: NAVY }}
          >
            Book a Call
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden" style={{ background: NAVY, color: "#fff" }}>
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(16,61,103,0.85) 0%, rgba(16,61,103,0.95) 100%)" }}
        />
        <div className="relative mx-auto max-w-5xl px-5 py-20 text-center md:py-28">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
            style={{ background: GOLD, color: NAVY }}
          >
            Karachi • Dubai
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
            Get a Free Growth Strategy Call —{" "}
            <span style={{ color: GOLD }}>See Exactly How We'd Scale Your Brand</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-white/85 md:text-lg">
            Pakistan's performance marketing agency for Meta Ads, SEO, e-commerce, and branding — trusted by brands scaling locally
            and into Dubai/UAE.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3">
            <button
              onClick={scrollToForm}
              className="rounded-xl px-8 py-4 text-base font-extrabold shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl md:text-lg"
              style={{ background: GOLD, color: NAVY }}
            >
              Book My Free Strategy Call →
            </button>
            <p className="text-sm text-white/70">
              No pressure. No generic pitch. Just a 20-minute audit of your current marketing.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-4 border-t border-white/15 pt-10">
            {[
              { n: 150, s: "+", l: "Projects" },
              { n: 95, s: "%", l: "Success Rate" },
              { n: 24, s: "/7", l: "Support" },
            ].map((c) => (
              <div key={c.l} className="text-center">
                <div className="text-3xl font-extrabold md:text-5xl" style={{ color: GOLD }}>
                  <Counter to={c.n} suffix={c.s} />
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/75 md:text-sm">
                  {c.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF BAND */}
      <section className="px-5 py-16 md:py-24" style={{ background: "#fff" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[auto_1fr] md:gap-14">
          <div className="text-center md:text-left">
            <div className="text-7xl font-extrabold leading-none md:text-9xl" style={{ color: GOLD }}>
              23x
            </div>
            <div className="mt-2 text-2xl font-extrabold md:text-3xl" style={{ color: NAVY }}>
              ROAS
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold leading-snug md:text-3xl" style={{ color: NAVY }}>
              PKR 300,000 ad spend turned into PKR 70 Lakh in revenue for a real estate client.
            </p>
            <p className="mt-3 text-sm text-black/60 md:text-base">
              Real results, real campaigns — not vanity metrics.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-20" style={{ background: "#fff" }}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
              Our Capabilities
            </div>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl" style={{ color: NAVY }}>
              What We Do
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.name}
                  className="group rounded-2xl border-2 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: "rgba(16,61,103,0.12)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = GOLD)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(16,61,103,0.12)")}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{ background: NAVY }}
                  >
                    <Icon size={26} color={GOLD} />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold" style={{ color: NAVY }}>
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/70">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-5 py-20" style={{ background: "#F6F7F9" }}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
              The Shem Difference
            </div>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl" style={{ color: NAVY }}>
              Why Businesses Choose Shem Advertising
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="rounded-2xl bg-white p-7 shadow-sm">
                  <Icon size={32} color={NAVY} />
                  <h3 className="mt-4 text-lg font-extrabold" style={{ color: NAVY }}>
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/70">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-5 py-20" style={{ background: "#fff" }}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
              Client Stories
            </div>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl" style={{ color: NAVY }}>
              Loved By Many
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border-2 bg-white p-7 shadow-sm"
                style={{ borderColor: "rgba(16,61,103,0.10)" }}
              >
                <Quote size={32} color={NAVY} />
                <p className="mt-4 italic leading-relaxed text-black/80">"{t.quote}"</p>
                <div className="mt-5 flex gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={16} fill={GOLD} color={GOLD} />
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-extrabold" style={{ color: NAVY }}>
                    {t.name}
                  </div>
                  <div className="text-sm text-black/55">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="form" className="px-5 py-20 md:py-24" style={{ background: NAVY }}>
        <div className="mx-auto max-w-3xl">
          <div className="text-center text-white">
            <h2 className="text-3xl font-extrabold md:text-5xl">Tell Us About Your Project</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Get a custom growth plan, not a sales pitch. We reply within one business day.
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-white p-6 shadow-2xl md:p-10">
            {submitted ? (
              <div className="py-14 text-center">
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ background: GOLD }}
                >
                  <span className="text-3xl font-extrabold" style={{ color: NAVY }}>
                    ✓
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-extrabold" style={{ color: NAVY }}>
                  Thanks! We'll be in touch within one business day.
                </h3>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5">
                <Field label="Your Name">
                  <input
                    required
                    type="text"
                    placeholder="Enter Your Name"
                    value={form.name}
                    onChange={onChange("name")}
                    className="w-full rounded-lg border-2 px-4 py-3 text-sm font-medium outline-none transition focus:border-[color:var(--navy)]"
                    style={{ borderColor: "rgba(16,61,103,0.15)", ["--navy" as never]: NAVY }}
                  />
                </Field>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Your Email">
                    <input
                      required
                      type="email"
                      placeholder="Enter Your Email"
                      value={form.email}
                      onChange={onChange("email")}
                      className="w-full rounded-lg border-2 px-4 py-3 text-sm font-medium outline-none"
                      style={{ borderColor: "rgba(16,61,103,0.15)" }}
                    />
                  </Field>
                  <Field label="Your Phone Number">
                    <input
                      required
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      value={form.phone}
                      onChange={onChange("phone")}
                      className="w-full rounded-lg border-2 px-4 py-3 text-sm font-medium outline-none"
                      style={{ borderColor: "rgba(16,61,103,0.15)" }}
                    />
                  </Field>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Needed Service">
                    <select
                      required
                      value={form.service}
                      onChange={onChange("service")}
                      className="w-full rounded-lg border-2 bg-white px-4 py-3 text-sm font-medium outline-none"
                      style={{ borderColor: "rgba(16,61,103,0.15)", color: form.service ? "#000" : "#6b7280" }}
                    >
                      <option value="">Select a service</option>
                      {SERVICE_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Budget">
                    <select
                      required
                      value={form.budget}
                      onChange={onChange("budget")}
                      className="w-full rounded-lg border-2 bg-white px-4 py-3 text-sm font-medium outline-none"
                      style={{ borderColor: "rgba(16,61,103,0.15)", color: form.budget ? "#000" : "#6b7280" }}
                    >
                      <option value="">Select a budget</option>
                      {BUDGET_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="Your Message (optional)">
                  <textarea
                    rows={4}
                    placeholder="Type your message here..."
                    value={form.message}
                    onChange={onChange("message")}
                    className="w-full resize-none rounded-lg border-2 px-4 py-3 text-sm font-medium outline-none"
                    style={{ borderColor: "rgba(16,61,103,0.15)" }}
                  />
                </Field>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl py-4 text-base font-extrabold shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: GOLD, color: NAVY }}
                >
                  Get My Free Strategy Plan
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* OFFICE INFO */}
      <section className="px-5 py-16" style={{ background: "#F6F7F9" }}>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <OfficeCard
            title="Head Office"
            address="Nazimabad, Karachi, 74600, Pakistan"
            mapUrl="https://www.google.com/maps/search/?api=1&query=Nazimabad+Karachi+74600+Pakistan"
          />
          <OfficeCard
            title="Regional Office"
            address="Dubai, United Arab Emirates"
            mapUrl="https://www.google.com/maps/search/?api=1&query=Dubai+United+Arab+Emirates"
          />
          <div className="md:col-span-2">
            <div className="grid gap-6 rounded-2xl border bg-white p-7 md:grid-cols-3" style={{ borderColor: "rgba(16,61,103,0.12)" }}>
              <InfoRow icon={Clock} label="Working Hours" value="Mon – Sat, 10:00 am – 06:00 pm" />
              <InfoRow icon={Mail} label="Email" value="team@shemadvertising.com" href="mailto:team@shemadvertising.com" />
              <InfoRow icon={Phone} label="Phone" value="+92 328 1159947" href="tel:+923281159947" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20" style={{ background: NAVY }}>
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">We Are Waiting To Hear From You!</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/80 md:text-lg">
            Don't beat around the bush — tell us about your project.
          </p>
          <button
            onClick={scrollToForm}
            className="mt-8 rounded-xl px-10 py-4 text-base font-extrabold shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl md:text-lg"
            style={{ background: GOLD, color: NAVY }}
          >
            Connect Today
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: NAVY, color: "rgba(255,255,255,0.78)" }}>
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="text-xl font-extrabold tracking-tight text-white">
                SHEM <span style={{ color: GOLD }}>•</span> ADVERTISING
              </div>
              <p className="mt-4 text-sm leading-relaxed">
                Being on Top Search Position is Not a Dream Anymore. Shem Advertising is a Creative Agency.
              </p>
              <div className="mt-6 flex gap-3">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 transition hover:bg-white/10"
                    aria-label="social"
                  >
                    <Icon size={18} color="#fff" />
                  </a>
                ))}
              </div>
            </div>

            <FooterCol title="Our Services">
              {SERVICE_OPTIONS.map((s) => (
                <a key={s} href="#" className="block py-1 text-sm hover:text-white">
                  {s}
                </a>
              ))}
            </FooterCol>

            <FooterCol title="Legal">
              <a href="#" className="block py-1 text-sm hover:text-white">
                Terms & Conditions
              </a>
              <a href="#" className="block py-1 text-sm hover:text-white">
                Privacy Policy
              </a>
            </FooterCol>

            <FooterCol title="Contact Us">
              <a href="mailto:team@shemadvertising.com" className="block py-1 text-sm hover:text-white">
                team@shemadvertising.com
              </a>
              <a href="tel:+923281159947" className="block py-1 text-sm hover:text-white">
                +92 328 1159947
              </a>
              <a
                href="https://wa.me/923281159947"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold"
                style={{ background: GOLD, color: NAVY }}
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </FooterCol>
          </div>

          <div className="mt-12 border-t border-white/15 pt-6 text-center text-xs text-white/60">
            Copyright © 2026 All Rights Reserved Shem Advertising
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold" style={{ color: NAVY }}>
        {label}
      </span>
      {children}
    </label>
  );
}

function OfficeCard({ title, address, mapUrl }: { title: string; address: string; mapUrl: string }) {
  return (
    <div className="rounded-2xl border bg-white p-7" style={{ borderColor: "rgba(16,61,103,0.12)" }}>
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: GOLD }}>
        <MapPin size={14} /> {title}
      </div>
      <p className="mt-3 text-lg font-extrabold" style={{ color: NAVY }}>
        {address}
      </p>
      <a
        href={mapUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-block rounded-lg border-2 px-4 py-2 text-sm font-bold transition hover:bg-[color:var(--navy)] hover:text-white"
        style={{ borderColor: NAVY, color: NAVY, ["--navy" as never]: NAVY }}
      >
        Get Directions →
      </a>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ background: "rgba(16,61,103,0.08)" }}>
        <Icon size={18} color={NAVY} />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-bold uppercase tracking-wider text-black/55">{label}</div>
        <div className="mt-1 font-semibold" style={{ color: NAVY }}>
          {value}
        </div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">{title}</h4>
      <div className="mt-4 space-y-1">{children}</div>
    </div>
  );
}
