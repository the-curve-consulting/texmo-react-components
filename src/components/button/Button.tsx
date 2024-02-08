import React from 'react';
import * as Bootstrap from 'react-bootstrap';
import { Themes } from 'types';

interface ButtonProps extends Bootstrap.ButtonProps {
  label: string;
  variant?: Themes;
}

const Button = ({ label, className, variant, ...rest }: ButtonProps) => {
  return (
    <Bootstrap.Button
      className={className}
      variant={variant || 'primary'}
      {...rest}
    >
      {label}
    </Bootstrap.Button>
  );
};

export default Button;
