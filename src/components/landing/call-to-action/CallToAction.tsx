import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LANDING_DEFAULTS, type CtaContent } from "@/lib/landing-defaults";
import { CalendarMark } from "./CalendarMark";
import { Burst } from "./Burst";

export function CallToAction({
  content = LANDING_DEFAULTS.cta,
  titleWeight = 700,
}: {
  content?: CtaContent;
  titleWeight?: number;
}) {
  return (
    <section className="pt-10 lg:pt-16 pb-12 lg:pb-16 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="relative pt-20 lg:pt-24">
          <div className="absolute inset-x-0 top-0 z-20 flex justify-center pointer-events-none" aria-hidden="true">
            <CalendarMark />
          </div>

          <div className="bg-foreground rounded-[2.5rem] relative overflow-hidden px-6 pt-24 pb-20 lg:px-10 lg:pt-32 lg:pb-28 max-w-5xl mx-auto">
            <div className="absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full bg-primary/20 blur-[100px] pointer-events-none" aria-hidden="true" />
            <Burst />

            <div className="text-center relative z-10">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display mb-6 text-background tracking-[-0.035em] leading-[0.95]" style={{ fontWeight: titleWeight }}>
                {content.title_line_1}
                <br />
                {content.title_line_2}
              </h2>
              <p className="text-background/70 text-lg lg:text-xl mb-10 max-w-lg mx-auto text-balance">
                {content.subhead}
              </p>
              <Button size="lg" className="text-base font-semibold px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/auth">{content.cta_label} <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
