import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "#", id: "home" },
    { name: "About", path: "#about", id: "about" },
    { name: "Projects", path: "#projects", id: "projects" },
    { name: "Skills", path: "#skills", id: "skills" },
    { name: "Services", path: "#services", id: "services" },
    { name: "Contact", path: "#contact", id: "contact" },
  ];

  // Scrollspy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      // Check if we're at the very top
      if (window.scrollY < 50) {
        setActiveSection("home");
        return;
      }

      // Find the active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        let element;
        
        if (sectionId === "home") {
          // For home, check if we're in the hero section
          element = document.querySelector(".hero-section") || document.querySelector("section");
        } else {
          element = document.getElementById(sectionId);
        }
        
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPosition >= elementTop) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const isActive = (itemId: string) => {
    return activeSection === itemId;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glow-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("#")}
            className="text-2xl font-bold neon-text"
          >
            Michael.
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.path)}
                className={`relative transition-all duration-300 hover:text-primary ${
                  isActive(item.id) ? "neon-text" : "text-muted-foreground"
                }`}
              >
                {item.name}
                {isActive(item.id) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_currentColor]" />
                )}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="glow-hover" asChild>
              <a href="https://github.com/MikeMitch88" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="glow-hover" asChild>
              <a href="https://www.linkedin.com/in/michael-randa" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="glow-hover" asChild>
              <a href="mailto:michaelranda95@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden glow-hover"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.path)}
                  className={`text-left transition-all duration-300 hover:text-primary ${
                    isActive(item.id) ? "neon-text" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4 mt-6">
              <Button variant="ghost" size="icon" className="glow-hover" asChild>
                <a href="https://github.com/MikeMitch88" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="glow-hover" asChild>
                <a href="https://www.linkedin.com/in/michael-randa" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="glow-hover" asChild>
                <a href="mailto:michaelranda95@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;