import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  Users,
  Sparkles,
  Heart,
  Send,
  Star,
  HeartHandshake,
  Activity,
  Music,
  BookOpen,
  Trees,
  Smile,
  Calculator,
  Rocket,
  Pencil,
  Mic,
  Lightbulb,
  Brain,
  PartyPopper,
  Leaf,
  GraduationCap,
  Moon,
  Utensils,
  Video,
  Palette,
  ShieldCheck,
} from "lucide-react";
import { PageShell } from "./PageShell";
import { AdmissionForm } from "./AdmissionForm";
import { Breadcrumb } from "./Breadcrumb";
import { WhyBambiboo } from "./WhyBambiboo";
import { CommonPageFooterSections } from "./CommonPageSections";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

function getFeatureIcon(title: string) {
  const lower = title.toLowerCase();
  if (lower.includes("parent connection") || lower.includes("collaboration") || lower.includes("continuity")) return HeartHandshake;
  if (lower.includes("sensory") || lower.includes("tactile")) return Sparkles;
  if (lower.includes("mobility") || lower.includes("fitness") || lower.includes("fitness") || lower.includes("agility")) return Activity;
  if (lower.includes("music") || lower.includes("dance") || lower.includes("rhythm")) return Music;
  if (lower.includes("story") || lower.includes("reading") || lower.includes("literacy") || lower.includes("decoding") || lower.includes("blending") || lower.includes("phonics")) return BookOpen;
  if (lower.includes("writing") || lower.includes("emergent")) return Pencil;
  if (lower.includes("math") || lower.includes("calculat") || lower.includes("number")) return Calculator;
  if (lower.includes("steam") || lower.includes("robotics") || lower.includes("coder")) return Rocket;
  if (lower.includes("speaking") || lower.includes("drama") || lower.includes("presentation")) return Mic;
  if (lower.includes("science") || lower.includes("environmental") || lower.includes("nature") || lower.includes("leaf")) return Leaf;
  if (lower.includes("outdoor") || lower.includes("turf")) return Trees;
  if (lower.includes("art") || lower.includes("pottery") || lower.includes("paint") || lower.includes("craft")) return Palette;
  if (lower.includes("thinking") || lower.includes("puzzle") || lower.includes("logic")) return Brain;
  if (lower.includes("prep") || lower.includes("transition") || lower.includes("grade")) return GraduationCap;
  if (lower.includes("nap") || lower.includes("sleep")) return Moon;
  if (lower.includes("meal") || lower.includes("food") || lower.includes("nutrition") || lower.includes("snack")) return Utensils;
  if (lower.includes("cctv") || lower.includes("live parent") || lower.includes("video")) return Video;
  if (lower.includes("care") || lower.includes("self-care") || lower.includes("routine")) return ShieldCheck;
  if (lower.includes("pickup") || lower.includes("window") || lower.includes("hours")) return Clock;
  if (lower.includes("project")) return Lightbulb;
  if (lower.includes("cultural") || lower.includes("celebration") || lower.includes("festival")) return PartyPopper;
  return Sparkles;
}

export type ProgrammeInfo = {
  name: string;
  ageRange: string;
  tagline: string;
  highlights?: { title: string; body: string }[];
  intro: string;
  ratio: string;
  hours: string;
  image?: string;
  features: { title: string; body: string }[];
  development?: string[];
  developmentTitle?: string;
  learningExperiencesTitle?: string;
  learningExperiencesDescription?: string;
  learningExperiences?: string[];
  scheduleTitle?: string;
  scheduleSubtitle?: string;
  schedule: { time: string; block: string }[];
  activities: string[];
  testimonials?: { name: string; meta: string; quote: string }[];
  color: "berry" | "coral" | "sky" | "mint" | "butter";
};

