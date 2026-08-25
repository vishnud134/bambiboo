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
      { label: "Parent & Toddler (3m–2 yrs)", to: "/programmes/parent-toddler" },
      { label: "Playgroup (2–3 yrs)", to: "/programmes/playgroup" },
      { label: "Nursery (3–4 yrs)", to: "/programmes/nursery" },
      { label: "LKG (4–5 yrs)", to: "/programmes/lkg" },
      { label: "UKG (5–6 yrs)", to: "/programmes/ukg" },
      { label: "BambiBoo Day Care (2–10 yrs)", to: "/programmes/daycare" },
    ],
  },
  {
    label: "For Parents",
    to: "/parents",
    children: [
      { label: "Admission Process", to: "/parents/admission" },
      { label: "Child Safety Policy", to: "/parents/safety" },
      { label: "Curriculum & Learning", to: "/parents/curriculum" },      { label: "Daily Routine & Care", to: "/parents/daily-routine" },      { label: "FAQS", to: "/parents/faq" },
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
    label: "Co-Curricular",
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
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  const toggleGroup = (label: string) => {
    setExpandedGroup((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#4C167F]/10 bg-[#EEE6DC]/95 backdrop-blur-md">
      <div className="container-page-wide flex items-center justify-between gap-3 sm:gap-6 py-2.5 sm:py-3.5">
        <Logo />
        <nav className="hidden xl:flex flex-1 items-center justify-center gap-1 px-2">
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
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="tel:+919900639303"
            className="hidden 2xl:inline-flex items-center gap-2 rounded-full bg-[#EEE7DD] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" /> +91 99006 39303
          </a>
          <AdmissionDialog>
            <button className="shimmer-pill inline-flex items-center gap-1.5 rounded-full bg-[#4C167F] px-3.5 py-1.5 sm:px-4.5 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-md shadow-purple-900/20 hover:brightness-110 hover:-translate-y-0.5 transition-all whitespace-nowrap cursor-pointer">
              Book a Visit
            </button>
          </AdmissionDialog>

          <button
            className="xl:hidden inline-flex items-center justify-center rounded-full border border-border/80 p-2 bg-white/80 hover:bg-white transition text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5 text-primary" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="xl:hidden border-t border-[#4C167F]/10 bg-[#FAFAFC] shadow-xl">
          <div className="container-page py-4 max-h-[80vh] overflow-y-auto space-y-1">
            {nav.map((item) => (
              <div key={item.label} className="border-b border-border/40 last:border-0 pb-1">
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleGroup(item.label)}
                      className="w-full flex items-center justify-between rounded-xl px-3 py-2.5 font-bold text-foreground/90 hover:bg-white text-base text-left"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-primary transition-transform duration-200 ${
                          expandedGroup === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedGroup === item.label && (
                      <div className="ml-2 pl-3 border-l-2 border-primary/20 space-y-1 my-1">
                        {item.children.map((c) =>
                          c.to.startsWith("http") ? (
                            <a
                              key={c.to}
                              href={c.to}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-white"
                            >
                              {c.label}
                            </a>
                          ) : (
                            <Link
                              key={c.to}
                              to={c.to}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-white"
                            >
                              {c.label}
                            </Link>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                ) : item.to?.startsWith("http") ? (
                  <a
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 font-bold text-foreground/90 hover:bg-white text-base"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.to!}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 font-bold text-foreground/90 hover:bg-white text-base"
                    activeProps={{ className: "block rounded-xl px-3 py-2.5 font-extrabold text-[#4C167F] bg-primary/10 text-base" }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-3 border-t border-border/60 flex flex-col gap-2">
              <a
                href="tel:+919900639303"
                className="flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-white py-2.5 text-sm font-bold text-primary shadow-xs"
              >
                <Phone className="h-4 w-4" /> Call Us: +91 99006 39303
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
