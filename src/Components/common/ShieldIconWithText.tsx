import React from 'react';
import shieldIcon from '@/public/assets/Shield.png';
import Image from 'next/image';

interface ShieldIconWithTextProps {
  text?: string;
  iconSize?: 'sm' | 'md' | 'lg';
  textSize?: 'sm' | 'md' | 'lg';
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

const ShieldIconWithText: React.FC<ShieldIconWithTextProps> = ({
  text = 'Tutors',
  iconSize = 'md',
  textSize = 'md',
  className = '',
  iconClassName = '',
  textClassName = '',
}) => {
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm md:text-base',
    lg: 'text-base md:text-lg',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Shield Icon */}
      <div
        className={`${iconSizes[iconSize]} rounded flex items-center justify-center ${iconClassName}`}
      >
        <Image src={shieldIcon} alt="Shield Icon" className={iconSizes[iconSize]} />
      </div>

      {/* Text */}
      <span
        className={`font-bold tracking-[6px] text-black ${textSizes[textSize]} ${textClassName}`}
      >
        {text}
      </span>
    </div>
  );
};

export default ShieldIconWithText;

