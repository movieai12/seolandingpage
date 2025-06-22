import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-15 h-10 rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src="/Gemini_Generated_Image_3cd1jw3cd1jw3cd1.png"
            alt="World"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent">
            dijitalfikir
          </span>
          <span className="text-xs text-gray-500 -mt-1">AI SEO Ajansı</span>
        </div>
      )}
    </motion.div>
  );
};