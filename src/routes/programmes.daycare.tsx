import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammeInfo } from "@/components/site/ProgrammePage";

import daycareImg from "@/assets/bambiboo/daycare-prog.jpg";

const info: ProgrammeInfo = {
  name: "BambiBoo Day Care",
  ageRange: "2 to 10 years",
  color: "sky",
  tagline: "A safe, caring extension of home where children play, rest and thrive.",
  intro:
    "Our BambiBoo Day Care is a warm, nurturing extended day programme where children feel completely at home. Children rest, play, learn and recharge in a calm, secure environment with quiet napping pods, home-packed meals, and a routine designed around their comfort.",
  image: daycareImg,
  hours: "Mon–Fri 8:30 AM – 6:30 PM (Sat on request)",
  ratio: "1:12",
  developmentTitle: "Eight domains, one child.",
    highlights: [
    { title: "A Home Away From Home", body: "A calm, caring environment where children feel secure and valued." },
    { title: "Meaningful Play", body: "Indoor and outdoor activities, stories and creative experiences throughout the day." },
    { title: "Peace of Mind for Parents", body: "Reliable care with caring educators and regular communication." },
  ],
  features: [
    { title: "Quiet rest & napping pods", body: "Individual sleep mats in a dedicated quiet room with comfortable bedding." },
    { title: "Home-packed meals from home", body: "Families provide breakfast, lunch and snacks so children enjoy familiar food suited to their dietary needs." },
    { title: "Supervised play & homework help", body: "Afternoon creative play, story hours, and guided homework supervision for older children." },
    { title: "Safe & hygienic environment", body: "Supervised spaces with full CCTV coverage, sanitized rooms and compassionate caregivers." },
    { title: "Mixed age gentle care", body: "Older children read to younger ones during quiet hours; sibling-style bonds form naturally." },
    { title: "Flexible care windows", body: "Half day, full day and Saturday care options to support working parents." },
  ],
  development: [
    "Emotional regulation through predictable routines",
    "Independent feeding and hydration habits",
    "Social play with mixed age peers",
    "Sleep hygiene in a group setting",
    "Language milestones through unhurried conversation",
    "Self help routines: shoes, buttons, cleanup",
    "Personal hygiene: hand washing, brushing, toileting",
    "Comfort with transitions across the day",
  ],
  schedule: [
    { time: "8:30", block: "Warm welcome & free play" },
    { time: "9:15", block: "Breakfast + hydration" },
    { time: "10:00", block: "Preschool circle & focused learning" },
    { time: "12:00", block: "Lunch, brushing, wind down" },
    { time: "1:00", block: "Nap in quiet pods" },
    { time: "3:30", block: "Snack + outdoor play" },
    { time: "4:30", block: "Creative choice: art / music / stories" },
    { time: "5:30", block: "Free play & garden time" },
    { time: "6:00", block: "Handover & gentle goodbye" },
    { time: "7:00", block: "Day ends" },
  ],
  activities: [
    "Sensory bins & water play",
    "Music & rhythm circle",
    "Garden watering & seed planting",
    "Reading nook stories",
    "Free art table",
    "Yoga stretches",
    "Puzzle & block corner",
    "Nature walks",
    "Emotion cards & feeling faces",
    "Pretend cooking play",
    "Puppet & shadow theatre",
    "Quiet library time before nap",
  ],
};

export const Route = createFileRoute("/programmes/daycare")({
  head: () => ({
    meta: [
      { title: "Daycare BambiBoo (6 mo to 6 yrs)" },
      { name: "description", content: "Full day daycare with meals, naps, CCTV as required and preschool curriculum in Koramangala." },
      { property: "og:url", content: "/programmes/daycare" },
    ],
    links: [{ rel: "canonical", href: "/programmes/daycare" }],
  }),
  component: () => <ProgrammePage info={info} showHeroForm />,
});
