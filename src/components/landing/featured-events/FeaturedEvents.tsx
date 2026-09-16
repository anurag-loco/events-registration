import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LANDING_DEFAULTS, type PopularEventsContent } from "@/lib/landing-defaults";
import { SHOWCASE_EVENTS } from "../constants";
import { EventTile } from "./EventTile";

export function FeaturedEvents({
  content = LANDING_DEFAULTS.popular_events,
  titleWeight = 700,
}: {
  content?: PopularEventsContent;
  titleWeight?: number;
}) {
  return (
    <section className="py-20 lg:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-5xl font-display text-foreground tracking-[-0.03em] leading-[1.05] mb-3" style={{ fontWeight: titleWeight }}>
              {content.title_line_1}
              <br />
              {content.title_line_2}
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg">
              {content.subhead}
            </p>
          </div>
          <Link to="/auth" className="group inline-flex items-center gap-2 text-primary font-semibold text-sm self-start md:self-end">
            {content.cta_label}
            <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SHOWCASE_EVENTS.map((event) => (
            <EventTile key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
