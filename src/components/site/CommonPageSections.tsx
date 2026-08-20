import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Palette,
  BookOpen,
  Trees,
  Music,
  Puzzle,
  HeartHandshake,
  Star,
  ArrowRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import artsCraftsPillarImg from "@/assets/arts-crafts-pillar.webp";
import festivalFieldTripsPillarImg from "@/assets/festival-field-trips-pillar.webp";
import musicDancePillarImg from "@/assets/music-dance-pillar.webp";
import natureOutdoorPillarImg from "@/assets/nature-outdoor-pillar.webp";
import steamPlayPillarImg from "@/assets/steam-play-pillar.webp";

import deepthiAvatar from "@/assets/bambiboo/avatars/deepthi.png";
import shilpaAvatar from "@/assets/bambiboo/avatars/shilpa.png";
import akshayAvatar from "@/assets/bambiboo/avatars/akshay.png";
import rathnaAvatar from "@/assets/bambiboo/avatars/rathna.png";
import shivashankarAvatar from "@/assets/bambiboo/avatars/shivashankar.png";
import vishnuAvatar from "@/assets/bambiboo/avatars/vishnu.png";
import yogaMindfulnessPillarImg from "@/assets/yoga-mindfulness-pillar.webp";

const pillars = [
  {
    icon: Palette,
    title: "Create",
    body: "Write, paint, draw, mold, craft with open-ended materials that inspire imagination and self-expression.",
    image: artsCraftsPillarImg,
  },
  {
    icon: BookOpen,
    title: "Imagine",
    body: "Stories, songs and dramatic play that nurture language, empathy and a lifelong love for books.",
    image: musicDancePillarImg,
  },
  {
    icon: Trees,
    title: "Explore",
    body: "Nature, outdoor play and hands-on experiences that encourage curiosity about the world.",
    image: natureOutdoorPillarImg,
  },
  {
    icon: Music,
    title: "Move",
    body: "Music, dance, yoga, swing, slide, bounce and movement that build confidence, coordination and joyful expression.",
    image: yogaMindfulnessPillarImg,
  },
  {
    icon: Puzzle,
    title: "Discover",
    body: "Puzzles, science experiments, gardening, early STEAM and playful problem-solving that develop curious minds.",
    image: steamPlayPillarImg,
  },
  {
    icon: HeartHandshake,
    title: "Connect",
    body: "Friendships, festivals and shared experiences that help children build kindness, belonging and confidence.",
    image: festivalFieldTripsPillarImg,
  },
];

