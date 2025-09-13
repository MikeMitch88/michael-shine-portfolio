import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls past the hero section (roughly 100vh)
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={scrollToTop}
        size="icon"
        className="relative w-14 h-14 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 hover:border-primary/50 backdrop-filter backdrop-blur-lg glow-hover group"
        aria-label="Back to top"
      >
        {/* Online indicator dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full shadow-[0_0_10px_rgb(34,197,94)] animate-glow-pulse" />
        
        {/* Main icon */}
        <ChevronUp className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300" />
      </Button>
    </div>
  );
};

export default BackToTop;