import type { ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { BackToTop } from "./BackToTop";
import { FloatingContactButtons } from "./FloatingContactButtons";
import { BlogCarouselSection } from "./BlogCarouselSection";

const excludedBlogRoutes = [
  "/programmes",
  "/parents",
  "/world",
  "/beyond",
    "/contact",
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
      <main className="flex-1">{children}</main>
      {showBlog && <BlogCarouselSection />}
      <Footer />
      <FloatingContactButtons />
      <BackToTop />
    </div>
  );
}
