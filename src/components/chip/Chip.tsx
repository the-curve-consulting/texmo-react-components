import React from 'react';

interface ChipProps extends React.HTMLProps<HTMLSpanElement> {
  color: string;
  label: string;
}
const Chip = ({ label, color, ...rest }: ChipProps) => {
  return (
    <h5>
      <span
        style={{
          backgroundColor: color,
          padding: '10px 15px',
          fontSize: '16px',
          borderRadius: '35px',
        }}
        {...rest}
      >
        {label}
      </span>
    </h5>
  );
};

export default Chip;
