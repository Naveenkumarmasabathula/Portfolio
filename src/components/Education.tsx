import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Science Engineering",
      school: "RGUKT SRIKAKULAM",
      location: "Etcherla",
      period: "2023 - 2027",
      gpa: "9.0/10.0",
      description: "Comprehensive study in computer systems, programming languages, and software development methodologies.",
      achievements: ["Magna Cum Laude", "Programming Club President", "Hackathon Winner"]
    },
    {
      degree: "Pre-University Course",
      school: "RGUKT SRIKAKULAM",
      location: "Etcherla",
      period: "2021 - 2023",
      gpa: "9.8/10.0",
      description: "Focus on STEM subjects with advanced placement courses in Mathematics and Computer Science.",
      achievements: ["Valedictorian", "National Honor Society", "Computer Science Excellence Award"]
    }
  ];

  return (
    <section id="education" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey of continuous learning and academic excellence
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-2 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <h4 className="text-xl text-blue-600 font-semibold mb-2">{edu.school}</h4>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{edu.description}</p>
                  
                  <div className="space-y-2">
                    {/* <h5 className="font-semibold text-gray-900">Key Achievements:</h5> */}
                    {/* <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;