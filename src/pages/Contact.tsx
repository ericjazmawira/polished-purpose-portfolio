
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'I will get back to you as soon as possible.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16 px-6 md:px-12">
      {/* Hero */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Get In <span className="gold-text">Touch</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or need assistance with your digital needs? 
            I'm here to help. Reach out and let's discuss how we can work together.
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              icon: Mail,
              title: "Email",
              info: "ericjazmawira@gmail.com",
              link: "mailto:ericjazmawira@gmail.com"
            },
            {
              icon: Phone,
              title: "Phone",
              info: "(254) 768 684 743",
              link: "tel:+254768684743"
            },
            {
              icon: MapPin,
              title: "Location",
              info: "123 Design Street, Tech City",
              link: "#"
            },
            {
              icon: Clock,
              title: "Working Hours",
              info: "Mon-Fri: 9AM - 6PM",
              link: "#"
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center p-6 border border-gray-200 rounded-lg bg-white card-hover-effect text-center">
              <div className="p-3 rounded-full bg-gray-100 mb-4">
                <item.icon size={24} className="text-portfolio-gold" />
              </div>
              <h3 className="font-medium mb-2">{item.title}</h3>
              <a 
                href={item.link} 
                className="text-gray-600 hover:text-portfolio-gold transition-colors"
              >
                {item.info}
              </a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            <div className="aspect-video w-full">
              <div className="absolute inset-0 gold-gradient rounded-xl animate-shine"></div>
              <div className="absolute inset-0.5 bg-white rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/place/Nairobi/@-1.303209,36.8473969,47402m/data=!3m2!1e3!4b1!4m6!3m5!1s0x182f1172d84d49a7:0xf7cf0254b297924c!8m2!3d-1.2920659!4d36.8219462!16zL20vMDVkNDk?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" 
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button 
                type="submit" 
                className="bg-portfolio-gold hover:bg-portfolio-gold/90 text-portfolio-black w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={16} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-portfolio-gold mb-2">FAQ</h2>
          <h3 className="text-3xl font-serif font-bold">Frequently Asked Questions</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              question: "What is your typical project timeline?",
              answer: "Project timelines vary depending on complexity. Simple websites may take 2-4 weeks, while more complex projects can take 1-3 months. I'll provide a detailed timeline during our initial consultation."
            },
            {
              question: "Do you provide ongoing support after project completion?",
              answer: "Yes, I offer ongoing maintenance and support packages to ensure your digital assets continue to perform optimally after launch."
            },
            {
              question: "How do we start working together?",
              answer: "The process begins with an initial consultation to discuss your needs. After that, I'll prepare a detailed proposal outlining scope, timeline, and cost."
            },
            {
              question: "What are your payment terms?",
              answer: "Typically, I require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can arrange milestone-based payments."
            },
          ].map((item, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg bg-white card-hover-effect">
              <h3 className="text-lg font-medium mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
