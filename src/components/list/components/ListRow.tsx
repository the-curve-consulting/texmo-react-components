import React from 'react';
import * as Bootstrap from 'react-bootstrap';

export interface ListRowProps extends Bootstrap.RowProps {}

const ListRow = ({ children, ...rest }: ListRowProps) => {
  return (
    <Bootstrap.Row className="text-center mt-3" {...rest}>
      {children}
    </Bootstrap.Row>
  );
};

export default ListRow;
