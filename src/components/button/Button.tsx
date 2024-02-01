import React from 'react';
import * as Bootstrap from 'react-bootstrap';
import { themes } from 'types';

interface ButtonProps extends React.ComponentProps<typeof Bootstrap.Button> {
  label: string;
  variant?: themes;
  disabled?: boolean;
  href?: string;
}

const Button = ({ label, variant, disabled, href, ...rest }: ButtonProps) => {
  return (
    <Bootstrap.Button
      variant={variant || 'primary'}
      disabled={disabled}
      href={href}
      {...rest}
    >
      {label}
    </Bootstrap.Button>
  );
};

export default Button;