const categoryFaqs = [
  // 1. Admissions (5 questions)
  { cat: "admissions", q: "What ages does BambiBoo welcome?", a: "We offer programmes for children from 3 months to 6 years, along with daycare for children up to 12 years." },
  { cat: "admissions", q: "Can parents visit the school before admission?", a: "Absolutely. We encourage every family to visit our campus, meet our educators, explore the learning spaces and experience the BambiBoo environment before making a decision." },
  { cat: "admissions", q: "Do admissions remain open throughout the year?", a: "Yes, admissions remain open throughout the year subject to seat availability. We recommend scheduling a campus visit to confirm enrollment for your preferred age group." },
  { cat: "admissions", q: "What documents are required for the admission process?", a: "Parents need to submit a copy of the child's birth certificate, immunisation records, recent passport-size photographs, and Aadhaar card copies of both parents." },
  { cat: "admissions", q: "What is included in the child's welcome kit upon admission?", a: "Once admission is confirmed, every child receives a welcome kit containing learning books, customized school bag, uniform set, student diary, and ID card." },

  // 2. Timings (5 questions)
  { cat: "timings", q: "What are your school timings?", a: "Our programmes run Monday to Friday, with timings varying by age group. Parent & Toddler sessions are held Monday to Saturday." },
  { cat: "timings", q: "Do you offer half-day and full-day Day Care?", a: "Yes. We offer both half-day and full-day Day Care options to support the varying needs of families. Saturday care is available on request." },
  { cat: "timings", q: "What are the daycare operating hours?", a: "Daycare operates from 8:30 AM to 6:30 PM, Monday through Saturday, providing structured play, meal times, rest/nap periods, and supervised evening activities." },
  { cat: "timings", q: "Is Saturday care available for preschool or daycare children?", a: "Saturday daycare and weekend Parent-Toddler engagement sessions are available upon request to assist parents with flexible weekend schedules." },
  { cat: "timings", q: "How are late pickups handled for daycare children?", a: "We understand traffic delays in Koramangala. We provide extended evening care till 7:00 PM under continuous teacher supervision with prior notification from parents." },

  // 3. Teachers and Safety (5 questions)
  { cat: "cctv", q: "Do parents receive updates during the day?", a: "We believe in open communication and keeping parents connected through regular updates and conversations about their child's day." },
  { cat: "cctv", q: "Are your teachers qualified?", a: "Yes. Our educators are qualified, experienced and committed to creating a warm, nurturing environment where every child feels safe, respected and encouraged to grow." },
  { cat: "cctv", q: "Is the school under CCTV surveillance?", a: "Yes. The campus is covered by CCTV for safety and security. However, we do not provide live CCTV access to parents. Instead, we believe in building trust through open communication and regular updates about your child's day." },
  { cat: "cctv", q: "What safety and access control measures are in place on campus?", a: "We enforce strict security protocols, including gated access, verified pickup authorization, mandatory visitor logs, child-safe rounded furniture, and finger-pinch guards on all doors." },
  { cat: "cctv", q: "What emergency medical protocols are followed on campus?", a: "Every staff member is trained in pediatric CPR and first aid. We maintain a dedicated on-site first-aid station and have active medical tie-ups with two leading nearby hospitals for rapid 5-minute emergency response." },

  // 4. Teacher-child ratio (5 questions)
  { cat: "meals", q: "What is your teacher-child ratio?", a: "We keep our groups intentionally small: ● 2:12 for toddlers ● 1:12 for older children. So every child is known, heard and supported." },
  { cat: "meals", q: "How many support staff and helpers are assigned to each classroom?", a: "Each classroom has a dedicated lead teacher accompanied by a trained helper/nanny to assist with hygiene, bathroom breaks, and classroom activities." },
  { cat: "meals", q: "How does a small ratio benefit my child's learning journey?", a: "Intentionally small group sizes allow our educators to observe each child's unique learning pace, foster deeper emotional bonds, and tailor developmental milestones." },
  { cat: "meals", q: "Are helpers and support staff trained in hygiene and pediatric care?", a: "Yes. All support staff undergo regular training in child handling, hygiene standards, sanitation protocols, and respectful caregiving." },
  { cat: "meals", q: "How are toddlers assisted during meal and toilet transition times?", a: "Teachers and dedicated nannies provide gentle, step-by-step guidance during toilet training and meal times, encouraging self-help skills while ensuring comfort and cleanliness." },

  // 5. Transport (5 questions)
  { cat: "safety", q: "Is transport available?", a: "Yes. Transport is available on select routes. Please speak to our team to check availability for your neighbourhood." },
  { cat: "safety", q: "Is school transport available for Koramangala & nearby areas?", a: "Yes! We provide safe, air-conditioned door-to-door transport covering Koramangala, HSR Layout, Indiranagar, and surrounding neighborhood sectors." },
  { cat: "safety", q: "How are transport vehicles tracked for safety?", a: "All transport vehicles are fitted with real-time GPS tracking, speed governors (capped at 40 km/h), emergency panic buttons, and automated SMS arrival alerts sent directly to your phone." },
  { cat: "safety", q: "Who accompanies the children inside the transport vehicles?", a: "Every vehicle has a mandatory, background-verified female attendant on board alongside a trained driver to assist children with seatbelts, boarding, and unboarding." },
  { cat: "safety", q: "What background verification is done for staff and drivers?", a: "100% of drivers, attendants, teachers, and support staff undergo mandatory police background verification, address checks, medical screening, and annual safety recertifications." },
];

