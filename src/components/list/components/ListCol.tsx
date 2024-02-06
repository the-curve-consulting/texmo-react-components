import React from 'react';
import { ColProps, Col } from 'react-bootstrap';

export interface ListColProps extends ColProps {
  borderStart?: boolean;
}

const ListCol = ({ className, children, ...rest }: ListColProps) => {
  return (
    <Col className={`px-0 overflow-hidden ${className}`} {...rest}>
      {children}
    </Col>
  );
};

export default ListCol;
