import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

import yogaHeroBanner from "@/assets/bambiboo/yoga-seated-mindfulness.jpg";
import yogaDailyPracticeImg from "@/assets/bambiboo/yoga-daily-practice.jpg";
import yogaWhyItMattersImg from "@/assets/bambiboo/yoga-why-it-matters.jpg";
import yogaHeroHd from "@/assets/bambiboo/yoga-seated-mindfulness.jpg";
import yogaDailyReal from "@/assets/bambiboo/yoga-daily-real.jpg";
import yogaMindfulReal from "@/assets/bambiboo/yoga-mindful-real.jpg";

export const Route = createFileRoute("/beyond/yoga")({
  head: () => ({
    meta: [
      { title: "Yoga & Movement BambiBoo Preschool" },
      { name: "description", content: "Body awareness, breathing games, and early emotional regulation through yoga." },
      { property: "og:url", content: "/beyond/yoga" },
    ],
    links: [{ rel: "canonical", href: "/beyond/yoga" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Yoga & Movement"
      title="A stretch, a breath, a quiet mind."
      intro="Our body awareness poses, stretching routines, and gentle breathing games teach physical mindfulness. It helps early learners stretch growing muscles, practice steady focus, and learn emotional self regulation."
      heroImage={yogaHeroBanner}
      sections={[
        {
          eyebrow: "Daily practice",
          title: "10 minutes, twice a day.",
          image: yogaDailyPracticeImg,
          body: (
            <p>
              Yoga is woven into the daily rhythm, not treated as a separate subject. Short morning sessions wake up the body, midday breathing resets focus, and end of day stretches help children transition calmly. Every pose is taught through play, stories, and animal characters so children enjoy the practice naturally.
            </p>
          ),
          bullets: [
            "Morning sun salutation adaptation",
            "Storytime yoga (asanas as animals)",
            "Belly breathing before meals",
            "Cool down stretches after outdoor play",
            "Gratitude circle at day's end",
            "Mindful listening games",
          ],
        },
        {
          eyebrow: "Why it matters",
          title: "Self regulation is a skill.",
          tone: "cream",
          image: yogaWhyItMattersImg,
          body: (
            <p>
              A child who can name their emotions can manage them. Our yoga practice gently teaches the pause between feeling and reacting the single most useful skill for the rest of their lives.
            </p>
          ),
        },
      ]}
    />
  ),
});
