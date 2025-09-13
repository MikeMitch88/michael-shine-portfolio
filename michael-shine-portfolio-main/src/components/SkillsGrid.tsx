import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Cloud, Smartphone, Palette } from "lucide-react";

const SkillsGrid = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 85 },
        { name: "JavaScript ES6+", level: 94 },
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 87 },
        { name: "MongoDB", level: 83 },
        { name: "GraphQL", level: 78 },
      ]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", level: 82 },
        { name: "PyTorch", level: 75 },
        { name: "Scikit-learn", level: 85 },
        { name: "Natural Language Processing", level: 78 },
        { name: "Computer Vision", level: 72 },
      ]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 88 },
        { name: "Expo", level: 90 },
        { name: "Flutter", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "App Store Deployment", level: 80 },
      ]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 82 },
        { name: "Vercel/Netlify", level: 88 },
      ]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design & UX",
      skills: [
        { name: "Figma", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Responsive Design", level: 92 },
        { name: "Accessibility", level: 88 },
        { name: "Design Systems", level: 90 },
      ]
    },
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-primary">{skill.level}%</span>
      </div>
      <div className="skill-progress h-2">
        <div 
          className="skill-progress h-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${skill.level}%`,
            background: 'var(--gradient-cyber)',
            borderRadius: 'var(--radius)',
            boxShadow: '0 0 10px hsl(var(--neon-cyan) / 0.5)'
          }}
        />
      </div>
    </div>
  );

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering digital transformation through expertise across full-stack development, AI exploration, and cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="cyber-border glow-hover h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Preferred Tech Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 neon-text">Preferred Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "TypeScript", "Node.js", "Next.js", "PostgreSQL", "AWS", "Docker", "TensorFlow", "Tailwind CSS"].map((tech) => (
              <Badge key={tech} variant="outline" className="cyber-border text-lg px-4 py-2 glow-hover">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;