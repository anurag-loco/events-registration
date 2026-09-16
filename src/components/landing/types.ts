export type BentoAccents = {
  integrationCircle: string;
  attendeeBorder: string;
  analyticsBars: string;
  analyticsAccent: string;
  pageButton: string;
};

export type BentoPreset = {
  label: string;
  cardBg: string;
  colors: string[];
  accents: BentoAccents;
};

export type ConfettiShape = "circle" | "square" | "triangle" | "line";

export type ConfettiSeed = {
  x: number;
  y: number;
  shape: number;
  color: number;
  rot: number;
  baseSize: number;
};

export type BurstPiece = {
  x: number;
  y: number;
  size: number;
  color: string;
  shape: "circle" | "square" | "triangle";
  rot: number;
};

export type ShowcaseEvent = {
  img: string;
  title: string;
  tag: string;
  date: string;
  city: string;
};
