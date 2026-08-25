import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

import curriculumHeroImg from "@/assets/bambiboo/curriculum-hero-hd.jpg";
import environmentImg from "@/assets/bambiboo/curriculum-environment-hd.jpg";
import progressImg from "@/assets/bambiboo/curriculum-progress-hd.jpg";

export const Route = createFileRoute("/parents/curriculum")({
  head: () => ({
    meta: [
      { title: "Curriculum & Learning Philosophy | BambiBoo Preschool" },
      {
        name: "description",
        content:
          "Explore BambiBoo's Reggio-Emilia inspired play-based curriculum. Nurturing curiosity, early literacy, math readiness, and emotional growth in Koramangala.",
      },
    ],
    links: [{ rel: "canonical", href: "/parents/curriculum" }],
  }),
  component: CurriculumPage,
});

function CurriculumPage() {
  return (
    <ContentPage
      eyebrow="Curriculum & Pedagogy"
      title="A play-based, inquiry-led curriculum that sees every child as curious & capable."
      intro="Our curriculum is aligned with the National Education Policy (NEP) 2020 and ECCE principles. It combines early literacy, numeracy, science, EVS, technology & AI, practical life, sensorial activities, Hindi, Kannada and Sanskar with music, dance, art, drama, sports and experiential learning."
      heroImage={curriculumHeroImg}
      cta={{ label: "Schedule a Curriculum Walkthrough", to: "/parents/admission" }}
      sections={[
        {
          eyebrow: "Special Learning Programmes",
          title: "Children participate in enriching experiences through a range of thematic learning programmes.",
          bulletStyle: "cards",
          bullets: [
            "Nature Explorers",
            "Little Scientists",
            "Phonics",
            "Yoga for Kids",
            "Life Skills",
            "Multilingual Exposure",
            "Motor Skills Development",
            "Healthy Habits Club",
            "Cultural celebrations throughout the year",
            "Creative Arts & Expressive Drama",
          ],
        },
        {
          eyebrow: "Progress & Transparency",
          title: "Milestone tracking without pressure.",
          tone: "berry",
          image: progressImg,
          imagePosition: "left",
          bulletStyle: "ticks",
          bullets: [
            "Daily teacher observation notes and individual photo updates shared with parents",
            "Comprehensive termly milestone portfolio tracking cognitive, social, and motor growth",
            "Regular parent-teacher dialogues to align home routines with school milestones",
            "Smooth transition pathways into primary school boards (CBSE, ICSE, IB & Cambridge)",
          ],
        },
        {
          title: "Preparing children for primary school",
          tone: "cream",
          image: environmentImg,
          imagePosition: "right",
          body: (
            <div className="space-y-4">
              <p>
                Preparing children for primary school - our programme builds strong foundations in literacy, numeracy, communication, independence, creativity and problem-solving while nurturing confidence, kindness and a lifelong love for learning.
              </p>
              <p>
                School readiness grows naturally through meaningful experiences rather than academic pressure.
              </p>
            </div>
          ),
        },
      ]}
    />
  );
}
