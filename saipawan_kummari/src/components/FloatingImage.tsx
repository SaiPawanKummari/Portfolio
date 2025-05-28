import React from 'react';
import { motion } from 'framer-motion';

interface FloatingImageProps {
  src: string;
  alt: string;
}

const FloatingImage: React.FC<FloatingImageProps> = ({ src, alt }) => {
  return (
    <motion.div
      className="relative w-64 h-64"
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Background Pulsing Layers */}
      <div className="absolute inset-0 bg-blue-500 opacity-20 blur-xl animate-pulse" />
      <div className="absolute inset-0 bg-blue-400 opacity-20 blur-lg animate-pulse delay-75" />
      
      {/* Main Square Image Container */}
      <div className="relative w-full h-full overflow-hidden rounded-xl ring-4 ring-blue-500/50 shadow-lg shadow-blue-500/50">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default FloatingImage;
