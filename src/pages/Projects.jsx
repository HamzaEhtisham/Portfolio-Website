import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Flask, and SQLite integration",
      image:
        "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?q=80&w=484&auto=format&fit=crop&q=60",
      tech: ["React", "FLask", "SQLite"],
      live: "https://react-frontend-xru2.onrender.com",
      github: "https://github.com/HamzaEhtisham/Ecommerce-Website-ShopHub.git",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management with real-time updates and team features",
      image:
        "https://plus.unsplash.com/premium_photo-1683417272601-dbbfed0ed718?w=600&auto=format&fit=crop&q=60",
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
      live: "https://example.com",
      github: "https://github.com/example/taskapp",
    },
    {
      title: "MERN Chat app",
      description:
        "Real-time chat application with user authentication and conversations",
      image:
        "https://plus.unsplash.com/premium_photo-1677252438450-b779a923b0f6?w=600&auto=format&fit=crop&q=60",
      tech: ["react", "express", "mongoDB", "nodejs", "socket.io"],
      live: "https://mern-stack-chat-app-f91s.onrender.com",
      github: "https://github.com/HamzaEhtisham/MERN-Stack-chat-app-.git",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with interactive maps and forecasts",
      image:
        "https://images.unsplash.com/photo-1503264116251-35a269479413?w=600&auto=format&fit=crop&q=60",
      tech: ["React", "Weather API", "CSS3"],
      live: "https://example.com",
      github: "https://github.com/HamzaEhtisham/Wheather-Forcast-.git",
    },
    {
      title: "Social Media App",
      description:
        "Full-featured social platform with posts, stories, and messaging",
      image:
        "https://images.unsplash.com/photo-1603145733146-ae562a55031e?q=80",
      tech: ["React Native", "Convex", "CLerk"],
      live: "https://example.com",
      github: "https://github.com/HamzaEhtisham/Social-media-app.git",
    },
    {
      title: "Portfolio",
      description:
        "Content management system for creative professionals and agencies",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&auto=format&fit=crop&q=60",
      tech: ["Next.js", "Sanity", "Vercel", "TypeScript"],
      live: "https://example.com",
      github: "https://github.com/example/portfoliocms",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, mobile apps,
            and creative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ExternalLink size={20} className="text-white" />
                </a>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
