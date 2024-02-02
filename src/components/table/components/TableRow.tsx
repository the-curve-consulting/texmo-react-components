import React from 'react';

export interface TableRowProps extends React.HTMLProps<HTMLTableRowElement> {}

const TableRow = ({ children, ...rest }: TableRowProps) => {
  return (
    <tr className={'table-responsive'} {...rest}>
      {children}
    </tr>
  );
};

export default TableRow;
