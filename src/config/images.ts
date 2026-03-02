// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — the first image visitors see
  "hero": {
    src: "https://placehold.co/1200x800/030303/00FF41?text=ANDREWS_TECH//SYSTEM_READY",
    alt: "Hero schematic: Hardware recovery protocol",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback)
  "hero-alt": {
    src: "https://placehold.co/1200x800/030303/008F11?text=DIAGNOSTIC_MODE",
    alt: "Diagnostic interface visual",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage
  "about": {
    src: "https://placehold.co/1200x800/0A0A0A/EDEDED?text=TECHNICAL_OPS_CENTER",
    alt: "Technical operations center workspace",
    width: 1200,
    height: 800,
  },

  // First service card image
  "service-1": {
    src: "https://placehold.co/600x400/030303/00FF41?text=BOARD_REPAIR",
    alt: "Microsoldering logic board repair",
    width: 600,
    height: 400,
  },

  // Second service card image
  "service-2": {
    src: "https://placehold.co/600x400/030303/00FF41?text=SCREEN_REPLACE",
    alt: "Mobile screen replacement process",
    width: 600,
    height: 400,
  },

  // Third service card image
  "service-3": {
    src: "https://placehold.co/600x400/030303/00FF41?text=BULK_ERASURE",
    alt: "Bulk data erasure station",
    width: 600,
    height: 400,
  },

  // Gallery image 1
  "gallery-1": {
    src: "https://placehold.co/600x400/0A0A0A/EDEDED?text=INVENTORY_A",
    alt: "Grade A inventory lot",
    width: 600,
    height: 400,
  },

  // Gallery image 2
  "gallery-2": {
    src: "https://placehold.co/600x400/0A0A0A/EDEDED?text=INVENTORY_B",
    alt: "Grade B inventory lot",
    width: 600,
    height: 400,
  },

  // Team member photo
  "team-1": {
    src: "https://placehold.co/600x400/030303/00FF41?text=LEAD_TECH",
    alt: "Lead technician portrait",
    width: 600,
    height: 400,
  },

  // Gallery image 3
  "gallery-3": {
    src: "https://placehold.co/600x400/0A0A0A/EDEDED?text=WORKSHOP",
    alt: "Electronics repair workshop",
    width: 600,
    height: 400,
  },

  // Call-to-action section background
  "cta": {
    src: "https://placehold.co/1200x800/030303/00FF41?text=INITIATE_REPAIR",
    alt: "Call to action background",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration
  "testimonial-bg": {
    src: "https://placehold.co/1200x800/0A0A0A/EDEDED?text=CLIENT_LOGS",
    alt: "Client testimonials background",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;