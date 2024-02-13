import React from 'react';
import BreadcrumbItem from './components/BreadcrumbItem';

interface BreadcrumbProps extends React.HTMLProps<HTMLHeadingElement> {}

const Breadcrumb = ({ children, ...rest }: BreadcrumbProps) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <h5 {...rest}>
      {childrenArray.map((child, index) => {
        const childElement = child as React.ReactElement;

        return React.cloneElement(childElement, {
          key: index,
          showSlash: index !== 0,
        });
      })}
    </h5>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
