import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

export const Route = createFileRoute("/parents/transport")({
  head: () => ({
    meta: [
      { title: "Transport BambiBoo Preschool" },
      { name: "description", content: "GPS tracked, speed governed, child locked transport with onboard female attendants." },
      { property: "og:url", content: "/parents/transport" },
    ],
    links: [{ rel: "canonical", href: "/parents/transport" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Transport"
      title="Every journey, every day, on your screen."
      intro="Our secure transit fleet is built around three non negotiables: real time tracking, an adult who is never a driver, and vehicles engineered for the smallest passengers."
      cta={{ label: "Request a transport quote", to: "/contact" }}
      sections={[
        {
          eyebrow: "Vehicle spec",
          title: "Built for children, not adapted for them.",
          body: (
            <p>
              Every vehicle in our fleet is purpose fitted for preschoolers, not a retrofitted adult van. Interiors are lined with soft, easy to clean surfaces, low step boarding, padded ceilings and rounded grab rails at child height. Each bus is inspected before every trip and serviced on a fixed 30 day schedule by a certified partner garage, with maintenance logs shared with parents on request.
            </p>
          ),
          bullets: [
            "Speed governed to 40 km/h",
            "Child locked doors & windows",
            "Height appropriate seat belts",
            "Air conditioned & sanitised daily",
            "First aid kit and fire extinguisher",
            "Emergency GPS panic button",
          ],
        },
        {
          eyebrow: "The people onboard",
          title: "One driver. One dedicated female attendant. Always.",
          tone: "cream",
          body: (
            <p>
              Every BambiBoo vehicle has a background verified driver plus a trained female attendant onboard dedicated to your child, not multitasking. Both wear ID; both are trackable.
 </p>
          ),
        },
        {
          eyebrow: "Live tracking",
          title: "See the bus, live, whenever you want.",
          body: (
            <p>
              Parents receive a live GPS link via WhatsApp on each pickup and drop. Automated arrival and departure alerts land in your inbox no more standing at the gate.
 </p>
          ),
        },
      ]}
    />
  ),
});
