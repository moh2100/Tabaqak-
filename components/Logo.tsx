import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Spoon/Fork Handle Left */}
      <path d="M6 20L12 14" />
      {/* Spoon Head Right (Crossed) */}
      <path d="M12 14L16.5 9.5C18.5 7.5 19 5.5 18 4.5C17 3.5 15 4 13 6L8.5 10.5" />
      
      {/* Knife Handle Right */}
      <path d="M18 20L12 14" />
      {/* Fork Head Left (Crossed) */}
      <path d="M12 14L8 10" />
      <path d="M6.5 8.5L4.5 6.5" />
      <path d="M9.5 8.5L5.5 4.5" />
      <path d="M11 7L7.5 3.5" />
    </svg>
  );
};

export default Logo;