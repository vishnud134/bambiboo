import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type BlogPost = {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "preschool-readiness-guide",
    title: "How to Prepare Your Child for Their First Day at Preschool",
    category: "Parenting Guide",
    date: "Aug 2, 2026",
    readTime: "4 min read",
    excerpt: "Transitioning to preschool is a big milestone for toddlers and parents alike. Discover 5 gentle routines to make day one full of smiles.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "montessori-vs-play-based",
    title: "Montessori vs. Play-Based Learning: Finding the Right Balance",
    category: "Early Education",
    date: "Jul 28, 2026",
    readTime: "5 min read",
    excerpt: "Why choose between Montessori independence and play-based inquiry when your child can thrive with a blended curriculum?",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "steam-activities-for-toddlers",
    title: "Building STEAM Skills in Toddlers: Simple Experiments at Home",
    category: "STEAM & Discovery",
    date: "Jul 20, 2026",
    readTime: "3 min read",
    excerpt: "From sink-and-float water trays to seed germination logs, learn how hands-on exploration builds early scientific reasoning.",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "nutrition-for-growing-brains",
    title: "Healthy Fuel for Growing Brains: Sugar-Free Meals Kids Love",
    category: "Nutrition & Health",
    date: "Jul 14, 2026",
    readTime: "4 min read",
    excerpt: "Explore BambiBoo's nutritionist-crafted meal plans that boost focus, immunity, and energy without refined sugars.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "outdoor-play-motor-skills",
    title: "The Power of Outdoor Play: Why Dirt and Turf Matter for Motor Skills",
    category: "Child Development",
    date: "Jul 08, 2026",
    readTime: "4 min read",
    excerpt: "Outdoor play isn't just recess—it's sensory integration, physical balance, and social negotiation in action.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "preschool-safety-checklist",
    title: "Child Safety in Modern Preschools: What Every Parent Should Look For",
    category: "Safety & Security",
    date: "Jun 30, 2026",
    readTime: "5 min read",
    excerpt: "From 100% CCTV live feeds to background-checked staff and GPS-tracked transport, here is our non-negotiable safety framework.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
  },
];

export function BlogCarouselSection({ className = "" }: { className?: string }) {
  return (
    <section className={`bg-[#FFEBCB] py-12 md:py-16 border-t border-[#E5BE82]/50 ${className}`}>
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
                <article className="master-card group h-full rounded-3xl bg-[#FFF6EA] border border-white/70 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Cover Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-[#FFE6C0]">
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
                      to="/parents/faq"
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
