import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import steamImg1 from "@/assets/world/steam-1.webp";
import steamImg2 from "@/assets/world/steam-2.webp";
import steamHowItLooksImg from "@/assets/bambiboo/steam-how-it-looks.jpg";
import steamPhilosophyImg from "@/assets/bambiboo/steam-philosophy.jpg";
import ukgImg from "@/assets/bambiboo/ukg-prog.jpg";

export const Route = createFileRoute("/world/steam")({
  head: () => ({
    meta: [
      { title: "STEAM BambiBoo Preschool" },
      { name: "description", content: "Science, Technology, Engineering, Art, and Mathematics through hands on objects." },
      { property: "og:url", content: "/world/steam" },
    ],
    links: [{ rel: "canonical", href: "/world/steam" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="STEAM"
      title="Big ideas, tiny hands, everyday objects."
      intro="At BambiBoo, STEAM isn't tablets and coding apps. It's balance scales, botanical trays, mixing colours, and stacking blocks the physical foundations of scientific thinking."
      heroImage={ukgImg}
      sections={[
        {
          eyebrow: "How it looks",
          title: "Science you can hold.",
          image: steamHowItLooksImg,
          body: (
            <p>
              The STEAM area looks like a busy little laboratory where every tool is safe for small hands. Children pour water through tubes, weigh pinecones against pebbles, mix primary colours into new shades, and arrange magnetic tiles into working pathways. The teacher asks questions rather than give answers, so children learn to predict, test, and revise.
            </p>
          ),
          bullets: [
            "Botanical observation kits",
            "Simple balancing scales",
            "Structural alignment blocks",
            "Colour mixing trays",
            "Magnet exploration bins",
            "Water flow tables",
          ],
        },
        {
          eyebrow: "The philosophy",
          title: "Concepts before screens.",
          tone: "cream",
          image: steamPhilosophyImg,
          body: (
            <p>
              Children learn density by dropping stones in water, not by watching an animation. They learn balance by stacking blocks that fall, not by tapping an app. Everything begins with real world cause and effect.
            </p>
          ),
        },
      ]}
    />
  ),
});
