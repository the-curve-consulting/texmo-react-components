import React from 'react';
import * as Bootstrap from 'react-bootstrap';

interface CardProps extends Bootstrap.CardProps {
  header?: string;
}

const Button = ({ header, children, className, ...rest }: CardProps) => {
  return (
    <Bootstrap.Card {...rest}>
      <h3 className={`mb-3 card-header + ${className}`}>{header}</h3>
      {children}
    </Bootstrap.Card>
  );
};

export default Button;
