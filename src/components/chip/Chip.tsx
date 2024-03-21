import React from 'react';
import { Themes } from '../../types';
import classNames from 'classnames';

interface ChipProps extends React.HTMLProps<HTMLDivElement> {
  theme?: Themes;
  label: string;
}
const Chip = ({ className, label, theme = 'primary', ...rest }: ChipProps) => {
  return (
    <div
      className={classNames(className, `bg-${theme} text-center chip`)}
      {...rest}
    >
      {label}
    </div>
  );
};

export default Chip;
