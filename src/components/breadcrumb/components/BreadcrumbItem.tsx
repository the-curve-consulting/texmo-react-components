import React, { useContext } from 'react';
import BreadcrumbContext from '../BreadCrumbContext';

export interface BreadcrumbItemProps extends React.HTMLProps<HTMLSpanElement> {
  text: string;
  active?: boolean;
  route?: string;
  showSlash?: boolean;
}

const BreadcrumbItem = ({
  text,
  active,
  route,
  showSlash,
  className,
  ...rest
}: BreadcrumbItemProps) => {
  const Link = useContext(BreadcrumbContext);

  if (active) {
    return (
      <span className={`gray-text ${className}`} {...rest}>
        {showSlash ? ' / ' : null}
        {text}
      </span>
    );
  }

  return (
    <span className={className} {...rest}>
      {showSlash ? ' / ' : null}
      {route ? (
        <Link className="breadcrumb-item" to={route}>
          {text}
        </Link>
      ) : (
        text
      )}
    </span>
  );
};

export default BreadcrumbItem;
