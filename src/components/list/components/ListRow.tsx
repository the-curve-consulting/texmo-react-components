import React from 'react';
import { RowProps, Row } from 'react-bootstrap';

export interface ListRowProps extends RowProps {}

const ListRow = ({ children, ...rest }: ListRowProps) => {
  return (
    <Row className="text-center mt-3" {...rest}>
      {children}
    </Row>
  );
};

export default ListRow;
