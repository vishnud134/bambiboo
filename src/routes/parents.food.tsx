import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

import foodMenuHd from "@/assets/bambiboo/food-menu-hd.jpg";
import realFoodKitchenImg from "@/assets/bambiboo/real-food-kitchen.jpg";
import mealtimeRitualsImg from "@/assets/bambiboo/mealtime-rituals.jpg";
import foodTypicalWeekImg from "@/assets/bambiboo/food-typical-week.jpg";
import foodKitchenWalkIntoImg from "@/assets/bambiboo/food-kitchen-walk-into.jpg";

export const Route = createFileRoute("/parents/food")({
  head: () => ({
    meta: [
      { title: "Food & Nutrition BambiBoo Preschool" },
      { name: "description", content: "Sugar free, freshly cooked meals the BambiBoo healthy growth menu. Whole grains, seasonal produce, allergy tagged plates." },
      { property: "og:url", content: "/parents/food" },
    ],
    links: [{ rel: "canonical", href: "/parents/food" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Food & Nutrition"
      title="Real food, cooked in our kitchen, eaten together."
      intro="We provide healthy and nutritionally dense food which is important for proper overall growth balanced, freshly prepared, and eaten at unhurried shared tables that make mealtime a social ritual, not a chore."
      heroImage={realFoodKitchenImg}
      sections={[
        {
          eyebrow: "The menu principle",
          title: "Nothing arrives in a packet.",
          image: foodMenuHd,
          body: (
            <p>
              Every meal at BambiBoo is cooked from scratch in our own kitchen that morning by a chef who's been with us since day one. No refined sugar, no artificial colour, no maida based snacks. We source vegetables from a local organic collective every 48 hours and grains from a small farmer network.
            </p>
          ),
        },
        {
          eyebrow: "A typical week",
          title: "Sample meal calendar.",
          tone: "cream",
          image: foodTypicalWeekImg,
          body: (
            <p>
              Our weekly menu is designed by an in house nutritionist along with our chef, balancing protein, complex carbs, healthy fats and micronutrients across the day. We rotate grains (ragi, jowar, bajra, rice, wheat) and pulses so children get exposure to a wide range of textures and flavours, and we deliberately keep the plate colourful because children eat with their eyes first. Menus are shared with parents every Sunday evening so meals at home can complement, not repeat, what's served at school.
            </p>
          ),
          bullets: [
            "Mon Ragi dosa, coconut chutney, banana",
            "Tue Vegetable khichdi, curd, seasonal fruit",
            "Wed Palak paratha, hung curd dip",
            "Thu Millet upma, fruit chaat",
            "Fri Idli, sambar, sweet potato mash",
            "Sat Vegetable pulao, raita, apple slices",
          ],
        },
        {
          eyebrow: "Mealtime rituals",
          title: "The meal is part of the curriculum.",
          image: mealtimeRitualsImg,
          body: (
            <p>
              Mealtime at BambiBoo is a slow, social, screen free ritual not a quick refuel between activities. Children sit together at low wooden tables, teachers eat alongside them, and conversation is encouraged over hurry. We treat every meal as a learning moment: pouring water, passing bowls, naming ingredients, waiting for a friend and thanking the kitchen team are all part of how children build independence, table manners and gratitude, one bite at a time.
            </p>
          ),
          bullets: [
            "Handwashing songs before every meal",
            "Children serve themselves from small bowls (age appropriate)",
            "Slow tables no rushed eating, ever",
            "Gratitude circle before we start",
            "Older children clear their own plates",
            "Water breaks scheduled every 90 minutes",
          ],
        },
        {
          eyebrow: "Kitchen you can walk into",
          title: "Full kitchen transparency.",
          tone: "cream",
          image: foodKitchenWalkIntoImg,
          body: (
            <p>
              Parents can visit the kitchen at any time, unannounced. Our chef is happy to walk you through the day's menu, storage, sourcing and cooking process. What we cook for your child is what we'd cook for our own.
            </p>
          ),
        },
      ]}
    />
  ),
});
