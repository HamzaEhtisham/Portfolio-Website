import React from "react";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Creating digital experiences that make a difference, one project
              at a time. Passionate about clean code, beautiful design, and
              innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/HamzaEhtisham"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/hamza-ehtisham-896a962b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:hamzaehtisham124@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              {[
                "Web Development",
                "UI/UX Design",
                "Mobile Apps",
                "Consulting",
              ].map((service) => (
                <p
                  key={service}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Hamza Ehtisham. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
