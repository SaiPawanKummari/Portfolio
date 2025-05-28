import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string;
  link?: string;
}

const experiences: Experience[] = [
  {
    title: "AI & ML Intern | Crop & Fertilizer Recommendation Model",
    company: "EDUNET FOUNDATION",
    period: "2024",
    technologies: "Predictive Analytics | Machine Learning | Streamlit",
    description: [
      "Engineered a predictive system using Decision Trees and XGBoost, achieving 85–90% accuracy.",
      "Optimized model via feature engineering and hyperparameter tuning.",
      "Deployed model through an interactive Streamlit dashboard for real-time agricultural insights.",
    ],
  },
  {
    title: "AI & ML Intern | Plant Disease Detection",
    company: "EDUNET FOUNDATION",
    period: "2024",
    technologies: "Feature Engineering | Deep Learning | Streamlit",
    description: [
      "Built a CNN model for plant disease classification with 93% accuracy on 70K+ images.",
      "Improved image recognition accuracy from 75% to 88% through model fine-tuning.",
      "Developed a Streamlit-based application enabling farmers to diagnose diseases in real-time.",
    ],
  },
  {
    title: "Diploma Trainee Intern",
    company: "Isuzu Motors India Pvt. Ltd, Sullurpeta",
    period: "2022",
    description: [
      "Assisted in front wheel assembly operations ensuring precision and adherence to quality standards.",
      "Operated Teach Pendant systems for frame loading, contributing to workflow optimization.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out transform"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-cyan-300">{exp.title}</h3>
            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          <p className="text-cyan-100 font-medium">{exp.company}</p>
          <p className="text-cyan-200 text-sm mb-2">{exp.period}</p>
          {exp.technologies && (
            <p className="text-sm text-cyan-400 italic mb-2">
              Technologies: {exp.technologies}
            </p>
          )}
          <ul className="list-disc list-inside text-cyan-100 space-y-1">
            {exp.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;