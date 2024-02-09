import React from 'react';
import { ColProps, Col } from 'react-bootstrap';

export interface ListColProps extends ColProps {
  borderStart?: boolean;
}

const ListCol = ({
  borderStart,
  className,
  children,
  ...rest
}: ListColProps) => {
  const border = borderStart ? 'border-start' : undefined;

  return (
    <Col className={`px-0 ${border} ${className}`} {...rest}>
      {children}
    </Col>
  );
};

export default ListCol;
