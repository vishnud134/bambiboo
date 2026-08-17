import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Select sections, cards, and major container blocks across the page
    const elements = document.querySelectorAll(
      "section, article, .master-card, .scroll-reveal-item"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            // When scrolling past or above, remove is-visible so content smoothly transitions out and back in
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => {
      el.classList.add("scroll-reveal");
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [location?.pathname]);

  return <>{children}</>;
}
