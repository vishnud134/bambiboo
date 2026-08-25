import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammeInfo } from "@/components/site/ProgrammePage";

import hobbyImg from "@/assets/bambiboo/hobby-center-prog-hd.jpg";

export const Route = createFileRoute("/programmes/hobby-center")({
  head: () => ({
    meta: [
      { title: "Bambiboo Hobby Center Koramangala | After School & Weekend Clubs" },
      { name: "description", content: "After-school and weekend activity clubs at BambiBoo: Arts & Crafts, Music, Dance, Robotics, Karate, and Creative Writing." },
    ],
    links: [{ rel: "canonical", href: "/programmes/hobby-center" }],
  }),
  component: HobbyCenterPage,
});

const info: ProgrammeInfo = {
  name: "Bambiboo Hobby Center",
  ageRange: "2 to 12 years",
  tagline: "Enriching after-school & weekend clubs to discover passion, art, and movement.",
  intro: "The Bambiboo Hobby Center brings together expert instructors in fine art, music, dance, robotics, martial arts, and storytelling. Designed for preschoolers and primary school children to explore talents in a joyful, creative environment.",
  image: hobbyImg,
  ratio: "1:12",
  hours: "3:30 PM – 6:30 PM (Weekdays) & Saturdays 9 AM – 1 PM",
  color: "coral",
  features: [
    { title: "Visual Arts & Pottery", body: "Canvas painting, clay sculpting, sketch techniques, and recycled craft studios." },
    { title: "Music & Movement", body: "Keyboard, vocal music, Western/Bollywood dance, and rhythm exploration." },
    { title: "Robotics & Young Coders", body: "Lego robotics kits, logic puzzles, and beginner STEM building." },
    { title: "Martial Arts & Fitness", body: "Karate self-defense, yoga stretches, and gymnastics agility tracks." },
  ],
  development: [
    "Creative artistic confidence",
    "Rhythm, balance & physical agility",
    "STEM logic & problem solving",
    "Focused passion & self-discipline",
  ],
  schedule: [
    { time: "3:30 PM", block: "After-School Arrival & Healthy Refreshments" },
    { time: "4:00 PM", block: "Batch 1: Arts, Crafts & Pottery / Karate" },
    { time: "5:00 PM", block: "Batch 2: Music, Dance & Robotics Lab" },
    { time: "6:00 PM", block: "Showcase & Parent Pick-up" },
  ],
  activities: ["Pottery Studio", "Lego Robotics", "Keyboard & Vocals", "Karate Belts", "Canvas Painting", "Creative Writing"],
};

function HobbyCenterPage() {
  return <ProgrammePage info={info} showHeroForm />;
}