import parentToddlerImg from "@/assets/bambiboo/parent-toddler.jpg";
import playgroupImg from "@/assets/bambiboo/playgroup-prog-hd.jpg";
import preschoolImg from "@/assets/bambiboo/preschool-prog-hd.jpg";
import lkgImg from "@/assets/bambiboo/lkg-prog.jpg";
import ukgImg from "@/assets/bambiboo/ukg-prog.jpg";
import nurseryImg from "@/assets/bambiboo/nursery-prog.jpg";
import daycareImg from "@/assets/bambiboo/daycare-prog.jpg";
import hobbyImg from "@/assets/bambiboo/hobby-center-prog-hd.jpg";

const defaultProgrammeImages: Record<string, string> = {
  "Parent-Toddler Program": parentToddlerImg,
  "Parent Toddler Program": parentToddlerImg,
  "Play-Group": playgroupImg,
  "Pre-School": preschoolImg,
  "LKG": lkgImg,
  "LKG (Lower Kindergarten)": lkgImg,
  "UKG": ukgImg,
  "UKG (Upper Kindergarten)": ukgImg,
  "Nursery": nurseryImg,
  "Daycare": daycareImg,
  "Bambiboo Hobby Center": hobbyImg,
};

const toneMap = {
  berry: "bg-primary text-primary-foreground",
  coral: "bg-[#F8D196] text-[#430E6C]",
  sky: "bg-[#FFEBCB] text-[#430E6C]",
  mint: "bg-[#EBF5FF] text-[#430E6C]",
  butter: "bg-[#FFF6EA] text-[#430E6C]",
};

const textToneMap = {
  berry: "text-white/90",
  coral: "text-[#430E6C]/90",
  sky: "text-[#430E6C]/90",
  mint: "text-[#430E6C]/90",
  butter: "text-[#430E6C]/90",
};

