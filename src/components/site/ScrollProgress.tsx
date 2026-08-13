import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScroll((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 right-0 bottom-0 z-50 w-1.5 bg-transparent pointer-events-none">
      <div
        className="w-full bg-gradient-to-b from-primary via-[#F7CB8B] to-primary transition-all duration-150 ease-out shadow-xs rounded-l-full"
        style={{ height: `${scroll}%` }}
      />
    </div>
  );
}
