import React, { useEffect, useState } from 'react';
import { TexmoIcons } from 'types';

export interface TexmoIconProps {
  icon: TexmoIcons;
}

const TexmoIcon = ({ icon }: TexmoIconProps) => {
  const [Icon, setIcon] = useState<React.FC | null>(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const importedIcon = await import(`../../icons/${icon}.svg`);
        console.log(importedIcon.default);
        setIcon(importedIcon.default);
      } catch (error) {
        console.error('Error loading SVG:', error);
      }
    };

    loadIcon();
  }, [icon]);

  if (!Icon) {
    return <div>SVG not found</div>;
  }

  return <Icon />;
};

export default TexmoIcon;
