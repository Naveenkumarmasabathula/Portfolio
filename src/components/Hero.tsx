import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Naveenkumarmasabathula', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/masabathulanaveenkumar/', label: 'LinkedIn' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&to=naveenkumarmasabahula7@gmail.com', label: 'Email' },
  ];


  const scrollToNext = () => {
    const ProjectsSection = document.getElementById('projects');
    if (ProjectsSection) {
      ProjectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fadeInUp">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 p-1 shadow-2xl animate-float">
              <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-6xl text-white font-bold">
                NK
              </div>
            </div>
            <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-500/20 animate-pulse"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 animate-slideInLeft">
            Naveen <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Kumar</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 animate-slideInRight">
            Full Stack Developer
          </h2>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
            Passionate about creating innovative web solutions and bringing ideas to life through code. 
            Specializing in modern web technologies and user-centered design.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fadeInUp animation-delay-400">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target='_blank'
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToNext}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fadeInUp animation-delay-600"
          >
            Explore My Work
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;