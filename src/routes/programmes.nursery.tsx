import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammeInfo } from "@/components/site/ProgrammePage";

import nurseryImg from "@/assets/bambiboo/nursery-prog.jpg";

const info: ProgrammeInfo = {
  name: "Nursery",
  ageRange: "3 to 4 years",
  color: "berry",
  tagline: "Where curiosity blossoms through play, creativity and exploration.",
  highlights: [
    { title: "📖 Stories & Language", body: "Building vocabulary and communication through books and conversation." },
    { title: "🎨 Creative Expression", body: "Art, music, movement and imaginative play every day." },
    { title: "🌍 Exploring the World", body: "Nature, observation and hands-on discovery encourage curiosity." },
  ],
  intro:
    "Nursery is where children's curiosity begins to take flight. At this age, children are eager to ask questions, solve problems, make friends and understand the world around them. Our Nursery programme nurtures this natural curiosity through stories, creative experiences, exploration and purposeful play. Children are encouraged to express themselves, make choices, think independently and discover that learning is exciting. Every day is filled with opportunities to create, imagine, experiment and grow with confidence.",
  image: nurseryImg,
  hours: "9:30 AM – 12:30 PM (Mon–Fri)",
  ratio: "1:12",
  features: [
    { title: "📖 Stories & Language", body: "Rich conversations, storytelling and books help children build vocabulary, confidence and a love for language." },
    { title: "🎨 Creative Expression", body: "Art, music, movement, dramatic play and open-ended experiences encourage imagination and self-expression." },
    { title: "🌍 Exploring the World", body: "Nature, observation, simple investigations and hands-on experiences help children make sense of the world around them." },
    { title: "🤝 Meaningful Friendships", body: "Children learn cooperation, empathy, teamwork and respectful communication through shared experiences." },
    { title: "🧩 Thinking Through Play", body: "Puzzles, building, sorting and playful inquiry strengthen early problem-solving and critical thinking." },
    { title: "🌱 Growing Independence", body: "Children take greater ownership of routines, responsibilities and everyday self-help skills." },
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
    { time: "10:00 AM", block: "Circle time, stories and conversations" },
    { time: "10:30 AM", block: "Hands-on learning through play and inquiry" },
    { time: "11:00 AM", block: "Creative experiences – art, music or movement" },
    { time: "11:30 AM", block: "Snack & outdoor exploration" },
    { time: "12:00 PM", block: "Learning centres, collaborative play & reflection" },
    { time: "12:30 PM", block: "Home time" },
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
  testimonials: [
    { name: "Deepthi Srinivasan", meta: "Local Guide · 32 reviews · 28 photos · 10 months ago", quote: "BambiBoo is a very nice school. The teachers and helping staff are very friendly and co operative. It has both Montessori and Pre school curriculum which helps in inculcating the diverse nature of both aspects in the children. It's a rare combination to get schools like this. It is very spacious inside as well for kids to play around. They have lot of activities for children so they learn things in a practical way." },
    { name: "Shilpa Ipirti", meta: "1 review · 10 months ago", quote: "The school management is responsive and transparent. Communication with parents is effective and regular. Teachers and staff are approachable, supportive, and always attentive to the well being of children. The school provides quality education with dedicated teachers, well planned lessons, and a focus on overall learning outcomes." },
    { name: "Akshay Kini", meta: "3 reviews · 9 months ago", quote: "Our daughter enjoys going to the preschool. The teachers take good and personal care. They update us on her progress. The curriculum is mixed and has best of both schemes. They conduct different activities and festivals are celebrated with interactivity for kids." },
    { name: "Rathna Shivashankar", meta: "Local Guide · 1 review · 1 photo · 10 months ago", quote: "Good teaching and children care taking system good and nice 👍" },
    { name: "Shivashankar Palaniyappa", meta: "Local Guide · 16 reviews · 15 photos · 10 months ago", quote: "Activity, neet and clean place, Good teachers." },
    { name: "Vishnu Devakaran", meta: "3 reviews", quote: "Excellent preschool! The staff is caring, professional, and always welcoming. The curriculum is well balanced with academics, play, and creative activities. My child enjoys going to school every day and has become more confident and independent. I highly recommend BambiBoo Preschool to any parent looking for a safe and nurturing place for their little one." },
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
