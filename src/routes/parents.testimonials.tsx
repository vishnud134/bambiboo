import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

import deepthiAvatar from "@/assets/bambiboo/avatars/deepthi.png";
import shilpaAvatar from "@/assets/bambiboo/avatars/shilpa.png";
import akshayAvatar from "@/assets/bambiboo/avatars/akshay.png";
import rathnaAvatar from "@/assets/bambiboo/avatars/rathna.png";
import shivashankarAvatar from "@/assets/bambiboo/avatars/shivashankar.png";
import vishnuAvatar from "@/assets/bambiboo/avatars/vishnu.png";

export const Route = createFileRoute("/parents/testimonials")({
  head: () => ({
    meta: [
      { title: "Parent Stories BambiBoo Testimonials" },
      { name: "description", content: "Real feedback from BambiBoo parents in Koramangala and nearby." },
      { property: "og:url", content: "/parents/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/parents/testimonials" }],
  }),
  component: Testimonials,
});

const items = [
  {
    name: "Deepthi Srinivasan",
    avatar: deepthiAvatar,
    meta: "Local Guide · 32 reviews · 28 photos · 10 months ago",
    quote: "BambiBoo is a very nice school. The teachers and helping staff are very friendly and co operative. It has both Montessori and Pre school curriculum which helps in inculcating the diverse nature of both aspects in the children. It's a rare combination to get schools like this. It is very spacious inside as well for kids to play around. They have lot of activities for children so they learn things in a practical way. All the best to BambiBoo for more successful years ahead.",
  },
  {
    name: "Shilpa Ipirti",
    avatar: shilpaAvatar,
    meta: "1 review · 10 months ago",
    quote: "The school management is responsive and transparent. Communication with parents is effective and regular. Teachers and staff are approachable, supportive, and always attentive to the well being of children. The school provides quality education with dedicated teachers, well planned lessons, and a focus on overall learning outcomes, creating a nurturing and motivating environment for every child.",
  },
  {
    name: "Akshay Kini",
    avatar: akshayAvatar,
    meta: "3 reviews · 9 months ago",
    quote: "Our daughter enjoys going to the preschool. The teachers take good and personal care. They update us on her progress. The curriculum is mixed and has best of both schemes. They conduct different activities and festivals are celebrated with interactivity for kids.",
  },
  {
    name: "Rathna Shivashankar",
    avatar: rathnaAvatar,
    meta: "Local Guide · 1 review · 1 photo · 10 months ago",
    quote: "Good teaching and children care taking system good and nice",
  },
  {
    name: "Shivashankar Palaniyappa",
    avatar: shivashankarAvatar,
    meta: "Local Guide · 16 reviews · 15 photos · 10 months ago",
    quote: "Activity, neet and clean place, Good teachers.",
  },
  {
    name: "Vishnu Devakaran",
    avatar: vishnuAvatar,
    meta: "3 reviews · 6 months ago",
    quote: "Excellent preschool! The staff is caring, professional, and always welcoming. The curriculum is well balanced with academics, play, and creative activities. My child enjoys going to school every day and has become more confident and independent. I highly recommend BambiBoo Preschool to any parent looking for a safe and nurturing place for their little one.",
  },
];

function Testimonials() {
  return (
    <PageShell>
      <section className="bg-[#FAFAFC] relative overflow-hidden">
        <div className="absolute -top-20 -right-16 h-72 w-72 blob bg-primary/5" />
        <div className="container-page relative py-12 md:py-16">
          <div className="text-xs font-bold uppercase tracking-widest text-primary">Testimonials</div>
          <h1 className="mt-3 text-5xl md:text-6xl font-extrabold text-balance max-w-3xl">
            Real families. Measurable milestones.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Verified Google Reviews from parents in the neighborhood.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-page py-10 md:py-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <div key={t.name} className="master-card-premium rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-400">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50/90 text-emerald-700 border border-emerald-200/80 px-2.5 py-0.5 text-[10.5px] font-extrabold shadow-2xs">
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Verified Google Review
                  </span>
                </div>
                <p className="mt-4 text-foreground/85 leading-relaxed text-sm md:text-base">"{t.quote}"</p>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-200/50 flex items-center gap-3.5">
                <div className="relative shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-extrabold text-foreground truncate text-sm md:text-base">{t.name}</div>
                  <div className="text-xs text-muted-foreground truncate font-medium">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
