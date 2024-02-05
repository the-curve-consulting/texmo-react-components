import React from 'react';

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  header?: string;
}

const Button = ({ header, children, className, ...rest }: CardProps) => {
  return (
    <div className={`card ${className}`} {...rest}>
      <h3 className="mb-3 card-header">{header}</h3>
      {children}
    </div>
  );
};

export default Button;
