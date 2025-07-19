import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'solid' | 'outline';
  color?: 'gray';
  className?: string;
  onClick?: () => void;
}

export function Badge({ 
  children, 
  variant = 'outline', 
  color = 'gray', 
  className = '',
  onClick 
}: BadgeProps) {
  const baseClasses = "inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-all duration-200 cursor-pointer";
  
  const variantClasses = {
    outline: "border border-gray-300 dark:border-gray-600 bg-transparent text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
    solid: "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
  };

  return (
    <span 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
}