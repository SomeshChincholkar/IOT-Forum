export default function ProjectsSection() {
  const projects = [
    {
      title: "Smart Home Automation",
      description: "Developing intelligent systems for automated home control and monitoring.",
      gradient: "from-blue-500 to-purple-500",
      icon: "🏠",
      tags: ["Arduino", "IoT"]
    },
    {
      title: "Energy Monitoring System",
      description: "Real-time power consumption tracking and analytics platform.",
      gradient: "from-purple-500 to-pink-500",
      icon: "⚡",
      tags: ["Raspberry Pi", "Python"]
    },
    {
      title: "Smart Security System",
      description: "Advanced surveillance and monitoring system using IoT sensors.",
      gradient: "from-blue-500 to-green-500",
      icon: "🔒",
      tags: ["ESP32", "Cloud"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-2">Our Projects</h2>
        <p className="text-gray-400 text-center mb-12">
          Exploring innovative IoT solutions through hands-on projects
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center text-4xl`}>
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

