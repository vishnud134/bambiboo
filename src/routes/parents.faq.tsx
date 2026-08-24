import { useState } from "react";
import { Search, X } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/parents/faq")({
  head: () => ({
    meta: [
      { title: "FAQ BambiBoo Preschool" },
      { name: "description", content: "Quick, transparent answers to the questions BambiBoo parents most often ask." },
      { property: "og:url", content: "/parents/faq" },
    ],
    links: [{ rel: "canonical", href: "/parents/faq" }],
  }),
  component: FAQ,
});

const groups = [
  {
    title: "Admissions & Eligibility",
    items: [
      {
        q: "What ages does BambiBoo welcome?",
        a: "We offer programmes for children from 3 months to 6 years, along with daycare for children up to 12 years.",
      },
      {
        q: "Can parents visit the school before admission?",
        a: "Absolutely. We encourage every family to visit our campus, meet our educators, explore the learning spaces and experience the BambiBoo environment before making a decision.",
      },
    ],
  },
  {
    title: "Daily Routine & Care",
    items: [
      {
        q: "What are your school timings?",
        a: "Our programmes run Monday to Friday, with timings varying by age group. Parent & Toddler sessions are held Monday to Saturday.",
      },
      {
        q: "Do you offer half-day and full-day Day Care?",
        a: "Yes. We offer both half-day and full-day Day Care options to support the varying needs of families. Saturday care is available on request.",
      },
    ],
  },
  {
    title: "Teachers & Safety",
    items: [
      {
        q: "Do parents receive updates during the day?",
        a: "We believe in open communication and keeping parents connected through regular updates and conversations about their child's day.",
      },
    ],
  },
  {
    title: "Curriculum & Learning",
    items: [
      {
        q: "What is your teacher-child ratio?",
        a: "We keep our groups intentionally small: ● 1:12 for toddlers ● 1:12 for older children. So every child is known, heard and supported.",
      },
    ],
  },
  {
    title: "Facilities & Services",
    items: [
      {
        q: "Is transport available?",
        a: "Yes. Transport is available on select routes. Please speak to our team to check availability for your neighbourhood.",
      },
    ],
  },
];

const categoryPills = [
  { id: "all", label: "All Questions", title: "" },
  { id: "admissions", label: "Admissions", title: "Admissions & Eligibility" },
  { id: "curriculum", label: "Curriculum", title: "Curriculum & Learning" },
  { id: "safety", label: "Teachers & Safety", title: "Teachers & Safety" },
  { id: "care", label: "Daily Routine", title: "Daily Routine & Care" },
  { id: "facilities", label: "Facilities", title: "Facilities & Services" },
];

function FAQ() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredGroups = groups
    .filter((g) => {
      if (activeCategory === "all") return true;
      const matchPill = categoryPills.find((p) => p.id === activeCategory);
      return matchPill ? g.title === matchPill.title : true;
    })
    .map((g) => ({
      ...g,
      items: g.items.filter(
        (item) =>
          item.q.toLowerCase().includes(query.toLowerCase()) ||
          item.a.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <PageShell>
      <section className="bg-[#FAFAFC] relative overflow-hidden">
        <div className="absolute -top-20 -right-16 h-72 w-72 blob bg-primary/5" />
        <div className="container-page relative py-12 md:py-16">
          <Breadcrumb items={[{ label: "Parents Corner", to: "/parents" }, { label: "FAQ" }]} className="mb-4 text-xs font-semibold text-primary/80" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Column: Heading, Subtitle & Search */}
            <div className="lg:col-span-6">
              <div className="text-xs font-bold uppercase tracking-widest text-primary">FAQ</div>
              <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold text-balance">
                Quick answers for busy parents.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl">
                Still curious? Reach out we love long conversations about your child.
              </p>

              {/* Interactive Search Bar */}
              <div className="mt-6 max-w-xl relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/60" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search questions (e.g. CCTV, fees, meals, timings)..."
                  className="w-full rounded-2xl border border-border/80 bg-white pl-12 pr-10 py-3.5 text-sm font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-xs"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:text-foreground"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Category Pill Tabs (Shifted Left with bg #6722A8) */}
            <div className="lg:col-span-6">
              <div className="bg-[#6722A8] text-white p-6 md:p-7 rounded-3xl shadow-xl border border-[#6722A8] max-w-lg">
                <div className="text-xs font-bold uppercase tracking-widest text-amber-200 mb-3">
                  Jump to Topic
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {categoryPills.map((pill) => {
                    const isActive = activeCategory === pill.id;
                    return (
                      <button
                        key={pill.id}
                        onClick={() => setActiveCategory(pill.id)}
                        className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs ${
                          isActive
                            ? "bg-white text-[#6722A8] ring-2 ring-white/50 shadow-md font-bold scale-[1.02]"
                            : "bg-white/15 text-white hover:bg-white hover:text-[#6722A8] hover:shadow-sm"
                        }`}
                      >
                        {pill.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-page py-10 md:py-14 grid gap-10">
          {filteredGroups.length > 0 ? (
            filteredGroups.map((g) => {
              const displayTitle = g.title === "Curriculum & Learning" ? "Teacher Child Ratio" : g.title;
              return (
                <div key={g.title}>
                  <h2 className="text-2xl font-bold text-primary mb-4">{displayTitle}</h2>
                  <div className="divide-y divide-border rounded-3xl border border-border bg-card">
                    {g.items.map((f) => (
                      <details key={f.q} className="group p-6 open:bg-secondary/40">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-foreground">
                          {f.q}
                          <span className="ml-4 text-primary text-xl transition group-open:rotate-45">+</span>
                        </summary>
                        <p className="mt-3 text-muted-foreground">{f.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-muted-foreground font-semibold">
              No matching questions found for "{query}". Call us at +91 99006 39303 for instant assistance!
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
