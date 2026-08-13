import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";

type Card = {
  name: string;
  to: string;
  ageRange: string;
  hours: string;
  tagline: string;
  color: "sky" | "mint" | "coral" | "amber" | "lavender" | "indigo" | "teal" | "apricot";
};

const programmes: Card[] = [
  {
    name: "Parent & Toddler",
    to: "/programmes/parent-toddler",
    ageRange: "3m - 2y",
    hours: "90-min sessions (Mon–Sat)",
    tagline: "Sensory play, music, movement and bonding experiences for toddler and parent.",
    color: "sky",
  },
  {
    name: "Playgroup",
    to: "/programmes/playgroup",
    ageRange: "2 - 3y",
    hours: "Mon–Fri 9:30 AM – 12:30 PM",
    tagline: "First steps into independent learning through play, songs, and gentle structure.",
    color: "mint",
  },
  {
    name: "Nursery",
    to: "/programmes/nursery",
    ageRange: "3 - 4y",
    hours: "Mon–Fri 9:30 AM – 12:30 PM",
    tagline: "Language expansion, phonics readiness, creative expression and social skills.",
    color: "indigo",
  },
  {
    name: "LKG (Lower Kindergarten)",
    to: "/programmes/lkg",
    ageRange: "4 - 5y",
    hours: "Mon–Fri 9:30 AM – 1:00 PM",
    tagline: "Early reading, math concepts, inquiry-based science and creative arts.",
    color: "amber",
  },
  {
    name: "UKG (Upper Kindergarten)",
    to: "/programmes/ukg",
    ageRange: "5 - 6y",
    hours: "Mon–Fri 9:30 AM – 1:00 PM",
    tagline: "Primary school readiness with confident reading, problem-solving, and independence.",
    color: "lavender",
  },
  {
    name: "BambiBoo Day Care",
    to: "/programmes/daycare",
    ageRange: "2 - 10y",
    hours: "Mon–Fri 8:30 AM – 6:30 PM",
    tagline: "Safe, nurturing extended care with home-packed meals, rest time and supervised activities.",
    color: "teal",
  },
];

const colorMap: Record<Card["color"], string> = {
  sky: "bg-[#EBF5FF] text-[#0369A1] border-[#B9E6FE] hover:bg-[#E0F2FE]",
  mint: "bg-[#ECFDF5] text-[#047857] border-[#A7F3D0] hover:bg-[#D1FAE5]",
  coral: "bg-[#FFF1F2] text-[#E11D48] border-[#FECDD3] hover:bg-[#FFE4E6]",
  amber: "bg-[#FEFCE8] text-[#B45309] border-[#FEF08A] hover:bg-[#FEF9C3]",
  lavender: "bg-[#F5F3FF] text-[#6D28D9] border-[#DDD6FE] hover:bg-[#EDE9FE]",
  indigo: "bg-[#EEF2FF] text-[#4338CA] border-[#C7D2FE] hover:bg-[#E0E7FF]",
  teal: "bg-[#F0FDFA] text-[#0D9488] border-[#99F6E4] hover:bg-[#CCFBF1]",
  apricot: "bg-[#FFF7ED] text-[#C2410C] border-[#FFEDD5] hover:bg-[#FFEDD5]",
};

function ProgrammesIndex() {
  return (
    <PageShell>
      <section className="bg-[#FFECCB] relative overflow-hidden py-12 md:py-16">
        <div className="absolute -top-20 -right-16 h-72 w-72 blob bg-[#F8D9A8]" />
        <div className="container-page relative">
          <Breadcrumb items={[{ label: "Programmes" }]} className="text-foreground" />
        <div className="mt-4 max-w-3xl">
          <span className="inline-block rounded-md bg-[#2554D7] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
            OUR PROGRAMMES
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-black text-foreground">
            Growing one joyful year at a time.
          </h1>
          <p className="mt-4 text-lg text-foreground/75">
            From three months to six years, every programme at BambiBoo is thoughtfully designed to nurture curiosity, confidence and a lifelong love for learning. Explore each programme to discover the daily rhythm, learning experiences and developmental milestones that make every stage of childhood special.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 xl:gap-8">
          {programmes.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className={`group relative overflow-hidden rounded-3xl border ${colorMap[p.color]} p-5 md:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between h-full`}
            >
              <div className="flex items-center justify-between gap-1.5 w-full min-w-0">
                <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider whitespace-nowrap shrink-0">
                  {p.ageRange}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold opacity-85 whitespace-nowrap shrink-0">{p.hours}</span>
              </div>
              <h2 className="mt-6 text-3xl font-black">{p.name}</h2>
              <p className="mt-3 text-sm/6 opacity-85">{p.tagline}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all">
                Explore programme <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </PageShell>
  );
}

export const Route = createFileRoute("/programmes/")({
  head: () => ({
    meta: [
      { title: "Our Programmes BambiBoo Preschool & Daycare" },
      {
        name: "description",
        content:
          "Explore all BambiBoo programmes: Daycare, Toddler, Playschool, Kidsschool, Nursery and Seniors from 6 months to 6 years in Koramangala.",
      },
      { property: "og:title", content: "Our Programmes BambiBoo" },
      {
        property: "og:description",
        content:
          "Six programmes from 6 months to 6 years. Play based curriculum, live CCTV, sugar free meals.",
      },
    ],
    links: [{ rel: "canonical", href: "/programmes" }],
  }),
  component: ProgrammesIndex,
});
