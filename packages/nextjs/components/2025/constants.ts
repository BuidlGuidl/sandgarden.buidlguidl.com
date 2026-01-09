// Slide definitions for navigation
export const SLIDES = [
  {
    id: "speedrun",
    title: "Speedrun Ethereum",
    shortTitle: "SRE",
  },
  {
    id: "scaffold-eth",
    title: "Scaffold-ETH 2",
    shortTitle: "SE2",
  },
  {
    id: "educational",
    title: "Educational Initiatives",
    shortTitle: "EDU",
  },
  {
    id: "ecosystem",
    title: "Ecosystem Collabs",
    shortTitle: "ECO",
  },
  {
    id: "misc",
    title: "Misc",
    shortTitle: "MISC",
  },
] as const;

export type SlideId = (typeof SLIDES)[number]["id"];

// Shared noise texture background - extracted to avoid repetition
export const NOISE_TEXTURE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;
