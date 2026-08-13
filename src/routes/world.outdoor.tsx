import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

export const Route = createFileRoute("/world/outdoor")({
  head: () => ({
    meta: [
      { title: "Outdoor Environment BambiBoo Preschool" },
      { name: "description", content: "Impact absorbing turf, balance tracks, and safe climbers for physical literacy." },
      { property: "og:url", content: "/world/outdoor" },
    ],
    links: [{ rel: "canonical", href: "/world/outdoor" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Outdoor Environment"
      title="Sky above. Grass below. Trouble free adventure in between."
      intro="Our outdoor spaces are engineered for gross motor development the tumbles, climbs, and races that build a whole child."
      sections={[
        {
          eyebrow: "Ground rules",
          title: "Impact absorbing turf on every square metre.",
          body: (
            <p>
              Every play surface is layered with premium impact absorbing rubber turf certified to critical fall height standards. Falls happen; injuries don't.
 </p>
          ),
        },
        {
          eyebrow: "Equipment",
          title: "Play equipment that respects developing bodies.",
          body: (
            <p>
              Every piece of outdoor equipment is sized for the age group using it, with grip friendly surfaces, stable bases, and fall zones covered in impact absorbing turf. Children build gross motor control, spatial judgment, and confidence as they climb, balance, pedal, and dig at their own pace.
            </p>
          ),
          tone: "cream",
          bullets: [
            "Low climbers with 3 point contact",
            "Custom balance tracks with varied textures",
            "Water & sand exploration table",
            "Garden beds children plant themselves",
            "Trikes & pedal cars on a paved loop",
            "Shaded seating for storytelling",
          ],
        },
        {
          eyebrow: "Every day, outside",
          title: "45 minutes of open air, non negotiable.",
          body: (
            <p>
              Weather permitting, every child gets a full 45 minute outdoor block daily free movement, structured games, or garden time.
 </p>
          ),
        },
      ]}
    />
  ),
});
