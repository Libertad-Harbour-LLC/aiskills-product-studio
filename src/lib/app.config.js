// Product Studio — marketplace-ready product photos from ordinary shots.
// Model: nano-banana-2-1-edit (edit and combine up to 14 photos by instruction, keeps the product's look).

export const MODEL = "nano-banana-2-1-edit";

export const SCENES = [
  { id: "white", label: { en: "Pure white (main image)", ru: "Белый фон (главное фото)" },
    prompt: "the product alone on a pure white seamless background (#FFFFFF), centered, filling about 85% of the frame, soft natural shadow underneath, e-commerce main image style, no text, no props" },
  { id: "marble", label: { en: "Minimalist marble", ru: "Минималистичный мрамор" },
    prompt: "the product on a clean white marble block pedestal, soft shadows, warm natural studio light, blurred plants in the background, commercial advertisement style" },
  { id: "spotlight", label: { en: "Luxury spotlight", ru: "Премиум, луч света" },
    prompt: "the product on a black glossy reflective surface, dark moody backdrop, dramatic spotlight, premium studio commercial lighting" },
  { id: "wood", label: { en: "Rustic wood", ru: "Деревянный стол" },
    prompt: "the product on a rustic warm wood table, cozy sunny kitchen background, blurred sunlight through a window, green leaves, natural lifestyle style" },
  { id: "kitchen", label: { en: "Granite countertop", ru: "Гранитная столешница" },
    prompt: "the product on a modern dark granite kitchen countertop, blurred high-end kitchen background, bright sun rays, elegant look" },
  { id: "beach", label: { en: "Sunny beach", ru: "Солнечный пляж" },
    prompt: "the product resting on golden sea sand, beach background, warm sunny afternoon light, blurred turquoise ocean waves, summer vibe" },
  { id: "forest", label: { en: "Forest moss", ru: "Лесной мох" },
    prompt: "the product on a mossy green stone, lush forest backdrop, warm sun rays through the trees, soft shadows, organic nature style" },
  { id: "office", label: { en: "Modern office", ru: "Современный офис" },
    prompt: "the product on a clean modern office desk, blurred keyboard, plant and mug, bright home office background, professional style" },
  { id: "pastel", label: { en: "Pastel podium", ru: "Пастельный подиум" },
    prompt: "the product on a round pastel podium, soft pastel gradient background with simple geometric shapes, bright even light, modern brand look" },
  { id: "lifestyle", label: { en: "In use (lifestyle)", ru: "В использовании" },
    prompt: "a lifestyle scene showing the product being used naturally by a person in a bright modern home, the product clearly visible and in focus" },
];

export const ASPECTS = ["1:1", "4:5", "3:4", "4:3", "16:9", "9:16"];
export const RESOLUTIONS = ["1k", "2k"];

export const APP = {
  id: "product-studio",
  name: "Product Studio",
  theme: "midnight",
  tagline: { en: "Product photos for marketplaces", ru: "Фото товаров для маркетплейсов" },
  kicker: { en: "AI product photography", ru: "Предметная съёмка с ИИ" },
  headline: { en: "Marketplace-ready product photos from a phone shot", ru: "Фото товара для маркетплейса из снимка на телефон" },
  description: {
    en: "Add 1–6 photos of your product, pick a scene — get a clean main image or a lifestyle shot for Amazon, Etsy, Shopify or social media.",
    ru: "Добавьте 1–6 фото товара, выберите сцену — получите чистое главное фото или атмосферный кадр для маркетплейса, магазина или соцсетей.",
  },
  cta: { en: "Create product photo", ru: "Создать фото товара" },
  models: [MODEL],
  upload: { types: ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"], maxBytes: 20 * 1024 * 1024 },
  slots: [{
    key: "images", kind: "image", min: 1, max: 6,
    label: { en: "Product photos", ru: "Фото товара" },
    hint: { en: "Different angles help. The label and logo should be readable.", ru: "Помогут разные ракурсы. Этикетка и логотип должны читаться." },
  }],
  counts: [1, 2, 4],
  compare: false,
  initialState: () => ({ scene: "white", aspect: "1:1", resolution: "1k", count: 1, note: "" }),
  priceModel: () => MODEL,
  label: (s, tx) => tx(SCENES.find((x) => x.id === s.scene)?.label) || "",
};
