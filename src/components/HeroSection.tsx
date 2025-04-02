
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-portfolio-black text-white overflow-hidden">
      {/* Blue and gold accent circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-portfolio-gold/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Transforming Ideas Into <span className="gold-text">Digital Excellence</span>
          </h1>
          
          <p className="text-gray-300 text-lg mb-8 max-w-lg animate-fade-in">
            Expert UI/UX design, graphic design, web development, IT support, networking, 
            and hardware solutions designed to transform and elevate your digital presence.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-portfolio-gold hover:bg-portfolio-gold/90 text-portfolio-black">
              <Link to="/services">
                Explore Services <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
