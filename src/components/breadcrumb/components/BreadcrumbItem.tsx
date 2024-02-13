import React from 'react';

export interface BreadcrumbItemProps extends React.HTMLProps<HTMLSpanElement> {
  text: string;
  active: boolean;
  route: string;
}

const BreadcrumbItem = ({
  text,
  active,
  route,
  className,
  ...rest
}: BreadcrumbItemProps) => {
  if (active) {
    return (
      <span className={`gray-text ${className}`} {...rest}>
        {text}
      </span>
    );
  }

  const baseUrl = window.location.origin;

  return (
    <span className={className} {...rest}>
      <a className="breadcrumb-item" href={`${baseUrl}${route}`}>
        {text}
      </a>
    </span>
  );
};

export default BreadcrumbItem;
