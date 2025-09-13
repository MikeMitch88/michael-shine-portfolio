import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Brain, 
  Cloud, 
  Headphones, 
  Rocket,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import FloatingElements from "@/components/FloatingElements";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack web applications with modern technologies and best practices",
      features: [
        "React & Next.js Applications",
        "Responsive Design Implementation",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
        "API Development & Integration"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      pricing: "Starting from $2,500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that transform data into actionable insights",
      features: [
        "Custom ML Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Integration & Deployment"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Scikit-learn"],
      pricing: "Starting from $3,500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Administration",
      description: "Optimized database solutions for performance and scalability",
      features: [
        "Database Design & Optimization",
        "Data Migration Services",
        "Performance Tuning",
        "Backup & Recovery Solutions",
        "Cloud Database Management"
      ],
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "AWS RDS"],
      pricing: "Starting from $1,800"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment strategies",
      features: [
        "Cloud Architecture Design",
        "DevOps & CI/CD Pipelines",
        "Container Orchestration",
        "Serverless Applications",
        "Cloud Migration Services"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
      pricing: "Starting from $2,200"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Technical Support",
      description: "Ongoing support and maintenance for your technical infrastructure",
      features: [
        "24/7 Monitoring & Support",
        "Bug Fixes & Updates",
        "Performance Optimization",
        "Security Audits",
        "Technical Consultation"
      ],
      technologies: ["Various", "Monitoring Tools", "Security Tools", "Analytics"],
      pricing: "$150/hour or Monthly Retainer"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Complete digital transformation consulting and implementation",
      features: [
        "Technology Strategy & Planning",
        "Legacy System Modernization",
        "Process Automation",
        "Team Training & Mentoring",
        "Project Management"
      ],
      technologies: ["Custom Stack", "Best Practices", "Modern Frameworks"],
      pricing: "Custom Pricing - Contact for Quote"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge technology solutions. From web development 
            to AI implementation, I provide comprehensive services to drive your digital success.
          </p>
          <Button 
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-hover"
            asChild
          >
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="cyber-border glow-hover h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 text-primary">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                      <div className="text-sm text-primary font-semibold mt-1">
                        {service.pricing}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="cyber-border text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button 
                      className="w-full glow-border glow-hover" 
                      variant="outline"
                      asChild
                    >
                      <Link to="/contact">
                        Request Quote
                      </Link>
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
          <div className="max-w-4xl mx-auto cyber-border glow-hover p-8 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Project</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your requirements and create something amazing together. 
              I'm available for both short-term projects and long-term partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-hover"
                asChild
              >
                <Link to="/contact">
                  Start a Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="glow-border glow-hover"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;