import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammeInfo } from "@/components/site/ProgrammePage";

import nurseryImg from "@/assets/bambiboo/nursery-prog.jpg";


const info: ProgrammeInfo = {
  name: "Nursery",
  ageRange: "3 to 4 years",
  color: "berry",
  tagline: "Where curiosity blossoms through play, creativity and exploration.",
  highlights: [
    { title: "Stories & Language", body: "Building vocabulary and communication through books and conversation." },
    { title: "Creative Expression", body: "Art, music, movement and imaginative play every day." },
    { title: "Exploring the World", body: "Nature, observation and hands-on discovery encourage curiosity." },
  ],
  intro:
    "Nursery is where children's curiosity begins to take flight. At this age, children are eager to ask questions, solve problems, make friends and understand the world around them. Our Nursery programme nurtures this natural curiosity through stories, creative experiences, exploration and purposeful play. Children are encouraged to express themselves, make choices, think independently and discover that learning is exciting. Every day is filled with opportunities to create, imagine, experiment and grow with confidence.",
  image: nurseryImg,
  hours: "9:30 AM – 12:30 PM (Mon–Fri)",
  ratio: "1:12",
  features: [
    { title: "Stories & Language", body: "Rich conversations, storytelling and books help children build vocabulary, confidence and a love for language." },
    { title: "Creative Expression", body: "Art, music, movement, dramatic play and open-ended experiences encourage imagination and self-expression." },
    { title: "Exploring the World", body: "Nature, observation, simple investigations and hands-on experiences help children make sense of the world around them." },
    { title: "Meaningful Friendships", body: "Children learn cooperation, empathy, teamwork and respectful communication through shared experiences." },
    { title: "Thinking Through Play", body: "Puzzles, building, sorting and playful inquiry strengthen early problem-solving and critical thinking." },
    { title: "Growing Independence", body: "Children take greater ownership of routines, responsibilities and everyday self-help skills." },
  ],
  developmentTitle: "Holistic Development",
  developmentDescription: "Nurturing curious minds and confident hearts. Every experience supports your child's overall growth.",
  development: [
    "Language and communication",
    "Creativity and self-expression",
    "Early numeracy and literacy foundations",
    "Curiosity and scientific thinking",
    "Social and emotional development",
    "Fine and gross motor skills",
  ],
  scheduleTitle: "A Day at BambiBoo",
  scheduleSubtitle: "A typical Nursery day",
  schedule: [
    { time: "9:30 AM", block: "Welcome, free play & settling in" },
    { time: "10:00 AM", block: "Morning circle, phonics & language inquiry" },
    { time: "10:30 AM", block: "Hands-on discovery & STEAM learning centres" },
    { time: "11:00 AM", block: "Creative expression – art, music & dramatic play" },
    { time: "11:30 AM", block: "Snack & social mealtime" },
    { time: "11:50 AM", block: "Outdoor sports, nature exploration & turf play" },
    { time: "12:15 PM", block: "Story recap, show-and-tell & reflection" },
    { time: "12:25 PM", block: "Goodbye circle & home time" },
  ],
  learningExperiencesTitle: "Learning Experiences",
  learningExperiencesDescription: "Every day is an invitation to explore.",
  learningExperiences: [
    "Storytelling and early reading",
    "Art, painting and creative crafts",
    "Music, dance and rhythm",
    "Gardening and nature exploration",
    "Building and construction challenges",
    "Early STEAM discoveries",
    "Pretend play and role play",
    "Sensory and science activities",
    "Puzzles and logic games",
    "Yoga and mindfulness",
    "Community celebrations and cultural festivals",
    "Free-choice learning corners",
  ],
  activities: [
    "CVC blending games",
    "Name tracing on sand & salt trays",
    "Number stacking to 50",
    "Weather chart building",
    "Nature classification (leaves, seeds, shells)",
    "Community helper role play",
    "Group building projects",
    "Yoga & mindfulness",
    "Music composition play",
    "Puppet skits and mini plays",
    "Kitchen science (mixing, dissolving)",
    "Sight word bingo",
    "Show and tell weekly",
    "Field trips & excursions",
    "Festival celebrations & cooking days",
  ],
};

export const Route = createFileRoute("/programmes/nursery")({
  head: () => ({
    meta: [
      { title: "Nursery BambiBoo (3.5 to 4.5 yrs)" },
      { name: "description", content: "Pre reading, pre writing, and project based learning for 3.5 to 4.5 year olds in Koramangala." },
      { property: "og:url", content: "/programmes/nursery" },
    ],
    links: [{ rel: "canonical", href: "/programmes/nursery" }],
  }),
  component: () => <ProgrammePage info={info} showHeroForm />,
});
