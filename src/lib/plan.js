import "server-only";
import { MODEL, SCENES, ASPECTS, RESOLUTIONS } from "@/lib/app.config";
import { pick, urls, text } from "@/lib/plan-helpers";

export function plan(body) {
  const images = urls(body.inputs, "images", { min: 1, max: 6, name: "product photo" });
  const scene = SCENES.find((s) => s.id === body.scene) || SCENES[0];
  const custom = text(body.note, 400);
  const count = pick(Number(body.count), [1, 2, 4], 1);
  const job = {
    model: MODEL,
    prompt:
      `Professional product photograph of the exact product shown in the reference photo${images.length > 1 ? "s" : ""}: ${custom || scene.prompt}. ` +
      "Keep the product's shape, proportions, colors, materials, label text and logo exactly as in the reference; do not invent or change any text; sharp focus, realistic lighting and reflections, high-end commercial quality.",
    params: { aspect_ratio: pick(body.aspect, ASPECTS, "1:1"), resolution: pick(body.resolution, RESOLUTIONS, "1k") },
    inputs: { image_urls: images },
  };
  return Array.from({ length: count }, () => job);
}
