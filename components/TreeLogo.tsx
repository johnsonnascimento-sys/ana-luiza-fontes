import React from 'react';

interface TreeLogoProps {
  className?: string;
}

const TreeLogo: React.FC<TreeLogoProps> = ({ className = "w-full h-full text-primary" }) => {
  return (
    <img 
      src="/logo.png" 
      alt="Ana Luiza Fontes Logo" 
      className={`object-contain ${className}`}
    />
  );
};

export default TreeLogo;