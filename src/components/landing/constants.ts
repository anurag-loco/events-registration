import eventChill from "@/assets/event-chill-code-workshop.jpg";
import eventHackathon from "@/assets/event-hackathon-ai.jpg";
import eventStartup from "@/assets/event-startup-weekend.jpg";
import eventSummit from "@/assets/event-vibe-coding-summit.jpg";
import type { BentoPreset, BurstPiece, ConfettiSeed, ShowcaseEvent } from "./types";

export const BENTO_PRESETS: BentoPreset[] = [
  {
    label: "Playful",
    cardBg: "bg-muted/50",
    colors: ["bg-[hsl(340,75%,95%)]", "bg-[hsl(170,60%,92%)]", "bg-[hsl(45,90%,92%)]", "bg-[hsl(250,60%,94%)]"],
    accents: { integrationCircle: "hsl(45,80%,45%)", attendeeBorder: "hsl(250,60%,80%)", analyticsBars: "hsl(170,60%,50%)", analyticsAccent: "hsl(170,60%,40%)", pageButton: "hsl(340,75%,58%)" },
  },
  {
    label: "Neutral",
    cardBg: "bg-background",
    colors: ["bg-background", "bg-background", "bg-background", "bg-background"],
    accents: { integrationCircle: "hsl(45,90%,50%)", attendeeBorder: "hsl(250,65%,65%)", analyticsBars: "hsl(170,65%,45%)", analyticsAccent: "hsl(170,65%,35%)", pageButton: "hsl(340,80%,55%)" },
  },
  {
    label: "Vivid",
    cardBg: "bg-muted/50",
    colors: ["bg-[hsl(340,75%,90%)]", "bg-[hsl(170,60%,86%)]", "bg-[hsl(45,90%,86%)]", "bg-[hsl(250,60%,90%)]"],
    accents: { integrationCircle: "hsl(45,90%,50%)", attendeeBorder: "hsl(250,65%,65%)", analyticsBars: "hsl(170,65%,45%)", analyticsAccent: "hsl(170,65%,35%)", pageButton: "hsl(340,80%,55%)" },
  },
];

export const FONT_WEIGHT_OPTIONS = [
  { label: "Medium (500)", value: 500 },
  { label: "Semibold (600)", value: 600 },
  { label: "Bold (700)", value: 700 },
  { label: "Extrabold (800)", value: 800 },
];

export const CONFETTI_COLORS = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6BCB", "#FF9F43"];
export const CONFETTI_SHAPES = ["circle", "square", "triangle", "line"] as const;

export const CORNER_SEEDS: ConfettiSeed[][] = [
  [
    { x: -40, y: -20, shape: 0, color: 0, rot: 12, baseSize: 12 },
    { x: 220, y: -30, shape: 1, color: 1, rot: 45, baseSize: 8 },
    { x: -25, y: 200, shape: 2, color: 2, rot: -20, baseSize: 14 },
    { x: 240, y: 50, shape: 0, color: 3, rot: 0, baseSize: 5 },
    { x: -30, y: 100, shape: 3, color: 4, rot: 30, baseSize: 10 },
    { x: 200, y: 200, shape: 1, color: 1, rot: 15, baseSize: 6 },
    { x: 100, y: -35, shape: 0, color: 5, rot: 0, baseSize: 7 },
    { x: -45, y: 150, shape: 2, color: 0, rot: 55, baseSize: 9 },
  ],
  [
    { x: 230, y: -20, shape: 1, color: 1, rot: 22, baseSize: 7 },
    { x: -35, y: 40, shape: 2, color: 3, rot: 15, baseSize: 12 },
    { x: 40, y: -30, shape: 0, color: 0, rot: 0, baseSize: 10 },
    { x: 220, y: 190, shape: 3, color: 2, rot: -40, baseSize: 10 },
    { x: -20, y: 200, shape: 1, color: 4, rot: 60, baseSize: 6 },
    { x: 150, y: -40, shape: 0, color: 5, rot: 0, baseSize: 8 },
    { x: -50, y: 120, shape: 2, color: 1, rot: 35, baseSize: 11 },
    { x: 250, y: 80, shape: 3, color: 0, rot: -15, baseSize: 9 },
  ],
  [
    { x: 230, y: -25, shape: 0, color: 4, rot: 0, baseSize: 10 },
    { x: -35, y: 70, shape: 1, color: 1, rot: 35, baseSize: 7 },
    { x: 40, y: -30, shape: 2, color: 2, rot: 40, baseSize: 13 },
    { x: 240, y: 180, shape: 0, color: 3, rot: 0, baseSize: 5 },
    { x: -25, y: 190, shape: 3, color: 0, rot: -25, baseSize: 10 },
    { x: 100, y: -40, shape: 1, color: 5, rot: 20, baseSize: 8 },
    { x: -50, y: 140, shape: 0, color: 4, rot: 0, baseSize: 6 },
    { x: 250, y: 60, shape: 2, color: 2, rot: -50, baseSize: 11 },
  ],
  [
    { x: -40, y: 30, shape: 1, color: 3, rot: 18, baseSize: 8 },
    { x: 230, y: -25, shape: 2, color: 1, rot: -30, baseSize: 14 },
    { x: 50, y: 200, shape: 0, color: 4, rot: 0, baseSize: 8 },
    { x: 240, y: 100, shape: 3, color: 2, rot: 50, baseSize: 10 },
    { x: 20, y: -30, shape: 0, color: 0, rot: 0, baseSize: 6 },
    { x: -30, y: 160, shape: 1, color: 5, rot: -40, baseSize: 7 },
    { x: 180, y: -45, shape: 2, color: 3, rot: 25, baseSize: 10 },
    { x: -45, y: 90, shape: 0, color: 1, rot: 0, baseSize: 9 },
  ],
];

