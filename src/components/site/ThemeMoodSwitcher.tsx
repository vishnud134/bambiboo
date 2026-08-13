import { useState, useEffect } from "react";
import { Sparkles, Sun, Leaf, Flower2 } from "lucide-react";

type Mood = "amber" | "sage" | "lavender";

export function ThemeMoodSwitcher() {
  const [mood, setMood] = useState<Mood>("amber");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (mood === "sage") {
      root.style.setProperty("--accent", "#A7F3D0");
      root.style.setProperty("--secondary", "#E2F6EB");
    } else if (mood === "lavender") {
      root.style.setProperty("--accent", "#DDD6FE");
      root.style.setProperty("--secondary", "#EFEBFF");
    } else {
      root.style.removeProperty("--accent");
      root.style.removeProperty("--secondary");
    }
  }, [mood]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      {open && (
        <div className="glass-badge flex items-center gap-1.5 rounded-full p-1.5 shadow-xl animate-float-slow">
          <button
            onClick={() => setMood("amber")}
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold transition-all ${
              mood === "amber"
                ? "bg-[#F7CB8B] text-[#430E6C] shadow-xs"
                : "text-foreground/75 hover:bg-white/60"
            }`}
          >
            <Sun className="h-3.5 w-3.5" /> Amber
          </button>
          <button
            onClick={() => setMood("sage")}
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold transition-all ${
              mood === "sage"
                ? "bg-[#A7F3D0] text-[#047857] shadow-xs"
                : "text-foreground/75 hover:bg-white/60"
            }`}
          >
            <Leaf className="h-3.5 w-3.5" /> Sage
          </button>
          <button
            onClick={() => setMood("lavender")}
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold transition-all ${
              mood === "lavender"
                ? "bg-[#DDD6FE] text-[#6D28D9] shadow-xs"
                : "text-foreground/75 hover:bg-white/60"
            }`}
          >
            <Flower2 className="h-3.5 w-3.5" /> Lavender
          </button>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className="rounded-full bg-primary p-3 text-primary-foreground shadow-xl shadow-primary/30 hover:scale-110 active:scale-95 transition-all"
        aria-label="Switch Theme Mood"
      >
        <Sparkles className="h-4 w-4" />
      </button>
    </div>
  );
}
