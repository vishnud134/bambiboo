import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import preschoolProgImg from "@/assets/bambiboo/preschool-prog-hd.jpg";
import curriculumHeroImg from "@/assets/bambiboo/curriculum-hero-hd.jpg";
import classroomMorningImg from "@/assets/gallery/classroom-morning.webp";
import steamHeroImg from "@/assets/bambiboo/steam-how-it-looks.jpg";
import steam2Img from "@/assets/world/steam-2.webp";
import realFoodKitchenImg from "@/assets/bambiboo/real-food-kitchen.jpg";
import preschoolChefImg from "@/assets/bambiboo/preschool-chef-kids.png";
import outdoorBalanceImg from "@/assets/gallery/outdoor-balance-track.webp";
import fieldTripImg from "@/assets/gallery/field-trip-botanical-garden.webp";
import safetyHeroImg from "@/assets/bambiboo/safety-hero-hd.jpg";
import physicalSafetyImg from "@/assets/bambiboo/physical-safety.jpg";
import nutritionCoverImg from "@/assets/bambiboo/nutrition-cover.jpg";
import nutritionKidsEatingImg from "@/assets/bambiboo/nutrition-kids-eating.jpg";

export type BlogPost = {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content?: React.ReactNode | string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "preschool-readiness-guide",
    title: "How to Prepare Your Child for Their First Day at Preschool",
    category: "Parenting Guide",
    date: "Aug 2, 2026",
    readTime: "4 min read",
    excerpt: "Transitioning to preschool is a big milestone for toddlers and parents alike. Discover 5 gentle routines to make day one full of smiles.",
    image: preschoolProgImg,
    content: (
      <div className="prose prose-lg max-w-none text-foreground">
        <p>
          Starting preschool is a big milestone-not just for your child, but for the whole family. A new environment, unfamiliar faces, and a different routine can make the first day exciting and, sometimes, a little overwhelming.
        </p>

        <p>
          The good news is that a little preparation can help your child feel more confident and comfortable. Here are some simple ways parents can prepare their child for a happy and positive preschool experience.
        </p>

        <h2>Essential Steps for a Smooth Preschool Transition</h2>

        <h3>1. Talk About Preschool Positively</h3>
        <p>
          Start talking about preschool a few days or weeks before the first day. Keep the conversation light, positive, and age-appropriate.
        </p>
        <p>
          You can tell your child about the fun things they may experience-playing with other children, listening to stories, singing songs, drawing, exploring, and meeting their teachers.
        </p>

        <h3>2. Introduce a Preschool Routine</h3>
        <p>
          Children often feel more comfortable when they know what to expect. Before preschool begins, gradually introduce a routine similar to their school schedule.
        </p>
        <p>Set consistent times for:</p>
        <ul>
          <li>Waking up</li>
          <li>Having breakfast</li>
          <li>Getting dressed</li>
          <li>Playing</li>
          <li>Eating meals</li>
          <li>Taking a nap</li>
          <li>Going to bed</li>
        </ul>
        <p>A predictable routine can make the transition from home to preschool much smoother.</p>

        <h3>3. Practice Being Away From Parents</h3>
        <p>
          If your child has rarely spent time away from you, the first day can feel like a big change.
        </p>
        <p>
          Before preschool starts, allow your child to spend short periods with grandparents, relatives, trusted caregivers, or during playdates. Gradually increasing these periods can help your child become comfortable being away from you.
        </p>

        <h3>4. Help Your Child Become More Independent</h3>
        <p>
          Encourage your child to practise simple everyday tasks such as eating independently, drinking from their bottle, washing hands, putting toys away, wearing or removing simple footwear, telling an adult when they need the toilet, and carrying their small backpack.
        </p>

        <h3>5. Visit the Preschool Before the First Day</h3>
        <p>
          If possible, take your child to visit the preschool beforehand. Let them see the classroom, play area, teachers, and other children. Familiar surroundings can make the first day feel less unfamiliar.
        </p>

        {/* Featured In-Article HD Image */}
        <figure className="my-8 overflow-hidden rounded-2xl border border-primary/15 shadow-md">
          <img
            src={curriculumHeroImg}
            alt="Children happily discovering and playing in a preschool classroom"
            className="w-full h-[340px] md:h-[420px] object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <figcaption className="bg-slate-50 px-4 py-3 text-center text-xs font-semibold text-muted-foreground border-t border-border/40">
            Visiting the preschool classroom and meeting teachers beforehand builds confidence and joyful anticipation.
          </figcaption>
        </figure>

        <h2>Building Independence & Emotional Security</h2>

        <h3>6. Let Your Child Help Prepare</h3>
        <p>
          Make preparation exciting by involving your child. Let them choose a small backpack, water bottle, or other age-appropriate school essentials. Allow them to help pack their bag the night before.
        </p>

        <h3>7. Don't Make Goodbyes Too Long</h3>
        <p>
          The first goodbye can be emotional. Give them a warm hug, reassure them that they are safe, and say goodbye confidently. Avoid repeatedly returning after saying goodbye, as this can make separation more difficult.
        </p>

        <h3>8. Stay Calm and Confident</h3>
        <p>
          Children often pick up on their parents' emotions. Try to communicate confidence and reassurance - your calm presence helps your child feel that preschool is a safe and positive place.
        </p>

        <h3>9. Don't Compare Your Child With Others</h3>
        <p>
          Every child adjusts at their own pace. Give your child time, patience, encouragement, and plenty of reassurance.
        </p>

        <h3>10. Celebrate Their First Preschool Experience</h3>
        <p>
          After school, ask simple, positive questions about their day and celebrate small achievements-entering the classroom, meeting a teacher, playing with another child, or trying something new.
        </p>

        <p className="mt-6 pt-4 border-t border-border/60">
          With a little preparation, a familiar routine, positive conversations, and lots of reassurance, parents can help make this transition easier and more enjoyable. Every child is different-give them time and space to settle in, trust the process, and celebrate every little step forward.
        </p>
      </div>
    ),
  },
  {
    id: "montessori-vs-play-based",
    title: "Montessori vs. Play-Based Learning: Finding the Right Balance",
    category: "Early Education",
    date: "Jul 28, 2026",
    readTime: "5 min read",
    excerpt: "Why choose between Montessori independence and play-based inquiry when your child can thrive with a blended curriculum?",
    image: curriculumHeroImg,
    content: (
      <div className="prose prose-lg max-w-none text-foreground">
        <p>
          When choosing an early childhood education philosophy for your toddler, you will frequently hear two dominant paradigms: the <strong>Montessori Method</strong> and <strong>Play-Based Learning</strong>. Both approaches prioritize child-centered learning over traditional rote memorization, yet they structure daily experiences in distinct ways.
        </p>
        <p>
          At BambiBoo, we believe parents don't need to choose one over the other. A blended curriculum that combines Montessori's focus on independence with Play-Based inquiry produces the most well-rounded, confident learners.
        </p>

        <h2>Understanding the Core Philosophies</h2>

        <h3>The Montessori Approach: Order, Autonomy & Real Skills</h3>
        <p>
          Developed by Dr. Maria Montessori, this approach focuses on a "prepared environment" where children choose tasks from carefully organized self-correcting materials. Key traits include:
        </p>
        <ul>
          <li><strong>Self-Directed Learning:</strong> Children select their own tasks from open shelves.</li>
          <li><strong>Practical Life Skills:</strong> Activities like pouring water, buttoning coats, and wiping tables build coordination.</li>
          <li><strong>Mixed-Age Classrooms:</strong> Younger children learn from observing older peers.</li>
          <li><strong>Focus & Order:</strong> Quiet concentration is valued, with dedicated work mats for each activity.</li>
        </ul>

        <h3>The Play-Based Approach: Imagination, Negotiation & Inquiry</h3>
        <p>
          Play-Based education views play as the child's primary work. Guided by curiosity, children learn language, math, and social-emotional skills through active play and games. Key traits include:
        </p>
        <ul>
          <li><strong>Open-Ended Exploration:</strong> Building blocks, dress-up corners, and sensory bins foster creative problem-solving.</li>
          <li><strong>Social Negotiation:</strong> Sharing, turn-taking, and resolving conflicts with peers during group play.</li>
          <li><strong>Teacher-Guided Projects:</strong> Educators observe children's interests and design themes (e.g., space, dinosaurs, ocean life) around them.</li>
        </ul>

        <figure className="my-8 overflow-hidden rounded-2xl border border-primary/15 shadow-md">
          <img
            src={classroomMorningImg}
            alt="Children in a brightly lit BambiBoo classroom engaging in blended learning"
            className="w-full h-[340px] md:h-[420px] object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="bg-slate-50 px-4 py-3 text-center text-xs font-semibold text-muted-foreground border-t border-border/40">
            A blended environment provides structured Montessori material shelves alongside collaborative play zones.
          </figcaption>
        </figure>

        <h2>Why BambiBoo Uses a Blended Methodology</h2>
        <p>
          Strictly following a single methodology can leave gaps. Pure Montessori can sometimes lack collaborative group play, while unstructured play without guidance can miss foundational numeracy and literacy milestones.
        </p>
        <p>
          By combining both, children spend mornings in structured Montessori workstations mastering concentration and fine motor control, followed by afternoon collaborative play-based projects that build emotional resilience and teamwork.
        </p>

        <h2>3 Ways to Apply This Balance at Home</h2>
        <ol>
          <li><strong>Create Accessible Shelves:</strong> Store toys and books at child height so your child can select and clean up independently.</li>
          <li><strong>Involve Them in Housework:</strong> Let them wash plastic dishes, tear lettuce for salad, or fold small washcloths.</li>
          <li><strong>Encourage Unstructured Play:</strong> Provide open-ended materials like cardboard boxes, blocks, and playdough without rigid rules.</li>
        </ol>
      </div>
    ),
  },
  {
    id: "steam-activities-for-toddlers",
    title: "Building STEAM Skills in Toddlers: Simple Experiments at Home",
    category: "STEAM & Discovery",
    date: "Jul 20, 2026",
    readTime: "3 min read",
    excerpt: "From sink-and-float water trays to seed germination logs, learn how hands-on exploration builds early scientific reasoning.",
    image: steamHeroImg,
    content: (
      <div className="prose prose-lg max-w-none text-foreground">
        <p>
          Many parents assume STEAM (Science, Technology, Engineering, Arts, and Mathematics) is a concept reserved for middle or high school. In reality, toddlers are born natural scientists! Every time a 2-year-old drops a spoon to test gravity or mixes colors in a paint dish, they are performing early scientific inquiry.
        </p>

        <h2>What Does STEAM Look Like for Toddlers?</h2>
        <p>
          For toddlers and preschoolers, STEAM is not about formulas or coding on screens. It is about <strong>curiosity, hypothesis testing, spatial awareness, and creative expression</strong> through hands-on sensory materials.
        </p>

        <h2>5 Fun & Easy STEAM Activities You Can Try at Home</h2>

        <h3>1. The Sink or Float Water Tray (Science & Density)</h3>
        <p>
          Fill a shallow tub with water and collect everyday household items (a wooden block, plastic spoon, metal coin, apple slice, leaf). Ask your child before dropping each item: <em>"Do you think this will float on top or sink to the bottom?"</em>
        </p>
        <p>
          <strong>Learning Outcome:</strong> Introduces density, prediction, and scientific vocabulary (buoyancy, heavy vs. light).
        </p>

        <h3>2. Ramp & Marble Physics (Engineering & Motion)</h3>
        <p>
          Use cardboard paper towel tubes or wooden planks to build simple inclined ramps. Roll marbles, toy cars, or wooden balls down at different angles.
        </p>
        <p>
          <strong>Learning Outcome:</strong> Explores gravity, slope, speed, and cause-and-effect relationships.
        </p>

        <figure className="my-8 overflow-hidden rounded-2xl border border-primary/15 shadow-md">
          <img
            src={steam2Img}
            alt="Toddlers engaged in hands-on building and science discovery"
            className="w-full h-[340px] md:h-[420px] object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="bg-slate-50 px-4 py-3 text-center text-xs font-semibold text-muted-foreground border-t border-border/40">
            Hands-on building activities foster spatial reasoning, resilience, and early engineering skills.
          </figcaption>
        </figure>

        <h3>3. Colored Ice Cube Melting (Chemistry & Color Mixing)</h3>
        <p>
          Freeze water mixed with natural food colors (red, blue, yellow) in ice trays. Place different colored ice cubes in a warm tray and let your child watch them melt and blend into secondary colors (purple, green, orange).
        </p>

        <h3>4. Window Seed Germination Bag (Biology & Observation)</h3>
        <p>
          Place a damp cotton ball and a dry kidney bean inside a clear ziplock bag. Tape it to a sunlit window. Have your child check it daily and draw simple sprout logs as roots and leaves emerge over 5 days.
        </p>

        <h3>5. Geometric Block Bridges (Mathematics & Architecture)</h3>
        <p>
          Challenge your child to span a 6-inch gap between two chairs using wooden blocks or popsicle sticks. Test how many toy animals the bridge can support before collapsing.
        </p>
      </div>
    ),
  },
  {
    id: "nutrition-for-growing-brains",
    title: "Healthy Fuel for Growing Brains: Sugar-Free Meals Kids Love",
    category: "Nutrition & Health",
    date: "Jul 14, 2026",
    readTime: "4 min read",
    excerpt: "Explore BambiBoo's nutritionist-crafted meal plans that boost focus, immunity, and energy without refined sugars.",
    image: nutritionCoverImg,
    content: (
      <div className="prose prose-lg max-w-none text-foreground">
        <p>
          Between ages 1 and 6, a child's brain undergoes its most rapid development, consuming up to 60% of their body's daily energy intake. What goes on your toddler's plate directly affects their attention span, mood stability, immunity, and cognitive stamina throughout the preschool day.
        </p>

        <h2>The Hidden Cost of Sugar Spikes in Toddlers</h2>
        <p>
          Packaged snacks, refined juices, and sugary cereals lead to rapid blood glucose spikes followed by steep crashes. In a classroom, this manifests as sudden hyperactivity, irritability, and difficulty focusing during storytime or fine motor work.
        </p>

        <h2>BambiBoo's Sugar-Free Meal Philosophy</h2>
        <p>
          At BambiBoo, all meals served to children are prepared fresh in our clean, dedicated kitchen using zero refined sugars, zero artificial colors, and zero preservatives. We replace white sugar with natural sweetening agents like dates, organic jaggery, banana purée, and fresh fruit pulp.
        </p>

        <figure className="my-8 overflow-hidden rounded-2xl border border-primary/15 shadow-md">
          <img
            src={nutritionKidsEatingImg}
            alt="Children enjoying wholesome nutritious snacks and fruit smoothies together"
            className="w-full h-[340px] md:h-[420px] object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="bg-slate-50 px-4 py-3 text-center text-xs font-semibold text-muted-foreground border-t border-border/40">
            Enjoying fresh, colorful whole foods and fruit smoothies together builds lifelong healthy eating habits.
          </figcaption>
        </figure>

        <h2>Sample Daily Brain-Boosting Menu</h2>
        <ul>
          <li><strong>Morning Snack:</strong> Warm ragi (finger millet) porridge sweetened with date paste and almond powder.</li>
          <li><strong>Mid-Morning Meal:</strong> Steamed mini idlis made with oats and red rice, served with mild coconut chutney.</li>
          <li><strong>Afternoon Refreshment:</strong> Fresh watermelon & mint slushie with chia seeds.</li>
        </ul>

        <h2>3 Easy Sugar-Free Recipes to Try at Home</h2>

        <h3>1. Banana-Oat Energy Bites</h3>
        <p>
          Mash 2 ripe bananas with 1 cup of rolled oats, a tablespoon of peanut butter, and a pinch of cinnamon. Roll into small bite-sized balls and chill in the fridge for 30 minutes.
        </p>

        <h3>2. Creamy Mango & Spinach Smoothie</h3>
        <p>
          Blend sweet Alphonso mango chunks with a handful of tender spinach leaves, Greek yogurt, and coconut water for a bright green, nutrient-packed treat kids adore.
        </p>

        <h3>3. Date & Ragi Pancakes</h3>
        <p>
          Whisk ragi flour with mashed dates, a touch of milk, and cardamom. Cook on a hot griddle with a drop of A2 cow ghee.
        </p>
      </div>
    ),
  },
  {
    id: "outdoor-play-motor-skills",
    title: "The Power of Outdoor Play: Why Dirt and Turf Matter for Motor Skills",
    category: "Child Development",
    date: "Jul 08, 2026",
    readTime: "4 min read",
    excerpt: "Outdoor play isn't just recess-it's sensory integration, physical balance, and social negotiation in action.",
    image: outdoorBalanceImg,
    content: (
      <div className="prose prose-lg max-w-none text-foreground">
        <p>
          In an era where digital screens compete for children's attention, dedicated outdoor play has become more vital than ever. Outdoor time is not just a break from learning - it <strong>is</strong> active learning. Running on grass, balancing on logs, and touching outdoor surfaces provide sensory and physical neural inputs that indoor environments cannot replicate.
        </p>

        <h2>1. Gross Motor Mastery & Balance</h2>
        <p>
          Uneven natural ground requires constant micro-adjustments in ankles, knees, and core muscles. Walking on balance beams, jumping over mini hurdles, and navigating green turf build vestibular (balance) and proprioceptive (body awareness) senses.
        </p>

        <h2>2. Fine Motor & Sensory Integration</h2>
        <p>
          Feeling rough tree bark, sifting through clean sand, collecting fallen leaves, and digging in garden soil build tactile discrimination. These rich sensory experiences build the neural pathways required for pencil grip, scissor control, and self-regulation.
        </p>

        <figure className="my-8 overflow-hidden rounded-2xl border border-primary/15 shadow-md">
          <img
            src={fieldTripImg}
            alt="Children exploring nature and outdoor spaces at BambiBoo"
            className="w-full h-[340px] md:h-[420px] object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="bg-slate-50 px-4 py-3 text-center text-xs font-semibold text-muted-foreground border-t border-border/40">
            Outdoor nature walks build environmental curiosity, spatial confidence, and physical coordination.
          </figcaption>
        </figure>

        <h2>3. Natural Immunity & Sleep Quality</h2>
        <p>
          Exposure to morning sunlight boosts natural Vitamin D synthesis and sets healthy circadian rhythms. Children who spend 45+ minutes outdoors every morning fall asleep more easily and experience deeper, restorative sleep at night.
        </p>

        <h2>4. Social Negotiation & Healthy Risk-Taking</h2>
        <p>
          Outdoor play naturally encourages group games like tag, hide-and-seek, and relay races. Children learn to negotiate rules, take turns, assess reasonable risks (like climbing a step higher), and build self-reliance.
        </p>
      </div>
    ),
  },
  {
    id: "preschool-safety-checklist",
    title: "Child Safety in Modern Preschools: What Every Parent Should Look For",
    category: "Safety & Security",
    date: "Jun 30, 2026",
    readTime: "5 min read",
    excerpt: "From 100% CCTV live feeds to background-checked staff and GPS-tracked transport, here is our non-negotiable safety framework.",
    image: safetyHeroImg,
    content: (
      <div className="prose prose-lg max-w-none text-foreground">
        <p>
          As a parent, nothing matters more than the physical and emotional safety of your child. A high-quality preschool must provide an environment where safety standards are non-negotiable, transparent, and built into every single daily routine.
        </p>

        <h2>The 8-Point Safety Checklist Every Parent Must Inspect</h2>

        <h3>1. 100% Live CCTV Parent Access</h3>
        <p>
          Parents should have secure, encrypted access to live HD video feeds of classrooms and outdoor play areas so they can observe their child at any time with total transparency.
        </p>

        <h3>2. Thorough Background Checks for All Personnel</h3>
        <p>
          Every teacher, assistant, nanny, security officer, and driver must undergo background verification, police clearance, and reference checks prior to employment.
        </p>

        <h3>3. Child-Proof Infrastructure & Facilities</h3>
        <p>
          Look for rounded furniture edges, finger-pinch guards on doors, anti-skid flooring, electrical outlet covers placed above 5 feet, and padded wall guards in play zones.
        </p>

        <figure className="my-8 overflow-hidden rounded-2xl border border-primary/15 shadow-md">
          <img
            src={physicalSafetyImg}
            alt="Safe, child-proofed classroom layout at BambiBoo Preschool"
            className="w-full h-[340px] md:h-[420px] object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="bg-slate-50 px-4 py-3 text-center text-xs font-semibold text-muted-foreground border-t border-border/40">
            Soft-edged furniture, anti-skid flooring, and monitored spaces keep children secure while they explore.
          </figcaption>
        </figure>

        <h3>4. Certified First-Aid Trained Staff & Medical Protocols</h3>
        <p>
          All staff should be trained annually in pediatric First-Aid and CPR, with a stocked medical kit, clear allergy tracking, and direct tie-ups with nearby pediatric hospitals for immediate emergency response.
        </p>

        <h3>5. Strict Authorized Pickup System</h3>
        <p>
          Children must only be released to parents or pre-registered guardians holding official RFID/Photo QR pickup cards. Any temporary pickup requires prior written authorization and photo verification.
        </p>

        <h3>6. Sanitization & Air Hygiene Standards</h3>
        <p>
          Daily medical-grade UV/steam sanitization of toys and play surfaces, along with HEPA air purifiers in classrooms, reduces seasonal virus transmission.
        </p>

        <h3>7. Safe Transportation & GPS Tracking</h3>
        <p>
          School vans must feature speed governors, seatbelts, live GPS tracking accessible to parents, and a dedicated female attendant present on every route.
        </p>

        <h3>8. Regular Emergency Drills & Fire Safety</h3>
        <p>
          Regular, age-appropriate fire and emergency evacuation drills ensure that staff and children respond calmly and swiftly in any unforeseen situation.
        </p>
      </div>
    ),
  },
];

