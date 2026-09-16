import { LANDING_DEFAULTS, type TestimonialsContent } from "@/lib/landing-defaults";
import avatarSarah from "@/assets/avatar-sarah.jpg";
import avatarMarcus from "@/assets/avatar-marcus.jpg";
import avatarPriya from "@/assets/avatar-priya.jpg";
import { QuoteCard } from "./QuoteCard";

const FALLBACK_AVATARS = [
  avatarSarah,
  avatarMarcus,
  avatarPriya,
  "https://i.pravatar.cc/300?img=33",
  "https://i.pravatar.cc/300?img=47",
];

export function Testimonials({
  content = LANDING_DEFAULTS.testimonials,
  titleWeight = 700,
}: {
  content?: TestimonialsContent;
  titleWeight?: number;
}) {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-display mb-4 text-foreground tracking-[-0.02em]" style={{ fontWeight: titleWeight }}>
            {content.title}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {content.items.map((testimonial, i) => (
            <QuoteCard
              key={`${testimonial.name}-${i}`}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              avatar={FALLBACK_AVATARS[i] ?? FALLBACK_AVATARS[FALLBACK_AVATARS.length - 1]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
