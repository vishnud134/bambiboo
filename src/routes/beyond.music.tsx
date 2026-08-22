import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

import musicHeroImg from "@/assets/bambiboo/music-hero-hd-new.jpg";
import musicRoomImg from "@/assets/bambiboo/music-room-instruments.jpg";
import musicRhythmImg from "@/assets/bambiboo/music-rhythm-learning.jpg";

export const Route = createFileRoute("/beyond/music")({
  head: () => ({
    meta: [
      { title: "Music & Dance BambiBoo Preschool" },
      { name: "description", content: "Rhythm, movement, and group coordination through daily music at BambiBoo." },
      { property: "og:url", content: "/beyond/music" },
    ],
    links: [{ rel: "canonical", href: "/beyond/music" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Music & Dance"
      title="Every child has a rhythm. We help them find it."
      intro="Our music and movement tracks teach rhythm, physical balance, and basic auditory logic. Children map sounds to movement, build group spatial coordination, and find their unique creative groove."
      heroImage={musicHeroImg}
      sections={[
        {
          eyebrow: "In the room",
          title: "A real music room, not a corner.",
          image: musicRoomImg,
          body: (
            <p>
              Our dedicated music and movement room is designed for sound, motion, and joyful noise. With soft flooring, child-sized instruments, and a full-length mirror, children can jump, spin, drum, and dance safely while learning rhythm, balance, and group coordination.
            </p>
          ),
          bullets: [
            "Xylophones, tambourines, hand drums",
            "Small keyboards for exploration",
            "Cushioned floor for free movement",
            "Bluetooth speaker with curated playlists",
            "Mirror wall for movement",
            "Weekly guest musician sessions",
          ],
        },
        {
          eyebrow: "What they learn",
          title: "Rhythm, then everything else.",
          tone: "cream",
          image: musicRhythmImg,
          body: (
            <p>
              Music is a language. Learning it early makes children better at maths, at listening, at reading emotion. Our daily 20-minute music block builds all three without any of them realizing it.
            </p>
          ),
        },
      ]}
    />
  ),
});
