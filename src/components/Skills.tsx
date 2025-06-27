import React from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Palette, 
  GitBranch, 
  Zap,
  Monitor,
  ChartArea,
  Server,
  Cpu,
  Shield,
  GalleryVerticalEnd ,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 65, icon: Code, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript/TypeScript", level: 70, icon: Code, color: "from-blue-600 to-purple-600" },
        { name: "Tailwind CSS", level: 92, icon: Palette, color: "from-cyan-500 to-teal-500" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88, icon: Server, color: "from-green-500 to-green-600" },
        { name: "Express", level: 85, icon: Code, color: "from-yellow-500 to-orange-500" },
        { name: "MongoDB", level: 80, icon: Database, color: "from-purple-500 to-pink-500" }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Hoppscotch", level: 82, icon: Cloud, color: "from-orange-500 to-red-500" },
        { name: "Git/GitHub", level: 90, icon: GitBranch, color: "from-gray-600 to-gray-700" },
        { name: "Vercel/Render", level: 75, icon: Cpu, color: "from-blue-400 to-blue-600" }
      ]
    },
    {
      title: "Additional ",
      skills: [
        { name: "Bootstrap", level: 78, icon: Smartphone, color: "from-indigo-500 to-purple-500" },
        { name: "Recharts", level: 85, icon: ChartArea, color: "from-pink-500 to-rose-500" },
        { name: "Shadcn UI", level: 80, icon: GalleryVerticalEnd, color: "from-red-500 to-pink-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-pink-700 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expertise across the full technology stack with continuous learning mindset
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                          <skill.icon className="w-5 h-5" />
                        </div>
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-10000 ease-out transform origin-left`}
                        style={{
                          width: `${skill.level}%`,
                          animation: `skillBar 2s ease-out ${skillIndex * 0.2}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Technologies & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'JavaScript', 'React', 'Node.js', 'Hoppscotch', 'React-Query','ExpressJS',
              'MongoDB', 'GitHub', 'Git', 'Tailwind', 'Bootstrap', 'Mysql'
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span className="text-sm font-medium text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;