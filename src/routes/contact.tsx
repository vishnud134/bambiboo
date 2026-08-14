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
      <section className="bg-[#FBF5EB] relative overflow-hidden py-10 md:py-16">
        <div className="absolute -top-20 -right-16 h-72 w-72 blob bg-[#F5E6CE]" />
        <div className="container-page relative grid gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-14 items-start">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Breadcrumb items={[{ label: "Contact Us" }]} className="mb-4 text-xs font-semibold text-primary/80" />
              <div className="text-xs font-bold uppercase tracking-widest text-primary">Contact</div>
              <h1 className="mt-2 text-4xl md:text-5xl font-black text-balance">
                Let's talk about your little one.
              </h1>
              <p className="mt-3 text-base md:text-lg text-foreground/80 leading-relaxed">
                Choosing a preschool is a big decision, and we'd love to help you make it with confidence. Whether you have questions, would like to visit our campus or simply want to understand if BambiBoo is the right fit for your family, we're just a conversation away. Fill in the form below and our admissions team will get back to you within one working day. Prefer a phone call? We'd love that too.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3.5">
              {[
                { icon: Phone, label: "Call", value: "+91 99006 39303", href: "tel:+919900639303" },
                { icon: Mail, label: "Email", value: "hello@bambiboo.in", href: "mailto:hello@bambiboo.in" },
                { icon: MapPin, label: "Visit", value: "44, 5th Main Rd, 1st Block Koramangala, Bengaluru, Karnataka 560034" },
                { icon: Clock, label: "Hours", value: "Mon to Sat · 8:30 AM to 6:30 PM" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 rounded-3xl border border-[#E8D5B8]/80 bg-[#FFFDF9] p-3.5 md:p-4 hover:border-primary/50 transition shadow-sm hover:shadow-md"
                >
                  <div className="h-10 w-10 rounded-2xl bg-primary text-primary-foreground grid place-items-center shrink-0 shadow-xs">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="mt-0.5 text-xs md:text-sm font-bold text-foreground">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-end" id="contact-form">
            <AdmissionForm variant="card" />
          </div>
        </div>
      </section>

      <section className="bg-[#FAF5EC] py-12 md:py-16">
        <div className="container-page grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="text-xs font-bold uppercase tracking-widest text-primary/75 mb-1">
              Book a School Tour
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#430E6C] tracking-tight">
              There's no better way to experience BambiBoo than to visit us.
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
              Join us for a 30-minute guided campus walkthrough, meet our teachers, explore our learning spaces and bring your little one along—we'd love to meet them too.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-start lg:justify-end">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:brightness-105 transition"
            >
              Book a Visit
            </a>
          </div>
        </div>
      </section>

      {/* Map / Directions */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#430E6C]/75 mb-1">
                Location & Directions
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#430E6C] tracking-tight">
                Find Us in Koramangala
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Located at 44, 5th Main Rd, 1st Block Koramangala — easily accessible from HSR Layout, Ejipura, and Indiranagar.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border-4 border-[#FFF6EA] shadow-xl relative w-full h-[400px] md:h-[480px]">
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