export const INTEGRATION_LOGOS = [
  { src: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/slack-icon.svg", name: "Slack" },
  { src: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/zoom-icon.svg", name: "Zoom" },
  { src: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/hubspot.svg", name: "HubSpot" },
  { src: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/mailchimp-freddie.svg", name: "Mailchimp" },
  { src: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/google-calendar.svg", name: "Calendar" },
  { src: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/stripe.svg", name: "Stripe" },
];

export const ATTENDEE_AVATARS = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=8",
  "https://i.pravatar.cc/150?img=9",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=16",
];

export const SHOWCASE_EVENTS: ShowcaseEvent[] = [
  { img: eventHackathon, title: "AI hackathon", tag: "Free", date: "Sat, Mar 28", city: "San Francisco" },
  { img: eventChill, title: "Chill code workshop", tag: "Free", date: "Thu, Apr 3", city: "London" },
  { img: eventStartup, title: "Startup weekend", tag: "$25", date: "Fri, Apr 11", city: "New York" },
  { img: eventSummit, title: "Vibe coding summit", tag: "Free", date: "Sat, Apr 19", city: "Remote" },
];

export const FEATURE_BODY_TONES = [
  "bg-foreground text-background",
  "bg-primary/10 text-foreground",
  "bg-muted text-foreground",
  "bg-primary text-primary-foreground",
] as const;

export const FEATURE_TAG_TONES = [
  "bg-background/10 text-background/80",
  "bg-primary/15 text-primary",
  "bg-background text-foreground/70",
  "bg-primary-foreground/15 text-primary-foreground",
] as const;

export const FEATURE_SUB_TONES = [
  "text-background/65",
  "text-foreground/65",
  "text-muted-foreground",
  "text-primary-foreground/80",
] as const;

export const BURST_PIECES: BurstPiece[] = [
  { x: -110, y: 20, size: 14, color: "hsl(2 100% 70%)", shape: "circle", rot: 0 },
  { x: -72, y: 42, size: 10, color: "hsl(48 100% 62%)", shape: "square", rot: 35 },
  { x: -38, y: 12, size: 16, color: "hsl(122 48% 61%)", shape: "circle", rot: 0 },
  { x: -18, y: 48, size: 8, color: "hsl(217 90% 63%)", shape: "square", rot: -20 },
  { x: 0, y: 10, size: 12, color: "hsl(319 84% 69%)", shape: "triangle", rot: 15 },
  { x: 22, y: 46, size: 10, color: "hsl(31 100% 63%)", shape: "circle", rot: 0 },
  { x: 56, y: 14, size: 14, color: "hsl(48 100% 62%)", shape: "square", rot: 50 },
  { x: 78, y: 38, size: 8, color: "hsl(2 100% 70%)", shape: "circle", rot: 0 },
  { x: 104, y: 20, size: 12, color: "hsl(122 48% 61%)", shape: "triangle", rot: -30 },
  { x: -132, y: 54, size: 6, color: "hsl(217 90% 63%)", shape: "circle", rot: 0 },
  { x: 126, y: 48, size: 10, color: "hsl(319 84% 69%)", shape: "square", rot: 22 },
  { x: -146, y: 28, size: 8, color: "hsl(31 100% 63%)", shape: "triangle", rot: 40 },
  { x: 146, y: 24, size: 12, color: "hsl(48 100% 62%)", shape: "circle", rot: 0 },
  { x: -54, y: 58, size: 6, color: "hsl(122 48% 61%)", shape: "square", rot: -45 },
];
