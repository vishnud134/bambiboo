import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";

type Card = {
  name: string;
  to: string;
  tagline: string;
  color: "mint" | "sky" | "butter" | "berry" | "peach" | "lilac";
};

const items: Card[] = [
  {
    name: "BambiBoo at Home",
    to: "/world/at-home",
    tagline: "Simple rituals, prompts and printables to carry the BambiBoo rhythm home.",
    color: "peach",
  },
  {
    name: "Indoor Environment",
    to: "/world/indoor",
    tagline: "Warm, low-stimulation classrooms designed for focus, calm and curiosity.",
    color: "sky",
  },
  {
    name: "STEAM",
    to: "/world/steam",
    tagline: "Science, tech and maths through real objects big ideas, tiny hands.",
    color: "butter",
  },
  {
    name: "Gallery & Events",
    to: "/world/gallery",
    tagline: "A window into everyday moments, festivals and field trips at BambiBoo.",
    color: "berry",
  },
];

const colorMap: Record<Card["color"], string> = {
  mint: "bg-[#F2FDF5] text-[#16A34A] border-[#BBF7D0] hover:bg-[#DCFCE7]",
  sky: "bg-[#F4F9FF] text-[#0284C7] border-[#BAE6FD] hover:bg-[#E0F2FE]",
  butter: "bg-[#FFFDF0] text-[#D97706] border-[#FEF08A] hover:bg-[#FEF08A]",
  berry: "bg-[#FAF5FF] text-[#9333EA] border-[#E9D5FF] hover:bg-[#EDE9FE]",
  peach: "bg-[#FFF8F5] text-[#EA580C] border-[#FFEDD5] hover:bg-[#FFEDD5]",
  lilac: "bg-[#F5F7FF] text-[#4F46E5] border-[#C7D2FE] hover:bg-[#E0E7FF]",
};

function WorldIndex() {
  return (
    <PageShell>
      <section className="bg-[#FAFAFC] relative overflow-hidden py-12 md:py-16">
        <div className="absolute -top-20 -right-16 h-72 w-72 blob bg-primary/5" />
        <div className="container-page relative">
          <Breadcrumb items={[{ label: "Our World" }]} className="text-foreground" />
        <div className="mt-4 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-primary/70 font-bold">Our World</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-black text-foreground">
            Step inside the BambiBoo world
          </h1>
          <p className="mt-4 text-lg text-foreground/75">
            From our thoughtfully designed classrooms to our outdoor play and STEAM corners explore every space that shapes a BambiBoo day.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {items.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className={`group relative overflow-hidden rounded-3xl border ${colorMap[p.color]} p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between h-full`}
            >
              <div className="flex flex-col flex-1">
                <div className="min-h-[4.25rem] lg:min-h-[4.75rem] flex items-start">
                  <h2 className="text-2xl md:text-3xl font-black leading-snug">{p.name}</h2>
                </div>
                <p className="mt-2 text-sm/6 opacity-85">{p.tagline}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all">
                Explore <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </PageShell>
  );
}

export const Route = createFileRoute("/world/")({
  head: () => ({
    meta: [
      { title: "Our World BambiBoo Preschool & Daycare" },
      {
        name: "description",
        content:
          "Indoor and outdoor environments, STEAM corners, at-home rituals and the BambiBoo gallery a full tour of our world.",
      },
      { property: "og:title", content: "Our World BambiBoo" },
      { property: "og:description", content: "Step inside every space that shapes a BambiBoo day." },
    ],
    links: [{ rel: "canonical", href: "/world" }],
  }),
  component: WorldIndex,
});
