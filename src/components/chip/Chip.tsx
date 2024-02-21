import React from 'react';

interface ChipProps extends React.HTMLProps<HTMLSpanElement> {
  color: string;
  label: string;
}
const Chip = ({ style, label, color, ...rest }: ChipProps) => {
  return (
    <span
      style={{
        backgroundColor: color,
        padding: '10px 15px',
        fontSize: '16px',
        borderRadius: '35px',
        fontWeight: '500',
        ...style,
      }}
      {...rest}
    >
      {label}
    </span>
  );
};

export default Chip;
