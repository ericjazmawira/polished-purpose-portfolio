
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Laptop, 
  Code, 
  HelpCircle, 
  Network, 
  Cpu,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences through thoughtful design.",
    },
    {
      icon: Laptop,
      title: "Graphic Design",
      description: "Captivating visual content that communicates your brand message effectively.",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, high-performance websites and web applications.",
    },
  ];

  return (
    <div className="flex flex-col">
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-wider text-portfolio-gold mb-2">What I Do</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">My Services</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I offer a comprehensive range of digital services to help businesses 
              and individuals establish a strong online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-portfolio-gold hover:bg-portfolio-gold/90 text-portfolio-black">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Teaser */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-portfolio-gold mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Passionate Digital Professional</h3>
            <p className="text-gray-600 mb-6">
              With over 3 years of experience in the digital industry, I've helped numerous 
              businesses transform their digital presence through thoughtful design and technical expertise.
            </p>
            <ul className="space-y-2 mb-8">
              {["Certified UI/UX Designer", "Full Stack Developer", "IT Support Specialist", "Network Administrator"].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 size={18} className="text-portfolio-gold mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-portfolio-blue hover:bg-portfolio-blue/90 text-white">
              <Link to="/about">
                Learn More <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              {/* Border effect */}
              <div className="absolute inset-0 gold-gradient rounded-xl animate-shine"></div>
              <div className="absolute inset-0.5 bg-white rounded-xl overflow-hidden">
                <div className="h-full w-full bg-[url(/public/Ericjaz_.png)] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-portfolio-black relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-portfolio-blue/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-portfolio-gold/20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something amazing together. Get in touch to discuss your project needs.
          </p>
          <Button asChild className="bg-portfolio-gold hover:bg-portfolio-gold/90 text-portfolio-black">
            <Link to="/contact">
              Let's Work Together
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
