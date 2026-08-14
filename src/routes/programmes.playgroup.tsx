import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammeInfo } from "@/components/site/ProgrammePage";

import playgroupImg from "@/assets/bambiboo/playgroup-prog-hd.jpg";

export const Route = createFileRoute("/programmes/playgroup")({
  head: () => ({
    meta: [
      { title: "Play-Group Programme (1.5 - 2.5yrs) Koramangala | BambiBoo" },
      { name: "description", content: "Play-Group programme at BambiBoo Preschool Koramangala. Gentle routine, social play, language exploration, and sensory discovery." },
    ],
    links: [{ rel: "canonical", href: "/programmes/playgroup" }],
  }),
  component: PlayGroupPage,
});

const info: ProgrammeInfo = {
  name: "Playgroup (2–3 Years)",
  ageRange: "Age 2 – 3 Years",
  tagline: "A joyful first step into independence, friendships and discovery.",
  intro: "Playgroup is where children take their first confident steps into the world on their own. For many children, this is their first experience away from home. We make that transition gentle, reassuring and joyful. Through play, stories, music, movement and everyday routines, children begin to build confidence, form friendships and discover the excitement of learning alongside others. There is no pressure to 'perform.' Every day is about exploring, asking questions, trying new things and feeling safe enough to grow at their own pace.",
  image: playgroupImg,
  ratio: "2:12",
  hours: "9:30 AM – 12:30 PM (Mon–Fri)",
  color: "mint",
  highlights: [
    { title: "Learning Through Play", body: "Every day is filled with stories, songs, art and exploration." },
    { title: "First Friendships", body: "Children learn to share, communicate and play together." },
    { title: "Growing Independence", body: "Simple routines build confidence and self-help skills." },
  ],
  features: [
    { title: "Learning Through Play", body: "Every experience is designed to spark curiosity through stories, songs, sensory activities and imaginative play." },
    { title: "First Friendships", body: "Children learn to share, take turns, communicate and enjoy being part of a caring community." },
    { title: "Growing Independence", body: "Simple daily routines help children build confidence in doing things for themselves." },
    { title: "Creative Exploration", body: "Art, music, movement and open-ended materials encourage imagination and self-expression." },
    { title: "Nature & Outdoor Play", body: "Children spend time outdoors exploring, moving freely and connecting with the natural world." },
    { title: "Predictable Routines", body: "A consistent rhythm to the day helps children feel secure, settled and ready to learn." },
  ],
  developmentTitle: "Holistic Development",
  development: [
    "Building confidence away from home",
    "Language through stories, songs and conversations",
    "Fine and gross motor development",
    "Early social and emotional skills",
    "Curiosity through exploration and play",
    "Independence through everyday routines",
    "Creativity through art, music and pretend play",
    "Emotional regulation through predictable routines",
  ],
  learningExperiencesTitle: "Learning Experiences",
  learningExperiencesDescription: "Every day brings a new adventure.",
  learningExperiences: [
    "Storytelling and picture books",
    "Sensory bins and messy play",
    "Music, dance and rhythm games",
    "Nature walks and gardening",
    "Building blocks and construction play",
    "Art, painting and clay",
    "Pretend play and role play",
    "Water play",
    "Puzzles and matching games",
    "Yoga and movement",
    "Festival celebrations",
    "Free choice learning corners",
  ],
  scheduleTitle: "A Day at BambiBoo",
  scheduleSubtitle: "A typical Playgroup day",
  schedule: [
    { time: "9:30 AM", block: "Warm welcome & free exploration" },
    { time: "10:00 AM", block: "Circle time with songs, stories and conversation" },
    { time: "10:30 AM", block: "Guided learning corners & hands-on play" },
    { time: "11:00 AM", block: "Snack & social mealtime" },
    { time: "11:20 AM", block: "Outdoor play, movement & nature exploration" },
    { time: "11:50 AM", block: "Creative experiences – art, music & sensory play" },
    { time: "12:10 PM", block: "Story recap, movement games & reflection" },
    { time: "12:25 PM", block: "Goodbye circle & home time" },
  ],
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

function PlayGroupPage() {
  return <ProgrammePage info={info} showHeroForm />;
}
