import React from 'react';
import { RowProps, Row } from 'react-bootstrap';

export interface ListRowProps extends RowProps {}

const ListRow = ({ children, ...rest }: ListRowProps) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <Row className="text-center mt-3" {...rest}>
      {childrenArray.map((child, index) => {
        const childElement = child as React.ReactElement;

        return React.cloneElement(childElement, {
          key: index,
          borderStart: index !== 0,
        });
      })}
    </Row>
  );
};

export default ListRow;
