import { Link } from "@tanstack/react-router";
import { Palette, Music, Sun, Compass, Sparkles, ArrowRight } from "lucide-react";

import artsCraftsImg from "@/assets/bambiboo/hobby-center-prog-hd.jpg";
import musicDanceImg from "@/assets/bambiboo/nursery-prog.jpg";
import yogaMovementImg from "@/assets/bambiboo/yoga-hero-hd.jpg";
import fieldTripsImg from "@/assets/bambiboo/field-trip-destination.jpg";
import festivalsEventsImg from "@/assets/bambiboo/festival-hero-hd.jpg";

export const beyondAcademicsCards = [
  {
    icon: Palette,
    label: "Arts & Crafts",
    sub: "Free painting, clay modeling, tactile textures & creative self-expression.",
    image: artsCraftsImg,
    href: "/beyond/arts",
  },
  {
    icon: Music,
    label: "Music & Dance",
    sub: "Rhythm, acoustic instruments, songs & joyful body movement.",
    image: musicDanceImg,
    href: "/beyond/music",
  },
  {
    icon: Sun,
    label: "Yoga & Movement",
    sub: "Mindful breathing, motor balance, agility & body awareness.",
    image: yogaMovementImg,
    href: "/beyond/yoga",
  },
  {
    icon: Compass,
    label: "Field Trips",
    sub: "Nature walks, farm visits, community & real-world discovery.",
    image: fieldTripsImg,
    href: "/beyond/field-trips",
  },
  {
    icon: Sparkles,
    label: "Festivals & Events",
    sub: "Cultural traditions, seasonal celebrations & family gatherings.",
    image: festivalsEventsImg,
    href: "/beyond/festivals",
  },
];

export function BeyondAcademicsSection({ className = "" }: { className?: string }) {
  return (
    <section className={`bg-[#FFFAF1] py-12 md:py-16 ${className}`}>
      <div className="container-page">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 md:mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#430E6C]/75 mb-2">
              BEYOND ACADEMICS
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#430E6C] tracking-tight text-balance">
              Nurturing the whole child through rich experiences.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm md:text-base text-[#430E6C]/85 max-w-md font-medium leading-relaxed">
              From creative arts and rhythmic music to mindful movement, field trips and cultural celebrations.
            </p>
            <Link
              to="/beyond"
              className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline text-sm shrink-0"
            >
              Explore Beyond <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {beyondAcademicsCards.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.label}
                to={item.href}
                className="master-card group flex flex-col justify-between h-full rounded-3xl bg-white border-2 border-[#7E22CE] p-4.5 sm:p-5 shadow-xs hover:shadow-xl hover:border-[#6B21A8] transition-all duration-300 min-h-[290px]"
              >
                <div>
                  <div className="h-10 w-10 rounded-full bg-[#7E22CE] text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                    <IconComponent className="h-5 w-5 stroke-[2.25]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#7E22CE] leading-snug tracking-tight mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-foreground/80 font-medium leading-relaxed mb-3">
                    {item.sub}
                  </p>
                  <div className="w-full h-32 rounded-2xl overflow-hidden mb-2 border border-[#7E22CE]/15 shadow-2xs">
                    <img
                      src={item.image}
                      alt={item.label}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="mt-3 text-xs font-bold text-[#7E22CE] flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Explore {item.label.split(" ")[0]} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
