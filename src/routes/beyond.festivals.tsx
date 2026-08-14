import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

import festivalHeroHd from "@/assets/bambiboo/festival-hero-hd.jpg";
import festivalCelebrationHd from "@/assets/bambiboo/festival-celebration-hd.jpg";
import lkgImg from "@/assets/bambiboo/lkg-prog.jpg";

export const Route = createFileRoute("/beyond/festivals")({
  head: () => ({
    meta: [
      { title: "Festival & Events BambiBoo Preschool" },
      { name: "description", content: "Community celebrations that turn seasons into shared memories at BambiBoo." },
      { property: "og:url", content: "/beyond/festivals" },
    ],
    links: [{ rel: "canonical", href: "/beyond/festivals" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Festival & Events"
      title="Colourful celebrations. Deep roots."
      intro="BambiBoo turns simple seasonal milestones, regional days, and project showcases into multi generational group memories that build deep social roots for every child."
      heroImage={festivalHeroHd}
      sections={[
        {
          eyebrow: "What we celebrate",
          title: "The full Indian calendar, respectfully.",
          image: festivalCelebrationHd,
          body: (
            <p>
              Celebrations at BambiBoo are not just about costumes and sweets. We use festivals to teach children about seasonal change, regional traditions, family roles, and the values of gratitude, sharing, and community. Every child participates at their own comfort level, and families are invited to join several events across the year.
            </p>
          ),
          bullets: [
            "Sankranti kite morning",
            "Ugadi first taste ceremony",
            "Independence Day parade",
            "Ganesh Chaturthi eco idol making",
            "Diwali diya painting & lights",
            "Christmas & New Year",
            "Republic Day storytelling",
            "Grandparents' Day tea",
          ],
        },
        {
          eyebrow: "Signature events",
          title: "The two mornings every parent circles.",
          tone: "cream",
          image: lkgImg,
          body: (
            <p>
              Our <strong>Annual Day</strong> in December is a full scale multi programme performance. Our <strong>Sports Morning</strong> in February is chaos, laughter, and finish line hugs. Both are open to grandparents and siblings.
            </p>
          ),
        },
      ]}
    />
  ),
});
