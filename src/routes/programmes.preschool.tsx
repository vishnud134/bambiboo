import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammeInfo } from "@/components/site/ProgrammePage";

import preschoolImg from "@/assets/bambiboo/preschool-prog-hd.jpg";

export const Route = createFileRoute("/programmes/preschool")({
  head: () => ({
    meta: [
      { title: "Pre-School Programme (2 - 4yrs) Koramangala | BambiBoo" },
      { name: "description", content: "Pre-School programme at BambiBoo Koramangala. Phonics, math readiness, creative arts, and Reggio Emilia inspired inquiry." },
    ],
    links: [{ rel: "canonical", href: "/programmes/preschool" }],
  }),
  component: PreSchoolPage,
});

const info: ProgrammeInfo = {
  name: "Pre-School",
  ageRange: "2 to 4 years",
  tagline: "Curiosity led discovery, language explosion, phonics play, and early math readiness.",
  intro: "Pre-School builds on toddlers' innate drive to explore. Through hands on culinary play, science inquiry, storytelling, and creative art projects, children develop deep focus and social collaboration.",
  image: preschoolImg,
  ratio: "1:12",
  hours: "8:30 AM – 12:30 PM (Mon – Fri)",
  color: "coral",
  features: [
    { title: "Phonics & Storytelling", body: "Jolly Phonics foundation, letter-sound recognition, and interactive story theater." },
    { title: "Math Readiness", body: "Counting with natural objects, pattern making, shape sorting, and spatial puzzles." },
    { title: "STEAM Discovery", body: "Simple balance scales, magnifying glass exploration, color mixing, and plant life cycles." },
    { title: "Social Collaboration", body: "Small group projects, turn-taking, and emotional regulation practices." },
  ],
  development: [
    "Early phonemic awareness",
    "Numeracy & logical thinking",
    "Scientific curiosity & inquiry",
    "Confident self-expression",
  ],
  schedule: [
    { time: "8:30 AM", block: "Arrival & Choice Nooks" },
    { time: "9:00 AM", block: "Inquiry Circle & Theme Discussion" },
    { time: "9:45 AM", block: "Phonics & Math Rotation" },
    { time: "10:30 AM", block: "Organic Snack & Washroom Routine" },
    { time: "11:15 AM", block: "STEAM & Atelier Project" },
    { time: "12:00 PM", block: "Outdoor Turf & Closing Story" },
  ],
  activities: ["Phonics Games", "Botany Kits", "Color Mixing", "Balance Tracks", "Dramatic Play", "Pattern Blocks"],
};

function PreSchoolPage() {
  return <ProgrammePage info={info} showHeroForm />;
}
