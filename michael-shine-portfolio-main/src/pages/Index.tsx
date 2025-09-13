import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SkillsGrid from "@/components/SkillsGrid";
import FloatingElements from "@/components/FloatingElements";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingChat from "@/components/FloatingChat";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import profilePhoto from "@/assets/mike.png";
import projectAITasks from "@/assets/project-ai-tasks.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectChatApp from "@/assets/project-chat-app.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";
import projectCrypto from "@/assets/project-crypto.jpg";
import projectSocial from "@/assets/project-social.jpg";
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Code, 
  Database, 
  Brain, 
  Cloud, 
  Headphones, 
  Rocket,
  CheckCircle,
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin,
  Clock,
  Shield,
  Users,
  GraduationCap
} from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "Intelligent task management application with natural language processing and smart scheduling",
      technologies: ["React", "Node.js", "Python", "TensorFlow", "PostgreSQL"],
      category: "AI & Machine Learning",
      status: "Live",
      image: projectAITasks,
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
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Redis"],
      category: "Web Development",
      status: "Live",
      image: projectEcommerce,
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
      technologies: ["React", "Socket.io", "Node.js", "WebRTC", "MongoDB"],
      category: "Web Development",
      status: "Live",
      image: projectChatApp,
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
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform with patient records, appointment scheduling, and medical analytics",
      technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "Node.js"],
      category: "Web Development",
      status: "Live",
      image: projectHealthcare,
      features: [
        "Patient record management",
        "Appointment scheduling",
        "Medical analytics dashboard",
        "Prescription tracking"
      ],
      github: "https://github.com/MikeMitch88/healthcare-system",
      demo: "#"
    },
    {
      title: "Cryptocurrency Trading Platform",
      description: "Advanced crypto trading platform with real-time charts, portfolio tracking, and automated trading",
      technologies: ["React", "Node.js", "WebSocket", "Redis", "PostgreSQL"],
      category: "FinTech",
      status: "Live",
      image: projectCrypto,
      features: [
        "Real-time trading charts",
        "Portfolio management",
        "Automated trading bots",
        "Market analytics"
      ],
      github: "https://github.com/MikeMitch88/crypto-platform",
      demo: "#"
    },
    {
      title: "Social Media Management Tool",
      description: "Comprehensive social media management platform with scheduling, analytics, and engagement tracking",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "GraphQL"],
      category: "Web Development",
      status: "Live",
      image: projectSocial,
      features: [
        "Post scheduling",
        "Analytics dashboard",
        "Engagement tracking",
        "Multi-platform support"
      ],
      github: "https://github.com/MikeMitch88/social-manager",
      demo: "#"
    }
  ];

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
    }
  ];

  const certifications = [
    {
      title: "AI for Software Engineering",
      organization: "Power Learn Project",
      date: "2024",
      status: "Verified",
      description: "Comprehensive training in AI-powered software development and engineering practices.",
      link: "https://powerlearnproject.org"
    },
    {
      title: "Software Engineering (Full Stack)",
      organization: "Moringa School",
      date: "2024",
      status: "Verified", 
      description: "Intensive full-stack development program covering modern web technologies.",
      link: "https://moringaschool.com"
    },
    {
      title: "Cybersecurity Essentials Training",
      organization: "Ajira Digital Talent Program",
      date: "2023",
      status: "Verified",
      description: "Essential cybersecurity principles and practices for digital security.",
      link: "https://ajiradigital.go.ke"
    },
    {
      title: "Cybersecurity Training",
      organization: "MAKATOB NetAcademy",
      date: "2023",
      status: "Verified",
      description: "Advanced cybersecurity training and threat analysis certification.",
      link: "https://netacademy.co.ke"
    },
    {
      title: "Fullstack Engineering",
      organization: "FNB App Academy (South Africa)",
      date: "2023",
      status: "Verified",
      description: "Comprehensive fullstack development program with industry exposure.",
      link: "https://fnbappacademy.co.za"
    },
    {
      title: "AWS Cloud Practitioner",
      organization: "AWS re/Start",
      date: "2023",
      status: "Verified",
      description: "Cloud computing fundamentals and AWS services certification.",
      link: "https://aws.amazon.com/restart"
    },
    {
      title: "Cisco Certification",
      organization: "Cyber Shujaa",
      date: "2022",
      status: "Verified",
      description: "Cisco networking technologies and cybersecurity certification.",
      link: "https://cybershujaa.org"
    },
    {
      title: "Networking Essentials",
      organization: "MOBA (NetAcademy)",
      date: "2022",
      status: "Verified",
      description: "Fundamental networking concepts and infrastructure management.",
      link: "https://netacademy.co.ke"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "michaelranda95@gmail.com",
      action: "mailto:michaelranda95@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+254 745 074 245",
      action: "tel:+254745074245"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "@MikeMitch88",
      action: "https://github.com/MikeMitch88"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Michael Randa",
      action: "https://www.linkedin.com/in/michael-randa"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      <FloatingElements />
      
      {/* Hero Section */}
      <div className="hero-section">
        <Hero />
      </div>
      
      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-lg bg-gradient-to-r from-primary via-secondary to-primary p-1 animate-gradient-shift">
                  <div className="w-full h-full rounded-lg bg-background p-2">
                    <img
                      src={profilePhoto}
                      alt="Michael Randa - Full-Stack Developer"
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold">
                About <span className="gradient-text">Michael</span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  I'm a <span className="text-primary font-semibold">Full-Stack Developer</span> and 
                  <span className="text-secondary font-semibold"> AI Enthusiast</span> passionate about 
                  building innovative digital solutions that make a real impact.
                </p>
                
                <p>
                  With expertise spanning from frontend React applications to backend APIs, 
                  cloud infrastructure, and machine learning implementations, I bring a 
                  comprehensive approach to every project.
                </p>
                
                <p>
                  I believe in crafting code that is not only functional but elegant, 
                  scalable, and maintainable. My goal is to bridge the gap between 
                  complex technology and human-centered design.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Problem Solver", "Tech Innovator", "Team Player", "Continuous Learner"].map((trait) => (
                  <Badge key={trait} variant="outline" className="cyber-border text-lg px-4 py-2">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-20">
            <h3 className="text-4xl font-bold text-center mb-4">
              Certifications & <span className="gradient-text">Credentials</span>
            </h3>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Verified certifications highlighting continuous learning and impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto max-h-96 overflow-y-auto pr-4">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="cyber-border glow-hover cursor-pointer transition-all duration-300 hover:scale-105 min-w-0"
                  onClick={() => cert.link && window.open(cert.link, '_blank')}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-glow-pulse"></div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                          {cert.status}
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{cert.date}</span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-primary mb-2 line-clamp-2">{cert.title}</h4>
                    <p className="text-muted-foreground font-medium mb-2 text-sm line-clamp-1">{cert.organization}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2">{cert.description}</p>
                    
                    {cert.link && (
                      <div className="mt-3 flex justify-end">
                        <ExternalLink className="w-4 h-4 text-primary/60 hover:text-primary transition-colors" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of innovative solutions spanning web development, AI implementation, 
              and cloud architecture. Each project represents a journey of problem-solving and technological exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="cyber-border glow-hover h-full flex flex-col group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
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

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <SkillsGrid />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your business with cutting-edge technology solutions. From web development 
              to AI implementation, I provide comprehensive services to drive your digital success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="cyber-border glow-hover h-full flex flex-col group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                      <div className="text-sm text-primary font-semibold mt-1">
                        {service.pricing}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover:text-secondary transition-colors duration-300" />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="cyber-border text-xs group-hover:border-primary/50 transition-colors duration-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button 
                      className="w-full glow-border glow-hover group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300" 
                      variant="outline"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Request Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to collaborate on innovative 
              projects and discuss new opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="cyber-border glow-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Send className="w-6 h-6 text-primary" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="cyber-border glow-hover mt-2"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="cyber-border glow-hover mt-2"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="cyber-border glow-hover mt-2"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="cyber-border glow-hover mt-2 min-h-[120px]"
                      placeholder="Tell me about your project, collaboration idea, or any questions you have..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-hover"
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Get In Touch */}
              <Card className="cyber-border glow-hover">
                <CardHeader>
                  <CardTitle className="text-2xl">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 text-primary">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          <a 
                            href={info.action}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target={info.action.startsWith('http') ? '_blank' : '_self'}
                            rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="cyber-border glow-hover bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-glow-pulse" />
                    <h3 className="text-xl font-semibold neon-text">Available for New Projects</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Currently accepting full-time opportunities and freelance projects. 
                    Open to both full-time opportunities and freelance work.
                  </p>
                  <p className="text-sm text-primary">
                    Response time: Usually within 24 hours
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <FloatingChat />
    </div>
  );
};

export default Index;
