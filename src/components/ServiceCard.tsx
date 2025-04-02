
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  iconColor = "#D4AF37" 
}) => {
  return (
    <Card className="flex flex-col items-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200 bg-white group">
      <div className="p-3 rounded-full bg-gray-100 mb-4 group-hover:bg-portfolio-gold/10 transition-colors">
        <Icon size={32} color={iconColor} />
      </div>
      <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-portfolio-gold transition-colors">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </Card>
  );
};

export default ServiceCard;
