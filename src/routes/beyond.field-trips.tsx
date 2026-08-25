import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

import curriculumHeroHd from "@/assets/bambiboo/curriculum-hero-hd.jpg";
import bgVerifiedImg from "@/assets/bambiboo/bg-verified.jpg";
import fieldTripDestinationImg from "@/assets/bambiboo/field-trip-destination.jpg";

export const Route = createFileRoute("/beyond/field-trips")({
  head: () => ({
    meta: [
      { title: "Field Trips BambiBoo Preschool" },
      { name: "description", content: "Secure, curated field trips to neighborhood bakeries, gardens, and community centers." },
      { property: "og:url", content: "/beyond/field trips" },
    ],
    links: [{ rel: "canonical", href: "/beyond/field trips" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Field Trips"
      title="The neighborhood is a classroom, too."
      intro="Our field trips take real world learning past the campus gate by introducing children directly to safe local spots neighborhood organic bakeries, botanical gardens, and community centers."
      heroImage={curriculumHeroHd}
      sections={[
        {
          eyebrow: "How we do them",
          title: "Small groups. Trusted partners. Written protocol.",
          image: bgVerifiedImg,
          imagePosition: "left",
          body: (
            <p>
              Every trip is planned like a small expedition. We choose short, age appropriate destinations, brief children in advance, and maintain tight adult supervision throughout. Parents receive exact timings, location details, and live updates so they feel as connected as if they were right there.
            </p>
          ),
          bullets: [
            "Maximum 8 children per trip",
            "1:3 adult to child ratio outside campus",
            "Only pre vetted partner venues",
            "Parents get live GPS during travel",
            "Signed medical form for every child",
            "Backup vehicle on standby",
          ],
        },
        {
          eyebrow: "Where we go",
          title: "A sample year of adventures.",
          tone: "cream",
          image: fieldTripDestinationImg,
          imagePosition: "right",
          body: (
            <p>
              We rotate destinations across the year so children experience nature, community helpers, food, craft, and literacy in real settings. Each location is chosen for its sensory value, safety, and friendly staff who welcome small curious visitors.
            </p>
          ),
          bullets: [
            "Local organic bakery",
            "Lalbagh Botanical Garden",
            "A working pottery studio",
            "The neighbourhood library",
            "Community fire station",
            "Farmers' market walk",
          ],
        },
      ]}
    />
  ),
});
