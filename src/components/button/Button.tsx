import React from 'react';
import { Themes } from 'types';
import {
  Button as BootstrapButton,
  ButtonProps as BootstrapButtonProps,
} from 'react-bootstrap';

interface ButtonProps extends BootstrapButtonProps {
  label: string;
  variant?: Themes;
}

const Button = ({ label, className, variant, ...rest }: ButtonProps) => {
  return (
    <BootstrapButton
      className={className}
      variant={variant || 'primary'}
      {...rest}
    >
      {label}
    </BootstrapButton>
  );
};

export default Button;
