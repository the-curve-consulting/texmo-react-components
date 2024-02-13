import React from 'react';

export interface BreadcrumbItemProps extends React.HTMLProps<HTMLSpanElement> {
  text: string;
  active: boolean;
  route?: string;
  showSlash: boolean;
}

const BreadcrumbItem = ({
  text,
  active,
  route,
  showSlash,
  className,
  ...rest
}: BreadcrumbItemProps) => {
  if (active) {
    return (
      <span className={`gray-text ${className}`} {...rest}>
        {showSlash ? ' / ' : null}
        {text}
      </span>
    );
  }

  const baseUrl = window.location.origin;

  return (
    <span className={className} {...rest}>
      {showSlash ? ' / ' : null}
      <a className="breadcrumb-item" href={`${baseUrl}${route}`}>
        {text}
      </a>
    </span>
  );
};

export default BreadcrumbItem;
