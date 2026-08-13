import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import indoorImg1 from "@/assets/world/indoor-1.webp";
import indoorImg2 from "@/assets/world/indoor-2.webp";
import indoorImg3 from "@/assets/world/indoor-3.webp";
import indoorHeroBanner from "@/assets/bambiboo/indoor-hero-banner.jpg";
import indoorAirLightImg from "@/assets/bambiboo/indoor-air-light.jpg";
import indoorFurnitureImg from "@/assets/bambiboo/indoor-furniture.jpg";
import indoorLearningCornersImg from "@/assets/bambiboo/indoor-learning-corners.jpg";
import curriculumEnvImg from "@/assets/bambiboo/curriculum-environment-hd.jpg";

export const Route = createFileRoute("/world/indoor")({
  head: () => ({
    meta: [
      { title: "Indoor Environment BambiBoo Preschool" },
      { name: "description", content: "Air purified learning pods, natural light, and child height furniture." },
      { property: "og:url", content: "/world/indoor" },
    ],
    links: [{ rel: "canonical", href: "/world/indoor" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Indoor Environment"
      title="Bright, breathable, built for small people."
      intro="Every square inch of the indoor space is designed to a child's scale from the height of the coat hook to the softness of the light."
      heroImage={indoorHeroBanner}
      sections={[
        {
          eyebrow: "Air & light",
          title: "Medical grade air. Real sunlight.",
          image: indoorAirLightImg,
          body: (
            <p>
              We treat air quality as a baseline, not a bonus. Every room runs HEPA filtration with activated carbon, visible live air quality readings, and cross ventilation that keeps the space feeling fresh even on still days. Large north facing windows pull in soft daylight so children can read natural cues for energy and calm.
            </p>
          ),
          bullets: [
            "HEPA + activated carbon air purifiers in every classroom",
            "Real time PM2.5 display parents can see",
            "North facing windows for soft, all day daylight",
            "Cross ventilation designed to code",
          ],
        },
        {
          eyebrow: "Furniture",
          title: "Everything at their height.",
          tone: "cream",
          image: indoorFurnitureImg,
          body: (
            <p>
              Modular wooden furniture, custom built to child height. Rounded edges. No sharp fittings below adult knee level. Finger safe hinges on every cupboard and door.
            </p>
          ),
        },
        {
          eyebrow: "Learning corners",
          title: "The room does the teaching, too.",
          image: indoorLearningCornersImg,
          body: (
            <p>
              Each classroom is divided into intentional micro environments that invite children to choose, concentrate, and collaborate. A child who needs quiet drifts to the reading nook; a child bursting with energy heads to the role play corner. The furniture, lighting, and materials change slightly with each theme, so the room itself becomes a third teacher.
            </p>
          ),
          bullets: [
            "Reading nook with cushions",
            "Home / kitchen role play corner",
            "Nature discovery table",
            "Art station with real materials",
            "Quiet mindfulness pod",
            "Group circle with warm floor",
          ],
        },
      ]}
    />
  ),
});
