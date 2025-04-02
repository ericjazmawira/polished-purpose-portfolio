
import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { 
  Palette, 
  Laptop, 
  Code, 
  HelpCircle, 
  Network, 
  Cpu,
  CheckCircle2,
  Monitor,
  PenTool,
  Smartphone,
  Server,
  Database,
  ShieldCheck,
  Settings,
  Cable,
  Wifi
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences through thoughtful design.",
      details: [
        "User Interface Design",
        "User Experience Strategy",
        "Wireframing & Prototyping",
        "Usability Testing",
        "Information Architecture"
      ]
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      description: "Captivating visual content that communicates your brand message effectively.",
      details: [
        "Brand Identity Design",
        "Logo Design",
        "Marketing Materials",
        "Social Media Graphics",
        "Print Design"
      ]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, high-performance websites and web applications.",
      details: [
        "Front-end Development",
        "Back-end Development",
        "E-commerce Solutions",
        "Content Management Systems",
        "Web App Development"
      ]
    },
    {
      icon: HelpCircle,
      title: "IT Support",
      description: "Providing technical assistance and troubleshooting to resolve IT issues.",
      details: [
        "Technical Troubleshooting",
        "Software Installation & Updates",
        "Data Recovery",
        "Performance Optimization",
        "Remote Assistance"
      ]
    },
    {
      icon: Network,
      title: "Networking",
      description: "Setting up and managing secure, reliable network infrastructures.",
      details: [
        "Network Setup & Configuration",
        "Network Security",
        "Wireless Networking",
        "VPN Configuration",
        "Network Monitoring"
      ]
    },
    {
      icon: Cpu,
      title: "Hardware Support",
      description: "Diagnosing and resolving hardware issues to keep your systems running smoothly.",
      details: [
        "Hardware Troubleshooting",
        "PC & Server Maintenance",
        "Hardware Upgrades",
        "Equipment Installation",
        "Preventive Maintenance"
      ]
    }
  ];
  
  const additionalServices = [
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Creating intuitive and engaging mobile application interfaces."
    },
    {
      icon: Server,
      title: "Server Management",
      description: "Setting up and maintaining server infrastructures for optimal performance."
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Design and implementation of efficient database systems."
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      description: "Implementing measures to protect your systems and data from threats."
    },
  ];

  return (
    <div className="pt-24 pb-16 px-6 md:px-12">
      {/* Hero */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            My <span className="gold-text">Services</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            I offer a comprehensive range of digital services to help businesses 
            and individuals establish and maintain a strong online presence.
          </p>
        </div>
      </div>

      {/* Main Services */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <div key={index} className="flex flex-col">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
              <div className="mt-6 p-6 border border-gray-200 rounded-lg bg-gray-50">
                <h4 className="font-medium mb-3">Services Include:</h4>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 size={18} className="text-portfolio-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Additional Services */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-portfolio-gold mb-2">More Offerings</h2>
          <h3 className="text-3xl font-serif font-bold">Additional Services</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      
      {/* Process Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-portfolio-gold mb-2">How I Work</h2>
          <h3 className="text-3xl font-serif font-bold">My Process</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              number: "01",
              title: "Discovery",
              description: "Understanding your needs and project requirements."
            },
            {
              number: "02",
              title: "Planning",
              description: "Creating a detailed strategy and roadmap for implementation."
            },
            {
              number: "03",
              title: "Execution",
              description: "Bringing the project to life with expert implementation."
            },
            {
              number: "04",
              title: "Support",
              description: "Providing ongoing assistance and maintenance."
            }
          ].map((step, index) => (
            <div key={index} className="relative p-6 border border-gray-200 rounded-lg bg-white card-hover-effect">
              <span className="text-5xl font-serif font-bold text-gray-100 absolute -top-2 -left-2">{step.number}</span>
              <div className="relative">
                <h3 className="text-xl font-serif font-medium mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-portfolio-black text-white p-8 md:p-12 rounded-xl relative overflow-hidden">
          {/* Background accents */}
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-portfolio-blue/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-portfolio-gold/20 blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Ready to Start Your Next Project?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's collaborate to create something amazing together. Get in touch to discuss your project needs.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-portfolio-gold text-portfolio-black font-medium rounded-md hover:bg-portfolio-gold/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
