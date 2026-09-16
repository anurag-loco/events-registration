import { LANDING_DEFAULTS, type FeaturesContent } from "@/lib/landing-defaults";
import { BENTO_PRESETS } from "../constants";
import type { BentoPreset } from "../types";
import { FeatureCard } from "./FeatureCard";

export function Features({
  content = LANDING_DEFAULTS.features,
  titleWeight = 700,
  preset = BENTO_PRESETS[0],
}: {
  content?: FeaturesContent;
  titleWeight?: number;
  preset?: BentoPreset;
}) {
  const features = content.items;

  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[420px] h-[420px] rounded-full bg-primary/5 blur-[120px]" />
      </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-4">{content.eyebrow}</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display mb-5 text-foreground tracking-[-0.035em] leading-[1.02]" style={{ fontWeight: titleWeight }}>
            {content.title_line_1}
            <br />
            {content.title_line_2}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {content.subhead}
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.slice(0, 2).map((feature, i) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                tag={feature.tag}
                index={i}
                preset={preset}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {features.slice(2).map((feature, rawI) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                tag={feature.tag}
                index={rawI + 2}
                wide={rawI === 1}
                preset={preset}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
