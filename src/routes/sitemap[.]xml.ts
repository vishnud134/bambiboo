import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const paths = [
  "/", "/about", "/contact",
  "/programmes", "/programmes/parent-toddler", "/programmes/playgroup",
  "/programmes/preschool", "/programmes/lkg", "/programmes/ukg",
  "/programmes/nursery", "/programmes/daycare", "/programmes/hobby-center",
  "/parents/curriculum", "/parents/admission", "/parents/safety", "/parents/food",
  "/parents/daily-routine", "/parents/testimonials", "/parents/faq",
  "/world/at-home", "/world/indoor", "/world/steam", "/world/gallery",
  "/beyond/arts", "/beyond/yoga", "/beyond/field-trips", "/beyond/festivals",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths
          .map(
            (p) =>
              `  <url><loc>${BASE_URL}${p}</loc><changefreq>${p === "/" ? "weekly" : "monthly"}</changefreq><priority>${p === "/" ? "1.0" : "0.7"}</priority></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content Type": "application/xml", "Cache Control": "public, max age=3600" },
        });
      },
    },
  },
});
