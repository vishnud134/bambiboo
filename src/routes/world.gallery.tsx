import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";

import outdoorBalanceTrack from "@/assets/gallery/outdoor-balance-track.webp";
import artFingerPainting from "@/assets/gallery/art-finger-painting.webp";
import classroomMorning from "@/assets/gallery/classroom-morning.webp";
import classroomNumeracy from "@/assets/gallery/classroom-numeracy.webp";
import festivalDiwaliDiya from "@/assets/gallery/festival-diwali-diya.webp";
import fieldTripBotanicalGarden from "@/assets/gallery/field-trip-botanical-garden.webp";


export const Route = createFileRoute("/world/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery & Events BambiBoo Preschool" },
      { name: "description", content: "Real photos from our classrooms, celebrations, and field trips filterable by category." },
      { property: "og:url", content: "/world/gallery" },
    ],
    links: [{ rel: "canonical", href: "/world/gallery" }],
  }),
  component: Gallery,
});

type Item = { src: string; cat: string; caption: string };
const items: Item[] = [
  { src: classroomMorning, cat: "Classroom", caption: "Morning circle in the Playschool room" },
  { src: artFingerPainting, cat: "Art", caption: "First week finger painting" },
  { src: outdoorBalanceTrack, cat: "Outdoor", caption: "Balance track morning" },
  { src: classroomNumeracy, cat: "Classroom", caption: "Nursery numeracy block" },
  { src: festivalDiwaliDiya, cat: "Festival", caption: "Diwali diya decoration" },
  { src: fieldTripBotanicalGarden, cat: "Field Trip", caption: "Botanical garden visit" },
];
const cats = ["All", "Classroom", "Outdoor", "Art", "Festival", "Field Trip"];

function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);
  return (
    <PageShell>
      <section className="bg-[#FFECCB] relative overflow-hidden">
        <div className="absolute -top-20 -right-16 h-72 w-72 blob bg-[#F8D9A8]" />
        <div className="container-page relative py-12 md:py-16">
          <div className="text-xs font-bold uppercase tracking-widest text-primary">Gallery & Events</div>
          <h1 className="mt-3 text-5xl md:text-6xl font-extrabold text-balance max-w-3xl">A year at BambiBoo, in real photos.</h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">Filter by moment classrooms, celebrations, and outdoor days.</p>
        </div>
      </section>

      <section className="bg-background sticky top-16 z-30 border-b border-border">
        <div className="container-page py-4 flex gap-2 overflow-x-auto">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
                active === c
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-secondary text-foreground/70 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-background">
        <div className="container-page section-padding grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {filtered.map((it, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl bg-card border border-border">
              <img
                src={it.src}
                alt={it.caption}
                loading="lazy"
                decoding="async"
                width={600}
                height={450}
                className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent p-5 text-primary-foreground">
                <div className="text-xs uppercase tracking-widest text-accent font-bold">{it.cat}</div>
                <div className="font-bold text-lg mt-0.5">{it.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
