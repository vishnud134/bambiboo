import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type BuildItem = { image: string; text: string };

export function WhatWeBuildCarousel({ items }: { items: BuildItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered, items.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div
      className="relative w-full max-w-md lg:max-w-[450px] lg:mr-auto overflow-hidden rounded-3xl border border-white/60 bg-[#FFF6EA] shadow-md master-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Aspect Ratio Container for Smooth Image Layering */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        {items.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={item.text}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={item.image}
                alt={item.text}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className={`h-full w-full object-cover transition-transform duration-1000 ease-out ${
                  isActive ? "scale-100" : "scale-105"
                }`}
              />
            </div>
          );
        })}

        {/* Navigation Arrow Buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-primary backdrop-blur-md shadow-md hover:bg-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border border-white/60"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-primary backdrop-blur-md shadow-md hover:bg-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border border-white/60"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Caption & Indicators */}
      <div className="p-5 md:p-6 bg-[#FFF6EA] flex flex-col justify-between min-h-[100px]">
        <div className="relative min-h-[48px] flex items-center">
          {items.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={item.text}
                className={`transition-all duration-500 ease-out ${
                  isActive
                    ? "opacity-100 translate-y-0 relative z-10"
                    : "opacity-0 translate-y-2 absolute inset-x-0 pointer-events-none"
                }`}
              >
                <p className="text-sm md:text-base font-semibold text-foreground leading-snug">
                  <span className="mr-2.5 inline-block h-2.5 w-2.5 rounded-full bg-primary align-middle shadow-2xs" />
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dot Pagination Pills */}
        <div className="flex items-center gap-1.5 pt-3">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? "w-6 bg-primary" : "w-2 bg-primary/25 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
