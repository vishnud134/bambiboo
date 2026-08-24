import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { AdmissionDialog } from "./AdmissionDialog";


type NavItem = { label: string; to: string };
type NavGroup = { label: string; to?: string; children?: NavItem[] };

const nav: NavGroup[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Programmes",
    to: "/programmes",
    children: [
      { label: "Parent & Toddler (3m–2y)", to: "/programmes/parent-toddler" },
      { label: "Playgroup (2–3y)", to: "/programmes/playgroup" },
      { label: "Nursery (3–4y)", to: "/programmes/nursery" },
      { label: "LKG (4–5y)", to: "/programmes/lkg" },
      { label: "UKG (5–6y)", to: "/programmes/ukg" },
      { label: "BambiBoo Day Care (2–10y)", to: "/programmes/daycare" },
    ],
  },
  {
    label: "For Parents",
    to: "/parents",
    children: [
      { label: "Admission Process", to: "/parents/admission" },
      { label: "Child Safety Policy", to: "/parents/safety" },
      { label: "Curriculum & Learning", to: "/parents/curriculum" },      { label: "Daily Routine & Care", to: "/parents/daily-routine" },      { label: "FAQ", to: "/parents/faq" },
      { label: "Testimonials", to: "/parents/testimonials" },
    ],
  },
  {
    label: "Media Center",
    to: "/world/gallery",
    children: [
      { label: "Gallery & Events", to: "/world/gallery" },
      { label: "Virtual Tour", to: "https://www.jumbokids.com/jumbokid/index.html" },
    ],
  },
  {
    label: "Co-Curriculam",
    to: "/beyond",
    children: [
      { label: "Arts & Crafts", to: "/beyond/arts" },
      { label: "Music & Dance", to: "/beyond/music" },
      { label: "Yoga & Movement", to: "/beyond/yoga" },
      { label: "Field Trips", to: "/beyond/field-trips" },
      { label: "Festival & Events", to: "/beyond/festivals" },
    ],
  },
  { label: "Contact", to: "/contact" },
  { label: "Blogs", to: "/blogs" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#4C167F]/10 bg-[#EEE6DC]/95 backdrop-blur-md">
      <div className="container-page-wide flex items-center justify-between gap-4 sm:gap-6 py-2.5 sm:py-3.5">
        <Logo />
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-1 px-2">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                {item.to ? (
                  item.to.startsWith("http") ? (
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 hover:bg-white/60 hover:text-primary transition whitespace-nowrap"
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 hover:bg-white/60 hover:text-primary transition whitespace-nowrap"
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </Link>
                  )
                ) : (
                  <button className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 hover:bg-white/60 hover:text-primary transition whitespace-nowrap">
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                )}
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full pt-2 transition-all duration-200 ease-out z-50">
                  <div className="min-w-64 rounded-2xl border border-border/80 bg-white p-2.5 shadow-2xl shadow-purple-950/10 backdrop-blur-md">
                    {item.children.map((c) =>
                      c.to.startsWith("http") ? (
                        <a
                          key={c.to}
                          href={c.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/item flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold text-foreground/85 hover:bg-primary/5 hover:text-primary hover:translate-x-1.5 transition-all duration-200 whitespace-nowrap"
                        >
                          <span>{c.label}</span>
                          <span className="text-primary opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 font-bold">→</span>
                        </a>
                      ) : (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="group/item flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold text-foreground/85 hover:bg-primary/5 hover:text-primary hover:translate-x-1.5 transition-all duration-200 whitespace-nowrap"
                        >
                          <span>{c.label}</span>
                          <span className="text-primary opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 font-bold">→</span>
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </div>
            ) : item.to?.startsWith("http") ? (
              <a
                key={item.to}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 hover:bg-white/60 hover:text-primary transition whitespace-nowrap"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.to}
                to={item.to!}
                className="px-3 py-1.5 text-sm font-bold text-foreground/80 hover:text-primary transition whitespace-nowrap"
                activeProps={{ className: "px-3 py-1.5 text-sm font-extrabold text-[#4C167F] border-b-2 border-[#4C167F] whitespace-nowrap" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <a
            href="tel:+919900639303"
            className="hidden xl:inline-flex items-center gap-2 rounded-full bg-[#EEE7DD] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" /> +91 99006 39303
          </a>
          <AdmissionDialog>
            <button className="shimmer-pill inline-flex items-center gap-1.5 rounded-full bg-[#4C167F] px-4.5 py-2 text-xs sm:text-sm font-bold text-white shadow-md shadow-purple-900/20 hover:brightness-110 hover:-translate-y-0.5 transition-all whitespace-nowrap cursor-pointer">
              Book a Visit
            </button>
          </AdmissionDialog>
        </div>

        <button
          className="lg:hidden ml-auto inline-flex items-center justify-center rounded-full border border-border p-2 bg-white/60"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5 text-primary" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-3 max-h-[75vh] overflow-y-auto">
            {nav.map((item) => (
              <div key={item.label} className="py-1">
                {item.to && (
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-2 font-semibold text-foreground"
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && (
                  <>
                    {!item.to && (
                      <div className="px-2 py-2 text-xs uppercase tracking-widest text-primary/70 font-bold">
                        {item.label}
                      </div>
                    )}
                    <div className="pl-3 border-l-2 border-secondary">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-2 py-1.5 text-sm text-foreground/80"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
            <AdmissionDialog>
              <button
                className="mt-3 w-full rounded-full bg-primary px-4 py-3 text-center font-bold text-[#FFF6EA]"
                onClick={() => setOpen(false)}
              >
                Book a Visit
              </button>
            </AdmissionDialog>

          </div>
        </div>
      )}
    </header>
  );
}
