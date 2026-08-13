import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, Clock, Download, Sparkles } from "lucide-react";
import { Logo } from "./Logo";
import { AdmissionDialog } from "./AdmissionDialog";

const col = "text-xs md:text-sm text-primary/80 hover:text-primary transition block py-[1px]";

export function Footer() {
  return (
    <footer className="bg-[#F8D196] border-t border-[#E5BE82]/60 text-primary">
      <div className="container-page grid gap-6 md:gap-8 pt-10 md:pt-14 pb-6 md:pb-8 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="rounded-xl bg-[#FFF6EA] p-2 inline-block shadow-xs">
              <Logo />
            </div>
            <p className="mt-4 max-w-sm text-sm text-primary/85 leading-relaxed font-medium">
              Play. Wonder. Belong. A place where childhood comes first.
            </p>
            <p className="mt-3 max-w-sm text-xs text-primary/70 leading-relaxed tracking-wide">
              Visit our Koramangala campus • Book a School Tour • Follow our journey
            </p>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.instagram.com/bambiboo_playfulpals/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all shadow-xs"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all shadow-xs"
            >
              <Facebook className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all shadow-xs"
            >
              <Youtube className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div>
          <div className="mb-1.5 text-xs font-bold uppercase tracking-wider text-primary">Quick Links</div>
          <div className="space-y-[1px]">
            <AdmissionDialog>
              <button className={`${col} font-semibold text-primary inline-flex items-center gap-1 hover:underline`}>
                <Download className="h-3 w-3" /> Download Brochure
              </button>
            </AdmissionDialog>
            <AdmissionDialog>
              <button className={`${col} font-semibold text-primary inline-flex items-center gap-1 hover:underline`}>
                <Sparkles className="h-3 w-3" /> Program Enquiry
              </button>
            </AdmissionDialog>
            <Link to="/about" className={col}>About Us</Link>
            <Link to="/parents/curriculum" className={col}>Curriculum & Learning</Link>
            <Link to="/world/gallery" className={col}>Media Center & Gallery</Link>
            <Link to="/parents/admission" className={col}>Admission Process</Link>
            <Link to="/parents/safety" className={col}>Child Safety Policy</Link>
            <Link to="/parents/testimonials" className={col}>Parent Testimonials</Link>
            <Link to="/parents/faq" className={col}>FAQ</Link>
          </div>
        </div>

        <div>
          <div className="mb-1.5 text-xs font-bold uppercase tracking-wider text-primary">Beyond Academics</div>
          <div className="space-y-[1px]">
            <Link to="/beyond/arts" className={col}>Arts & Crafts</Link>
            <Link to="/beyond/yoga" className={col}>Yoga & Movement</Link>
            <Link to="/beyond/field-trips" className={col}>Field Trips</Link>
            <Link to="/beyond/festivals" className={col}>Festival & Events</Link>
          </div>
        </div>

        <div>
          <div className="mb-1.5 text-xs font-bold uppercase tracking-wider text-primary">Get in touch</div>
          <div className="space-y-[2px] text-xs md:text-sm">
            <div className="flex items-start gap-2 py-[1px]"><Phone className="h-3.5 w-3.5 mt-0.5 text-primary shrink-0" /> +91 99006 39303</div>
            <div className="flex items-start gap-2 py-[1px]"><Mail className="h-3.5 w-3.5 mt-0.5 text-primary shrink-0" /> hello@bambiboo.in</div>
            <div className="flex items-start gap-2 py-[1px]"><MapPin className="h-3.5 w-3.5 mt-0.5 text-primary shrink-0" /> 44, 5th Main Rd, 1st Block Koramangala, Bengaluru 560034</div>
            <div className="flex items-start gap-2 py-[1px]"><Clock className="h-3.5 w-3.5 mt-0.5 text-primary shrink-0" /> Mon to Sat · 8:30 AM to 6:30 PM</div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary/15">
        <div className="container-page flex flex-col gap-2 py-2.5 sm:flex-row sm:items-center sm:justify-between text-xs text-primary/70">
          <div>© {new Date().getFullYear()} BambiBoo Preschool & Daycare. All rights reserved.</div>
          <div className="flex gap-4">
            <Link to="/parents/safety" className="hover:text-primary">Child Safety</Link>
            <Link to="/parents/faq" className="hover:text-primary">FAQ</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
