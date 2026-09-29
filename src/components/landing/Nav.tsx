import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

const MOBILE_BREAKPOINT = 640;

const isMobileViewport = () =>
  typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT;

export function Nav() {
  const [visible, setVisible] = useState(isMobileViewport);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(isMobileViewport() || window.scrollY > 80);
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility, { passive: true });
    updateVisibility();

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md"
      initial={{ y: visible ? 0 : -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <Link to="/" aria-label="Eventspark home" className="shrink-0 sm:hidden">
          <Logo size="sm" />
        </Link>
        <Link to="/" aria-label="Eventspark home" className="hidden shrink-0 sm:inline-flex">
          <Logo size="md" />
        </Link>
        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          <Button
            variant="ghost"
            className="h-10 px-2.5 text-sm font-medium sm:h-11 sm:px-4"
            asChild
          >
            <Link to="/auth">Log in</Link>
          </Button>
          <Button
            className="h-10 px-3 text-sm font-semibold sm:h-11 sm:px-4"
            asChild
          >
            <Link to="/auth">Sign up</Link>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
