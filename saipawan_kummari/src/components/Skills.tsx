import React from 'react';
import { Code, Database, Wrench, MessageSquare } from 'lucide-react';

const skillsData = {
  programming: {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "SQL", "C++"],
  },
  libraries: {
    title: "Libraries & Frameworks",
    icon: Database,
    skills: [
      "Pandas", "NumPy", "Matplotlib", "Hugging Face", "Transformers", 
      "TensorFlow", "Keras", "Scikit-Learn", "Computer Vision"
    ],
  },
  nlp: {
    title: "NLP",
    icon: Code,
    skills: ["Vector Embeddings", "VectorDB", "NLTK"],
  },
  deepLearning: {
    title: "Deep Learning",
    icon: Code,
    skills: ["CNN", "RNN", "AutoEncoders"],
  },
  mlops: {
    title: "MLOps & Deployment",
    icon: Wrench,
    skills: ["Streamlit", "Flask", "FastAPI", "Docker", "AWS"],
  },
  robotics: {
    title: "Robotics & Automation",
    icon: Wrench,
    skills: ["ROS2", "Arduino", "IoT Sensors", "Raspberry Pi 4"],
  },
  genAI: {
    title: "Generative AI",
    icon: Database,
    skills: ["LLMs/MLLMs", "RAG", "Tavily", "Finetuning", "Transformers", "GANs"],
  },
};

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(skillsData).map(([key, category]) => (
        <div 
          key={key} 
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out transform"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-cyan-700 p-2 rounded-full">
              <category.icon className="text-cyan-400 w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-cyan-300">{category.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700 px-3 py-1 rounded-full text-sm text-cyan-200 shadow-sm hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;