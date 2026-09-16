import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useUserRole } from "@/hooks/useUserRole";
import { useLandingContent } from "@/hooks/useLandingContent";
import { LANDING_DEFAULTS } from "@/lib/landing-defaults";
import {
  BENTO_PRESETS,
  CallToAction,
  DevPanel,
  FeaturedEvents,
  Features,
  Footer,
  Hero,
  Nav,
  Testimonials,
} from "@/components/landing";

const Landing = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { role, loading: roleLoading } = useUserRole();

  useEffect(() => {
    if (authLoading || !user) return;
    if (roleLoading || !role) return;
    navigate(role === "organizer" ? "/dashboard/events" : "/dashboard/home", { replace: true });
  }, [user, authLoading, role, roleLoading, navigate]);

  const redirectingAuthenticatedUser = !authLoading && !!user && (roleLoading || !!role);

  const { data: landing } = useLandingContent();
  const hero = landing?.content.hero ?? LANDING_DEFAULTS.hero;
  const popular = landing?.content.popular_events ?? LANDING_DEFAULTS.popular_events;
  const featuresContent = landing?.content.features ?? LANDING_DEFAULTS.features;
  const testimonialsContent = landing?.content.testimonials ?? LANDING_DEFAULTS.testimonials;
  const ctaContent = landing?.content.cta ?? LANDING_DEFAULTS.cta;

  const [devOpen, setDevOpen] = useState(false);
  const [titleWeight, setTitleWeight] = useState(700);
  const [confettiSize, setConfettiSize] = useState(2.5);
  const [confettiOpacity, setConfettiOpacity] = useState(0.8);
  const [confettiCount, setConfettiCount] = useState(8);
  const [confettiSpread, setConfettiSpread] = useState(1.0);
  const [bentoStyle, setBentoStyle] = useState(0);
  const currentPreset = BENTO_PRESETS[bentoStyle] ?? BENTO_PRESETS[0];

  useEffect(() => {
    document.querySelectorAll<HTMLElement>("h1,h2,h3,h4,h5,h6,.font-display").forEach((el) => {
      el.style.fontWeight = String(titleWeight);
    });
  }, [titleWeight]);

  if (redirectingAuthenticatedUser) return null;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Nav />
      <Hero
        hero={hero}
        titleWeight={titleWeight}
        confettiSize={confettiSize}
        confettiOpacity={confettiOpacity}
        confettiCount={confettiCount}
        confettiSpread={confettiSpread}
      />
      <FeaturedEvents content={popular} titleWeight={titleWeight} />
      <Features content={featuresContent} titleWeight={titleWeight} preset={currentPreset} />
      <Testimonials content={testimonialsContent} titleWeight={titleWeight} />
      <CallToAction content={ctaContent} titleWeight={titleWeight} />
      <Footer />
      <DevPanel
        open={devOpen}
        onOpenChange={setDevOpen}
        titleWeight={titleWeight}
        onTitleWeightChange={setTitleWeight}
        bentoStyle={bentoStyle}
        onBentoStyleChange={setBentoStyle}
        confettiSize={confettiSize}
        onConfettiSizeChange={setConfettiSize}
        confettiOpacity={confettiOpacity}
        onConfettiOpacityChange={setConfettiOpacity}
        confettiCount={confettiCount}
        onConfettiCountChange={setConfettiCount}
        confettiSpread={confettiSpread}
        onConfettiSpreadChange={setConfettiSpread}
      />
    </div>
  );
};

export default Landing;
