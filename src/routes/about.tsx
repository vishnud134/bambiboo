import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { WhatWeBuildCarousel } from "@/components/site/WhatWeBuildCarousel";
import { MapPin, PhoneCall } from "lucide-react";
import reggioTeacherImg from "@/assets/bambiboo/reggio-teacher.jpg";
import founderImg from "@/assets/founder-mukula.webp";
import ourTeamTeachersImg from "@/assets/bambiboo/our-team-teachers.jpg";
import build1 from "@/assets/about/build/build-44.webp";
import build2 from "@/assets/about/build/build-45.webp";
import build3 from "@/assets/about/build/build-46.webp";
import build4 from "@/assets/about/build/build-47.webp";
import build5 from "@/assets/about/build/build-48.webp";
import build6 from "@/assets/about/build/build-49.webp";



export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BambiBoo A neighborhood preschool built by parents" },
      { name: "description", content: "The story, philosophy, and people behind BambiBoo Preschool in Koramangala curious, capable children, kind adults, real food and daily transparency." },
      { property: "og:title", content: "About BambiBoo" },
      { property: "og:description", content: "The story, philosophy, and people behind BambiBoo Preschool." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <ContentPage
      showHeroForm
      eyebrow="About Us"
      title="A place where childhood comes first."
      intro="BambiBoo is an initiative of Ananta Educational Trust, founded with one simple purpose-to make high-quality early childhood education nurturing, accessible and affordable. We are creating a space where every child feels included, every parent feels reassured, and learning happens through joy rather than pressure."
      heroNote={
        <div className="p-5 sm:px-6 sm:py-5 rounded-3xl bg-[#FFF6D6] border border-amber-300 font-bold text-[#4C167F] italic text-base sm:text-lg leading-relaxed shadow-2xs">
          Every decision we make begins with one question: "Will this help a child grow with joy?" Because technology will find our children. Childhood won't wait.
        </div>
      }
      sections={[
        {
          eyebrow: "Founder's letter",
          title: "A Letter from Founder.",
          founderImage: founderImg,
          body: (
            <>
              <p className="font-bold text-foreground">Dear Parents,</p>
              <p className="mt-2">
                Every preschool has a story. This one begins in Pune.
              </p>
              <p className="mt-2">
                I grew up in a joint family where there was always someone around. My grandparents filled our home with stories, laughter, traditions and an unhurried kind of love. Those memories have stayed with me all my life.
              </p>
              <p className="mt-2">
                Years later, as a young mother in Bengaluru, I found myself searching for a preschool that felt the way my childhood had felt. A place where my son would feel safe, where he would be excited to go every morning, where he would come home with muddy shoes, new songs, funny stories and a smile on his face. I couldn't find that place.
              </p>
              <p className="mt-2">
                At that time, I was at the peak of my corporate career. Walking away wasn't an easy decision, but motherhood changed what success meant to me. When I looked at early childhood education again years later, I realized parents were still facing the same questions. That is why I started BambiBoo-not to build another preschool, but to create the place I had once wished existed for my own child.
              </p>
              <div className="mt-5 p-5 sm:px-6 sm:py-5 rounded-3xl bg-[#FFF6D6] border border-amber-300 font-bold text-[#4C167F] italic text-base sm:text-lg leading-relaxed shadow-2xs">
                "I didn't start BambiBoo to build another preschool. I started it to create the place I had once wished existed for my own child."
              </div>
              <p className="mt-4 font-bold text-foreground">Mukula Joglekar - Founder, BambiBoo Preschool</p>
            </>
          ),
        },

        {
          eyebrow: "What we believe",
          title: "Children are active participants in their own learning.",
          tone: "cream",
          image: reggioTeacherImg,
          imagePosition: "right",
          body: (
            <>
              <p>
                Children are not empty vessels waiting to be filled. They construct understanding through exploration, play, inquiry and meaningful connections with the world around them.
              </p>
              <p className="mt-3">
                Inspired by the <strong>Reggio Emilia</strong> philosophy, we see the environment as the <strong>third teacher</strong>. Spaces filled with open-ended materials, natural light and real objects invite children to explore, imagine, create and think independently. Relationships anchor everything we do: trust, respect, inclusivity and collaboration create the foundation for meaningful learning.
              </p>
              <div className="mt-5 p-5 sm:px-6 sm:py-5 rounded-3xl bg-[#FFF6D6] border border-amber-300 font-bold text-[#4C167F] italic text-base sm:text-lg leading-relaxed shadow-2xs">
                "We believe children know how to be completely present in the moment. Our role is not to rush childhood, but to protect that presence. Because technology will find our children. Childhood won't wait."
              </div>
            </>
          ),
        },

        {
          eyebrow: "What we build",
          title: "Six everyday habits we quietly nurture.",
          customPosition: "left",
          imagePosition: "left",
          body: (
            <>
              <p>
                The early years are not meant for flashcards or forced academics. They are for building the inner foundations that make every future learning experience easier and more meaningful.
              </p>
              <p className="mt-3">
                Through play, conversation and gentle daily routines, we nurture: confidence to try, curiosity to explore, empathy to care, independence to choose, focus on staying engaged, and collaboration to grow with others.
              </p>
              <p className="mt-3">
                These qualities grow when a child chooses their own activity, negotiates a turn with a friend, builds a tower that tumbles and starts again, listens to the same story for the hundredth time, or proudly says, "I did it myself." These are the moments that shape resilient, joyful learners.
              </p>
            </>
          ),
          custom: (
            <WhatWeBuildCarousel
              items={[
                { image: build1, text: "Confidence to try new activities and express independent ideas" },
                { image: build2, text: "Curiosity to explore open-ended materials, nature and science" },
                { image: build3, text: "Empathy to care for peers, teachers and our environment" },
                { image: build4, text: "Independence to choose routines, self-help skills and problem solving" },
                { image: build5, text: "Focus on staying engaged in deep, meaningful story & play time" },
                { image: build6, text: "Collaboration to grow with others in a caring, respectful community" },
              ]}
            />
          ),
        },

        {
          eyebrow: "How we do it",
          title: "Intentional practices. Every single day.",
          tone: "cream",
          bulletStyle: "cards",
          bullets: [
            "Predictable routines: Familiar rhythms create a sense of safety that gives children confidence to explore.",
            "Teachers as facilitators: Guiding with thoughtful questions instead of ready-made answers.",
            "Playful inquiry: Play is how children understand the world, encouraging problem-solving & discovery.",
            "Creative experiences: Art, storytelling, music, movement and open-ended play woven into every day.",
            "Freedom to choose: Meaningful choices build independence and personal responsibility.",
            "Small ratios, deep relationships: Small teacher-child ratios so every child is truly seen and heard.",
          ],
        },

        {
          eyebrow: "The BambiBoo Way",
          title: "The non-negotiables.",
          sticky: true,
          bulletStyle: "numbered-cards-horizontal",
          bullets: [
            "Children come before the curriculum.",
            "Play is not a break from learning. It is learning.",
            "Every child grows differently.",
            "Strong partnerships with parents deserve peace of mind.",
            "Compassionate discipline.",
          ],
        },

        {
          eyebrow: "Where we are",
          title: "Rooted in Koramangala.",
          tone: "berry",
          imagePosition: "left",
          customPosition: "left",
          custom: (
            <div className="overflow-hidden rounded-3xl border-2 border-white/25 shadow-xl w-full h-[280px] md:h-[340px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6671873537975!2d77.63180407454595!3d12.929099315809765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15899ada3411%3A0xe35948f570efc217!2sBambiBoo%20Preschool%20and%20Daycare!5e0!3m2!1sen!2sin!4v1786015120180!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full rounded-3xl"
                title="BambiBoo Preschool Koramangala Map"
              />
            </div>
          ),
          body: (
            <>
              <p>
                Our first BambiBoo campus is tucked away on a quiet, tree-lined street in 1st Block, Koramangala-just minutes away from the energy of Koramangala, ST Bed, Ejipura and HSR.
              </p>
              <p className="mt-3 font-semibold text-white/90">
                Located at 44, 5th Main Road, 1st Block, Koramangala, Bengaluru, we're within walking distance of iconic Wipro Park, making us easy to reach while feeling wonderfully removed from the city's rush.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <a
                  href="https://maps.app.goo.gl/MKkp5sw9NfQWEsDD8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-primary px-5 py-2.5 text-sm font-bold shadow-md hover:brightness-110 transition-all"
                >
                  <MapPin className="h-4 w-4 shrink-0" />
                  Get Directions
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 px-5 py-2.5 text-sm font-bold transition-all"
                >
                  <PhoneCall className="h-4 w-4 shrink-0" />
                  Contact Us
                </Link>
              </div>
            </>
          ),
        },
        {
          eyebrow: "Our team",
          title: "The teacher your child will remember.",
          tone: "cream",
          image: ourTeamTeachersImg,
          imagePosition: "right",
          body: (
            <>
              <p>
                A preschool is only as special as the teachers who fill it with warmth, patience and joy. Every BambiBoo early years educator is carefully selected not just for their qualifications, but for their kindness, curiosity and genuine love for working with young children.
              </p>
              <ul className="mt-3 space-y-1.5 font-semibold text-foreground/90 text-sm">
                <li>• Montessori or NTT/ECCE certified</li>
                <li>• Background verified</li>
                <li>• First Aid trained</li>
                <li>• Mentored on campus before leading a classroom</li>
                <li>• Small teacher-child ratios: <strong>1:12</strong></li>
              </ul>
            </>
          ),
        },
      ]}
    />
  ),
});
