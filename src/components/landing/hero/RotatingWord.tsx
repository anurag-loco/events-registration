import { AnimatePresence, motion } from "framer-motion";
import { LANDING_DEFAULTS } from "@/lib/landing-defaults";

export function RotatingWord({
  words = LANDING_DEFAULTS.hero.rotating_words,
  index = 0,
}: {
  words?: string[];
  index?: number;
}) {
  const current = words[index] ?? words[0] ?? "";
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span className="inline-grid justify-items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="text-primary italic text-center col-start-1 row-start-1"
        >
          {current}
        </motion.span>
      </AnimatePresence>
      <span className="invisible h-0 overflow-hidden col-start-1 row-start-1" aria-hidden="true">
        {longest}
      </span>
    </span>
  );
}
