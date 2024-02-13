import React from 'react';
import BreadcrumbItem, {
  BreadcrumbItemProps,
} from './components/BreadcrumbItem';

interface BreadcrumbProps extends React.HTMLProps<HTMLHeadingElement> {}

const Breadcrumb = ({ children, ...rest }: BreadcrumbProps) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <h5 {...rest}>
      {childrenArray.map((child, index) => {
        const childElement = child as React.ReactElement;
        const childProps = childElement.props as BreadcrumbItemProps;

        const isActive = childProps.active;

        let className = childProps.className;
        if (isActive) {
          className = `${className} gray-text`;
        }

        let text = childProps.text;
        if (index > 0) {
          text = ` / ${text}`;
        }

        return React.cloneElement(childElement, {
          text,
          className,
          key: index,
        });
      })}
    </h5>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
