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
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    alt: "Cybersecurity server room with green lighting",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage
  "about": {
    src: "https://images.unsplash.com/photo-1531297461136-82lw9z27w0?w=800&auto=format&fit=crop&q=60",
    alt: "Close up of circuit board",
    width: 1200,
    height: 800,
  },

  // First service card image (Board Repair)
  "service-1": {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    alt: "Microchip repair station",
    width: 1200,
    height: 800,
  },

  // Second service card image (Screen Replace)
  "service-2": {
    src: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&auto=format&fit=crop&q=60",
    alt: "Smartphone disassembly tools",
    width: 1200,
    height: 800,
  },

  // Third service card image (Diagnostics)
  "service-3": {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    alt: "Data analytics dashboard",
    width: 1200,
    height: 800,
  },

  // Inventory item: iPhone
  "inventory-1": {
    src: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800&auto=format&fit=crop&q=60",
    alt: "Refurbished iPhone 12",
    width: 600,
    height: 600,
  },

   // Inventory item: Laptop
   "inventory-2": {
    src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60",
    alt: "Refurbished MacBook Pro",
    width: 600,
    height: 600,
  },

  // Call-to-action section background
  "cta": {
    src: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&auto=format&fit=crop&q=60",
    alt: "Futuristic interface with code",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;