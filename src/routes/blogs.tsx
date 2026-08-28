import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { PageShell } from "@/components/site/PageShell";
import { BlogCarouselSection, blogPosts } from "@/components/site/BlogCarouselSection";
import { BlogTOC } from "@/components/site/BlogTOC";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Parenting & Early Learning Blog | BambiBoo" },
      { name: "description", content: "Insights, guides and expert tips on early childhood, nutrition, play and preschool transitions." },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  // If the URL is /blogs/:postId, render that post's full content inline so direct links work.
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const match = pathname.match(/^\/blogs\/([^\/]+)\/?$/);
  if (match) {
    const postId = match[1];
    const post = blogPosts.find((p) => p.id === postId);
    if (post) {
      const makeHighRes = (url: string) => {
        try {
          if (!url) return { src: url };
          if (url.includes("images.unsplash.com")) {
            if (/w=\d+/.test(url)) {
              const large = url.replace(/w=\d+/, "w=1600");
              const mid = url.replace(/w=\d+/, "w=1200");
              const small = url.replace(/w=\d+/, "w=800");
              return { src: large, srcSet: `${small} 800w, ${mid} 1200w, ${large} 1600w` };
            }
            return { src: url, srcSet: `${url} 1200w, ${url} 1600w` };
          }
          return { src: url };
        } catch {
          return { src: url };
        }
      };
      return (
        <PageShell>
          <article className="container-page py-12 md:py-16">
            <div className="mb-8">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                {(() => {
                  const hi = makeHighRes(post.image || "");
                  return (
                    <img
                      src={hi.src}
                      srcSet={hi.srcSet}
                      sizes="(min-width:1024px) 1200px, 100vw"
                      alt={post.title}
                      className="w-full h-[360px] object-cover"
                    />
                  );
                })()}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
              </div>
              <div className="mt-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/80 mb-2">Parenting & Early Learning Blog</div>
                <h1 className="mt-2 text-4xl md:text-5xl font-black text-foreground leading-tight">{post.title}</h1>
                <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm text-muted-foreground">
                  <div>{post.date} · {post.readTime}</div>
                  <div className="hidden sm:block">·</div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 grid place-items-center text-primary font-bold">BB</div>
                    <div className="text-sm">
                      <div className="font-semibold text-foreground">BambiBoo</div>
                      <div className="text-xs text-muted-foreground">Author</div>
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-3">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`} className="text-sm text-muted-foreground hover:text-primary">Share</a>
                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(location.href)}&text=${encodeURIComponent(post.title)}`} className="text-sm text-muted-foreground hover:text-primary">Tweet</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3 items-start">
              <div className="lg:col-span-2">
                    <div className="rounded-2xl bg-white p-8 shadow-sm">
                      <div className="prose prose-lg max-w-none text-foreground post-content">{post.content}</div>
                    </div>
              </div>

              <aside className="lg:col-span-1 lg:sticky lg:top-24 self-start space-y-4">
                <div className="rounded-xl bg-white p-4 border border-border/60 shadow-2xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">About this article</div>
                  <div className="mt-2 text-sm text-foreground leading-relaxed">{post.excerpt}</div>
                </div>
                <div className="rounded-xl p-4 border border-border bg-white/90 shadow-2xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Table of contents</div>
                  <BlogTOC selector=".post-content" />
                </div>
                <div className="rounded-xl p-4 border border-border bg-white/90 shadow-2xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Related posts</div>
                  <ul className="mt-3 space-y-2">
                    {blogPosts.slice(1, 4).map((p) => (
                      <li key={p.id}>
                        <a href={`/blogs/${p.id}`} className="text-sm font-semibold text-primary hover:underline">
                          {p.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </article>
        </PageShell>
      );
    }
  }
  return (
    <PageShell>
      <section className="container-page py-12 md:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary/80 mb-2">
            <span className="h-4 w-4" aria-hidden />
            Parenting & Early Learning Blog
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight text-balance">Insights & guidance for BambiBoo parents.</h1>
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
                    <a href={`/blogs/${post.id}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
                      Read full article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
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
