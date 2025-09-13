import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin,
  Clock,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import FloatingElements from "@/components/FloatingElements";
import Footer from "@/components/Footer";

const Contact = () => {
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
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Available Worldwide",
      action: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Availability",
      value: "Open for New Projects",
      action: null
    }
  ];

  const quickActions = [
    {
      title: "Send Direct Email",
      description: "Get in touch immediately via email",
      action: "mailto:michaelranda95@gmail.com",
      icon: <Mail className="w-5 h-5" />
    },
    {
      title: "Call Me",
      description: "Schedule a call to discuss your project",
      action: "tel:+254745074245",
      icon: <Phone className="w-5 h-5" />
    },
    {
      title: "Download Resume",
      description: "View my complete professional background",
      action: "#",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Work <span className="gradient-text">Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to collaborate on innovative 
            projects and discuss new opportunities.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-20">
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
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target={info.action.startsWith('http') ? '_blank' : '_self'}
                            rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="cyber-border glow-hover">
              <CardHeader>
                <CardTitle className="text-2xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start glow-border glow-hover p-6 h-auto"
                      asChild={action.action !== "#"}
                    >
                      {action.action === "#" ? (
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded bg-primary/10 text-primary">
                            {action.icon}
                          </div>
                          <div className="text-left">
                            <div className="font-semibold">{action.title}</div>
                            <div className="text-sm text-muted-foreground">{action.description}</div>
                          </div>
                        </div>
                      ) : (
                        <a 
                          href={action.action}
                          className="flex items-center gap-4 w-full"
                          target={action.action.startsWith('http') ? '_blank' : '_self'}
                          rel={action.action.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          <div className="p-2 rounded bg-primary/10 text-primary">
                            {action.icon}
                          </div>
                          <div className="text-left">
                            <div className="font-semibold">{action.title}</div>
                            <div className="text-sm text-muted-foreground">{action.description}</div>
                          </div>
                        </a>
                      )}
                    </Button>
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
      <Footer />
    </div>
  );
};

export default Contact;