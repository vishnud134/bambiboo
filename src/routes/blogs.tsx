import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { blogPosts } from "@/components/site/BlogCarouselSection";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Parenting & Early Learning Blog | BambiBoo" },
      { name: "description", content: "Insights, guides and expert tips on early childhood, nutrition, play and preschool transitions." },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
  component: BlogsLayout,
});

function BlogsLayout() {
  const matches = useMatches();
  const isChildRoute = matches.some((m) => m.routeId === "/blogs/$postId" || m.routeId === "/blogs/preschool-readinessguide");

  if (isChildRoute) {
    return <Outlet />;
  }

  return (
    <PageShell>
      <section className="container-page py-12 md:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary/80 mb-2">
            Parenting &amp; Early Learning Blog
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight text-balance">Insights &amp; guidance for BambiBoo parents.</h1>
          <p className="mt-4 text-muted-foreground">Expert tips on early childhood development, sugar-free nutrition, STEAM play, and smooth preschool transitions.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="master-card group h-full rounded-3xl bg-white border border-border/60 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover object-center" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground mb-2">
                  <div className="text-sm font-semibold text-primary">{post.category}</div>
                  <div className="text-xs text-muted-foreground">· {post.date} · {post.readTime}</div>
                </div>
                <h3 className="text-lg font-bold text-foreground leading-snug">{post.title}</h3>
                <>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4">
                    <Link to="/blogs/$postId" params={{ postId: post.id }} className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
                      Read full article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
