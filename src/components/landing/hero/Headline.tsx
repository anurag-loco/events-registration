import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { LANDING_DEFAULTS, type HeroContent } from "@/lib/landing-defaults";
import { RotatingWord } from "./RotatingWord";

export function Headline({
  hero = LANDING_DEFAULTS.hero,
  titleWeight = 700,
}: {
  hero?: HeroContent;
  titleWeight?: number;
}) {
  const words = hero.rotating_words;
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (!words.length) return;
    setWordIndex(0);
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="text-center max-w-3xl mx-auto relative z-10">
      <div className="flex items-center justify-center mb-6">
        <Logo size="lg" />
      </div>
      <Badge label={hero.badge} />
      <h1
        className="text-5xl sm:text-6xl lg:text-[68px] 2xl:text-[80px] font-display tracking-[-0.035em] leading-[0.95] text-foreground mb-7"
        style={{ fontWeight: titleWeight }}
      >
        {hero.headline_prefix}{" "}
        <RotatingWord words={words} index={wordIndex} />
      </h1>
      <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
        {hero.subhead}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button size="lg" className="text-base font-semibold px-9 h-14 shadow-xl shadow-foreground/10" asChild>
          <Link to="/auth">{hero.cta} <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
        <Button size="lg" variant="outline" className="text-base font-semibold px-9 h-14" asChild>
          <Link to="/auth">Sign in</Link>
        </Button>
      </div>
    </div>
  );
}

function Badge({ label = LANDING_DEFAULTS.hero.badge }: { label?: string }) {
  return (
    <div className="inline-flex items-center gap-2 mb-7 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
      </span>
      {label}
    </div>
  );
}
