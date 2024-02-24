import React from 'react';
import { Themes } from 'types';

interface ChipProps extends React.HTMLProps<HTMLDivElement> {
  theme?: Themes;
  label: string;
}
const Chip = ({ className, label, theme = 'primary', ...rest }: ChipProps) => {
  return (
    <div className={`${className} bg-${theme} text-center chip`} {...rest}>
      {label}
    </div>
  );
};

export default Chip;
