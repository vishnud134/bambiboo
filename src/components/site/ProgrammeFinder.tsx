import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles, Calendar, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { AdmissionDialog } from "./AdmissionDialog";

type AgeGroup = {
  id: string;
  ageLabel: string;
  programmeName: string;
  href: string;
  tagline: string;
  hours: string;
  ratio: string;
  color: string;
  highlights: string[];
};

const ageGroups: AgeGroup[] = [
  {
    id: "toddler",
    ageLabel: "3m – 2 Years",
    programmeName: "Parent & Toddler",
    href: "/programmes/parent-toddler",
    tagline: "Sensory play, music, movement & bonding experiences with parent.",
    hours: "90-min sessions (Mon–Sat)",
    ratio: "1:6 (Parent-Guided)",
    color: "from-sky-500/10 to-blue-600/10 border-sky-300 text-sky-900",
    highlights: ["Sensory basket discovery", "Parent-child bonding", "Music & rhythm play"],
  },
  {
    id: "playgroup",
    ageLabel: "2 – 3 Years",
    programmeName: "Playgroup",
    href: "/programmes/playgroup",
    tagline: "First steps into independence, social play and gentle routines.",
    hours: "9:30 AM – 12:30 PM (Mon–Fri)",
    ratio: "2:12",
    color: "from-emerald-500/10 to-teal-600/10 border-emerald-300 text-emerald-900",
    highlights: ["Learning through play", "Building first friendships", "Routine confidence"],
  },
  {
    id: "nursery",
    ageLabel: "3 – 4 Years",
    programmeName: "Nursery",
    href: "/programmes/nursery",
    tagline: "Language expansion, phonics readiness, creative expression & social skills.",
    hours: "9:30 AM – 12:30 PM (Mon–Fri)",
    ratio: "1:12",
    color: "from-purple-500/10 to-indigo-600/10 border-purple-300 text-purple-900",
    highlights: ["Stories & CVC phonics", "Creative arts & drama", "STEAM discovery corners"],
  },
  {
    id: "lkg",
    ageLabel: "4 – 5 Years",
    programmeName: "LKG (Lower Kindergarten)",
    href: "/programmes/lkg",
    tagline: "Early reading, math concepts, inquiry-based science & creative arts.",
    hours: "9:30 AM – 1:00 PM (Mon–Fri)",
    ratio: "1:12",
    color: "from-amber-500/10 to-orange-600/10 border-amber-300 text-amber-900",
    highlights: ["Structured phonics & decoding", "Practical numeracy", "Environmental science"],
  },
  {
    id: "ukg",
    ageLabel: "5 – 6 Years",
    programmeName: "UKG (Upper Kindergarten)",
    href: "/programmes/ukg",
    tagline: "Primary school readiness with confident reading, problem-solving & leadership.",
    hours: "9:30 AM – 1:00 PM (Mon–Fri)",
    ratio: "1:12",
    color: "from-violet-500/10 to-purple-600/10 border-violet-300 text-violet-900",
    highlights: ["CBSE/ICSE/IB readiness", "Independent reading", "STEAM project work"],
  },
  {
    id: "daycare",
    ageLabel: "2 – 10 Years",
    programmeName: "BambiBoo Day Care",
    href: "/parents/daily-routine",
    tagline: "Safe, nurturing extended care with familiar routines and quiet nap facilities.",
    hours: "8:30 AM – 6:30 PM (Mon–Fri)",
    ratio: "1:8",
    color: "from-rose-500/10 to-pink-600/10 border-amber-300 text-amber-900",
    highlights: ["Home-packed meal times", "Rest & quiet nap area", "Supervised outdoor play"],
  },
];

export function ProgrammeFinder() {
  const [selectedId, setSelectedId] = useState<string>("playgroup");
  const activeGroup = ageGroups.find((g) => g.id === selectedId) || ageGroups[1];

  return (
    <section className="bg-[#FAFAFC] py-12 md:py-20 border-y border-border/60">
      <div className="container-page">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Interactive Programme Finder
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight text-balance">
            Find the perfect stage for your child.
          </h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
            Select your child's age group below to discover their tailored learning rhythm, teacher ratio, and daily experiences.
          </p>
        </div>

        {/* Interactive Age Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {ageGroups.map((g) => {
            const isSelected = g.id === selectedId;
            return (
              <button
                key={g.id}
                onClick={() => setSelectedId(g.id)}
                className={`relative px-4 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shadow-2xs ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-105"
                    : "bg-white text-foreground/80 hover:bg-primary/5 border border-border/60 hover:border-primary/30"
                }`}
              >
                {g.ageLabel}
              </button>
            );
          })}
        </div>

        {/* Selected Programme Result Card */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-card border-2 border-primary/20 p-6 sm:p-8 md:p-10 shadow-xl shadow-primary/10 transition-all duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/60">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-widest text-primary/80">
                  Recommended Programme
                </div>
                <h3 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
                  {activeGroup.programmeName}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {activeGroup.tagline}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  to={activeGroup.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-transparent px-5 py-3 text-xs sm:text-sm font-bold text-primary hover:bg-primary/5 transition"
                >
                  Explore Details <ArrowRight className="h-4 w-4" />
                </Link>
                <AdmissionDialog>
                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 hover:brightness-110 transition cursor-pointer">
                    Book a Visit
                  </button>
                </AdmissionDialog>
              </div>
            </div>

            {/* Details Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-border/60">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase text-muted-foreground">Timings</div>
                  <div className="text-sm font-bold text-foreground mt-0.5">{activeGroup.hours}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-border/60">
                <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase text-muted-foreground">Teacher Ratio</div>
                  <div className="text-sm font-bold text-foreground mt-0.5">{activeGroup.ratio}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-border/60">
                <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase text-muted-foreground">Admissions</div>
                  <div className="text-sm font-bold text-emerald-700 mt-0.5">Open for 2026–27</div>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="mt-6 pt-4">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Key Developmental Focus
              </div>
              <div className="flex flex-wrap gap-2.5">
                {activeGroup.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white border border-primary/20 px-3.5 py-1.5 text-xs font-bold text-foreground shadow-2xs"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
