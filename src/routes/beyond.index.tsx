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
    name: "Arts & Crafts",
    to: "/beyond/arts",
    tagline: "Sensory-rich, freeform art no colouring books, no rules, just expression.",
    color: "peach",
  },
  {
    name: "Music & Dance",
    to: "/beyond/music",
    tagline: "Rhythm, movement, and group coordination through daily music and dance.",
    color: "berry",
  },
  {
    name: "Yoga & Movement",
    to: "/beyond/yoga",
    tagline: "Gentle yoga and mindfulness for focus, balance and calm little bodies.",
    color: "mint",
  },
  {
    name: "Field Trips",
    to: "/beyond/field-trips",
    tagline: "Curated trips to gardens, markets and museums real learning, real places.",
    color: "sky",
  },
  {
    name: "Festival & Events",
    to: "/beyond/festivals",
    tagline: "Celebrating Diwali, Sankranti, Christmas and more with families and food.",
    color: "butter",
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

function BeyondIndex() {
  return (
    <PageShell>
      <section className="bg-[#FAFAFC] relative overflow-hidden py-12 md:py-16">
        <div className="absolute -top-20 -right-16 h-72 w-72 blob bg-primary/5" />
        <div className="container-page relative">
          <Breadcrumb items={[{ label: "Beyond" }]} className="text-foreground" />
        <div className="mt-4 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-primary/70 font-bold">Beyond</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-black text-foreground">
            Beyond the classroom, into real life
          </h1>
          <p className="mt-4 text-lg text-foreground/75">
            Art, music, yoga, field trips and festivals the everyday experiences that grow curious, confident, kind children.
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
                Discover <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </PageShell>
  );
}

export const Route = createFileRoute("/beyond/")({
  head: () => ({
    meta: [
      { title: "Beyond BambiBoo Preschool & Daycare" },
      {
        name: "description",
        content:
          "Arts, music, yoga, field trips and festivals the enrichment programmes that make every BambiBoo week special.",
      },
      { property: "og:title", content: "Beyond BambiBoo" },
      { property: "og:description", content: "Beyond the classroom, into real life." },
    ],
    links: [{ rel: "canonical", href: "/beyond" }],
  }),
  component: BeyondIndex,
});
