export const siteConfig = {
  name: "Andrew's Tech Services",
  url: "https://andrewstech.com",
  description: "Hardware Recovery Protocol. Quick-turn diagnostics and repair for bulk electronics.",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
  navItems: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Inventory", href: "/inventory" },
    { title: "Contact", href: "/contact" },
  ],
  contact: {
    email: "contact@andrewstech.com",
    phone: "+1 (555) 019-2834",
    address: "123 Tech Blvd, Silicon Valley, CA",
  },
}

export type SiteConfig = typeof siteConfig;