import { ExternalLink, Github, Play, Star, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Stayzy",
      description: "Stayzy 🏠✈️ – A full-featured travel and accommodation listing web application built with Node.js, Express, and EJS templating. Stayzy allows users to explore, review, and manage listings for travel stays—similar to platforms like Airbnb.",
      image: "/FullStack.png",
      technologies: ["ExpressJS", "Node.js", "MongoDB", "CSS", "Bootstrap"],
      liveUrl: "https://stayzy-yonv.onrender.com/listings",
      githubUrl: "https://github.com/Naveenkumarmasabathula/Stayzy",
      stats: { stars: 124, forks: 45, contributors: 1 },
      featured: true,
      stack: "MEN stack"
    },
    {
      title: "SkyPulse",
      description: "🌤️ SkyPulse – A Modern Weather App SkyPulse is a sleek and responsive weather application built with React TypeScript, featuring ShadCN UI, Recharts, and TanStack Query. The app delivers real-time weather updates based on the user's location as well as user-searched locations. You can also add your favorite locations for quick access.",
      image: "/FrontEnd.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "TanStack Query", "Recharts","Shadcn UI"],
      liveUrl: "https://sky-pulse-six.vercel.app",
      githubUrl: "https://github.com/Naveenkumarmasabathula/SkyPulse",
      stats: { stars: 89, forks: 23, contributors: 1 },
      featured: true,
      stack: "React+TS+Tailwind"
    },


  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of innovative solutions and creative problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className="px-2 py-1 bg-white/90 rounded-full text-xs font-medium text-gray-700">
                    {project.stack}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{project.stats.contributors}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                  >
                    <Play className="w-4 h-4" />
                    <span>Live </span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Grid */}
        
      </div>
    </section>
  );
};

export default Projects;