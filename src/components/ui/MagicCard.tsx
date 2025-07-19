import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MagicCardProps {
  children: ReactNode;
  className?: string;
  gradientColor?: string;
}

export function MagicCard({ children, className = '', gradientColor = '#262626' }: MagicCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Magic gradient background */}
      <div 
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${gradientColor}, transparent 70%)`
        }}
      />
      {children}
    </motion.div>
  );
}