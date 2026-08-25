import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, Clock, Download, Sparkles } from "lucide-react";
import { Logo } from "./Logo";
import { AdmissionDialog } from "./AdmissionDialog";

const col = "text-xs md:text-sm text-[#1A1228]/85 hover:text-[#4C167F] font-medium transition block py-[1px]";

export function Footer() {
  return (
    <footer className="bg-[#EEE6DC] border-t border-[#430E6C]/15 text-[#1A1228]">
      <div className="container-page grid gap-6 md:gap-8 pt-10 md:pt-14 pb-6 md:pb-8 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="rounded-xl bg-[#EFE8DE] p-2 inline-block">
              <Logo />
            </div>
            <p className="mt-4 max-w-sm text-sm text-[#231B32]/90 leading-relaxed font-medium">
              Play. Wonder. Belong. A place where childhood comes first.
            </p>
            <p className="mt-3 max-w-sm text-xs text-[#231B32]/70 leading-relaxed tracking-wide">
              Visit our Koramangala campus • Book a School Tour • Follow our journey
            </p>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.instagram.com/bambiboo_playfulpals/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-9 w-9 rounded-full bg-white/80 border border-[#4C167F]/15 text-[#4C167F] flex items-center justify-center hover:bg-[#4C167F] hover:text-white hover:scale-105 transition-all shadow-2xs"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://www.facebook.com/people/BambiBoo-PreSchool/61573348333176/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-9 w-9 rounded-full bg-white/80 border border-[#4C167F]/15 text-[#4C167F] flex items-center justify-center hover:bg-[#4C167F] hover:text-white hover:scale-105 transition-all shadow-2xs"
            >
              <Facebook className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://www.youtube.com/@AnantaEducationalTrust"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="h-9 w-9 rounded-full bg-white/80 border border-[#4C167F]/15 text-[#4C167F] flex items-center justify-center hover:bg-[#4C167F] hover:text-white hover:scale-105 transition-all shadow-2xs"
            >
              <Youtube className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div>
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-[#4C167F]">Quick Links</div>
          <div className="space-y-[1px]">
            <Link to="/about" className={col}>About Us</Link>
            <AdmissionDialog>
              <button className={`${col} w-full text-left cursor-pointer`}>
                Download Brochure
              </button>
            </AdmissionDialog>
            <AdmissionDialog>
              <button className={`${col} w-full text-left cursor-pointer`}>
                Program Enquiry
              </button>
            </AdmissionDialog>
            <Link to="/parents/curriculum" className={col}>Curriculum & Learning</Link>
            <Link to="/world/gallery" className={col}>Media Center & Gallery</Link>
            <Link to="/parents/admission" className={col}>Admission Process</Link>
            <Link to="/parents/safety" className={col}>Child Safety Policy</Link>
            <Link to="/parents/testimonials" className={col}>Parent Testimonials</Link>
            <Link to="/blogs" className={col}>Blogs</Link>
            <Link to="/parents/faq" className={col}>FAQS</Link>
          </div>
        </div>

        <div>
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-[#4C167F]">Beyond Academics</div>
          <div className="space-y-[1px]">
            <Link to="/beyond/arts" className={col}>Arts & Crafts</Link>
            <Link to="/beyond/music" className={col}>Music & Dance</Link>
            <Link to="/beyond/yoga" className={col}>Yoga & Movement</Link>
            <Link to="/beyond/field-trips" className={col}>Field Trips</Link>
            <Link to="/beyond/festivals" className={col}>Festival & Events</Link>
          </div>
        </div>

        <div>
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-[#4C167F]">Get in touch</div>
          <div className="space-y-[2px] text-xs md:text-sm text-[#231B32]/90">
            <div className="flex items-start gap-2 py-[1px]"><Phone className="h-3.5 w-3.5 mt-0.5 text-[#4C167F] shrink-0" /> +91 99006 39303</div>
            <div className="flex items-start gap-2 py-[1px]"><Mail className="h-3.5 w-3.5 mt-0.5 text-[#4C167F] shrink-0" /> info@bambiboo.com</div>
            <div className="flex items-start gap-2 py-[1px]"><MapPin className="h-3.5 w-3.5 mt-0.5 text-[#4C167F] shrink-0" /> 44, 5th Main Rd, 1st Block Koramangala, Bengaluru 560034</div>
            <div className="flex items-start gap-2 py-[1px]"><Clock className="h-3.5 w-3.5 mt-0.5 text-[#4C167F] shrink-0" /> Mon to Sat · 8:30 AM to 6:30 PM</div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#430E6C]/12">
        <div className="container-page flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between text-xs text-[#231B32]/70">
          <div>© {new Date().getFullYear()} BambiBoo Preschool & Daycare. All rights reserved.</div>
          <div className="flex gap-4">
            <Link to="/parents/safety" className="hover:text-[#4C167F]">Child Safety</Link>
            <Link to="/parents/faq" className="hover:text-[#4C167F]">FAQS</Link>
            <Link to="/contact" className="hover:text-[#4C167F]">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
