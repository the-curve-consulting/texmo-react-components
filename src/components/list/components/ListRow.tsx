import React from 'react';
import { RowProps, Row } from 'react-bootstrap';

export interface ListRowProps extends RowProps {
  borderColour?: string;
}

const ListRow = ({
  className,
  style,
  borderColour,
  children,
  ...rest
}: ListRowProps) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <Row
      className={`${className} text-center mt-3 mx-0 list-row`}
      style={{ border: `2px solid ${borderColour}`, ...style }}
      {...rest}
    >
      {childrenArray.map((child, index) => {
        const childElement = child as React.ReactElement;

        return React.cloneElement(childElement, {
          borderStart: index !== 0,
        });
      })}
    </Row>
  );
};

export default ListRow;
