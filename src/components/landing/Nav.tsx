import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

export function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[72px] px-6 lg:px-8">
        <Link to="/">
          <Logo size="md" />
        </Link>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-sm font-medium" asChild>
            <Link to="/auth">Log in</Link>
          </Button>
          <Button className="hidden sm:inline-flex text-sm font-semibold" asChild>
            <Link to="/auth">Sign up</Link>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
