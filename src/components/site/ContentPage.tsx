import type { ReactNode } from "react";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { PageShell } from "./PageShell";
import { AdmissionDialog } from "./AdmissionDialog";
import { AdmissionForm } from "./AdmissionForm";
import { Breadcrumb } from "./Breadcrumb";
import { WhyBambiboo } from "./WhyBambiboo";
import { CommonPageFooterSections } from "./CommonPageSections";

type Section = {
  eyebrow?: string;
  title: string;
  body?: ReactNode;
  bullets?: string[];
  bulletStyle?: "cards" | "ticks" | "numbered-cards" | "numbered-cards-horizontal";
  tone?: "cream" | "white" | "berry";
  image?: string;
  imagePosition?: "left" | "right";
  customPosition?: "left" | "right";
  founderImage?: string;
  custom?: ReactNode;
  sticky?: boolean;
};

const defaultBreadcrumbMap: Record<string, { label: string; to?: string }[]> = {
  "About Us": [{ label: "About Us" }],
  "Curriculum & Pedagogy": [{ label: "Parents Corner", to: "/parents" }, { label: "Curriculum & Pedagogy" }],
  "Child Safety Policy": [{ label: "Parents Corner", to: "/parents" }, { label: "Safety & Security" }],
  "Admission Process": [{ label: "Parents Corner", to: "/parents" }, { label: "Admission Process" }],
  "School Transport": [{ label: "Parents Corner", to: "/parents" }, { label: "School Transport" }],
  "Parent Testimonials": [{ label: "Parents Corner", to: "/parents" }, { label: "Parent Testimonials" }],
  "BambiBoo at Home": [{ label: "BambiBoo World", to: "/world" }, { label: "At Home" }],
  "Indoor Environment": [{ label: "BambiBoo World", to: "/world" }, { label: "Indoor Campus" }],
  "Outdoor Campus": [{ label: "BambiBoo World", to: "/world" }, { label: "Outdoor Turf" }],
  "STEAM": [{ label: "BambiBoo World", to: "/world" }, { label: "STEAM Nook" }],
  "Gallery & Events": [{ label: "BambiBoo World", to: "/world" }, { label: "Gallery & Events" }],
  "Arts & Crafts": [{ label: "Beyond Academics", to: "/beyond" }, { label: "Arts & Crafts" }],
  "Yoga & Movement": [{ label: "Beyond Academics", to: "/beyond" }, { label: "Yoga & Movement" }],
  "Field Trips": [{ label: "Beyond Academics", to: "/beyond" }, { label: "Field Trips" }],
  "Festival & Events": [{ label: "Beyond Academics", to: "/beyond" }, { label: "Festivals & Events" }],
  "Music & Rhymes": [{ label: "Beyond Academics", to: "/beyond" }, { label: "Music & Rhymes" }],
};

const defaultHeroImageMap: Record<string, string> = {
  "Curriculum & Pedagogy": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
  "Child Safety Policy": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",
  "BambiBoo at Home": "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=85",
  "Indoor Environment": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
  "STEAM": "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=85",
  "Arts & Crafts": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=85",
  "Yoga & Movement": "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=85",
  "Field Trips": "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85",
  "Festival & Events": "https://images.unsplash.com/photo-1605007493699-af65834f8a00?auto=format&fit=crop&w=1200&q=85",
};

