import React from 'react';
import * as Bootstrap from 'react-bootstrap';

export interface ListColProps extends Bootstrap.ColProps {
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
    <Bootstrap.Col xs="2" className={`px-0 ${border} ${className}`} {...rest}>
      {children}
    </Bootstrap.Col>
  );
};

export default ListCol;
