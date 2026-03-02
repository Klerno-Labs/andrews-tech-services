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
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%231a1a2e%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%2316213e%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23g)%22%20width%3D%221200%22%20height%3D%22800%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22380%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2232%22%20fill%3D%22%23e2e8f0%22%20text-anchor%3D%22middle%22%3EHero%3C%2Ftext%3E%3Ctext%20x%3D%22600%22%20y%3D%22430%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2218%22%20fill%3D%22%2394a3b8%22%20text-anchor%3D%22middle%22%3ETech%20Services%20%E2%80%94%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Modern office workspace with natural light",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback)
  "hero-alt": {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%231a1a2e%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%2316213e%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23g)%22%20width%3D%221200%22%20height%3D%22800%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22380%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2232%22%20fill%3D%22%23e2e8f0%22%20text-anchor%3D%22middle%22%3EHero%20Alt%3C%2Ftext%3E%3Ctext%20x%3D%22600%22%20y%3D%22430%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2218%22%20fill%3D%22%2394a3b8%22%20text-anchor%3D%22middle%22%3ETech%20Services%20%E2%80%94%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Professional team collaborating in bright office",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage
  "about": {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%231a1a2e%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%2316213e%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23g)%22%20width%3D%221200%22%20height%3D%22800%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22380%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2232%22%20fill%3D%22%23e2e8f0%22%20text-anchor%3D%22middle%22%3EAbout%3C%2Ftext%3E%3Ctext%20x%3D%22600%22%20y%3D%22430%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2218%22%20fill%3D%22%2394a3b8%22%20text-anchor%3D%22middle%22%3ETech%20Services%20%E2%80%94%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Business professionals in modern meeting room",
    width: 1200,
    height: 800,
  },

  // First service card image
  "service-1": {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%231a1a2e%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%2316213e%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23g)%22%20width%3D%221200%22%20height%3D%22800%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22380%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2232%22%20fill%3D%22%23e2e8f0%22%20text-anchor%3D%22middle%22%3EService%201%3C%2Ftext%3E%3Ctext%20x%3D%22600%22%20y%3D%22430%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2218%22%20fill%3D%22%2394a3b8%22%20text-anchor%3D%22middle%22%3ETech%20Services%20%E2%80%94%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Creative professionals working together",
    width: 1200,
    height: 800,
  },

  // Second service card image
  "service-2": {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%231a1a2e%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%2316213e%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23g)%22%20width%3D%221200%22%20height%3D%22800%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22380%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2232%22%20fill%3D%22%23e2e8f0%22%20text-anchor%3D%22middle%22%3EService%202%3C%2Ftext%3E%3Ctext%20x%3D%22600%22%20y%3D%22430%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2218%22%20fill%3D%22%2394a3b8%22%20text-anchor%3D%22middle%22%3ETech%20Services%20%E2%80%94%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Data analytics dashboard on screen",
    width: 1200,
    height: 800,
  },

  // Third service card image
  "service-3": {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%231a1a2e%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%2316213e%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23g)%22%20width%3D%221200%22%20height%3D%22800%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22380%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2232%22%20fill%3D%22%23e2e8f0%22%20text-anchor%3D%22middle%22%3EService%203%3C%2Ftext%3E%3Ctext%20x%3D%22600%22%20y%3D%22430%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2218%22%20fill%3D%22%2394a3b8%22%20text-anchor%3D%22middle%22%3ETech%20Services%20%E2%80%94%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Team workshop and brainstorming session",
    width: 1200,
    height: 800,
  },

  // Gallery image 1
  "gallery-1": {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%231a1a2e%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%2316213e%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23g)%22%20width%3D%221200%22%20height%3D%22800%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22380%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2232%22%20fill%3D%22%23e2e8f0%22%20text-anchor%3D%22middle%22%3EGallery%201%3C%2Ftext%3E%3Ctext%20x%3D%22600%22%20y%3D%22430%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2218%22%20fill%3D%22%2394a3b8%22%20text-anchor%3D%22middle%22%3ETech%20Services%20%E2%80%94%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Professional handshake in business setting",
    width: 1200,
    height: 800,
  },

  // Gallery image 2
  "gallery-2": {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%231a1a2e%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%2316213e%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23g)%22%20width%3D%221200%22%20height%3D%22800%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22380%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2232%22%20fill%3D%22%23e2e8f0%22%20text-anchor%3D%22middle%22%3EGallery%202%3C%2Ftext%3E%3Ctext%20x%3D%22600%22%20y%3D%22430%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2218%22%20fill%3D%22%2394a3b8%22%20text-anchor%3D%22middle%22%3ETech%20Services%20%E2%80%94%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Modern conference room with city view",
    width: 1200,
    height: 800,
  },

  // Team member photo
  "team-1": {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%231a1a2e%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%2316213e%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23g)%22%20width%3D%221200%22%20height%3D%22800%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22380%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2232%22%20fill%3D%22%23e2e8f0%22%20text-anchor%3D%22middle%22%3ETeam%201%3C%2Ftext%3E%3Ctext%20x%3D%22600%22%20y%3D%22430%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2218%22%20fill%3D%22%2394a3b8%22%20text-anchor%3D%22middle%22%3ETech%20Services%20%E2%80%94%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Diverse team celebrating success",
    width: 1200,
    height: 800,
  },

  // Gallery image 3
  "gallery-3": {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%231a1a2e%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%2316213e%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23g)%22%20width%3D%221200%22%20height%3D%22800%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22380%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2232%22%20fill%3D%22%23e2e8f0%22%20text-anchor%3D%22middle%22%3EGallery%203%3C%2Ftext%3E%3Ctext%20x%3D%22600%22%20y%3D%22430%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2218%22%20fill%3D%22%2394a3b8%22%20text-anchor%3D%22middle%22%3ETech%20Services%20%E2%80%94%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Technology workspace with multiple screens",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background
  "cta": {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%231a1a2e%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%2316213e%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23g)%22%20width%3D%221200%22%20height%3D%22800%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22380%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2232%22%20fill%3D%22%23e2e8f0%22%20text-anchor%3D%22middle%22%3ECta%3C%2Ftext%3E%3Ctext%20x%3D%22600%22%20y%3D%22430%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2218%22%20fill%3D%22%2394a3b8%22%20text-anchor%3D%22middle%22%3ETech%20Services%20%E2%80%94%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Innovation and technology concept",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration
  "testimonial-bg": {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%231a1a2e%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%2316213e%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23g)%22%20width%3D%221200%22%20height%3D%22800%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22380%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2232%22%20fill%3D%22%23e2e8f0%22%20text-anchor%3D%22middle%22%3ETestimonial%20Bg%3C%2Ftext%3E%3Ctext%20x%3D%22600%22%20y%3D%22430%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2218%22%20fill%3D%22%2394a3b8%22%20text-anchor%3D%22middle%22%3ETech%20Services%20%E2%80%94%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Professional business environment",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;