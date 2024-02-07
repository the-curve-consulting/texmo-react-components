import React from 'react';
import * as Bootstrap from 'react-bootstrap';

export interface ListRowProps extends React.HTMLProps<HTMLDivElement> {}

const ListRow = ({ children, ...rest }: ListRowProps) => {
  return (
    <div {...rest}>
      <Bootstrap.Row className="text-center">{children}</Bootstrap.Row>
    </div>
  );
};

export default ListRow;
