import { Link } from "@tanstack/react-router";
import { Sparkles, BookOpen, Leaf, Heart, Home } from "lucide-react";

export const whyBambibooItems = [
  {
    icon: Sparkles,
    label: "Childhood Comes First",
    sub: "Joyful early exploration and open-ended play.",
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
            <h2 className="text-3xl md:text-5xl font-black text-[#430E6C] tracking-tight text-balance">
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
                className="group flex flex-col justify-between h-full rounded-3xl bg-[#6722A9] text-white p-5 shadow-md border border-[#6722A9]/30 hover:shadow-xl hover:bg-[#581c93] hover:-translate-y-1 transition-all duration-300 min-h-[170px]"
              >
                <div>
                  <div className="h-10 w-10 rounded-2xl bg-white/20 text-white grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold leading-snug">{item.label}</h3>
                  <p className="text-xs text-white/80 mt-1 font-medium">{item.sub}</p>
                </div>
                <div className="mt-4 text-xs font-bold text-amber-200 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <span aria-hidden>→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
