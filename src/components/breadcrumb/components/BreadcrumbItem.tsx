import React from 'react';

export interface BreadcrumbItemProps extends React.HTMLProps<HTMLSpanElement> {
  text: string;
  active: boolean;
  href: string;
}

const BreadcrumbItem = ({
  text,
  active,
  href,
  className,
  ...rest
}: BreadcrumbItemProps) => {
  if (active) {
    return (
      <span className={className} {...rest}>
        {text}
      </span>
    );
  }

  return (
    <span className={className} {...rest}>
      <a className="breadcrumb-item" href={href}>
        {text}
      </a>
    </span>
  );
};

export default BreadcrumbItem;
