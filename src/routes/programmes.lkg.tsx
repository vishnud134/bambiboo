import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammeInfo } from "@/components/site/ProgrammePage";

import lkgImg from "@/assets/bambiboo/lkg-prog.jpg";

export const Route = createFileRoute("/programmes/lkg")({
  head: () => ({
    meta: [
      { title: "LKG Lower Kindergarten Koramangala | BambiBoo Preschool" },
      { name: "description", content: "LKG Lower Kindergarten at BambiBoo Koramangala. Structured phonics, math concepts, inquiry science, and social resilience." },
    ],
    links: [{ rel: "canonical", href: "/programmes/lkg" }],
  }),
  component: LKGPage,
});

const info: ProgrammeInfo = {
  name: "LKG",
  ageRange: "4 to 5 years",
  tagline: "Building confidence, communication and a love for learning.",
  intro: "LKG is where curiosity becomes confidence. By now, children are eager to ask bigger questions, solve problems, express their ideas and take on new challenges. Our LKG programme builds strong foundations for school while protecting the joy of childhood. Through meaningful play, projects, stories, conversations and hands-on exploration, children develop early literacy, numeracy, critical thinking and social skills. More importantly, they learn to believe in themselves. At BambiBoo, school readiness isn't about finishing worksheets. It's about nurturing children who are confident, curious and excited to learn.",
  image: lkgImg,
  ratio: "1:12",
  hours: "9:30 AM – 1:00 PM (Mon–Fri)",
  color: "butter",
    highlights: [
    { title: "School Readiness", body: "Early literacy and numeracy introduced through joyful experiences." },
    { title: "Thinking & Problem Solving", body: "Children question, experiment and discover solutions." },
    { title: "Confidence & Communication", body: "Building independence and expressive language." },
  ],
    features: [
    { title: "School Readiness", body: "Early literacy and numeracy are introduced through games, stories, projects and hands-on experiences." },
    { title: "Thinking & Problem Solving", body: "Children investigate, experiment, ask questions and discover solutions through playful inquiry." },
    { title: "Confidence & Communication", body: "Children learn to express ideas, share opinions and communicate with growing confidence." },
    { title: "Real-World Exploration", body: "Projects, nature experiences and everyday observations help children connect learning with life." },
    { title: "Collaboration & Leadership", body: "Working together, taking responsibility and helping others become a natural part of the day." },
    { title: "Creativity Every Day", body: "Art, music, storytelling and imaginative play continue to nurture creativity alongside structured learning." },
  ],
  developmentTitle: "Holistic Development",
  developmentDescription: "Preparing children for school-and for life. Every experience strengthens the skills children need to thrive.",
  development: [
    "Early literacy and numeracy",
    "Critical thinking and problem-solving",
    "Communication and expressive language",
    "Independence and responsibility",
    "Creativity and imagination",
    "Collaboration and teamwork",
    "Emotional resilience and self-confidence",
    "Curiosity and a lifelong love for learning",
  ],
  scheduleTitle: "A Day at BambiBoo",
  scheduleSubtitle: "A typical LKG day",
  schedule: [
    { time: "9:30 AM", block: "Welcome & independent learning choices" },
    { time: "10:00 AM", block: "Circle time, stories and discussions" },
    { time: "10:30 AM", block: "Literacy and numeracy through playful exploration" },
    { time: "11:15 AM", block: "Snack & outdoor play" },
    { time: "11:45 AM", block: "Projects, inquiry and creative learning" },
    { time: "12:30 PM", block: "Music, movement or yoga" },
    { time: "12:50 PM", block: "Reflection, goodbye circle & home time" },
    { time: "1:00 PM", block: "Home time" },
  ],
  learningExperiencesTitle: "Learning Experiences",
  learningExperiencesDescription: "Learning that inspires confidence.",
  learningExperiences: [
    "Early reading and phonics",
    "Number sense and mathematical thinking",
    "Project-based exploration",
    "Science and nature discoveries",
    "Art, music and creative expression",
    "Storytelling and public speaking",
    "Building and construction challenges",
    "Pretend play and collaborative learning",
    "Yoga and mindfulness",
    "Gardening and environmental awareness",
    "Community celebrations and field visits",
    "Choice-based learning centres",
  ],
  activities: ["CVC Word Building", "Pattern Blocks", "Show & Tell", "Garden Experiments", "Journal Drawing", "Math Counters"],
};

function LKGPage() {
  return <ProgrammePage info={info} showHeroForm />;
}
