import type { ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { BackToTop } from "./BackToTop";
import { FloatingContactButtons } from "./FloatingContactButtons";
import { BlogCarouselSection } from "./BlogCarouselSection";
import { ScrollRevealProvider } from "./ScrollReveal";

const excludedBlogRoutes = [
  "/about",
  "/programmes",
  "/parents",
  "/world",
  "/beyond",
  "/contact",
  "/privacy",
  "/parents/faq",
  "/blogs",
];

export function PageShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const path = (location?.pathname || "/").replace(/\/$/, "") || "/";
  const showBlog = !excludedBlogRoutes.some(
    (route) => path === route || path.startsWith(`${route}/`)
  );

  return (
    <div className="flex min-h-screen flex-col relative overflow-x-clip">
      <ScrollProgress />
      <Header />
      <ScrollRevealProvider>
        <main className="flex-1">{children}</main>
        {showBlog && <BlogCarouselSection />}
      </ScrollRevealProvider>
      <Footer />
      <FloatingContactButtons />
      <BackToTop />
    </div>
  );
}