export function BlogCarouselSection({ className = "" }: { className?: string }) {
  return (
    <section className={`bg-[#FAFAFC] py-12 md:py-16 border-t border-border/60 ${className}`}>
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary/80 mb-2">
              <BookOpen className="h-4 w-4 text-primary" />
              Parenting & Early Learning Blog
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight text-balance">
              Insights & guidance for BambiBoo parents.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-sm md:text-base leading-relaxed">
            Expert tips on early childhood development, sugar-free nutrition, STEAM play, and smooth preschool transitions.
          </p>
        </div>

        {/* Blog Carousel */}
        <Carousel opts={{ align: "start", loop: true }} className="relative">
          <CarouselContent className="-ml-5 lg:-ml-6">
            {blogPosts.map((post) => (
              <CarouselItem key={post.id} className="pl-5 lg:pl-6 md:basis-1/2 lg:basis-1/3">
                <article className="master-card group h-full rounded-3xl bg-white border border-border/60 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Cover Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block rounded-full bg-primary/90 backdrop-blur px-3 py-1 text-[11px] font-bold text-primary-foreground shadow-xs">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-primary/70" />
                          {post.date}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-primary/70" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="px-6 pb-6 pt-2">
                    <Link
                      to="/blogs/$postId"
                      params={{ postId: post.id }}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:underline"
                    >
                      Read full article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-white/90 border-border hover:bg-primary hover:text-white" />
          <CarouselNext className="hidden md:flex -right-4 bg-white/90 border-border hover:bg-primary hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
}
