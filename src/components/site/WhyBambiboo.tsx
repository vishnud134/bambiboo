import { Link } from "@tanstack/react-router";
import { Sparkles, BookOpen, Leaf, Heart, Home, ArrowRight } from "lucide-react";

export const whyBambibooItems = [
  {
    icon: BookOpen,
    label: "Childhood Comes First",
    sub: "Joyful early exploration and open endedplay.",
    href: "/about",
  },
  {
    icon: BookOpen,
    label: "Stories Before Screens",
    sub: "Rich language, books, puppets and imagination.",
    href: "/about",
  },
  {
    icon: Leaf,
    label: "Play Before Pressure",
    sub: "Unhurried milestones and experiential learning.",
    href: "/parents/curriculum",
  },
  {
    icon: Heart,
    label: "Relationships Before Results",
    sub: "Every child is seen, heard and loved.",
    href: "/parents/testimonials",
  },
  {
    icon: Home,
    label: "A Second Home, Not Just a Preschool",
    sub: "Warm, safe, low-stimulation environment.",
    href: "/parents/safety",
  },
];

export function WhyBambiboo({ className = "" }: { className?: string }) {
  return (
    <section className={`bg-[#FFFFFF] py-12 md:py-16 ${className}`}>
      <div className="container-page">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 md:mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#430E6C]/75 mb-2">
              WHY CHOOSE BAMBIBOO
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#430E6C] tracking-tight text-balance">
              A place where childhood comes first.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#430E6C]/85 max-w-md font-medium leading-relaxed">
            Five core values that shape every decision we make for your child every single day.
          </p>
        </div>

        {/* 5 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {whyBambibooItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.label}
                to={item.href}
                className="master-card group flex flex-col justify-between h-full rounded-3xl bg-white border-2 border-[#7E22CE] p-5 shadow-xs hover:shadow-lg hover:border-[#6B21A8] transition-all duration-300 min-h-[170px]"
              >
                <div>
                  <div className="h-10 w-10 rounded-full bg-[#7E22CE] text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                    <IconComponent className="h-5 w-5 stroke-[2.25]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#7E22CE] leading-snug tracking-tight mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-foreground/80 font-medium leading-relaxed">
                    {item.sub}
                  </p>
                </div>
                <div className="mt-4 text-xs font-bold text-[#7E22CE] flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
