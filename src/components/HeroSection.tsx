
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-portfolio-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-black via-portfolio-black/95 to-portfolio-black"></div>
      
      {/* Blue accent shape */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-portfolio-blue/30 blur-3xl"></div>
      
      {/* Gold accent shape */}
      <div className="absolute bottom-20 -left-20 w-96 h-96 rounded-full bg-portfolio-gold/20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-slide-in">
            <span className="text-white">Creating </span>
            <span className="gold-text">Digital Excellence</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            UI/UX design, graphic design, web development, IT support, networking, 
            and hardware solutions tailored to elevate your digital presence.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild className="bg-portfolio-gold hover:bg-portfolio-gold/90 text-portfolio-black">
              <Link to="/services">
                Explore Services <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-portfolio-gold text-portfolio-gold hover:bg-portfolio-gold/10">
              <Link to="/contact">
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 py-12 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* Hero image container with border effect */}
            <div className="absolute inset-0 gold-gradient rounded-xl animate-shine"></div>
            <div className="absolute inset-0.5 bg-portfolio-black rounded-xl overflow-hidden">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
