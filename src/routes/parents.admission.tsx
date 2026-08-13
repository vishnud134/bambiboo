import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { AdmissionForm } from "@/components/site/AdmissionForm";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhyBambiboo } from "@/components/site/WhyBambiboo";
import { CommonPageFooterSections } from "@/components/site/CommonPageSections";

import admissionHd from "@/assets/bambiboo/admission-hd.jpg";

export const Route = createFileRoute("/parents/admission")({
  head: () => ({
    meta: [
      { title: "Admission Process BambiBoo Preschool" },
      { name: "description", content: "The three step admission journey to join the BambiBoo family book a visit and submit your enquiry online." },
      { property: "og:title", content: "Admissions BambiBoo Preschool" },
      { property: "og:description", content: "Book a campus visit and start your child's BambiBoo journey." },
      { property: "og:url", content: "/parents/admission" },
    ],
    links: [{ rel: "canonical", href: "/parents/admission" }],
  }),
  component: AdmissionPage,
});


const paperwork = [
  "Birth certificate (copy)",
  "Recent vaccination record",
  "Two parent child photos",
  "Blood group & allergy note",
  "Aadhaar / passport of one parent",
  "Address proof",
];

function AdmissionPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFECCB]">
        <div className="absolute -top-20 -right-16 h-72 w-72 blob bg-[#F8D9A8]" />
        <div className="absolute -bottom-24 -left-10 h-64 w-64 blob bg-primary/10" />
        <div className="container-page relative py-12 md:py-16 grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Breadcrumb items={[{ label: "Parents Corner", to: "/parents" }, { label: "Admission Process" }]} className="mb-4 text-xs font-semibold text-primary/80" />
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary w-fit">
              Admission Process
            </div>
            <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl font-extrabold text-foreground text-balance">
              Three unhurried steps to join the BambiBoo family.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground text-balance">
              No aptitude tests, no waiting list drama, no pressure. Just a warm walkthrough, a friendly chat, and a joyful yes.
            </p>
            <a
              href="#enquiry"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110 w-fit"
            >
              Start your enquiry
            </a>
          </div>
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] shadow-lg border border-border/40 bg-[#FFF4E1]">
              <img
                src={admissionHd}
                alt="Preschool campus tour and admissions desk"
                className="h-[320px] md:h-[380px] w-full object-cover object-center rounded-[1.75rem]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why BambiBoo (2nd Container) */}
      <WhyBambiboo />

      {/* Admission Info Containers */}
      <section className="bg-white">
        <div className="container-page py-10 md:py-14">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-primary font-bold">Admission Process</p>
              <h3 className="mt-3 text-2xl font-bold text-foreground">Your journey begins with a campus visit.</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Meet our teachers, explore the classrooms and understand our philosophy. We'll answer all your questions, discuss the curriculum and fee structure, guide you through the documentation, and once admission is confirmed, your child receives a welcome kit with books, bag, uniform, diary and ID card.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-primary font-bold">Admissions Throughout the Year</p>
              <h3 className="mt-3 text-2xl font-bold text-foreground">Yes. Admissions remain open throughout the year.</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Yes. Admissions remain open throughout the year, subject to seat availability. We recommend scheduling a school visit to understand the programme best suited for your child.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-primary font-bold">Documents Required for Admission</p>
              <h3 className="mt-3 text-2xl font-bold text-foreground">What to bring for enrolment.</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                For parents, we require an Aadhaar card. For your child, we require a birth certificate, immunisation records and recent photographs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + paperwork side-by-side */}
      <section id="enquiry" className="bg-secondary/40 scroll-mt-24">
        <div className="container-page py-10 md:py-14 grid gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <AdmissionForm />
          </div>
          <aside className="lg:col-span-5 lg:sticky lg:top-24 self-start space-y-4">
            <div className="rounded-3xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-widest text-primary font-bold">What to prepare</p>
              <h3 className="mt-1 text-2xl font-black text-foreground">The paperwork, kept short.</h3>
              <ul className="mt-4 grid gap-2">
                {paperwork.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-primary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-widest text-primary font-bold">Talk to us</p>
              <h3 className="mt-1 text-xl font-bold text-foreground">Prefer a call?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Our admissions team is available Mon–Sat, 9am–6pm.
              </p>
              <a
                href="tel:+919900639303"
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition"
              >
                +91 99006 39303
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Common Footer Sections: Pillars, Loved by Families, FAQ */}
      <CommonPageFooterSections />
    </PageShell>
  );
}
