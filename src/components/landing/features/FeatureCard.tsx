import { BENTO_PRESETS, FEATURE_BODY_TONES, FEATURE_SUB_TONES, FEATURE_TAG_TONES } from "../constants";
import { FEATURE_PREVIEWS } from "./illustrations";
import type { BentoPreset } from "../types";

export function FeatureCard({
  title = "",
  description = "",
  tag = "",
  index = 0,
  wide = false,
  preset = BENTO_PRESETS[0],
}: {
  title?: string;
  description?: string;
  tag?: string;
  index?: number;
  wide?: boolean;
  preset?: BentoPreset;
}) {
  const Preview = FEATURE_PREVIEWS[index] ?? FEATURE_PREVIEWS[0];

  return (
    <div className={`${wide ? "md:col-span-3" : index >= 2 ? "md:col-span-2" : ""} transition-transform hover:-translate-y-1.5`}>
      <div className={`h-full rounded-[2rem] overflow-hidden flex ${wide ? "flex-col sm:flex-row" : "flex-col"} shadow-sm ${FEATURE_BODY_TONES[index]}`}>
        <div className={`${preset.colors[index]} ${wide ? "sm:w-1/2 aspect-[5/3] sm:aspect-auto" : "aspect-[5/3]"} flex items-center justify-center relative flex-shrink-0`}>
          <Preview accents={preset.accents} />
        </div>
        <div className={`p-7 lg:p-8 ${wide ? "flex flex-col justify-center" : ""}`}>
          <span className={`inline-block ${wide ? "self-start " : ""}text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full mb-4 ${FEATURE_TAG_TONES[index]}`}>{tag}</span>
          <h3 className="font-display font-bold text-2xl mb-2 tracking-[-0.02em]">{title}</h3>
          <p className={`text-sm leading-relaxed ${FEATURE_SUB_TONES[index]}`}>{description}</p>
        </div>
      </div>
    </div>
  );
}
