import React from 'react';
import { Themes } from 'types';

interface ChipProps extends React.HTMLProps<HTMLSpanElement> {
  theme: Themes;
  label: string;
}
const Chip = ({ style, label, theme, ...rest }: ChipProps) => {
  return (
    <span
      className={`bg-${theme}`}
      style={{
        padding: '10px 15px',
        fontSize: '16px',
        borderRadius: '8px',
        fontWeight: '500',
        color: 'white',
        ...style,
      }}
      {...rest}
    >
      {label}
    </span>
  );
};

export default Chip;
