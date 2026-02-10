// Store website settings for SEO and branding
export interface SiteSettings {
  title: string;
  description: string;
  favicon: string; // favicon image path
}

export const defaultSiteSettings: SiteSettings = {
  title: "Asif Mollik Portfolio",
  description: "Welcome to Asif Mollik's personal site. Explore achievements, works, and more.",
  favicon: "/images/favicon.ico"
};

// This will be updated by admin UI and used in layout.tsx
export let siteSettings: SiteSettings = { ...defaultSiteSettings };

export function updateSiteSettings(newSettings: Partial<SiteSettings>) {
  siteSettings = { ...siteSettings, ...newSettings };
}
