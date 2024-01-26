import React from 'react';

export interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button style={{ background: 'pink' }}>{label}</button>;
};

export default Button;
