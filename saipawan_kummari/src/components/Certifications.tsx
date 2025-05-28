import React from 'react';
import { Award } from 'lucide-react';

const certifications = {
  "Project-Based": [
    "Crop & Fertilizer Recommendation - Edunet Foundation",
    "Plant Disease Detection Model",
    "Crop Price Prediction - Smart India Hackathon"
  ],
  "Courses & Learning": [
    "Google AI/ML Virtual Internship",
    "Computer Vision Onramp - MATLAB Academy",
    "Fundamentals of Computer Vision - DeepLearning.AI",
    "Machine Learning - DeepLearning.AI",
    "Deep Learning - DeepLearning.AI",
    "Open Source Models with Hugging Face - DeepLearning.AI"
  ],
  "Hackathon & Competitions": [
    "Smart India Hackathon Finalist",
    "CodeQuest 24Hr Hackathon - Organizer"
  ]
};

const Certifications = () => {
  return (
    <div className="space-y-6">
      {Object.entries(certifications).map(([category, items], idx) => (
        <div
          key={idx}
          className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-700"
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-4">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {items.map((cert, i) => (
              <div key={i} className="flex items-center space-x-2">
                <Award className="text-blue-500" size={18} />
                <span className="text-gray-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;