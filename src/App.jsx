import React from "react";
import {
  ArrowRight,
  Menu,
  MapPin,
  Building2,
  Diamond,
  ShieldCheck,
  Play,
  Star,
  Users,
  Award,
  BadgeCheck,
} from "lucide-react";

function InstagramIcon({ className = "size-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "size-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ className = "size-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const homes = [
  {
    name: "The Horizon",
    specs: "2 Bed  ·  2 Bath  ·  1,250 sq ft",
    price: "From $425,000",
    image:
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=90",
  },
  {
    name: "The Panorama",
    specs: "3 Bed  ·  3 Bath  ·  1,650 sq ft",
    price: "From $615,000",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=90",
  },
  {
    name: "The Summit",
    specs: "4 Bed  ·  4.5 Bath  ·  2,100 sq ft",
    price: "From $1,250,000",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90",
  },
];

const heroFeatures = [
  {
    icon: MapPin,
    title: "Prime Locations",
    text: "Carefully selected neighborhoods",
  },
  {
    icon: Building2,
    title: "Modern Design",
    text: "Contemporary architecture with timeless finishes",
  },
  {
    icon: Diamond,
    title: "Premium Amenities",
    text: "Curated amenities for comfort and wellness",
  },
  {
    icon: ShieldCheck,
    title: "Secure Living",
    text: "24/7 security and smart home technology",
  },
];

const sideFeatures = [
  ["Spacious Layouts", "Thoughtfully designed for natural light and flow"],
  ["Smart Living", "Integrated technology for modern convenience"],
  ["Sustainable Living", "Built with eco-friendly materials and efficiency"],
];

const stats = [
  [BadgeCheck, "150+", "Residences Sold"],
  [Users, "98%", "Customer Satisfaction"],
  [Star, "6", "Prime Locations"],
  [Award, "10+", "Years of Excellence"],
];

function Logo({ className = "" }) {
  return (
    <a href="#" className={`inline-flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="Nova Residence"
        className="h-[130px] w-[130px] select-none"
        draggable="false"
        loading="eager"
      />
    </a>
  );
}

function GlassIcon({ children }) {
  return (
    <div className="grid size-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,.08)]">
      {children}
    </div>
  );
}

function OctGlow({ className = "" }) {
  return (
    <div className={`absolute ${className}`}>
      <div
        className="absolute inset-0 border border-violet-200/25 bg-gradient-to-b from-violet-400/40 via-violet-500/20 to-indigo-500/10 shadow-[0_0_120px_rgba(124,58,237,.55)]"
        style={{
          clipPath:
            "polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)",
        }}
      />
      <div
        className="absolute inset-[10%] border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,.18)]"
        style={{
          clipPath:
            "polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)",
        }}
      />
    </div>
  );
}

function ArrowLink({ children }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 text-sm font-medium text-white/90"
    >
      {children} <ArrowRight className="size-4" />
    </a>
  );
}

function HeroBuilding3D() {
  const buildingImage = "/hero-building.png";

  return (
    <div className="absolute bottom-[90px] right-[-40px] z-0 h-[700px] w-[70%] perspective-distant perspective-origin-bottom-right">
      <div className="relative h-full w-full origin-bottom-right transform-3d rotate-y-[-18deg] rotate-x-[2.5deg]">
        <div className="absolute inset-0 overflow-hidden rounded-sm">
          <img
            src={buildingImage}
            alt="Nova Residence building"
            className="h-full w-full object-cover object-center opacity-95 brightness-95 contrast-110 saturate-125"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,.12)_0%,transparent_34%,rgba(0,0,0,.50)_100%)] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030716]/45 via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-70 [mask-image:linear-gradient(90deg,transparent_0%,black_16%,black_100%)] bg-[radial-gradient(circle_at_84%_22%,rgba(124,58,237,.22),transparent_52%)]" />
        </div>

        <div className="absolute inset-y-[3%] right-0 w-16 translate-x-16 origin-left rotate-y-90 bg-[linear-gradient(180deg,rgba(255,255,255,.10)_0%,rgba(124,58,237,.08)_20%,rgba(5,8,22,.92)_55%,rgba(3,7,22,1)_100%)]" />
        <div className="absolute inset-x-[4%] top-0 h-12 -translate-y-12 origin-bottom rotate-x-90 bg-[linear-gradient(90deg,rgba(255,255,255,.18)_0%,rgba(124,58,237,.16)_35%,rgba(0,0,0,.55)_100%)]" />

        <div className="pointer-events-none absolute inset-0 rounded-sm shadow-[0_55px_110px_rgba(3,7,22,.92)]" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030716] text-white antialiased">
      <section className="relative min-h-[760px] overflow-hidden px-6 pb-10 pt-7 md:px-12 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(91,50,189,.55),transparent_31%),radial-gradient(circle_at_34%_80%,rgba(48,37,113,.35),transparent_33%),linear-gradient(120deg,#050714_0%,#070b1d_48%,#050611_100%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:84px_84px]" />
        <OctGlow className="right-[19%] top-[60px] size-[340px] rotate-[-3deg] opacity-95" />
        <OctGlow className="right-[34%] top-[210px] size-[170px] rotate-6 opacity-75" />

        <div className="absolute bottom-[70px] right-[-30px] z-0 h-[780px] w-[76%] bg-[radial-gradient(circle_at_30%_35%,rgba(124,58,237,.30),transparent_55%)] blur-2xl" />
        <HeroBuilding3D />
        <div className="absolute bottom-[90px] right-0 h-[700px] w-[70%] bg-gradient-to-r from-[#030716] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-[#030716] to-transparent" />

        <header className="relative z-20 flex items-center justify-between">
          <Logo className="h-16" />
          <nav className="hidden items-center gap-12 text-sm text-white/90 lg:flex">
            <a href="#residences">Residences</a>
            <a href="#amenities">Amenities</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-6">
            <button className="hidden rounded-lg border border-violet-400/60 px-8 py-4 text-sm font-medium shadow-[0_0_35px_rgba(124,58,237,.22)] transition hover:bg-violet-500 md:block">
              Book a Viewing
            </button>
            <button className="text-white/85" aria-label="Open menu">
              <Menu className="size-8" />
            </button>
          </div>
        </header>

        <div className="relative z-10 mt-20 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="max-w-2xl pt-8">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.32em] text-violet-300">
              Modern living. Elevated.
            </p>
            <h1 className="text-[clamp(3.7rem,6.2vw,6.8rem)] font-light leading-[0.98] tracking-[-0.07em]">
              Nova Residence.
              <br />
              Where life
              <br />
              reaches{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-500 bg-clip-text text-transparent">
                new heights.
              </span>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-8 text-white/72">
              Premium apartments designed for comfort, elegance, and a lifestyle
              above expectations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-500 px-7 py-4 text-sm font-medium shadow-[0_0_45px_rgba(124,58,237,.35)]">
                Explore Residences{" "}
                <ArrowRight className="ml-5 inline size-4" />
              </button>
              <button className="rounded-lg border border-white/20 bg-white/[0.02] px-7 py-4 text-sm font-medium backdrop-blur">
                Book a Viewing <ArrowRight className="ml-5 inline size-4" />
              </button>
            </div>

            <div className="mt-20">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/38">
                As featured in
              </p>
              <div className="flex flex-wrap items-center gap-8 text-2xl font-serif text-white/38">
                <span>Forbes</span>
                <span className="text-base uppercase tracking-tighter">
                  ARCHITECTURAL DIGEST
                </span>
                <span>Robb Report</span>
                <span>ELLEDECOR</span>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[500px] lg:block">
            <div className="absolute bottom-10 right-4 w-64 rounded-2xl border border-violet-400/40 bg-[#17132e]/80 p-6 shadow-[0_0_60px_rgba(124,58,237,.3)] backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <GlassIcon>
                  <BadgeCheck className="size-6 text-violet-300" />
                </GlassIcon>
                <div>
                  <h3 className="font-semibold">Limited Collection</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Only a few exclusive residences remain.
                  </p>
                  <div className="mt-4">
                    <ArrowLink>View Availability</ArrowLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 mt-10 rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,.35)] backdrop-blur-xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {heroFeatures.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className={`flex gap-5 ${
                  index !== 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""
                }`}
              >
                <GlassIcon>
                  <Icon className="size-6 text-white/85" />
                </GlassIcon>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-16 md:px-12 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_2fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-white/50">
              About Nova
            </p>
            <h2 className="text-5xl font-light leading-[1.05] tracking-[-0.06em]">
              A better way
              <br />
              to live. Every day.
            </h2>
            <p className="mt-7 max-w-md text-base leading-8 text-white/62">
              At Nova Residence, every detail is designed to elevate your
              lifestyle. From intelligent layouts to world-class amenities, we
              create homes that inspire.
            </p>
            <button className="mt-9 rounded-lg border border-white/15 px-6 py-4 text-sm font-medium text-white/90">
              Discover More <ArrowRight className="ml-5 inline size-4" />
            </button>
          </div>

          <div className="grid gap-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] lg:grid-cols-[1.35fr_.65fr]">
            <div className="relative min-h-[350px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90"
                alt="Luxury apartment interior"
                className="absolute inset-0 h-full w-full object-cover brightness-75"
              />
              <button
                className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-violet-500/45 text-white shadow-[0_0_60px_rgba(124,58,237,.5)] backdrop-blur-md"
                aria-label="Play video"
              >
                <Play className="ml-1 size-9 fill-white" />
              </button>
            </div>
            <div className="divide-y divide-white/10 bg-[#0c1021]/95 p-8">
              {sideFeatures.map(([title, text]) => (
                <div key={title} className="py-7 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="residences" className="px-6 py-10 md:px-12 lg:px-16">
        <div className="mb-7 flex items-end justify-between gap-5">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-white/50">
              Featured Residences
            </p>
            <h2 className="text-4xl font-light tracking-[-0.05em] md:text-5xl">
              Find your perfect home.
            </h2>
          </div>
          <ArrowLink>View All Residences</ArrowLink>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {homes.map((home) => (
            <article
              key={home.name}
              className="group relative h-64 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-[0_20px_70px_rgba(0,0,0,.35)]"
            >
              <img
                src={home.image}
                alt={home.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-xl font-semibold">{home.name}</h3>
                <div className="mt-2 flex flex-wrap justify-between gap-2 text-sm text-white/80">
                  <span>{home.specs}</span>
                  <span>{home.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 px-6 py-12 md:px-12 lg:grid-cols-[1.35fr_1fr] lg:px-16">
        <div className="rounded-2xl border border-violet-400/20 bg-white/[0.035] p-8 shadow-[0_0_80px_rgba(79,70,229,.12)] backdrop-blur">
          <div className="grid gap-7 md:grid-cols-4">
            {stats.map(([Icon, number, label]) => (
              <div
                key={label}
                className="flex items-center gap-5 md:border-r md:border-white/10 md:last:border-0"
              >
                <GlassIcon>
                  <Icon className="size-6 text-violet-300" />
                </GlassIcon>
                <div>
                  <div className="text-4xl font-light tracking-[-0.06em]">
                    {number}
                  </div>
                  <div className="mt-1 text-sm leading-5 text-white/62">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="contact"
          className="relative overflow-hidden rounded-2xl border border-violet-400/35 bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,.45),transparent_38%),linear-gradient(135deg,#101531,#100b29)] p-9 shadow-[0_0_90px_rgba(124,58,237,.25)]"
        >
          <OctGlow className="-right-6 bottom-4 size-48 opacity-30" />
          <div className="relative z-10">
            <h2 className="text-4xl font-light leading-tight tracking-[-0.05em]">
              Ready to find
              <br />
              your new home?
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/65">
              Schedule a private viewing and experience Nova Residence in
              person.
            </p>
            <button className="mt-7 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-500 px-8 py-4 text-sm font-medium shadow-[0_0_45px_rgba(124,58,237,.35)]">
              Book a Viewing <ArrowRight className="ml-5 inline size-4" />
            </button>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden border-t border-white/10 bg-[#020512] px-6 py-14 md:px-12 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(124,58,237,.35),transparent_45%),radial-gradient(circle_at_15%_90%,rgba(59,130,246,.18),transparent_42%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:96px_96px]" />

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_.9fr_.9fr_1.2fr]">
          <div>
            <Logo className="h-20" />
            <p className="mt-7 max-w-sm text-sm leading-7 text-white/60">
              Premium residences designed for comfort, elegance, and a lifestyle
              above expectations.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[
                { label: "Instagram", Icon: InstagramIcon },
                { label: "Facebook", Icon: FacebookIcon },
                { label: "LinkedIn", Icon: LinkedinIcon },
              ].map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] transition hover:border-violet-400/40 hover:bg-white/[0.06] hover:text-white"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
              Explore
            </p>
            <div className="mt-5 grid gap-3 text-white/70">
              <a href="#residences" className="hover:text-white">
                Residences
              </a>
              <a href="#about" className="hover:text-white">
                About
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div className="text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
              Contact
            </p>
            <div className="mt-5 grid gap-3 text-white/70">
              <a href="tel:+14085550100" className="hover:text-white">
                +1 (408) 555-0100
              </a>
              <a href="mailto:hello@novaresidence.com" className="hover:text-white">
                hello@novaresidence.com
              </a>
              <span className="text-white/55">
                1200 Skyline Ave, Nova City
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-violet-400/20 bg-white/[0.035] p-7 shadow-[0_0_70px_rgba(124,58,237,.14)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-200/80">
              Private Updates
            </p>
            <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">
              Get availability alerts
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/60">
              New releases, limited collections, and private viewing openings.
            </p>
            <form
              className="mt-6 flex gap-3"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="h-12 w-full rounded-xl border border-white/10 bg-[#050a1c]/70 px-4 text-sm text-white placeholder:text-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,.06)] outline-none ring-violet-400/40 focus:ring-2"
              />
              <button
                type="submit"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 px-5 text-sm font-medium shadow-[0_0_35px_rgba(124,58,237,.35)]"
              >
                Join <ArrowRight className="ml-2 size-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="relative mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Nova Residence. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#" className="hover:text-white/70">
              Privacy
            </a>
            <a href="#" className="hover:text-white/70">
              Terms
            </a>
            <a href="#" className="hover:text-white/70">
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
