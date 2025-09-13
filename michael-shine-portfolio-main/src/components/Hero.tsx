import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";
import profilePhoto from "@/assets/mike.png";
import FloatingElements from "./FloatingElements";

const Hero = () => {
  return (
    <section className="min-h-screen relative hero-bg flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            {/* Glowing Circle Border */}
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-primary via-secondary to-primary p-1 animate-gradient-shift">
              <div className="w-full h-full rounded-full bg-background p-2">
                <img
                  src={profilePhoto}
                  alt="Michael Randa - Full-Stack Developer"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Online Status Indicator */}
            <div className="absolute bottom-8 right-8 w-6 h-6 bg-green-500 rounded-full border-4 border-background animate-glow-pulse">
              <div className="w-full h-full bg-green-400 rounded-full animate-ping" />
            </div>
          </div>
        </div>

        {/* Hero Text - Centered and Positioned Closer to Image */}
        <div className="flex flex-col items-center justify-center text-center order-2 lg:order-1 space-y-6 lg:-mr-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm <span className="gradient-text">Michael</span>
            </h1>
            <h2 className="text-2xl md:text-4xl neon-text font-semibold">
              Full-Stack Developer
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Passionate about crafting innovative solutions that bridge technology 
            and human needs. I build scalable web applications, explore AI 
            frontiers, and mentor the next generation of developers.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-hover"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2" />
              Hire Me
            </Button>
            
            <Button 
              variant="outline" 
              className="glow-border glow-hover"
            >
              <Download className="w-5 h-5 mr-2" />
              View Resume
            </Button>
            
            <Button 
              variant="outline" 
              className="glow-border glow-hover"
              asChild
            >
              <a href="https://github.com/MikeMitch88" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="glow-border glow-hover"
              asChild
            >
              <a href="https://www.linkedin.com/in/michael-randa" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="glow-border glow-hover"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Services
            </Button>
          </div>

          {/* Discover More - Interactive Arrow */}
          <div className="pt-8">
            <p className="text-primary mb-4">Discover More</p>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <ArrowDown className="w-6 h-6 text-primary animate-bounce glow-hover" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;