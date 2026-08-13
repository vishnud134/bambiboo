import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammeInfo } from "@/components/site/ProgrammePage";

import ukgImg from "@/assets/bambiboo/ukg-prog.jpg";

export const Route = createFileRoute("/programmes/ukg")({
  head: () => ({
    meta: [
      { title: "UKG - Upper Kindergarten Koramangala | BambiBoo" },
      { name: "description", content: "Upper Kindergarten at BambiBoo: advanced reading, primary school readiness, STEAM projects, and leadership." },
    ],
    links: [{ rel: "canonical", href: "/programmes/ukg" }],
  }),
  component: UKGPage,
});

const info: ProgrammeInfo = {
  name: "UKG (Upper Kindergarten)",
  ageRange: "5 to 6 years",
  tagline: "Preparing children for school while nurturing joyful, confident learners.",
  intro: "UKG is the final step in your child's preschool journey—and the beginning of a lifetime of learning. By this stage, children are confident communicators, independent thinkers and eager explorers. Our UKG programme prepares them for primary school without losing sight of what matters most: curiosity, creativity and the joy of childhood. Through projects, collaborative learning, storytelling, early academics and real-world experiences, children strengthen the skills they need for school while developing the confidence to embrace new challenges with enthusiasm. At BambiBoo, we don't simply prepare children for the next classroom—we help them become capable, kind and curious learners for life.",
  image: ukgImg,
  ratio: "1:12",
  hours: "9:30 AM – 1:00 PM (Mon–Fri)",
  color: "berry",
  highlights: [
    { title: "Ready for Primary School", body: "A smooth transition with strong foundational skills." },
    { title: "Leadership & Responsibility", body: "Children learn to take initiative and work with others." },
    { title: "Learning with Joy", body: "Confidence, curiosity and resilience remain at the heart of learning." },
  ],
  features: [
    { title: "Ready for Primary School", body: "Children develop strong foundations in literacy, numeracy and inquiry through engaging, hands-on experiences." },
    { title: "Leadership & Responsibility", body: "Children are encouraged to take initiative, make thoughtful choices, help others and grow into confident leaders." },
    { title: "Learning with Joy", body: "Curiosity, creativity and resilience continue to shape every learning experience." },
    { title: "Communication & Expression", body: "Children confidently share ideas, ask questions, present their thinking and engage in meaningful conversations." },
    { title: "Projects & Real-World Learning", body: "Integrated themes, nature exploration and collaborative projects help children connect learning with everyday life." },
    { title: "Collaboration & Belonging", body: "Working together, respecting different perspectives and building lasting friendships prepare children for the social world of school." },
  ],
  developmentTitle: "Holistic Development",
  developmentDescription: "Ready for school. Ready for life. Our UKG programme nurtures the whole child.",
  development: [
    "Strong literacy and numeracy foundations",
    "Critical thinking and problem-solving",
    "Communication and presentation skills",
    "Independence and self-management",
    "Creativity and innovation",
    "Leadership and teamwork",
    "Emotional resilience and confidence",
    "A lifelong love for learning",
  ],
  scheduleTitle: "A Day at BambiBoo",
  scheduleSubtitle: "A typical UKG day",
  schedule: [
    { time: "9:30 AM", block: "Welcome & independent learning choices" },
    { time: "10:00 AM", block: "Morning circle, discussions & current themes" },
    { time: "10:30 AM", block: "Literacy, numeracy and inquiry through hands-on learning" },
    { time: "11:15 AM", block: "Snack & outdoor play" },
    { time: "11:45 AM", block: "Projects, creative expression & collaborative activities" },
    { time: "12:30 PM", block: "Music, movement, yoga or mindfulness" },
    { time: "12:50 PM", block: "Reflection, storytelling & goodbye circle" },
    { time: "1:00 PM", block: "Home time" },
  ],
  learningExperiencesTitle: "Learning Experiences",
  learningExperiencesDescription: "Building confident learners for tomorrow.",
  learningExperiences: [
    "Reading readiness and joyful writing",
    "Mathematical thinking and problem-solving",
    "Science, inquiry and simple experiments",
    "Project-based learning",
    "Public speaking and storytelling",
    "Art, music and creative expression",
    "Team challenges and collaborative games",
    "Gardening and environmental stewardship",
    "Yoga, mindfulness and wellbeing",
    "Community celebrations and field visits",
    "Leadership opportunities and classroom responsibilities",
    "Choice-based learning centres",
  ],
  activities: ["Digraph Phonics", "STEAM Circuits", "Sentence Writing", "Skip Counting", "Presentation Theater", "Math Word Puzzles"],
};

function UKGPage() {
  return <ProgrammePage info={info} showHeroForm />;
}
