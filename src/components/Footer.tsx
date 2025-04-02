
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-black text-portfolio-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <h3 className="font-serif text-2xl gold-text mb-4">PortfolioX</h3>
          <p className="text-gray-400 mb-4">
            Professional UI/UX design, graphic design, web development, 
            IT support, networking, and hardware solutions tailored to your needs.
          </p>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-portfolio-gold transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-portfolio-gold transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-portfolio-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-portfolio-gold transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-portfolio-gold transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col">
          <h3 className="font-medium text-lg mb-4 text-portfolio-white">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="text-gray-400 hover:text-portfolio-gold transition-colors">Home</Link>
            <Link to="/about" className="text-gray-400 hover:text-portfolio-gold transition-colors">About</Link>
            <Link to="/services" className="text-gray-400 hover:text-portfolio-gold transition-colors">Services</Link>
            <Link to="/contact" className="text-gray-400 hover:text-portfolio-gold transition-colors">Contact</Link>
          </div>
        </div>
        
        <div className="flex flex-col">
          <h3 className="font-medium text-lg mb-4 text-portfolio-white">Contact Info</h3>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center">
              <Mail size={16} className="text-portfolio-gold mr-2" />
              <a href="mailto:contact@portfoliox.com" className="text-gray-400 hover:text-portfolio-gold transition-colors">
                contact@portfoliox.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="text-portfolio-gold mr-2" />
              <a href="tel:+1234567890" className="text-gray-400 hover:text-portfolio-gold transition-colors">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="text-portfolio-gold mr-2" />
              <span className="text-gray-400">
                123 Design Street, Tech City, 10001
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">
          © {currentYear} PortfolioX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
