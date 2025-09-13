import Navigation from "@/components/Navigation";
import FloatingElements from "@/components/FloatingElements";
import SkillsGrid from "@/components/SkillsGrid";
import Footer from "@/components/Footer";

const Skills = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies. 
            From frontend frameworks to AI implementation, I bring versatile expertise to every project.
          </p>
        </div>
      </section>

      <SkillsGrid />
      <Footer />
    </div>
  );
};

export default Skills;