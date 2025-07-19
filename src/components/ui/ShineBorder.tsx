import { ReactNode } from 'react';

interface ShineBorderProps {
  children: ReactNode;
  className?: string;
  color?: string[];
}

export default function ShineBorder({ 
  children, 
  className = '', 
  color = ["#FF9933", "#FFFFFF", "#138808"] 
}: ShineBorderProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        '--border-width': '1px',
        '--border-radius': '8px',
        '--duration': '14s',
        '--mask-linear-gradient': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        '--background-radial-gradient': `radial-gradient(transparent,transparent,${color[0]},${color[1]},${color[2]},transparent,transparent)`,
      } as React.CSSProperties}
    >
      <div className="before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[''] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine">
        {children}
      </div>
    </div>
  );
}