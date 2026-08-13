import React, { useEffect, useState } from "react";

type Heading = { id: string; text: string; tag: string };

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function BlogTOC({ selector = ".post-content" }: { selector?: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const root = document.querySelector(selector);
    if (!root) return;
    const nodes = Array.from(root.querySelectorAll("h2,h3")) as HTMLElement[];
    const list: Heading[] = nodes.map((n) => {
      let id = n.id;
      if (!id) {
        id = slugify(n.innerText || n.textContent || "");
        // ensure unique
        let uniq = id;
        let i = 1;
        while (document.getElementById(uniq)) {
          uniq = `${id}-${i++}`;
        }
        id = uniq;
        n.id = id;
      }
      return { id, text: n.innerText || n.textContent || "", tag: n.tagName };
    });
    setHeadings(list);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    nodes.forEach((n) => observer.observe(n));

    return () => observer.disconnect();
  }, [selector]);

  if (!headings || headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="rounded-xl p-4 border border-border bg-white/90">
      <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Contents</div>
      <ul className="mt-3 space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(h.id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                history.replaceState(null, "", `#${h.id}`);
              }}
              className={`block ${activeId === h.id ? "text-primary font-semibold" : "text-foreground/80 hover:text-primary"}`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
