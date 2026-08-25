import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

import safetyHeroHd from "@/assets/bambiboo/safety-hero-hd.jpg";
import cctvLiveImg from "@/assets/bambiboo/cctv-live.jpg";
import safetyCertImg from "@/assets/bambiboo/safety-cert.jpg";
import physicalSafetyImg from "@/assets/bambiboo/physical-safety.jpg";
import bgVerifiedImg from "@/assets/bambiboo/bg-verified.jpg";
import emergencyReadyImg from "@/assets/bambiboo/emergency-ready.jpg";
import hygieneCleanImg from "@/assets/bambiboo/hygiene-clean.jpg";

export const Route = createFileRoute("/parents/safety")({
  head: () => ({
    meta: [
      { title: "Child Safety Policy BambiBoo Preschool" },
      { name: "description", content: "Our safety transparency matrix: CCTV, background verified staff, 360° safety certification, hygiene, emergency readiness." },
      { property: "og:url", content: "/parents/safety" },
    ],
    links: [{ rel: "canonical", href: "/parents/safety" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Child Safety Policy"
      title="Safety, made completely visible."
      intro="Child safety is our highest priority. Our campus follows established safety protocols, emergency procedures and statutory safety compliances, including Fire & Safety requirements, to provide a secure environment for every child."
      heroImage={safetyHeroHd}
      sections={[
        {
          title: "CCTV surveillance in School",
          image: cctvLiveImg,
          imagePosition: "right",
          body: (
            <p>
              CCTV surveillance in School - The campus is covered by CCTV for safety and security. However, we do not provide live CCTV access to parents. Instead, we believe in building trust through open communication and regular updates about your child's day.
            </p>
          ),
        },
        {
          title: "Qualified teachers",
          tone: "cream",
          image: safetyCertImg,
          imagePosition: "left",
          body: (
            <p>
              Our educators are qualified, experienced and committed to creating a warm, nurturing environment where every child feels safe, respected and encouraged to grow.
            </p>
          ),
        },
        {
          eyebrow: "Physical safety",
          title: "The building itself is built for tiny humans.",
          image: physicalSafetyImg,
          imagePosition: "right",
          body: (
            <p>
              Every corner, edge, socket and staircase in our campus has been reviewed at knee height literally. Furniture is child scale with rounded corners, electrical points are covered with tamper proof guards, and staircases have double handrails at toddler and adult heights. Wet zones use anti skid flooring, outdoor play surfaces are impact absorbing rubber turf, and all windows carry grille protection without compromising light or ventilation.
            </p>
          ),
          bullets: [
            "Finger safe hinge guards on every door",
            "Rounded edge child height furniture",
            "Anti skid flooring in all wet zones",
            "Impact absorbing rubber turf outdoors",
            "Grille protection on every window",
            "Biometric access at all entry points",
          ],
        },
        {
          eyebrow: "Background verified people",
          title: "Nobody enters, teaches or picks up without being checked.",
          tone: "cream",
          image: bgVerifiedImg,
          imagePosition: "left",
          body: (
            <p>
              All teachers and support staff are background verified before joining and re screened annually. Visitors pass through biometric checkpoint access and photo ID logging. Only pre authorised guardians can pick up children matched against a secure photo database, with OTP confirmation for one off pickups.
            </p>
          ),
        },
        {
          eyebrow: "Emergency readiness",
          title: "Prepared for the days we hope never come.",
          tone: "berry",
          image: emergencyReadyImg,
          imagePosition: "right",
          body: (
            <p>
              We hope we never have to use them, but we practise for them anyway. Every staff member is trained in paediatric first aid and CPR, with refresher sessions every six months. A qualified first responder is on site during all operating hours, and we maintain live tie ups with two nearby hospitals for rapid transfers. Fire, earthquake and evacuation drills happen on a fixed calendar so children treat them as familiar routines, not scary events.
            </p>
          ),
          bullets: [
            "24×7 on site trained first responder",
            "Two nearby partner hospitals on speed dial",
            "Detailed medical & allergy form for every child",
            "Allergy tagged meal and medication tracking",
            "Fire drills every 60 days",
            "Earthquake / evacuation drills each term",
          ],
        },
        {
          eyebrow: "Hygiene & clean environment",
          title: "Little bodies, high standards.",
          image: hygieneCleanImg,
          imagePosition: "left",
          body: (
            <p>
              Cleanliness is a curriculum, not a chore. Classrooms and washrooms are sanitised twice daily with child safe, non toxic disinfectants, and high touch surfaces like door handles, taps and toy shelves are wiped down every couple of hours. Soft toys and manipulatives are rotated out every 48 hours for a deep wash and sun dry, and every child has their own labelled bottle, cutlery, napkin and nap linen no sharing, ever.
            </p>
          ),
          bullets: [
            "Classrooms sanitised twice daily",
            "Toys rotated and washed every 48 hours",
            "Air purified indoor environment",
            "Daily temperature and wellness check at drop off",
            "Separate isolation room for unwell children",
            "Individual bottles, cutlery and nap linens",
          ],
        },
      ]}
    />
  ),
});
