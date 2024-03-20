import React from 'react';
import BreadcrumbItem from './components/BreadcrumbItem';
import { Link } from 'react-router-dom';
import BreadcrumbsContext from './BreadCrumbsContext';

interface BreadcrumbsProps extends React.HTMLProps<HTMLHeadingElement> {
  link: typeof Link;
}

const Breadcrumbs = ({
  className,
  link,
  children,
  ...rest
}: BreadcrumbsProps) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <p className={`${className} breadcrumbs-container`} {...rest}>
      <BreadcrumbsContext.Provider value={link}>
        {childrenArray.map((child, index) => {
          const childElement = child as React.ReactElement;

          return React.cloneElement(childElement, {
            key: index,
            showSlash: index !== 0,
          });
        })}
      </BreadcrumbsContext.Provider>
    </p>
  );
};

Breadcrumbs.Item = BreadcrumbItem;

export default Breadcrumbs;
