import React from "react";
import { Code, Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience
              creating digital solutions that bridge the gap between design and
              functionality. My journey started with a curiosity for how things
              work, and evolved into a love for building meaningful digital
              experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in modern web technologies and have a keen eye for
              design. When I'm not coding, you'll find me exploring new
              technologies, contributing to open source projects, or sketching
              new interface ideas.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <Code size={32} className="mx-auto mb-2 text-purple-600" />
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-gray-600">
                  Writing maintainable, scalable solutions
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <Palette size={32} className="mx-auto mb-2 text-blue-600" />
                <h3 className="font-semibold mb-2">Creative Design</h3>
                <p className="text-sm text-gray-600">
                  Pixel-perfect interfaces that delight
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              {/* Outer glowing circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>

              {/* Inner white circle */}
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                {/* Photo inside circular frame */}
                <img
                  src="mypic.jpeg"
                  alt="My Photo"
                  className="w-64 h-64 rounded-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Technologies I Love
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Python",
              "Tailwind",
              "Next.js",
            ].map((skill, index) => (
              <div
                key={skill}
                className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold">
                  {skill.charAt(0)}
                </div>
                <p className="font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
