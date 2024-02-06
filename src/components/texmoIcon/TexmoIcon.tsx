import React from 'react';
import { TexmoIcons } from '../../types';
import * as Icons from '../../icons/index';

interface IconCollection {
  [key: string]: React.ComponentType<any>; // Assuming your icons are React components
}

export interface TexmoIconProps extends React.SVGProps<SVGSVGElement> {
  icon: TexmoIcons;
}

const TexmoIcon = ({ icon, height = 40, ...rest }: TexmoIconProps) => {
  const iconFilename = icon
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  const IconComponent = (Icons as IconCollection)[iconFilename];

  return (
    <>
      <IconComponent height={height} {...rest} />
    </>
  );
};

export default TexmoIcon;
