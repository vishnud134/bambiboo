import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { blogPosts } from "@/components/site/BlogCarouselSection";
import { BlogTOC } from "@/components/site/BlogTOC";

export const Route = createFileRoute("/blogs/$postId")({
  head: ({ params }) => {
    const post = blogPosts.find((p) => p.id === (params as any).postId);
    return {
      meta: [
        { title: post ? `${post.title} | BambiBoo` : "Blog | BambiBoo" },
        { name: "description", content: post ? post.excerpt : "" },
      ],
      links: [{ rel: "canonical", href: `/blogs/${(params as any).postId}` }],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { postId } = Route.useParams();
  const post = blogPosts.find((p) => p.id === postId);

  // Prefer higher-res Unsplash images when available
  const makeHighRes = (url: string): { src: string; srcSet?: string } => {
    try {
      if (!url) return { src: url };
      if (url.includes("images.unsplash.com")) {
        // replace any w=... param with higher value
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

  if (!post) {
    return (
      <PageShell>
        <div className="container-page py-12">
          <h1 className="text-2xl font-bold">Post not found</h1>
          <p className="mt-4">We couldn't find the post you're looking for.</p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <article className="container-page py-12 md:py-16">
        {/* Hero */}
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
                  className="w-full h-[360px] md:h-[450px] object-cover object-center"
                  loading="eager"
                  decoding="async"
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
              <div className="prose prose-lg max-w-none text-foreground post-content">{typeof post.content === "string" ? (<div dangerouslySetInnerHTML={{ __html: post.content }} />) : (post.content)}</div>
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
                    <Link to="/blogs/$postId" params={{ postId: p.id }} className="text-sm font-semibold text-primary hover:underline">
                      {p.title}
                    </Link>
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
