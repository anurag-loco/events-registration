import eventChill from "@/assets/event-chill-code-workshop.jpg";
import eventJam from "@/assets/event-late-night-jam.jpg";
import eventStartup from "@/assets/event-startup-weekend.jpg";
import eventSummit from "@/assets/event-vibe-coding-summit.jpg";
import { LANDING_DEFAULTS, type HeroContent } from "@/lib/landing-defaults";
import { Confetti } from "./Confetti";
import { PreviewCard } from "./PreviewCard";
import { Headline } from "./Headline";

export function Hero({
  hero = LANDING_DEFAULTS.hero,
  titleWeight = 700,
  confettiSize = 2.5,
  confettiOpacity = 0.8,
  confettiCount = 8,
  confettiSpread = 1,
}: {
  hero?: HeroContent;
  titleWeight?: number;
  confettiSize?: number;
  confettiOpacity?: number;
  confettiCount?: number;
  confettiSpread?: number;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-0 pointer-events-none" aria-hidden="true">
        <div className="mx-auto h-[720px] w-[120%] -translate-x-[10%] bg-[radial-gradient(ellipse_at_50%_0%,hsl(340_75%_92%/_0.85)_0%,hsl(340_75%_96%/_0.4)_35%,transparent_70%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="relative min-h-[620px] flex items-center justify-center">
          <Confetti size={confettiSize} opacity={confettiOpacity} count={confettiCount} spread={confettiSpread} />
          <PreviewCard
            src={eventChill}
            alt="Chill code workshop"
            tag="Workshop"
            className="left-[-100px] lg:left-[-40px] top-[20px]"
            rotateClass="rotate-[6deg]"
          />
          <PreviewCard
            src={eventJam}
            alt="Late night jam"
            tag="Social"
            className="left-[-120px] lg:left-[-60px] bottom-[20px]"
            rotateClass="rotate-[-5deg]"
          />
          <PreviewCard
            src={eventStartup}
            alt="Startup weekend"
            tag="Hackathon"
            className="right-[-100px] lg:right-[-40px] top-[20px]"
            rotateClass="rotate-[-6deg]"
          />
          <PreviewCard
            src={eventSummit}
            alt="Vibe coding summit"
            tag="Conference"
            className="right-[-120px] lg:right-[-60px] bottom-[20px]"
            rotateClass="rotate-[5deg]"
          />
          <Headline hero={hero} titleWeight={titleWeight} />
        </div>
      </div>
    </section>
  );
}