export function PillarsOfCareSection() {
  return (
    <>
      {/* MULTI-LAYERED SCALLOP DIVIDER TOP */}
      <div className="w-full overflow-hidden leading-none bg-[#FAFAFC] -mb-1 relative z-10">
        <svg className="relative block w-full h-12 sm:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L0,55 Q60,15 120,55 Q180,15 240,55 Q300,15 360,55 Q420,15 480,55 Q540,15 600,55 Q660,15 720,55 Q780,15 840,55 Q900,15 960,55 Q1020,15 1080,55 Q1140,15 1200,55 L1200,120 Z" fill="#CBD5E1" opacity="0.4" />
          <path d="M0,120 L0,70 Q75,25 150,70 Q225,25 300,70 Q375,25 450,70 Q525,25 600,70 Q675,25 750,70 Q825,25 900,70 Q975,25 1050,70 Q1125,25 1200,70 L1200,120 Z" className="fill-primary" />
        </svg>
      </div>

      {/* PILLARS */}
      <section className="bg-primary text-primary-foreground relative">
        <div className="container-page section-padding">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-300">Pillars of care</div>
            <h2 className="mt-2 text-4xl md:text-5xl font-semibold text-balance">
              Every Day,{" "}
              <span className="bg-amber-300 text-primary px-3 py-0.5 rounded-2xl inline-block shadow-xs">
                Full of Wonder.
              </span>
            </h2>
            <p className="mt-4 text-primary-foreground/90 text-base md:text-lg leading-relaxed">
              A thoughtfully designed curriculum that balances early academics, creative expression, movement and life skills through joyful, play-based learning.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {pillars.map((p) => {
              const IconComponent = p.icon;
              return (
                <div key={p.title} className="master-card group rounded-3xl border border-primary-foreground/20 bg-primary-foreground/5 p-6 md:p-8 flex flex-col justify-between h-full hover:bg-primary-foreground/10 hover:border-amber-300/40 transition-all duration-300">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-amber-300 text-primary grid place-items-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-md">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-primary-foreground/80 text-sm leading-relaxed">{p.body}</p>
                  </div>
                  {p.image && (
                    <div className="mt-6 -mx-6 -mb-6 md:-mx-8 md:-mb-8 overflow-hidden rounded-b-[calc(1.5rem-1px)]">
                      <img
                        src={p.image}
                        alt={`${p.title} at BambiBoo`}
                        loading="lazy"
                        width={600}
                        height={208}
                        className="block h-52 w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MULTI-LAYERED SCALLOP DIVIDER BOTTOM */}
      <div className="w-full overflow-hidden leading-none bg-primary -mb-1 relative z-10">
        <svg className="relative block w-full h-12 sm:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L0,45 Q60,5 120,45 Q180,5 240,45 Q300,5 360,45 Q420,5 480,45 Q540,5 600,45 Q660,5 720,45 Q780,5 840,45 Q900,5 960,45 Q1020,5 1080,45 Q1140,5 1200,45 L1200,120 Z" fill="#CBD5E1" opacity="0.4" />
          <path d="M0,120 L0,65 Q75,20 150,65 Q225,20 300,65 Q375,20 450,65 Q525,20 600,65 Q675,20 750,65 Q825,20 900,65 Q975,20 1050,65 Q1125,20 1200,65 L1200,120 Z" fill="#FAFAFC" />
        </svg>
      </div>
    </>
  );
}

export function LovedByFamiliesSection() {
  return (
    <section className="bg-[#FAFAFC]">
      <div className="container-page section-padding">
        <div className="text-xs font-bold uppercase tracking-widest text-primary/80">Loved by neighborhood families</div>
        <h2 className="mt-2 text-4xl md:text-5xl font-semibold text-balance">Real parents, measurable milestones.</h2>
        <Carousel opts={{ align: "start", loop: true }} className="mt-10">
          <CarouselContent className="-ml-5 lg:-ml-6">
            {[
              { name: "Deepthi Srinivasan", avatar: deepthiAvatar, meta: "Local Guide · 32 reviews · 28 photos · 10 months ago", quote: "BambiBoo is a very nice school. The teachers and helping staff are very friendly and co operative. It has both Montessori and Pre school curriculum which helps in inculcating the diverse nature of both aspects in the children. It's a rare combination to get schools like this. It is very spacious inside as well for kids to play around. They have lot of activities for children so they learn things in a practical way. All the best to BambiBoo for more successful years ahead." },
              { name: "Shilpa Ipirti", avatar: shilpaAvatar, meta: "1 review · 10 months ago", quote: "The school management is responsive and transparent. Communication with parents is effective and regular. Teachers and staff are approachable, supportive, and always attentive to the well being of children. The school provides quality education with dedicated teachers, well planned lessons, and a focus on overall learning outcomes, creating a nurturing and motivating environment for every child." },
              { name: "Akshay Kini", avatar: akshayAvatar, meta: "3 reviews · 9 months ago", quote: "Our daughter enjoys going to the preschool. The teachers take good and personal care. They update us on her progress. The curriculum is mixed and has best of both schemes. They conduct different activities and festivals are celebrated with interactivity for kids." },
              { name: "Rathna Shivashankar", avatar: rathnaAvatar, meta: "Local Guide · 1 review · 1 photo · 10 months ago", quote: "Good teaching and children care taking system good and nice" },
              { name: "Shivashankar Palaniyappa", avatar: shivashankarAvatar, meta: "Local Guide · 16 reviews · 15 photos · 10 months ago", quote: "Activity, neet and clean place, Good teachers." },
              { name: "Vishnu Devakaran", avatar: vishnuAvatar, meta: "3 reviews · 6 months ago", quote: "Excellent preschool! The staff is caring, professional, and always welcoming. The curriculum is well balanced with academics, play, and creative activities. My child enjoys going to school every day and has become more confident and independent. I highly recommend BambiBoo Preschool to any parent looking for a safe and nurturing place for their little one." },
            ].map((t) => (
              <CarouselItem key={t.name} className="pl-5 lg:pl-6 md:basis-1/2 lg:basis-1/3">
                <Link
                  to="/parents/testimonials"
                  className="master-card block h-full rounded-3xl bg-[#FFFDF9] border border-white/60 p-6 md:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1 text-accent">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 text-foreground/85 leading-relaxed line-clamp-6 text-sm md:text-base">"{t.quote}"</p>
                  </div>
                  <div className="mt-6 pt-5 border-t border-border/60 flex items-center gap-3.5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-11 w-11 rounded-full object-cover border border-border/80 shadow-2xs shrink-0"
                      loading="lazy"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-foreground truncate">{t.name}</div>
                      <div className="text-xs text-muted-foreground font-medium truncate">{t.meta}</div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
        <div className="mt-8 text-center">
          <Link to="/parents/testimonials" className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline">
            Read more parent stories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [faqCategory, setFaqCategory] = useState<string>("admissions");

  const filteredFaqs = categoryFaqs.filter((f) => f.cat === faqCategory);

  return (
    <section className="bg-[#F8FAFC]">
      <div className="container-page section-padding">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-primary/80">FAQ</div>
            <h2 className="mt-2 text-3xl md:text-5xl font-semibold text-balance">Quick answers for busy parents.</h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">Still curious? Reach out we love long conversations about your child.</p>
        </div>

        {/* Quick Category Filter Pills - ALL IN SAME LINE */}
        <div className="mt-6 mb-8 flex flex-nowrap items-center gap-2.5 overflow-x-auto px-3 pb-3 pt-1.5 scrollbar-none whitespace-nowrap">
          {[
            { id: "admissions", label: "Admissions" },
            { id: "timings", label: "Timings" },
            { id: "cctv", label: "Teachers and Safety" },
            { id: "meals", label: "Teacher-child ratio" },
            { id: "safety", label: "Transport" },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => setFaqCategory(c.id)}
              className={`shrink-0 px-6 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 inline-flex items-center justify-center ${
                faqCategory === c.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-foreground/75 border border-border/60 hover:bg-slate-50 hover:text-primary"
              }`}
              style={{ borderRadius: "9999px", boxShadow: "none" }}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="divide-y divide-border/60 rounded-3xl border border-border/60 bg-white shadow-xs overflow-hidden">
          {filteredFaqs.map((f) => (
            <details key={f.q} className="group p-6 md:p-7 open:bg-slate-50/80 transition-colors">
              <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-foreground text-lg">
                {f.q}
                <span className="ml-4 text-primary text-xl transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm md:text-base">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CommonPageFooterSections({ includeFaq = true }: { includeFaq?: boolean }) {
  return (
    <>
      <PillarsOfCareSection />
      <LovedByFamiliesSection />
      {includeFaq && <FaqSection />}
    </>
  );
}
