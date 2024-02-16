import React from 'react';
import BreadcrumbItem from './components/BreadcrumbItem';
import { Link } from 'react-router-dom';
import BreadcrumbContext from './BreadCrumbContext';

interface BreadcrumbProps extends React.HTMLProps<HTMLHeadingElement> {
  link: typeof Link;
}

const Breadcrumb = ({ link, children, ...rest }: BreadcrumbProps) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <h5 {...rest}>
      <BreadcrumbContext.Provider value={link}>
        {childrenArray.map((child, index) => {
          const childElement = child as React.ReactElement;

          return React.cloneElement(childElement, {
            key: index,
            showSlash: index !== 0,
          });
        })}
      </BreadcrumbContext.Provider>
    </h5>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
