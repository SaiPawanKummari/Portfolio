import React from 'react';
import { BarChart2, Cpu, MessageCircle, Globe, BookOpen, Stethoscope, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: "Crop Price Prediction",
    description: "Built an AI model to forecast crop prices using market and weather data for better farmer insights.",
    icon: BarChart2,
    links: ["https://github.com/SaiPawanKummari/crop-price-prediction", "#"]
  },
  {
    title: "Plant Disease Detection",
    description: "Developed a CNN-based system for detecting plant diseases from leaf images with high accuracy.",
    icon: Cpu,
    links: ["https://github.com/SaiPawanKummari/plant-disease-detection"]
  },
  {
    title: "AI-powered Chatbot",
    description: "Created a chatbot for medical assistance using NLP techniques to generate medicine suggestions.",
    icon: MessageCircle,
    links: ["#"]
  },
  {
    title: "Crop & Fertilizer Recommendation",
    description: "Designed an XGBoost model to recommend optimal crops and fertilizers based on soil and weather data.",
    icon: Globe,
    links: ["#"]
  },
  {
    title: "Library Virtual Assistant",
    description: "Built a voice-enabled assistant for querying book availability and library services.",
    icon: BookOpen,
    links: ["#"]
  }
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectsData.map((project, index) => (
        <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out transform">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <project.icon className="text-blue-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-1">{project.description}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:text-blue-600"
              >
                <ExternalLink size={16} className="mr-1" />
                <span className="text-sm">Demo {i + 1}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;