export function ProgrammePage({ info, showHeroForm }: { info: ProgrammeInfo; showHeroForm?: boolean }) {
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-[#FFECCB] text-[#430E6C] relative overflow-hidden">
        <div className="absolute -top-20 -right-16 h-72 w-72 blob bg-[#F8D9A8]" />
        <div className="absolute -bottom-24 -left-10 h-64 w-64 blob bg-primary/10" />
        {showHeroForm ? (
          <div className="container-page relative py-12 md:py-16 lg:py-20 grid lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <Breadcrumb
                  items={[
                    { label: "Programmes", to: "/programmes" },
                    { label: info.name },
                  ]}
                  className="mb-4 text-xs font-semibold text-[#430E6C]/80"
                />
                <div className="inline-flex items-center rounded-full bg-[#430E6C]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#430E6C]">
                  Programme
                </div>
                <h1 className="mt-4 text-5xl md:text-7xl font-extrabold text-balance text-[#430E6C]">{info.name}</h1>
                <div className="mt-3 text-sm uppercase tracking-[0.28em] text-[#430E6C]/80">{info.ageRange}</div>
                <p className="mt-4 max-w-xl text-lg text-[#430E6C]/90 leading-relaxed">{info.tagline}</p>
                {info.highlights?.length ? (
                  <div className="mt-6 max-w-4xl">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#430E6C]/80">Highlights</div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      {info.highlights.map((highlight) => (
                        <div key={highlight.title} className="rounded-3xl border border-[#430E6C]/10 bg-white/80 p-4 shadow-sm">
                          <div className="text-sm font-bold text-[#430E6C]">{highlight.title}</div>
                          <p className="mt-2 text-sm text-[#430E6C]/80 leading-relaxed">{highlight.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="grid grid-cols-2 gap-3 max-w-lg">
                <Stat icon={<Clock className="h-4 w-4" />} label="Hours" value={info.hours} />
                <Stat icon={<Users className="h-4 w-4" />} label="Ratio" value={info.ratio} />
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#430E6C]/15 max-w-lg">
                <HeroHighlight value="1:5" label="Teacher Ratio" />
                <HeroHighlight value="8+" label="Age Programmes" />
                <HeroHighlight value="100%" label="Live CCTV" />
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <AdmissionForm />
            </div>
          </div>
        ) : (
          <div className="container-page relative py-12 md:py-16 lg:py-20 grid md:grid-cols-12 gap-8 lg:gap-12 items-end">
            <Link
              to="/parents/admission"
              className="absolute top-0 right-0 z-10 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:brightness-110 transition whitespace-nowrap"
            >
              <Send className="h-4 w-4" /> Admission Enquiry
            </Link>
            <div className="md:col-span-8 lg:col-span-8">
              <Breadcrumb
                items={[
                  { label: "Programmes", to: "/programmes" },
                  { label: info.name },
                ]}
                className="mb-4 text-xs font-semibold text-[#430E6C]/80"
              />
              <div className="inline-flex items-center rounded-full bg-[#430E6C]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#430E6C]">
                Programme · {info.ageRange}
              </div>
              <h1 className="mt-4 text-5xl md:text-7xl font-extrabold text-balance text-[#430E6C]">{info.name}</h1>
              <p className="mt-4 max-w-xl text-lg text-[#430E6C]/90">{info.tagline}</p>
              {info.highlights?.length ? (
                <div className="mt-6 max-w-4xl">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#430E6C]/80">Highlights</div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {info.highlights.map((highlight) => (
                      <div key={highlight.title} className="rounded-3xl border border-[#430E6C]/10 bg-white/80 p-4 shadow-sm">
                        <div className="text-sm font-bold text-[#430E6C]">{highlight.title}</div>
                        <p className="mt-2 text-sm text-[#430E6C]/80 leading-relaxed">{highlight.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            <div className="md:col-span-4 lg:col-span-4 grid grid-cols-2 gap-3">
              <Stat icon={<Clock className="h-4 w-4" />} label="Hours" value={info.hours} />
              <Stat icon={<Users className="h-4 w-4" />} label="Ratio" value={info.ratio} />
            </div>
          </div>
        )}
      </section>

      {/* Why BambiBoo (2nd Container) */}
      <WhyBambiboo />

      {/* About */}
      <section className="bg-background">
        <div className="container-page section-padding grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="text-xs font-bold uppercase tracking-widest text-primary/80">About the programme</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-balance">
              What {info.name} looks like at BambiBoo
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{info.intro}</p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[2rem] shadow-lg border border-border/40 bg-[#FFF4E1]">
              <img
                src={
                  info.image ||
                  defaultProgrammeImages[info.name] ||
                  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85"
                }
                alt={`What ${info.name} looks like at BambiBoo`}
                className="h-[320px] md:h-[380px] w-full object-cover object-center rounded-[1.75rem]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#6721AB] text-white">
        <div className="container-page section-padding">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F8D196]">Programme features</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Built around how {info.ageRange} children learn</h2>
          <div className={`mt-8 grid gap-6 xl:gap-6 ${info.features.length === 6 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
            {info.features.map((f, i) => {
              const FeatureIcon = getFeatureIcon(f.title);
              return (
                <div key={f.title} className="rounded-3xl bg-[#FFF6EA] border border-[#F8D196]/50 p-6 shadow-sm hover:shadow-xl hover:shadow-black/20 transition flex flex-col justify-between h-full">
                  <div>
                    <div className={`h-10 w-10 rounded-2xl grid place-items-center ${i % 2 === 0 ? "bg-accent text-primary" : "bg-primary text-primary-foreground"}`}>
                      <FeatureIcon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-[#430E6C]">{f.title}</h3>
                    <p className="mt-2 text-sm text-[#430E6C]/80 leading-relaxed">{f.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Holistic development */}
      {info.development && info.development.length > 0 && (
        <section className="bg-background">
          <div className="container-page section-padding grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="text-xs font-bold uppercase tracking-widest text-primary/80">Holistic development</div>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-balance">{info.developmentTitle || "Five domains, one child."}</h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Every activity is mapped to specific developmental outcomes so parents know exactly what their child is growing into.
              </p>
            </div>
            <ul className="md:col-span-7 lg:col-span-8 grid gap-4 sm:grid-cols-2">
              {info.development.map((d) => (
                <li key={d} className="rounded-2xl border border-border bg-card p-4 text-sm flex items-start gap-3">
                  <Heart className="h-4 w-4 text-primary shrink-0 mt-1" /> {d}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Schedule */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-10 md:py-14">
          <div className="text-xs font-bold uppercase tracking-widest text-accent">{info.scheduleTitle || "A day at BambiBoo"}</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">{info.scheduleSubtitle || "Programme schedule"}</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {info.schedule.map((s) => {
              const isHighlighted = s.block === "Breakfast + hydration" || s.block === "Day ends";
              return (
                <div
                  key={s.time}
                  className={cn(
                    "flex items-center gap-4 rounded-2xl border p-4 transition",
                    isHighlighted
                      ? "border-primary-foreground/30 bg-primary-foreground/20"
                      : "border-primary-foreground/15 bg-primary-foreground/5"
                  )}
                >
                  <div className="rounded-xl bg-accent px-3 py-1.5 text-primary font-bold text-sm">{s.time}</div>
                  <div className="text-primary-foreground/90">{s.block}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {info.testimonials && info.testimonials.length > 0 && (
        <section className="bg-background">
          <div className="container-page py-10 md:py-14">
            <div className="text-xs font-bold uppercase tracking-widest text-primary/80">Parent stories</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">What families say about {info.name}</h2>
            <Carousel opts={{ align: "start", loop: true }} className="mt-8">
              <CarouselContent className="-ml-5">
                {info.testimonials.map((t) => (
                  <CarouselItem key={t.name} className="pl-5 md:basis-1/2 lg:basis-1/3">
                    <Link
                      to="/parents/testimonials"
                      className="h-full rounded-3xl bg-card border border-border p-6 flex flex-col hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition"
                    >
                      <div className="flex gap-1 text-accent">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="mt-4 flex-1 text-foreground/85 leading-relaxed">"{t.quote}"</p>
                      <div className="mt-5 pt-5 border-t border-border">
                        <div className="font-bold">{t.name}</div>
                        <div className="text-xs text-muted-foreground">{t.meta}</div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </section>
      )}

      {/* Activities - hide on Playgroup page */}
      {!info.name.toLowerCase().includes("playgroup") && (
        <section className="bg-secondary/50">
          <div className="container-page py-10 md:py-14">
            <div className="text-xs font-bold uppercase tracking-widest text-primary/80">Development activities</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Hands, feet, voice, imagination all in play.</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {info.activities.map((a) => (
                <div key={a} className="rounded-2xl bg-card border border-border p-5 text-sm">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary" />
                  {a}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#FFEBCB] pt-10 md:pt-14 pb-11">
        <div className="container-page">
          <div className="rounded-[40px] bg-[#3D1C84] p-10 md:p-14 text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 h-full w-1/3 bg-[#8F6584]" style={{ clipPath: "ellipse(75% 120% at 100% 0%)" }} />
            <div className="relative flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-balance">Ready to see the {info.name} classroom?</h3>
                <p className="mt-2 text-primary-foreground/85">Book a private walkthrough with our lead teacher.</p>
              </div>
              <Link
                to="/parents/admission"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-primary hover:brightness-105 relative z-10"
              >
                Start admission <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Footer Sections: Pillars, Loved by Families, FAQ */}
      <CommonPageFooterSections />
    </PageShell>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  const parts = value.split(" (");
  const mainVal = parts[0];
  const subVal = parts[1] ? `(${parts[1]}` : null;

  return (
    <div className="rounded-2xl bg-background/20 backdrop-blur p-4">
      <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest opacity-80 font-semibold">
        {icon} {label}
      </div>
      <div className="mt-1 text-base sm:text-lg font-bold leading-snug">{mainVal}</div>
      {subVal && (
        <div className="text-xs sm:text-sm font-semibold opacity-95 whitespace-nowrap mt-0.5">{subVal}</div>
      )}
    </div>
  );
}

function HeroHighlight({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-extrabold">{value}</div>
      <div className="mt-1 text-[11px] font-bold uppercase tracking-widest opacity-80">{label}</div>
    </div>
  );
}

