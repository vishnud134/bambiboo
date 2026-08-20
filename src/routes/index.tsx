import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Salad,
  ShieldCheck,
  Lock,
  Cctv,
  Bus,
  HeartHandshake,
  Sparkles,
  Star,
  Wind,
  Trees,
  Palette,
  Music,
  Rocket,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { AdmissionDialog } from "@/components/site/AdmissionDialog";
import { WhyBambiboo } from "@/components/site/WhyBambiboo";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import deepthiAvatar from "@/assets/bambiboo/avatars/deepthi.png";
import shilpaAvatar from "@/assets/bambiboo/avatars/shilpa.png";
import akshayAvatar from "@/assets/bambiboo/avatars/akshay.png";
import rathnaAvatar from "@/assets/bambiboo/avatars/rathna.png";
import shivashankarAvatar from "@/assets/bambiboo/avatars/shivashankar.png";
import vishnuAvatar from "@/assets/bambiboo/avatars/vishnu.png";

import artsCraftsPillarImg from "@/assets/arts-crafts-pillar.webp";
import festivalFieldTripsPillarImg from "@/assets/festival-field-trips-pillar.webp";
import musicDancePillarImg from "@/assets/music-dance-pillar.webp";
import natureOutdoorPillarImg from "@/assets/nature-outdoor-pillar.webp";
import steamPlayPillarImg from "@/assets/steam-play-pillar.webp";
import yogaMindfulnessPillarImg from "@/assets/yoga-mindfulness-pillar.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BambiBoo Preschool & Daycare Koramangala, Bengaluru" },
      {
        name: "description",
        content:
          "A warm, play based preschool & daycare in Koramangala for children aged 1.5 – 6 years. Verified safety, joyful learning, and a real neighborhood feel.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const programmes = [
  { name: "Parent & Toddler", age: "3m - 2y", category: "toddlers", to: "/programmes/parent-toddler", tint: "bg-[#EBF5FF] text-[#0369A1] border border-[#B9E6FE] hover:bg-[#E0F2FE]" },
  { name: "Playgroup", age: "2 - 3y", category: "toddlers", to: "/programmes/playgroup", tint: "bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0] hover:bg-[#D1FAE5]" },
  { name: "Nursery", age: "3 - 4y", category: "preschool", to: "/programmes/nursery", tint: "bg-[#EEF2FF] text-[#4338CA] border border-[#C7D2FE] hover:bg-[#E0E7FF]" },
  { name: "LKG", age: "4 - 5y", category: "preschool", to: "/programmes/lkg", tint: "bg-[#FEFCE8] text-[#B45309] border border-[#FEF08A] hover:bg-[#FEF9C3]" },
  { name: "UKG", age: "5 - 6y", category: "kindergarten", to: "/programmes/ukg", tint: "bg-[#F5F3FF] text-[#6D28D9] border border-[#DDD6FE] hover:bg-[#EDE9FE]" },
  { name: "BambiBoo Day Care", age: "2 - 10y", category: "daycare", to: "/programmes/daycare", tint: "bg-[#F0FDFA] text-[#0D9488] border border-[#99F6E4] hover:bg-[#CCFBF1]" },
];

const pillars = [
  { icon: Palette, title: "Create", body: "Write, paint, draw, mold, craft with open-ended materials that inspire imagination and self-expression.", image: artsCraftsPillarImg },
  { icon: Music, title: "Imagine", body: "Stories, songs and dramatic play that nurture language, empathy and a lifelong love for books.", image: musicDancePillarImg },
  { icon: Trees, title: "Explore", body: "Nature, outdoor play and hands-on experiences that encourage curiosity about the world.", image: natureOutdoorPillarImg },
  { icon: Rocket, title: "Move", body: "Music, dance, yoga, swing, slide, bounce and movement that build confidence, coordination and joyful expression.", image: yogaMindfulnessPillarImg },
  { icon: Rocket, title: "Discover", body: "Puzzles, science experiments, gardening, early STEAM and playful problem-solving that develop curious minds.", image: steamPlayPillarImg },
  { icon: HeartHandshake, title: "Connect", body: "Friendships, festivals and shared experiences that help children build kindness, belonging and confidence.", image: festivalFieldTripsPillarImg },
];

