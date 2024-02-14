import React from 'react';
import { Themes } from 'types';
import {
  Button as BootstrapButton,
  ButtonProps as BootstrapButtonProps,
} from 'react-bootstrap';

interface ButtonProps extends BootstrapButtonProps {
  label?: string;
  icon?: string;
  variant?: Themes;
}

const Button = ({
  label,
  icon,
  children,
  className,
  variant,
  ...rest
}: ButtonProps) => {
  return (
    <BootstrapButton
      className={className}
      variant={variant || 'primary'}
      {...rest}
    >
      {label || null}
      {icon ? <i className={`bi bi-${icon}`} /> : null}
      {children}
    </BootstrapButton>
  );
};

export default Button;
