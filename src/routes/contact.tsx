import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { AdmissionForm } from "@/components/site/AdmissionForm";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BambiBoo Preschool Koramangala" },
      { name: "description", content: "Call, email, or visit BambiBoo Preschool at 44, 5th Main Rd, 1st Block Koramangala, Bengaluru, Karnataka 560034." },
      { property: "og:title", content: "Contact BambiBoo" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <section className="bg-[#FAFAFC] relative overflow-hidden py-8 sm:py-12 md:py-16">
        <div className="absolute -top-20 -right-16 h-72 w-72 blob bg-primary/5 pointer-events-none max-w-full" />
        <div className="container-page relative grid gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-14 items-start">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Breadcrumb items={[{ label: "Contact Us" }]} className="mb-2 sm:mb-3 text-xs font-semibold text-primary/80" />
              <div className="text-xs font-bold uppercase tracking-widest text-primary">Contact</div>
              <h1 className="mt-1.5 text-2xl sm:text-4xl md:text-5xl font-black text-balance leading-tight break-words">
                Let's talk about your little one.
              </h1>
              <p className="mt-3 text-xs sm:text-sm md:text-base text-foreground/80 leading-relaxed max-w-xl">
                Choosing a preschool is a big decision, and we'd love to help you make it with confidence. Whether you have questions, would like to visit our campus or simply want to understand if BambiBoo is the right fit for your family, we're just a conversation away. Fill in the form below and our admissions team will get back to you within one working day. Prefer a phone call? We'd love that too.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:gap-3">
              {[
                { icon: Phone, label: "Call", value: "+91 99006 39303", href: "tel:+919900639303" },
                { icon: Mail, label: "Email", value: "info@bambiboo.com", href: "mailto:info@bambiboo.com" },
                { icon: MapPin, label: "Visit", value: "44, 5th Main Rd, 1st Block Koramangala, Bengaluru, Karnataka 560034" },
                { icon: Clock, label: "Hours", value: "Mon to Sat - 8:30 AM to 6:30 PM" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start sm:items-center gap-3 rounded-2xl sm:rounded-full border border-[#E8D5B8]/80 bg-[#FFFDF9] p-3 sm:px-4 sm:py-2.5 hover:border-primary/50 transition shadow-2xs hover:shadow-sm group"
                >
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform mt-0.5 sm:mt-0">
                    <c.icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground leading-none">{c.label}</div>
                    <div className="mt-1 sm:mt-0.5 text-xs sm:text-xs font-bold text-foreground break-words leading-snug">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center lg:justify-end w-full scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32" id="contact-form">
            <AdmissionForm variant="card" />
          </div>
        </div>
      </section>

      <section className="bg-[#FAF5EC] py-8 sm:py-12 md:py-16">
        <div className="container-page grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="text-xs font-bold uppercase tracking-widest text-primary/75 mb-1">
              Book a School Tour
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#430E6C] tracking-tight">
              There's no better way to experience BambiBoo than to visit us.
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
              Join us for a 30-minute guided campus walkthrough, meet our teachers, explore our learning spaces and bring your little one along-we'd love to meet them too.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-center justify-start lg:justify-end w-full">
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                const elem = document.getElementById("contact-form");
                if (elem) {
                  elem.scrollIntoView({ behavior: "smooth", block: "start" });
                  const firstInput = elem.querySelector("input") as HTMLInputElement | null;
                  if (firstInput) {
                    setTimeout(() => firstInput.focus(), 350);
                  }
                }
              }}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:brightness-105 transition cursor-pointer"
            >
              Book a Visit
            </a>
          </div>
        </div>
      </section>

      {/* Map / Directions */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#430E6C]/75 mb-1">
                Location & Directions
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#430E6C] tracking-tight">
                Find Us in Koramangala
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
              Located at 44, 5th Main Rd, 1st Block Koramangala - easily accessible from HSR Layout, Ejipura, and Indiranagar.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white shadow-xl relative w-full h-[280px] sm:h-[380px] md:h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6671873537975!2d77.63180407454595!3d12.929099315809765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15899ada3411%3A0xe35948f570efc217!2sBambiBoo%20Preschool%20and%20Daycare!5e0!3m2!1sen!2sin!4v1786015120180!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
              title="BambiBoo Preschool and Daycare Google Map Directions"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
