import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import daycareImg from "@/assets/bambiboo/daycare-prog.jpg";

export const Route = createFileRoute("/parents/daily-routine")({
  head: () => ({
    meta: [
      { title: "Daily Routine & Care BambiBoo Day Care" },
      {
        name: "description",
        content:
          "Details on daily routines, what children bring, meal policy and nap facilities for Day Care families at BambiBoo.",
      },
      { property: "og:url", content: "/parents/daily-routine" },
    ],
    links: [{ rel: "canonical", href: "/parents/daily-routine" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Daily Routine & Care"
      title="A calm routine for Day Care families."
      intro="Our Day Care programme blends familiar routines, comfort items and restful breaks so children feel at ease, nourished and ready to learn."
      heroImage={daycareImg}
      breadcrumbItems={[
        { label: "Parents Corner", to: "/parents" },
        { label: "Daily Routine & Care" },
      ]}
      sections={[
        {
          eyebrow: "Daily Routine",
          title: "What should my child bring every day?",
          body: (
            <p>
              Children should bring a labelled water bottle, a spare set of clothes and any personal essentials. Day Care
              children should also bring breakfast, lunch and healthy snacks from home.
            </p>
          ),
        },
        {
          eyebrow: "Meals",
          title: "Does BambiBoo provide meals?",
          body: (
            <p>
              No. Families provide breakfast, lunch and snacks from home so children enjoy familiar food that suits their
              preferences and dietary needs.
            </p>
          ),
        },
        {
          eyebrow: "Rest Time",
          title: "Do children have nap facilities in Day Care?",
          body: (
            <p>
              Yes. Our Day Care programme includes dedicated rest time in a calm, comfortable environment so children can
              recharge before returning to play and learning.
            </p>
          ),
        },
      ]}
    />
  ),
});
