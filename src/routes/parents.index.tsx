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
    name: "Admission Process",
    to: "/parents/admission",
    tagline: "A calm, transparent journey from first enquiry to your child's first day.",
    color: "sky",
  },
  {
    name: "Child Safety Policy",
    to: "/parents/safety",
    tagline: "Verified staff, live CCTV, and the non-negotiables that keep every child safe.",
    color: "mint",
  },
  {
    name: "Curriculum",
    to: "/parents/curriculum",
    tagline: "Reggio-Emilia inspired play-based learning philosophy and milestone tracking.",
    color: "peach",
  },
  {
    name: "Food & Nutrition",
    to: "/parents/food",
    tagline: "Sugar-free, freshly cooked meals designed by paediatric nutritionists.",
    color: "butter",
  },
  {
    name: "Daily Routine & Care",
    to: "/parents/daily-routine",
    tagline: "A calm Day Care routine, rest support and packing guidance for busy families.",
    color: "sky",
  },
  {
    name: "Calendar & Holidays",
    to: "/parents/calendar",
    tagline: "Term dates, festival breaks and school events at a glance.",
    color: "lilac",
  },
  {
    name: "FAQ",
    to: "/parents/faq",
    tagline: "Answers to the questions parents ask most before joining BambiBoo.",
    color: "sky",
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

function ParentsIndex() {
  return (
    <PageShell>
      <section className="bg-[#FFECCB] relative overflow-hidden py-12 md:py-16">
        <div className="absolute -top-20 -right-16 h-72 w-72 blob bg-[#F8D9A8]" />
        <div className="container-page relative">
          <Breadcrumb items={[{ label: "For Parents" }]} className="text-foreground" />
        <div className="mt-4 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-primary/70 font-bold">For Parents</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-black text-foreground">
            Everything you need, in one calm place
          </h1>
          <p className="mt-4 text-lg text-foreground/75">
            Admissions, safety, meals, transport and more. Tap any card to explore how we partner with families every day.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {items.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className={`group relative overflow-hidden rounded-3xl border ${colorMap[p.color]} p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between h-full`}
            >
              <div className="flex flex-col flex-1">
                <div className="min-h-[3.75rem] md:min-h-[4.5rem] flex items-start">
                  <h2 className="text-2xl md:text-3xl font-black leading-snug">{p.name}</h2>
                </div>
                <p className="mt-2 text-sm/6 opacity-85">{p.tagline}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all">
                Learn more <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </PageShell>
  );
}

export const Route = createFileRoute("/parents/")({
  head: () => ({
    meta: [
      { title: "For Parents BambiBoo Preschool & Daycare" },
      {
        name: "description",
        content:
          "Admissions, safety, food, transport, calendar and FAQs everything parents need to know about BambiBoo in Koramangala.",
      },
      { property: "og:title", content: "For Parents BambiBoo" },
      { property: "og:description", content: "Everything parents need, in one calm place." },
    ],
    links: [{ rel: "canonical", href: "/parents" }],
  }),
  component: ParentsIndex,
});
