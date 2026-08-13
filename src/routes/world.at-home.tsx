import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import atHomeImg1 from "@/assets/world/at-home-1.webp";
import atHomeImg2 from "@/assets/world/at-home-2.webp";
import atHomeObjectiveImg from "@/assets/bambiboo/at-home-objective.jpg";
import atHomeDifferentImg from "@/assets/bambiboo/at-home-different.jpg";
import atHomeDigitalPacksImg from "@/assets/bambiboo/at-home-digital-packs.jpg";
import atHomeHeroHd from "@/assets/bambiboo/at-home-hero-hd.jpg";
import atHomeLearningHd from "@/assets/bambiboo/at-home-learning-hd.jpg";
import playgroupCraftKids from "@/assets/bambiboo/playgroup-craft-kids.png";
import curriculumEnvImg from "@/assets/bambiboo/curriculum-environment-hd.jpg";

export const Route = createFileRoute("/world/at-home")({
  head: () => ({
    meta: [
      { title: "BambiBoo at Home Screen light curriculum extenders" },
      { name: "description", content: "Live online sessions, downloadable activity packs, and physical activity kits that extend the BambiBoo classroom into your living room." },
      { property: "og:url", content: "/world/at home" },
    ],
    links: [{ rel: "canonical", href: "/world/at home" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="BambiBoo at Home"
      title="The classroom, folded neatly into your living room."
      intro="For sick days, travel days and quiet weekends BambiBoo At Home is our screen light programme of live sessions, downloadable packs and physical activity kits, built by the same teachers who run the classroom."
      heroImage={atHomeHeroHd}
      sections={[
        {
          eyebrow: "Our objective",
          title: "Familiar faces, familiar routines from anywhere.",
          image: atHomeObjectiveImg,
          body: (
            <p>
              BambiBoo At Home is built around four goals: comfort and familiarity for the child with home based learning, learning through play and self discovery, gentle social interaction with classroom friends, and a soft daily routine that keeps sleep and mealtimes intact.
            </p>
          ),
        },
        {
          eyebrow: "Learning is centred around",
          title: "Real objects, real conversations never worksheet marathons.",
          image: atHomeLearningHd,
          body: (
            <p>
              At home learning mirrors the classroom rhythm through hands on invitations. A child might sort lentils from the kitchen, build a fort that becomes a rocket, or listen to a teacher led story before nap. Every activity is intentionally simple, using objects already in the home, so parents are facilitators, not lecturers.
            </p>
          ),
          tone: "cream",
          bullets: [
            "Shapes, patterns and early math games",
            "Rhymes & songs for vocabulary",
            "Story extensions for creativity",
            "Self-help independent projects",
            "Small group video circles",
            "Kid yoga & movement breaks",
          ],
        },
        {
          eyebrow: "What makes it different",
          title: "Not another online preschool.",
          image: atHomeDifferentImg,
          body: (
            <>
              <p>
                Most home programmes are pre recorded videos designed to occupy a child. Ours is designed to <em>engage</em> them the same teachers, the same routines, the same names, only through a screen for a small part of the day.
              </p>
              <p className="mt-3">
                Every week we send a rich, hands on plan that priorities immersion, imagination and real world exploration over passive watching. Screens are the smallest ingredient real objects and real conversations are the meal.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Digital packs",
          title: "Download, print, play.",
          image: atHomeDigitalPacksImg,
          body: (
            <p>
              Each week parents receive a curated digital pack that matches the classroom theme. These are not busywork printables; they are conversation starters, short games, and creative prompts that a child can do independently or with a sibling while parents finish a meeting or a meal.
            </p>
          ),
          tone: "cream",
          bullets: [
            "Colour by number sheets",
            "Letter tracing kits",
            "Story sequencing cards",
            "Parent guided science experiments",
            "Rhymes & song libraries",
            "Weekly meal & nap rhythm cards",
          ],
        },
        {
          eyebrow: "Physical kits",
          title: "The BambiBoo Home Box.",
          image: curriculumEnvImg,
          body: (
            <p>
              The monthly BambiBoo Home Box arrives with real materials that children can touch, smell, and manipulate. Each box contains a guided project that connects to what classmates are exploring that week, so children feel included even when they are away from school.
            </p>
          ),
          bullets: [
            "Age graded activity cards",
            "Real materials wood, clay, felt",
            "Weekly project with parent guide",
            "One printed storybook per box",
            "Sturdy reusable storage",
            "Delivered monthly",
          ],
        },
      ]}
    />
  ),
});
