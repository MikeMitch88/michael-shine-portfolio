import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import FloatingElements from "@/components/FloatingElements";
import Footer from "@/components/Footer";
import profilePhoto from "@/assets/mike.png";

const About = () => {
  const certifications = [
    {
      title: "AWS Certified Developer",
      organization: "Amazon Web Services",
      date: "July 2023",
      status: "Verified",
      description: "Demonstrated proficiency in developing and maintaining applications on the AWS platform."
    },
    {
      title: "Google AI/ML Certificate",
      organization: "Google Cloud",
      date: "August 2023", 
      status: "Verified",
      description: "Comprehensive core digital skills programme under Google AI/ML certification."
    },
    {
      title: "Meta Frontend Developer",
      organization: "Meta (Facebook)",
      date: "June 2023",
      status: "Verified",
      description: "Software development and project management certification from Meta."
    },
    {
      title: "CS50x Computer Science",
      organization: "Harvard University",
      date: "2024",
      status: "Verified",
      description: "Introduction to Computer Science from Harvard's prestigious CS50 program."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
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
              <h1 className="text-4xl md:text-6xl font-bold">
                About <span className="gradient-text">Michael</span>
              </h1>
              
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
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
              
              <div className="space-y-12">
                <div className="relative flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2024
                  </div>
                  <Card className="cyber-border glow-hover flex-1">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">Senior Full-Stack Developer</h3>
                      <p className="text-muted-foreground mb-4">
                        Leading development of scalable web applications and AI-powered solutions. 
                        Mentoring junior developers and establishing best practices for modern development workflows.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Node.js", "AWS", "AI/ML", "Team Leadership"].map((skill) => (
                          <Badge key={skill} variant="outline" className="cyber-border">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2023
                  </div>
                  <Card className="cyber-border glow-hover flex-1">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">Full-Stack Developer</h3>
                      <p className="text-muted-foreground mb-4">
                        Developed complex web applications with modern frameworks. Specialized in 
                        database optimization and cloud deployment strategies.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["TypeScript", "PostgreSQL", "Docker", "Cloud Deployment"].map((skill) => (
                          <Badge key={skill} variant="outline" className="cyber-border">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2022
                  </div>
                  <Card className="cyber-border glow-hover flex-1">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">Frontend Developer</h3>
                      <p className="text-muted-foreground mb-4">
                        Focused on creating responsive, user-friendly interfaces and 
                        learning modern development practices.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["React", "JavaScript", "CSS", "Responsive Design"].map((skill) => (
                          <Badge key={skill} variant="outline" className="cyber-border">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Verified certifications and credentials highlighting continuous learning and impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="cyber-border glow-hover">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-glow-pulse"></div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        {cert.status}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground font-medium mb-3">{cert.organization}</p>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto cyber-border glow-hover bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                "Building tomorrow's solutions with today's technology"
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe that great software is not just about writing code—it's about understanding 
                human needs, solving real problems, and creating experiences that make life better. 
                Every line of code should serve a purpose, every feature should add value, and every 
                project should push the boundaries of what's possible.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;