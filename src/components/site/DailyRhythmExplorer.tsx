import { useState } from "react";
import { Sun, BookOpen, Utensils, Trees, Moon, Sparkles } from "lucide-react";

import dailyRoutineHeroImg from "@/assets/bambiboo/daily-routine-hero.jpg";
import dailyRoutineMealsImg from "@/assets/bambiboo/daily-routine-meals.jpg";
import dailyRoutineNapImg from "@/assets/bambiboo/daily-routine-nap.jpg";
import steamHeroImg from "@/assets/bambiboo/steam-how-it-looks.jpg";

type TimeBlock = {
  id: string;
  time: string;
  title: string;
  icon: typeof Sun;
  description: string;
  highlights: string[];
  image: string;
  badgeText: string;
};

const timeBlocks: TimeBlock[] = [
  {
    id: "welcome",
    time: "8:30 AM – 9:30 AM",
    title: "Warm Welcome & Circle Time",
    icon: Sun,
    description: "Children arrive to gentle smiles, greeting rituals, morning songs, and free choice learning corners.",
    highlights: ["Individual check-ins", "Calendar & weather discussion", "Interactive puppet stories"],
    image: dailyRoutineHeroImg,
    badgeText: "Morning Arrival",
  },
  {
    id: "steam",
    time: "9:30 AM – 11:15 AM",
    title: "Phonics, Math & STEAM Discovery",
    icon: BookOpen,
    description: "Hands-on exploration in small guided groups. Children build, experiment, read stories, and trace letters.",
    highlights: ["Montessori sensory materials", "Phonics & story listening", "STEAM inquiry experiments"],
    image: steamHeroImg,
    badgeText: "Core Learning",
  },
  {
    id: "meals",
    time: "11:15 AM – 12:00 PM",
    title: "Gourmet Snack & Social Mealtime",
    icon: Utensils,
    description: "Children sit together around wooden dining tables to enjoy home-packed meals, practicing self-help skills.",
    highlights: ["Table manners & hygiene", "Peer conversations", "Self-feeding independence"],
    image: dailyRoutineMealsImg,
    badgeText: "Nourishment",
  },
  {
    id: "outdoor",
    time: "12:00 PM – 1:00 PM",
    title: "Outdoor Turf & Nature Exploration",
    icon: Trees,
    description: "Fresh air play on our sensory turf. Children run, balance, explore plants, and build gross motor strength.",
    highlights: ["Sensory balance tracks", "Gardening & plant care", "Gross motor coordination"],
    image: dailyRoutineHeroImg,
    badgeText: "Outdoor Play",
  },
  {
    id: "rest",
    time: "1:00 PM – 3:30 PM",
    title: "Rest Time & Quiet Reflection",
    icon: Moon,
    description: "Calm, low-stimulation environment with cozy mattresses, soft pillows, and lullaby music for peaceful napping.",
    highlights: ["Sanitized private beds", "Gentle story reading", "Recharging energy"],
    image: dailyRoutineNapImg,
    badgeText: "Day Care Rest",
  },
];

export function DailyRhythmExplorer() {
  const [activeId, setActiveId] = useState<string>("welcome");
  const activeBlock = timeBlocks.find((b) => b.id === activeId) || timeBlocks[0];
  const IconComp = activeBlock.icon;

  return (
    <section className="bg-[#FFFAF1] py-12 md:py-20">
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" /> A Day at BambiBoo
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#430E6C] tracking-tight text-balance">
              The daily rhythm of a curious child.
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed font-medium">
            Explore how we balance structured learning, free play, wholesome meals, and restful breaks throughout the day.
          </p>
        </div>

        {/* Timeline Tabs Bar */}
        <div className="flex overflow-x-auto pb-3 gap-2 sm:gap-3 scrollbar-none">
          {timeBlocks.map((b) => {
            const isActive = b.id === activeId;
            const TabIcon = b.icon;
            return (
              <button
                key={b.id}
                onClick={() => setActiveId(b.id)}
                className={`flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#430E6C] text-white shadow-lg shadow-[#430E6C]/20 scale-102"
                    : "bg-white text-foreground/80 hover:bg-[#FFF4E1] border border-border/40"
                }`}
              >
                <TabIcon className={`h-4 w-4 ${isActive ? "text-amber-300" : "text-primary"}`} />
                <span>{b.time}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Time Block Showcase */}
        <div className="mt-6 grid lg:grid-cols-12 gap-8 items-center bg-white rounded-[2.5rem] p-6 sm:p-8 md:p-10 border border-border/60 shadow-xl shadow-primary/5">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF4E1] border border-amber-200/80 px-3.5 py-1 text-xs font-bold text-[#430E6C]">
                <IconComp className="h-3.5 w-3.5 text-primary" />
                {activeBlock.badgeText} · {activeBlock.time}
              </div>
              <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#430E6C]">
                {activeBlock.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {activeBlock.description}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-border/60">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Key Highlights
              </div>
              <ul className="space-y-2">
                {activeBlock.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-[#FFF4E1] shadow-lg">
              <img
                src={activeBlock.image}
                alt={activeBlock.title}
                className="h-[280px] sm:h-[340px] md:h-[380px] w-full object-cover object-center rounded-[1.75rem] transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-md">
                <div className="text-xs font-extrabold text-[#430E6C] flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                  BambiBoo Day Rhythm
                </div>
                <div className="text-xs text-muted-foreground mt-0.5 font-medium">
                  {activeBlock.time} — {activeBlock.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
