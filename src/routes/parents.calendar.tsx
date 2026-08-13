import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhyBambiboo } from "@/components/site/WhyBambiboo";
import { CommonPageFooterSections } from "@/components/site/CommonPageSections";

import calendarHeroHd from "@/assets/bambiboo/calendar-hero-hd.jpg";

export const Route = createFileRoute("/parents/calendar")({
  head: () => ({
    meta: [
      { title: "Calendar & Holidays BambiBoo Preschool" },
      { name: "description", content: "Themed weeks, festivals, parent teacher meetings, and holidays across the year." },
      { property: "og:url", content: "/parents/calendar" },
    ],
    links: [{ rel: "canonical", href: "/parents/calendar" }],
  }),
  component: CalendarPage,
});

const months = [
  { name: "April", items: [{ tag: "Term", text: "New academic year begins" }, { tag: "Orientation", text: "Parent with child settling week" }] },
  { name: "May", items: [{ tag: "Theme", text: "Water & the monsoon" }, { tag: "Trip", text: "Botanical garden visit" }] },
  { name: "June", items: [{ tag: "Break", text: "Summer break (June 5 – 19)" }] },
  { name: "July", items: [{ tag: "Theme", text: "Community helpers" }, { tag: "PTM", text: "Parent teacher meet · Sat July 20" }] },
  { name: "August", items: [{ tag: "Festival", text: "Independence Day celebration" }, { tag: "Theme", text: "Our body" }] },
  { name: "September", items: [{ tag: "Festival", text: "Ganesh Chaturthi" }, { tag: "Trip", text: "Neighborhood bakery visit" }] },
  { name: "October", items: [{ tag: "Festival", text: "Dussehra & Diwali" }, { tag: "Break", text: "Autumn break · Oct 25 – 30" }] },
  { name: "November", items: [{ tag: "PTM", text: "Mid year progress review" }, { tag: "Theme", text: "Weather & seasons" }] },
  { name: "December", items: [{ tag: "Showcase", text: "Annual Day performance" }, { tag: "Break", text: "Winter break · Dec 24 – Jan 2" }] },
  { name: "January", items: [{ tag: "Festival", text: "Republic Day parade" }, { tag: "Theme", text: "Transport & travel" }] },
  { name: "February", items: [{ tag: "Sports", text: "Mini sports day" }] },
  { name: "March", items: [{ tag: "PTM", text: "Year end progress meet" }, { tag: "Graduation", text: "Seniors farewell" }] },
];

const tagColor = (t: string) =>
  ({ Festival: "bg-[#FFD9C6] text-primary", Theme: "bg-accent text-primary", Trip: "bg-[#E6F0FF] text-primary", PTM: "bg-primary text-primary-foreground", Term: "bg-[#E6FFF2] text-primary", Break: "bg-muted text-primary", Orientation: "bg-accent text-primary", Showcase: "bg-primary text-primary-foreground", Sports: "bg-[#F7E6F3] text-primary", Graduation: "bg-primary text-primary-foreground" }[t] ?? "bg-muted text-primary");

function CalendarPage() {
  return (
    <PageShell>
      <section className="bg-[#FFECCB] relative overflow-hidden">
        <div className="absolute -top-20 -right-16 h-72 w-72 blob bg-[#F8D9A8]" />
        <div className="container-page relative py-12 md:py-16 grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Breadcrumb items={[{ label: "Parents Corner", to: "/parents" }, { label: "Calendar & Holidays" }]} className="mb-4 text-xs font-semibold text-primary/80" />
            <div className="text-xs font-bold uppercase tracking-widest text-primary">Calendar & Holidays</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-extrabold text-balance max-w-3xl">A year of themes, festivals, and quiet weeks off.</h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Themed curriculum weeks, parent alignment days, open houses, and every annual performance mapped in one place.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] shadow-lg border border-border/40 bg-[#FFF4E1]">
              <img
                src={calendarHeroHd}
                alt="Preschool celebrations and yearly calendar planning"
                className="h-[300px] md:h-[350px] w-full object-cover object-center rounded-[1.75rem]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why BambiBoo (2nd Container) */}
      <WhyBambiboo />

      <section className="bg-background">
        <div className="container-page py-10 md:py-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {months.map((m) => (
            <div key={m.name} className="rounded-3xl border border-border bg-card p-6">
              <div className="text-sm uppercase tracking-widest text-muted-foreground">Month</div>
              <div className="mt-1 text-2xl font-extrabold text-primary">{m.name}</div>
              <div className="mt-5 space-y-3">
                {m.items.map((it) => (
                  <div key={it.text} className="flex items-start gap-2">
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${tagColor(it.tag)}`}>
                      {it.tag}
                    </span>
                    <span className="text-sm text-foreground/85">{it.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Footer Sections: Pillars, Loved by Families, FAQ */}
      <CommonPageFooterSections />
    </PageShell>
  );
}
