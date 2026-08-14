import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammeInfo } from "@/components/site/ProgrammePage";

import parentToddlerImg from "@/assets/bambiboo/parent-toddler.jpg";

export const Route = createFileRoute("/programmes/parent-toddler")({
  head: () => ({
    meta: [
      { title: "Parent Toddler Program (6m - 2yrs) Koramangala | BambiBoo" },
      { name: "description", content: "Interactive bonding, sensory play, and early social development for infants and toddlers with parents at BambiBoo Koramangala." },
    ],
    links: [{ rel: "canonical", href: "/programmes/parent-toddler" }],
  }),
  component: ParentToddlerPage,
});

const info: ProgrammeInfo = {
  name: "Parent & Toddler",
  ageRange: "3 Months to 2 Years",
  tagline: "Growing together through play, songs, stories and shared moments.",
  intro: "Designed for infants and toddlers accompanied by a parent or caregiver. Our sessions offer rich sensory experiences, music, movement, and guidance to support early milestone transitions.",
  image: parentToddlerImg,
  highlights: [
    {
      title: "Parent-Child Bonding",
      body: "A shared learning experience that strengthens connection and confidence.",
    },
    {
      title: "Sensory Exploration",
      body: "Music, movement, textures and play designed for early development.",
    },
    {
      title: "Gentle Beginnings",
      body: "A comforting introduction to group settings before preschool.",
    },
  ],
  ratio: "2:12",
  hours: "90-min sessions twice a week (Mon–Sat)",
  color: "sky",
  features: [
    { title: "Parent & Child Together", body: "Every activity is designed to strengthen connection through shared play, songs, stories and movement." },
    { title: "Sensory Exploration", body: "Textures, sounds, colours, water, music and natural materials encourage early brain development and curiosity." },
    { title: "Music & Movement", body: "Rhymes, action songs and gentle movement build rhythm, coordination and language skills." },
    { title: "Stories & Conversations", body: "Books, puppets and storytelling nurture early communication, listening and imagination." },
    { title: "First Social Experiences", body: "Children begin observing, interacting and playing alongside others in a safe and reassuring environment." },
    { title: "Gentle Transition to Preschool", body: "Familiar faces, routines and spaces make the move to independent preschool smooth and joyful." },
  ],
  scheduleTitle: "A Day at BambiBoo",
  scheduleSubtitle: "A typical 90-minute session",
  schedule: [
    { time: "0–10 min", block: "Welcome Circle - Warm greetings, songs and settling in together." },
    { time: "10–20 min", block: "Sensory Discovery - Hands-on exploration with age-appropriate materials." },
    { time: "20–32 min", block: "Music & Movement - Action songs, rhythm, dance and joyful movement." },
    { time: "32–44 min", block: "Story Time - Books, puppets and conversations that spark imagination." },
    { time: "44–56 min", block: "Creative Play - Painting, messy play, loose parts or simple crafts." },
    { time: "56–68 min", block: "Snack & Parent Connection - Healthy bites, hydration break and informal parent sharing." },
    { time: "68–83 min", block: "Free Exploration - Children choose activities while parents observe, support and enjoy." },
    { time: "83–90 min", block: "Goodbye Circle - Songs, reflections and a calm transition home." },
  ],
  development: [
    "Secure parent-child attachment",
    "Sensory exploration and brain development",
    "Early language and communication",
    "Gross and fine motor development",
    "Music, rhythm and movement",
    "Social confidence in small groups",
    "Curiosity through play and exploration",
    "Emotional security and confidence away from home",
  ],
  developmentTitle: "Every little milestone matters. Our programme supports development across every area of early childhood.",
  activities: [
    "Baby sensory baskets",
    "Water and texture play",
    "Music and rhythm",
    "Storytelling and puppets",
    "Nature exploration",
    "Tummy time and movement",
    "Parent-child yoga",
    "Finger painting",
    "Bubble play",
    "Building with blocks",
    "Nursery rhymes and action songs",
    "Simple cause-and-effect toys",
  ],
};

function ParentToddlerPage() {
  return <ProgrammePage info={info} showHeroForm />;
}
