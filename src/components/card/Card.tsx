import React from 'react';
import {
  Card as BootstrapCard,
  CardProps as BootstrapCardProps,
} from 'react-bootstrap';

interface CardProps extends BootstrapCardProps {
  header?: string;
}

const Card = ({ header, children, className, ...rest }: CardProps) => {
  return (
    <BootstrapCard {...rest}>
      <h3 className={`mb-3 card-header + ${className}`}>{header}</h3>
      {children}
    </BootstrapCard>
  );
};

export default Card;