const trust = [
  { icon: Lock, label: "Verified Safety Systems" },
  { icon: Cctv, label: "100% CCTV Live Access" },
  { icon: Salad, label: "Fresh Menus" },
  { icon: Bus, label: "GPS Tracked Transport" },
  { icon: Wind, label: "Air Purified Classrooms" },
];

const faqs = [
  { q: "What ages does BambiBoo welcome?", a: "We offer programmes for children from 3 months to 6 years, along with daycare for children up to 12 years." },
  { q: "What are your school timings?", a: "Our programmes run Monday to Friday, with timings varying by age group. Parent & Toddler sessions are held Monday to Saturday." },
  { q: "What is your teacher-child ratio?", a: "We keep our groups intentionally small: ● 2:12 for toddlers ● 1:12 for older children. So every child is known, heard and supported." },
  
  { q: "Is transport available?", a: "Yes. Transport is available on select routes. Please speak to our team to check availability for your neighbourhood." },
];

import { useState } from "react";

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

function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [faqCategory, setFaqCategory] = useState<string>("admissions");

  const filteredProgrammes = activeFilter === "all"
    ? programmes
    : programmes.filter((p) => p.category === activeFilter);

  const filteredFaqs = categoryFaqs.filter((f) => f.cat === faqCategory);

  return (
    <PageShell>
      {/* HERO SECTION */}
      <section className="bg-[#F4F0E8] relative overflow-hidden py-10 sm:py-14 md:py-18">
        <div className="container-page relative z-10 grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-primary/80 border border-[#4C167F]/15 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              ADMISSIONS OPEN 2026–27 • KORAMANGALA
            </div>
            <h1 className="mt-5 font-display text-[#1C1329] text-balance leading-tight">
              <span className="block font-display font-semibold text-3xl sm:text-4xl md:text-[50px] tracking-tight leading-snug mb-1">
                A preschool where
              </span>
              <span className="font-display font-bold text-3xl sm:text-4xl md:text-[58px] bg-[#FCD34D] text-[#4C167F] px-5 sm:px-6 py-1.5 sm:py-2.5 rounded-2xl sm:rounded-3xl inline-block shadow-2xs -rotate-3 transform origin-left -mt-[6px]">
                childhood comes first.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-sm sm:text-base text-foreground/85 leading-[21px] font-medium">
              Through learning through play and small-group experiences, children build real friendships, confidence, and meaningful relationships. With safe care, personal attention, and transparent communication, parents can have peace of mind knowing their child is seen, heard, encouraged, and supported by trusted teachers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <AdmissionDialog>
                <button className="shimmer-pill inline-flex items-center gap-2 rounded-full bg-[#4C167F] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-950/20 hover:brightness-110 hover:-translate-y-0.5 transition-all">
                  Book a Campus Visit <ArrowRight className="h-4 w-4" />
                </button>
              </AdmissionDialog>
              <Link
                to="/programmes"
                className="inline-flex items-center gap-2 rounded-full border border-purple-900/15 bg-white px-6 py-3.5 text-sm font-bold text-[#4C167F] hover:bg-slate-50 hover:-translate-y-0.5 transition-all shadow-2xs"
              >
                Explore programmes
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 sm:gap-10 border-t border-[#4C167F]/15 pt-6 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-primary">1:12</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-extrabold mt-0.5">Teacher Ratio</div>
              </div>
              <div className="h-9 w-px bg-[#4C167F]/15" />
              <div>
                <div className="text-2xl sm:text-3xl font-black text-primary">7+</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-extrabold mt-0.5">Age Programmes</div>
              </div>
              <div className="h-9 w-px bg-[#4C167F]/15" />
              <div>
                <div className="text-2xl sm:text-3xl font-black text-primary">100%</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-extrabold mt-0.5">CCTV Covered</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            {/* Ambient Soft Aura Shape */}
            <div className="absolute -right-8 -top-8 w-72 h-72 rounded-full bg-gradient-to-br from-purple-200/40 to-amber-200/30 blur-2xl pointer-events-none" />
            
            <HeroCarousel />

            {/* Bottom Left Floating Social Proof Badge */}
            <div className="absolute -bottom-5 -left-4 rounded-3xl bg-white/95 border border-[#4C167F]/10 p-3.5 shadow-xl shadow-purple-950/10 flex items-center gap-3 max-w-xs z-20 hover:-translate-y-1 transition-transform backdrop-blur-md">
              <div className="h-9 w-9 rounded-full bg-amber-100 text-amber-900 border border-amber-300 grid place-items-center shrink-0 shadow-2xs">
                <ShieldCheck className="h-4.5 w-4.5 text-amber-700" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-extrabold">Loved by parents</div>
                <div className="text-xs sm:text-sm font-black text-foreground">4.9 / 5 from 200+ families</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#F8FAFC] relative">
        <div className="container-page section-padding grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          <div className="md:col-span-5 lg:col-span-5">
            <div className="text-xs font-bold uppercase tracking-widest text-primary/80">About BambiBoo</div>
            <h2 className="mt-2 text-3xl md:text-5xl font-black text-balance leading-tight">
              A place where childhood comes first.
            </h2>
            <p className="mt-4 text-xl font-bold italic text-primary">
              "Safe enough to explore. Warm enough to belong."
            </p>
          </div>
          <div className="md:col-span-7 lg:col-span-7 text-lg text-foreground/85 leading-relaxed max-w-3xl">
            <p>
              BambiBoo began with one mother's search for the preschool she wished existed for her own child. Today, that dream has become a place where children play, wonder and belong.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-extrabold text-primary hover:underline text-lg group">
              Read Our Story <ArrowRight className="h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY BAMBIBOO */}
      <WhyBambiboo />

      {/* CORE PROGRAMMES */}
      <section className="bg-[#FAFAFC]">
        <div className="container-page section-padding">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary/80">Core programmes</div>
              <h2 className="mt-2 text-4xl md:text-5xl font-bold text-balance">
                A path for every age, from{" "}
                <span className="relative inline-block bg-primary/10 text-primary px-3 py-0.5 rounded-2xl border border-primary/20 shadow-xs animate-float-slow">
                  tiny toes
                  <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-primary/70" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M 5,14 Q 50,2 95,14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
                  </svg>
                </span>{" "}
                to big goodbyes.
              </h2>
            </div>

            {/* Interactive Age Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white border border-border/60 shadow-xs shrink-0 self-start md:self-auto backdrop-blur-xs">
              {[
                { id: "all", label: "All Ages" },
                { id: "toddlers", label: "Toddlers (6M-2.5Y)" },
                { id: "preschool", label: "Preschool (2Y-4.5Y)" },
                { id: "kindergarten", label: "UKG (4.5Y-6Y)" },
                { id: "daycare", label: "Daycare & Clubs" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                    activeFilter === tab.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground/75 hover:bg-secondary/60 hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 xl:gap-8">
            {filteredProgrammes.map((p) => (
              <Link
                key={p.name}
                to={p.to}
                className={`master-card group rounded-3xl p-7 relative overflow-hidden flex flex-col justify-between min-h-[230px] border border-white/40 ${p.tint}`}
              >
                <div className="absolute -bottom-8 -right-8 h-40 w-40 blob bg-primary/5 group-hover:scale-110 transition-transform" />
                <div className="relative">
                  <div className="inline-flex items-center rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-xs">{p.age}</div>
                  <div className="mt-3 text-3xl font-extrabold group-hover:text-primary transition-colors">{p.name}</div>
                </div>
                <div className="relative mt-8 inline-flex items-center gap-2 text-sm font-bold">
                  Explore programme <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MULTI-LAYERED AESTHETIC SCALLOP DIVIDER TOP */}
      <div className="w-full overflow-hidden leading-none bg-[#FAFAFC] -mb-1 relative z-10">
        <svg
          className="relative block w-full h-12 sm:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Soft Slate Accent Background Layer */}
          <path
            d="M0,120 L0,55 Q60,15 120,55 Q180,15 240,55 Q300,15 360,55 Q420,15 480,55 Q540,15 600,55 Q660,15 720,55 Q780,15 840,55 Q900,15 960,55 Q1020,15 1080,55 Q1140,15 1200,55 L1200,120 Z"
            fill="#CBD5E1"
            opacity="0.4"
          />
          {/* Solid Purple Foreground Layer */}
          <path
            d="M0,120 L0,70 Q75,25 150,70 Q225,25 300,70 Q375,25 450,70 Q525,25 600,70 Q675,25 750,70 Q825,25 900,70 Q975,25 1050,70 Q1125,25 1200,70 L1200,120 Z"
            className="fill-primary"
          />
        </svg>
      </div>

      {/* PILLARS */}
      <section className="bg-primary text-primary-foreground relative">
        <div className="container-page section-padding">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-accent">Pillars of care</div>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-balance">
              The BambiBoo{" "}
              <span className="bg-accent text-primary px-3 py-0.5 rounded-2xl inline-block shadow-xs">
                Learning Journey
              </span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="master-card group rounded-3xl border border-primary-foreground/20 bg-primary-foreground/5 p-6 md:p-8 flex flex-col justify-between h-full hover:bg-primary-foreground/10 hover:border-accent/40 transition-all duration-300">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-accent text-primary grid place-items-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-md">
                    <p.icon className="h-6 w-6" />
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
            ))}
          </div>
        </div>
      </section>

      {/* MULTI-LAYERED AESTHETIC SCALLOP DIVIDER BOTTOM */}
      <div className="w-full overflow-hidden leading-none bg-primary -mb-1 relative z-10">
        <svg
          className="relative block w-full h-12 sm:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Soft Slate Accent Background Layer */}
          <path
            d="M0,120 L0,45 Q60,5 120,45 Q180,5 240,45 Q300,5 360,45 Q420,5 480,45 Q540,5 600,45 Q660,5 720,45 Q780,5 840,45 Q900,5 960,45 Q1020,5 1080,45 Q1140,5 1200,45 L1200,120 Z"
            fill="#CBD5E1"
            opacity="0.4"
          />
          {/* Solid White Foreground Layer */}
          <path
            d="M0,120 L0,65 Q75,20 150,65 Q225,20 300,65 Q375,20 450,65 Q525,20 600,65 Q675,20 750,65 Q825,20 900,65 Q975,20 1050,65 Q1125,20 1200,65 L1200,120 Z"
            fill="#FAFAFC"
          />
        </svg>
      </div>

      {/* TESTIMONIALS */}
      <section className="bg-[#FAFAFC]">
        <div className="container-page section-padding">
          <div className="text-xs font-bold uppercase tracking-widest text-primary/80">Loved by neighborhood families</div>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-balance">Real parents, measurable milestones.</h2>
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
                    className="master-card block h-full rounded-3xl bg-white border border-border/60 p-6 md:p-8 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex gap-1 text-amber-500">
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

      {/* FEATURE 4: INTERACTIVE FAQ QUICK-PILLS ACCORDION */}
      <section className="bg-[#F8FAFC]">
        <div className="container-page section-padding">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary/80">FAQ</div>
              <h2 className="mt-2 text-3xl md:text-5xl font-bold text-balance">Quick answers for busy parents.</h2>
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
                    : "bg-[#FFFDF9] text-foreground/75 border border-white/60 hover:bg-white hover:text-primary"
                }`}
                style={{ borderRadius: "9999px", boxShadow: "none" }}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="divide-y divide-border/60 rounded-3xl border border-white/70 bg-[#FFFDF9] shadow-xs overflow-hidden">
            {filteredFaqs.map((f) => (
              <details key={f.q} className="group p-6 md:p-7 open:bg-[#FBF2E7]/60 transition-colors">
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
    </PageShell>
  );
}
