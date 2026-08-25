import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

import hobbyCenterHd from "@/assets/bambiboo/hobby-center-prog-hd.jpg";
import preschoolHd from "@/assets/bambiboo/preschool-prog-hd.jpg";
import reggioTeacherImg from "@/assets/bambiboo/reggio-teacher.jpg";

export const Route = createFileRoute("/beyond/arts")({
  head: () => ({
    meta: [
      { title: "Arts & Crafts BambiBoo Preschool" },
      { name: "description", content: "Sensory rich, freeform art at BambiBoo no colouring books, no rules." },
      { property: "og:url", content: "/beyond/arts" },
    ],
    links: [{ rel: "canonical", href: "/beyond/arts" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Arts & Crafts"
      title="Not colouring inside the lines."
      intro="Art at BambiBoo isn't about copy pasting a standard drawing. It's a sensory rich environment where children explore raw textures, shape safe materials, and express their inner world without fear of making mistakes."
      heroImage={hobbyCenterHd}
      sections={[
        {
          eyebrow: "What we use",
          title: "Real materials, in real quantities.",
          image: preschoolHd,
          imagePosition: "left",
          body: (
            <p>
              We stock open ended art supplies that invite touch, smell, and experimentation. Children are free to use generous amounts of paint, clay, fabric, and recycled materials because messy, hands on exploration is how young brains learn texture, cause and effect, and creative confidence.
            </p>
          ),
          bullets: [
            "Non toxic finger paints",
            "Air dry clay and dough",
            "Fabric scraps & felt",
            "Natural dyes from turmeric, beetroot",
            "Recycled cardboard for building",
            "Real brushes, sponges, rollers",
          ],
        },
        {
          eyebrow: "The philosophy",
          title: "The process is the point.",
          tone: "cream",
          image: reggioTeacherImg,
          imagePosition: "right",
          body: (
            <p>
              We don't have a fridge of identical butterflies. Every artwork is different, imperfect, and completely their own. Parents receive a digital scrapbook at year end with 40+ of their child's original pieces.
            </p>
          ),
        },
      ]}
    />
  ),
});
