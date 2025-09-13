import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, Phone, Linkedin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide on scroll down, show on scroll up or when near top
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const contactOptions = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email Me",
      action: () => window.open('mailto:michaelranda95@gmail.com', '_blank'),
      color: "text-blue-400"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "WhatsApp Me",
      action: () => window.open('https://wa.me/254745074245', '_blank'),
      color: "text-green-400"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      action: () => window.open('https://linkedin.com/in/MikeMitch88', '_blank'),
      color: "text-blue-500"
    }
  ];

  return (
    <div 
      className={`fixed bottom-6 left-6 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      {/* Contact Options */}
      <div 
        className={`absolute bottom-16 left-0 space-y-3 transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        {contactOptions.map((option, index) => (
          <div
            key={option.label}
            className={`transform transition-all duration-300 ${
              isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <Button
              onClick={option.action}
              className={`bg-black/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 ${option.color} hover:text-white hover:bg-primary/20 shadow-lg hover:shadow-primary/20 transition-all duration-300 w-auto px-4 py-2 h-auto`}
            >
              {option.icon}
              <span className="ml-2">{option.label}</span>
            </Button>
          </div>
        ))}
      </div>

      {/* Main Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-primary/90 hover:bg-primary border-2 border-primary/50 hover:border-primary shadow-lg hover:shadow-primary/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>

      {/* Glowing animation */}
      <div className="absolute inset-0 w-14 h-14 rounded-full bg-primary/20 animate-pulse pointer-events-none" />
    </div>
  );
};

export default FloatingChat;