export function ContentPage({
  eyebrow,
  title,
  intro,
  heroNote,
  sections = [],
  cta = { label: "Book a Visit", to: "/parents/admission" },
  showHeroForm = false,
  heroImage,
  breadcrumbItems,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  heroNote?: ReactNode;
  sections?: Section[];
  cta?: { label: string; to: string };
  showHeroForm?: boolean;
  heroImage?: string;
  breadcrumbItems?: { label: string; to?: string }[];
}) {
  const activeHeroImage = heroImage || defaultHeroImageMap[eyebrow];
  const activeBreadcrumbs = breadcrumbItems || defaultBreadcrumbMap[eyebrow] || [{ label: eyebrow }];

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFECCB]">
        <div className="absolute -top-20 -right-16 h-72 w-72 blob bg-[#F8D9A8]" />
        <div className="absolute -bottom-24 -left-10 h-64 w-64 blob bg-primary/10" />
        {showHeroForm ? (
          <div className="container-page relative py-12 md:py-16 lg:py-20 grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
            <div className="lg:col-span-7 flex flex-col justify-start">
              <Breadcrumb items={activeBreadcrumbs} className="mb-4 text-xs font-semibold text-primary/80" />
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary w-fit">
                {eyebrow}
              </div>
              <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground text-balance">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed text-balance">{intro}</p>
              {heroNote && (
                <div className="mt-5 max-w-2xl text-base md:text-lg font-bold text-foreground/90 leading-relaxed text-balance">
                  {heroNote}
                </div>
              )}
              <AdmissionDialog>
                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110 w-fit">
                  {cta.label} <ArrowRight className="h-4 w-4" />
                </button>
              </AdmissionDialog>
            </div>
            <div className="lg:col-span-5 relative">
              <AdmissionForm />
            </div>
          </div>
        ) : activeHeroImage ? (
          <div className="container-page relative py-12 md:py-16 lg:py-20 grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
            <div className="lg:col-span-7 flex flex-col justify-start">
              <Breadcrumb items={activeBreadcrumbs} className="mb-4 text-xs font-semibold text-primary/80" />
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary w-fit">
                {eyebrow}
              </div>
              <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground text-balance">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed text-balance">{intro}</p>
              {heroNote && (
                <div className="mt-5 max-w-2xl text-base md:text-lg font-bold text-foreground/90 leading-relaxed text-balance">
                  {heroNote}
                </div>
              )}
              <AdmissionDialog>
                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110 w-fit">
                  {cta.label} <ArrowRight className="h-4 w-4" />
                </button>
              </AdmissionDialog>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-[#FFF4E1] shadow-lg shadow-primary/10">
                <img
                  src={activeHeroImage}
                  alt={title}
                  className="h-[320px] md:h-[380px] w-full object-cover object-center rounded-[1.75rem]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="container-page relative py-14 md:py-20 lg:py-24">
            <Breadcrumb items={activeBreadcrumbs} className="mb-4 text-xs font-semibold text-primary/80" />
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              {eyebrow}
            </div>
            <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl font-extrabold text-foreground text-balance">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground text-balance">{intro}</p>
            {heroNote && (
              <div className="mt-5 max-w-2xl text-base md:text-lg font-bold text-foreground/90 leading-relaxed text-balance">
                {heroNote}
              </div>
            )}
            <AdmissionDialog>
              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110">
                {cta.label} <ArrowRight className="h-4 w-4" />
              </button>
            </AdmissionDialog>
          </div>
        )}
      </section>

      {/* Why BambiBoo (2nd Container) */}
      <WhyBambiboo />

      {sections.map((s, i) => {
        const isLeft =
          s.imagePosition === "left" ||
          s.customPosition === "left" ||
          (s.imagePosition !== "right" &&
            s.customPosition !== "right" &&
            (s.custom ? true : i % 2 === 1));

        return (
          <section
            key={i}
            className={
              s.tone === "berry"
                ? "bg-primary text-primary-foreground py-12 md:py-16"
                : s.tone === "cream"
                  ? "bg-[#FFEBCB] py-12 md:py-16"
                  : "bg-background py-12 md:py-16"
            }
          >
            {s.founderImage ? (
              <div className="container-page">
                <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14 xl:gap-16">
                  <div className="order-1 lg:col-span-5">
                    <div className="relative w-full h-[400px] md:h-[480px] lg:h-[520px] overflow-hidden rounded-[2rem] shadow-lg shadow-primary/10 bg-[#FFF4E1] border border-border/40">
                      <img
                        src={s.founderImage}
                        alt={s.title}
                        width={600}
                        height={520}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className="order-2 lg:col-span-7">
                    {s.eyebrow && (
                      <div className="text-xs font-bold uppercase tracking-widest text-primary/80">
                        {s.eyebrow}
                      </div>
                    )}
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-balance">{s.title}</h2>
                    {s.body && (
                      <div className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-3xl">
                        {s.body}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : s.bulletStyle === "numbered-cards-horizontal" ? (
              <div className="container-page flex flex-col gap-6 md:gap-8">
                <div className="max-w-3xl">
                  {s.eyebrow && (
                    <div className={`text-xs font-bold uppercase tracking-widest ${s.sticky ? "inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-primary" : s.tone === "berry" ? "text-accent" : "text-primary/80"}`}>
                      {s.eyebrow}
                    </div>
                  )}
                  <h2 className={`mt-2 text-3xl md:text-4xl font-bold text-balance ${s.tone === "berry" ? "text-white" : ""}`}>{s.title}</h2>
                  {s.body && (
                    <div className={`mt-4 text-lg leading-relaxed ${s.tone === "berry" ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                      {s.body}
                    </div>
                  )}
                </div>
                {s.bullets && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
                    {s.bullets.map((b, idx) => {
                      const num = String(idx + 1).padStart(2, "0");
                      return (
                        <div
                          key={b}
                          className={`group relative flex flex-col justify-start p-5 pt-14 lg:p-5 lg:pt-14 rounded-3xl border-2 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg ${
                            s.tone === "berry"
                              ? "border-primary-foreground/20 bg-primary-foreground/5 text-white hover:bg-primary-foreground/10"
                              : "border-white/80 bg-[#FFF6EA] shadow-xs hover:border-primary/40 hover:bg-white"
                          }`}
                        >
                          <span className="absolute top-4 left-4 lg:top-3.5 lg:left-4 text-3xl lg:text-2xl font-bold font-display text-primary/30 group-hover:text-primary transition-colors">
                            {num}
                          </span>
                          <p className="relative z-10 text-base lg:text-sm font-semibold leading-snug text-foreground">
                            {b}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : s.bulletStyle === "cards" ? (
              <div className="container-page flex flex-col gap-6 md:gap-8">
                <div className="max-w-3xl">
                  {s.eyebrow && (
                    <div className={`text-xs font-bold uppercase tracking-widest ${s.tone === "berry" ? "text-accent" : "text-primary/80"}`}>
                      {s.eyebrow}
                    </div>
                  )}
                  <h2 className="mt-2 text-3xl md:text-4xl font-bold text-balance">{s.title}</h2>
                  {s.body && (
                    <div className={`mt-5 text-lg leading-relaxed ${s.tone === "berry" ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                      {s.body}
                    </div>
                  )}
                </div>
                {s.bullets && (
                  <ul className="grid gap-3.5 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className={`master-card-premium flex items-start gap-3.5 rounded-2xl p-4.5 text-sm font-semibold transition-all duration-300 ${
                          s.tone === "berry"
                            ? "border-primary-foreground/20 bg-primary-foreground/10 text-white hover:bg-primary-foreground/15"
                            : "border-amber-200/50 bg-[#FFFDF9] hover:border-amber-300"
                        }`}
                      >
                        <span className="mt-0.5 inline-flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xs">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <div className="container-page grid gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-14 items-center">
                {isLeft && (s.image || s.custom) ? (
                  <>
                    <div className="min-w-0 lg:col-span-5">
                      {s.image && (
                        <div className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-[#FFF4E1]/80 shadow-md w-full max-w-md mx-auto">
                          <img
                            src={s.image}
                            alt={s.title}
                            width={1200}
                            height={800}
                            className="w-full h-auto max-h-[320px] md:max-h-[340px] object-cover object-center rounded-[1.75rem]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}
                      {s.custom && <div>{s.custom}</div>}
                    </div>

                    <div className="min-w-0 lg:col-span-7">
                      {s.eyebrow && (
                        <div className={`text-xs font-bold uppercase tracking-widest ${s.sticky ? "inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-primary" : s.tone === "berry" ? "text-white/80" : "text-primary/80"}`}>
                          {s.eyebrow}
                        </div>
                      )}
                      <h2 className={`mt-2 text-3xl md:text-4xl font-bold text-balance ${s.tone === "berry" ? "text-white" : ""}`}>{s.title}</h2>
                      {s.body && (
                        <div className={`mt-5 text-lg leading-relaxed ${s.tone === "berry" ? "text-white/90 font-medium" : "text-muted-foreground"}`}>
                          {s.body}
                        </div>
                      )}
                      {s.bullets && s.bulletStyle === "ticks" && (
                        <ul className="mt-5 grid gap-3">
                          {s.bullets.map((b) => (
                            <li key={b} className={`flex items-start gap-3 text-base ${s.tone === "berry" ? "text-white font-medium" : "text-muted-foreground"}`}>
                              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success text-success-foreground">
                                <Check className="h-3 w-3" />
                              </span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="min-w-0 lg:col-span-7 flex flex-col justify-center">
                      {s.eyebrow && (
                        <div className={`text-xs font-bold uppercase tracking-widest ${s.sticky ? "inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-primary" : s.tone === "berry" ? "text-accent" : "text-primary/80"}`}>
                          {s.eyebrow}
                        </div>
                      )}
                      <h2 className={`mt-2 text-3xl md:text-4xl font-bold text-balance ${s.tone === "berry" ? "text-white" : ""}`}>{s.title}</h2>
                      {s.body && (
                        <div className={`mt-5 text-lg leading-relaxed ${s.tone === "berry" ? "text-white/95 font-medium" : "text-muted-foreground"}`}>
                          {s.body}
                        </div>
                      )}
                      {s.bullets && s.bulletStyle === "ticks" && (
                        <ul className="mt-5 grid gap-3">
                          {s.bullets.map((b) => (
                            <li key={b} className={`flex items-start gap-3 text-base ${s.tone === "berry" ? "text-white font-medium" : "text-muted-foreground"}`}>
                              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success text-success-foreground">
                                <Check className="h-3 w-3" />
                              </span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="min-w-0 lg:col-span-5 flex flex-col items-center justify-center">
                      {s.image && (
                        <div className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-[#FFF4E1]/80 shadow-md w-full max-w-md mx-auto">
                          <img
                            src={s.image}
                            alt={s.title}
                            width={1200}
                            height={800}
                            className="w-full h-auto max-h-[320px] md:max-h-[340px] object-cover object-center rounded-[1.75rem]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}
                      {s.custom && <div className="w-full">{s.custom}</div>}
                    </div>
                  </>
                )}
              </div>
            )}
          </section>
        );
      })}

      {/* Common Footer Sections: Pillars, Loved by Families, FAQ */}
      <CommonPageFooterSections />
    </PageShell>
  );
}
