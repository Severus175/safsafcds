import { ReactNode } from 'react';

interface MagicCardProps {
  children: ReactNode;
  className?: string;
  gradientColor?: string;
}

export function MagicCard({ children, className = '', gradientColor = '#262626' }: MagicCardProps) {
  return (
    <div 
      className={`relative overflow-hidden group ${className}`}
      style={{
        '--gradient-color': gradientColor,
      } as React.CSSProperties}
    >
      {/* Dark grey hover overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${gradientColor}, transparent 50%)`,
        }}
      />
      {children}
    </div>
  );
}