import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import FloatingElements from "@/components/FloatingElements";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "Intelligent task management application with natural language processing and smart scheduling",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Python", "TensorFlow", "PostgreSQL"],
      category: "AI & Machine Learning",
      status: "Live",
      features: [
        "Natural language task creation",
        "AI-powered priority suggestions",
        "Smart scheduling algorithms",
        "Team collaboration tools"
      ],
      github: "https://github.com/MikeMitch88/ai-task-manager",
      demo: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with advanced analytics and inventory management",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Redis"],
      category: "Web Development",
      status: "Live",
      features: [
        "Advanced product catalog",
        "Real-time inventory tracking",
        "Payment processing",
        "Admin dashboard"
      ],
      github: "https://github.com/MikeMitch88/ecommerce-platform",
      demo: "#"
    },
    {
      title: "Real-Time Chat Application",
      description: "Scalable chat platform with video calls, file sharing, and team workspaces",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Socket.io", "Node.js", "WebRTC", "MongoDB"],
      category: "Web Development",
      status: "Live",
      features: [
        "Real-time messaging",
        "Video/audio calls",
        "File sharing",
        "Team channels"
      ],
      github: "https://github.com/MikeMitch88/chat-app",
      demo: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive business intelligence dashboard with real-time analytics and reporting",
      image: "/api/placeholder/400/250",
      technologies: ["React", "D3.js", "Python", "FastAPI", "ClickHouse"],
      category: "Data Analytics",
      status: "Live",
      features: [
        "Interactive charts",
        "Real-time data updates",
        "Custom report builder",
        "Export functionality"
      ],
      github: "https://github.com/MikeMitch88/dashboard",
      demo: "#"
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for fitness tracking with social features",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "Health APIs"],
      category: "Mobile Development",
      status: "In Development",
      features: [
        "Workout tracking",
        "Social challenges",
        "Progress analytics",
        "Wearable integration"
      ],
      github: "https://github.com/MikeMitch88/fitness-tracker",
      demo: "#"
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Infrastructure as code solution for automated cloud deployments and monitoring",
      image: "/api/placeholder/400/250",
      technologies: ["Terraform", "AWS", "Docker", "Kubernetes", "Prometheus"],
      category: "DevOps & Cloud",
      status: "Live",
      features: [
        "Automated deployments",
        "Infrastructure monitoring",
        "Cost optimization",
        "Security scanning"
      ],
      github: "https://github.com/MikeMitch88/cloud-infra",
      demo: "#"
    }
  ];

  const categories = ["All", "Web Development", "AI & Machine Learning", "Mobile Development", "Data Analytics", "DevOps & Cloud"];
  
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of innovative solutions spanning web development, AI implementation, 
            and cloud architecture. Each project represents a journey of problem-solving and technological exploration.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="cyber-border glow-hover"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="cyber-border glow-hover h-full flex flex-col group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-6xl opacity-30">🚀</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === "Live" ? "default" : "secondary"}
                      className={project.status === "Live" ? "bg-green-500/20 text-green-400 border-green-500/30" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="cyber-border text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="cyber-border text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 glow-border glow-hover"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <Card className="max-w-4xl mx-auto cyber-border glow-hover bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Something <span className="gradient-text">Amazing</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                These projects represent just a glimpse of what's possible. Let's collaborate 
                to bring your vision to life with cutting-edge technology and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-hover"
                  asChild
                >
                  <a href="/contact">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="glow-border glow-hover"
                  asChild
                >
                  <a href="https://github.com/MikeMitch88" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View All Projects
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;