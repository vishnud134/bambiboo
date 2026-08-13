import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

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
  { name: "Deepthi Srinivasan", meta: "Local Guide · 32 reviews · 28 photos · 10 months ago", quote: "BambiBoo is a very nice school. The teachers and helping staff are very friendly and co operative. It has both Montessori and Pre school curriculum which helps in inculcating the diverse nature of both aspects in the children. It's a rare combination to get schools like this. It is very spacious inside as well for kids to play around. They have lot of activities for children so they learn things in a practical way. All the best to BambiBoo for more successful years ahead." },
  { name: "Shilpa Ipirti", meta: "1 review · 10 months ago", quote: "The school management is responsive and transparent. Communication with parents is effective and regular. Teachers and staff are approachable, supportive, and always attentive to the well being of children. The school provides quality education with dedicated teachers, well planned lessons, and a focus on overall learning outcomes, creating a nurturing and motivating environment for every child." },
  { name: "Akshay Kini", meta: "3 reviews · 9 months ago", quote: "Our daughter enjoys going to the preschool. The teachers take good and personal care. They update us on her progress. The curriculum is mixed and has best of both schemes. They conduct different activities and festivals are celebrated with interactivity for kids." },
  { name: "Rathna Shivashankar", meta: "Local Guide · 1 review · 1 photo · 10 months ago", quote: "Good teaching and children care taking system good and nice 👍" },
  { name: "Shivashankar Palaniyappa", meta: "Local Guide · 16 reviews · 15 photos · 10 months ago", quote: "Activity, neet and clean place, Good teachers." },
  { name: "Vishnu Devakaran", meta: "3 reviews", quote: "Excellent preschool! The staff is caring, professional, and always welcoming. The curriculum is well balanced with academics, play, and creative activities. My child enjoys going to school every day and has become more confident and independent. I highly recommend BambiBoo Preschool to any parent looking for a safe and nurturing place for their little one." },
];

function Testimonials() {
  return (
    <PageShell>
      <section className="bg-[#FFECCB] relative overflow-hidden">
        <div className="absolute -top-20 -right-16 h-72 w-72 blob bg-[#F8D9A8]" />
        <div className="container-page relative py-12 md:py-16">
          <div className="text-xs font-bold uppercase tracking-widest text-primary">Testimonials</div>
          <h1 className="mt-3 text-5xl md:text-6xl font-extrabold text-balance max-w-3xl">
            Real families. Measurable milestones.
 </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Verified feedback from parents in the neighborhood. No stock photos, no scripted lines just what happened.
 </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-page py-10 md:py-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <div key={t.name} className="rounded-3xl bg-card border border-border p-6 flex flex-col">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-foreground/85 leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="font-bold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.meta}</div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
