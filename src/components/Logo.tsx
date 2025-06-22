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
          className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg"
        >
          <Globe className="w-6 h-6 text-white" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center"
        >
          <Zap className="w-2.5 h-2.5 text-yellow-800" />
        </motion.div>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent">
            dijitalfiir
          </span>
          <span className="text-xs text-gray-500 -mt-1">AI SEO Ajansı</span>
        </div>
      )}
    </motion.div>
  );
};