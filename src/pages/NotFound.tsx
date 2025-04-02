
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <div className="relative mb-8 mx-auto w-40 h-40">
          <div className="absolute inset-0 gold-gradient rounded-full animate-shine"></div>
          <div className="absolute inset-0.5 bg-white rounded-full flex items-center justify-center">
            <span className="text-6xl font-serif font-bold gold-text">404</span>
          </div>
        </div>
        <h1 className="text-3xl font-serif font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Button asChild className="bg-portfolio-gold hover:bg-portfolio-gold/90 text-portfolio-black">
          <Link to="/">
            <Home className="mr-2" size={16} />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
