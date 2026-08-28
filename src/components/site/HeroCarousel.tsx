import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import yogaSeatedMindfulnessImg from "@/assets/bambiboo/yoga-seated-mindfulness.jpg";
import curriculumHeroImg from "@/assets/bambiboo/curriculum-hero-hd.jpg";
import musicRhythmImg from "@/assets/bambiboo/music-rhythm-learning.jpg";
import playgroupProgImg from "@/assets/bambiboo/playgroup-prog-hd.jpg";

const slides = [
  { src: yogaSeatedMindfulnessImg, alt: "Seated yoga & mindfulness session at BambiBoo Preschool" },
  { src: curriculumHeroImg, alt: "Child-led discovery & guided learning activities at BambiBoo" },
  { src: musicRhythmImg, alt: "Rhythm, music and creative body movement sessions at BambiBoo" },
  { src: playgroupProgImg, alt: "Sensory exploration and hands-on discovery corners at BambiBoo" },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % total), 4200);
    return () => clearInterval(id);
  }, [total]);

  const go = (n: number) => setI(((n % total) + total) % total);

  return (
    <div className="relative">
      <div className="absolute -inset-6 blob bg-accent/60 -z-10" />
      <div className="relative w-full aspect-[4/3] rounded-4xl overflow-hidden shadow-2xl shadow-primary/20 bg-secondary">
        {slides.map((s, idx) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={800}
            height={600}
            loading={idx === 0 ? "eager" : "lazy"}
            fetchPriority={idx === 0 ? "high" : "low"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

        <button
          type="button"
          onClick={() => go(i - 1)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/30 text-white transition-all shadow-sm z-10"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(i + 1)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/30 text-white transition-all shadow-sm z-10"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => go(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-6 bg-primary-foreground" : "w-2 bg-primary-foreground/50 hover:bg-primary-foreground/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
