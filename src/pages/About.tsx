
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
            I'm a digital professional with expertise in UI/UX design, graphic design, web development, 
            IT support, networking, and hardware solutions.
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
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            John Doe
          </h2>
          <h3 className="text-portfolio-gold text-lg mb-4">Digital Professional & IT Specialist</h3>
          <p className="text-gray-600 mb-6">
            With over 8 years of experience in the digital industry, I've helped numerous 
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
                <p className="text-gray-600">John Doe</p>
              </div>
            </div>
            <div className="flex items-center">
              <Briefcase size={20} className="text-portfolio-gold mr-2" />
              <div>
                <h4 className="font-medium">Experience</h4>
                <p className="text-gray-600">8+ Years</p>
              </div>
            </div>
            <div className="flex items-center">
              <Award size={20} className="text-portfolio-gold mr-2" />
              <div>
                <h4 className="font-medium">Projects</h4>
                <p className="text-gray-600">200+ Completed</p>
              </div>
            </div>
            <div className="flex items-center">
              <Book size={20} className="text-portfolio-gold mr-2" />
              <div>
                <h4 className="font-medium">Education</h4>
                <p className="text-gray-600">B.S. Computer Science</p>
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
              period: "2021 - Present",
              title: "Senior UI/UX Designer & IT Consultant",
              company: "Tech Solutions Inc.",
              description: "Lead design projects and provide IT consulting services for enterprise clients."
            },
            {
              period: "2018 - 2021",
              title: "Web Developer & Network Administrator",
              company: "Digital Innovations",
              description: "Developed web applications and maintained network infrastructure."
            },
            {
              period: "2015 - 2018",
              title: "Graphic Designer & IT Support Specialist",
              company: "Creative Studios",
              description: "Created visual designs and provided technical support to clients."
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
              period: "2011 - 2015",
              degree: "Bachelor of Science in Computer Science",
              institution: "Tech University"
            },
            {
              period: "2017",
              degree: "UI/UX Design Certification",
              institution: "Design Academy"
            },
            {
              period: "2019",
              degree: "Network Administration Certification",
              institution: "IT Professional Institute"
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
