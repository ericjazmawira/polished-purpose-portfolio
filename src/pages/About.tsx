
import React from 'react';
import { Briefcase, Award, Book, User, CheckCircle2 } from 'lucide-react';

const About = () => {
  const skills = [
    "Adobe Creative Suite", "Figma", "Sketch", "HTML/CSS", "JavaScript", "React", 
    "Node.js", "Network Administration", "Hardware Troubleshooting", "IT Support"
  ];

  return (
    <div className="pt-24 pb-16 px-6 md:px-12">
      {/* Hero */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            About <span className="gold-text">Me</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
          Passionate about system administration, I thrive in dynamic environments, 
          quickly adapting to challenges and delivering results. 
          With a strong foundation in IT support and systems administration from my business informatics degree,
           I’m eager to apply my skills to real-world problems. A dedicated team player, I value collaboration, 
           continuous learning, and making meaningful contributions to every organization I join
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
        <div className="relative">
          <div className="aspect-square max-w-md mx-auto">
            {/* Border effect */}
            <div className="absolute inset-0 gold-gradient rounded-xl animate-shine"></div>
            <div className="absolute inset-0.5 bg-white rounded-xl overflow-hidden">
              <div className="h-full w-full bg-[url(/public/Ericjaz_.png)] bg-cover bg-center"></div>
              </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Eric Mawira
          </h2>
          <h3 className="text-portfolio-gold text-lg mb-4">Digital Professional & IT Specialist</h3>
          <p className="text-gray-600 mb-6">
            With over 3 years of experience in the digital industry, I've helped numerous 
            businesses transform their digital presence. I combine creative design with technical 
            expertise to deliver comprehensive solutions that meet client needs.
          </p>
          <p className="text-gray-600 mb-6">
            My approach is client-centered, focusing on understanding your unique requirements 
            and delivering tailored solutions that exceed expectations. Whether you need a stunning 
            website, intuitive user experience, or IT support, I'm here to help.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex items-center">
              <User size={20} className="text-portfolio-gold mr-2" />
              <div>
                <h4 className="font-medium">Name</h4>
                <p className="text-gray-600">Eric Mawira</p>
              </div>
            </div>
            <div className="flex items-center">
              <Briefcase size={20} className="text-portfolio-gold mr-2" />
              <div>
                <h4 className="font-medium">Experience</h4>
                <p className="text-gray-600">3+ Years</p>
              </div>
            </div>
            <div className="flex items-center">
              <Award size={20} className="text-portfolio-gold mr-2" />
              <div>
                <h4 className="font-medium">Projects</h4>
                <p className="text-gray-600">50+ Completed</p>
              </div>
            </div>
            <div className="flex items-center">
              <Book size={20} className="text-portfolio-gold mr-2" />
              <div>
                <h4 className="font-medium">Education</h4>
                <p className="text-gray-600">B.S. Business Information Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-portfolio-gold mb-2">Expertise</h2>
          <h3 className="text-3xl font-serif font-bold">My Skills</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 rounded-lg border border-gray-200 bg-white card-hover-effect"
            >
              <span className="font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Timeline / Experience */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-portfolio-gold mb-2">Journey</h2>
          <h3 className="text-3xl font-serif font-bold">My Experience</h3>
        </div>
        
        <div className="relative border-l-2 border-portfolio-gold pl-8 ml-4 md:ml-0 md:mx-auto md:max-w-3xl">
          {[
            {
              period: "2025 - Present",
              title: "ICT Technician",
              company: "USAID Dumisha Afya.",
              description: "Lead IT Support and Technicain for Program Staff."
            },
            {
              period: "2023 - 2024",
              title: "IT Assistant Intern",
              company: "USAID Dumisha Afya.",
              description: "Provided technical support to program staff, maintained hardware and software systems, assisted in troubleshooting network issues, and ensured smooth day-to-day IT operations within the organization."
            },
            {
              period: "May - Aug 2022",
              title: "IT Assistant Intern",
              company: "Shalom Hospitals",
              description: "Assisted with IT support tasks, designed visual materials for internal use, provided technical assistance to staff, and contributed to maintaining computer systems and software functionality."
            },
            {
              period: "2018 - 2021",
              title: "Business Information Technology Student",
              company: "Scott Christian University",
              description: "Studied a blend of business and IT, focusing on systems analysis, web development, and IT project management. Gained hands-on experience through academic projects and practical labs."
            },
            
          ].map((item, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute -left-10 md:-left-[42px] w-7 h-7 bg-portfolio-gold rounded-full border-4 border-white"></div>
              <h4 className="text-portfolio-gold font-medium mb-1">{item.period}</h4>
              <h3 className="text-xl font-serif font-medium mb-2">{item.title}</h3>
              <h5 className="text-gray-600 mb-2">{item.company}</h5>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Education */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-portfolio-gold mb-2">Learning</h2>
          <h3 className="text-3xl font-serif font-bold">My Education</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
             {
              period: "Feb 2025  - Present",
              degree: "Software Engineering",
              institution: "Power Learn Project Africa"
            },
            {
              period: "March 2024",
              degree: "AWS for Beginners",
              institution: "Great Learning Academy"
            },
            {
              period: "2020",
              degree: "Digital Marketing Certification",
              institution: "Google Digital Skills"
            },
             {
              period: "2018 - 2022",
              degree: "Bachelor of Business Information Technology",
              institution: "Scott Christian University"
            },
          ].map((item, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg bg-white card-hover-effect">
              <h4 className="text-portfolio-gold font-medium mb-1">{item.period}</h4>
              <h3 className="text-xl font-serif font-medium mb-2">{item.degree}</h3>
              <h5 className="text-gray-600">{item.institution}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
