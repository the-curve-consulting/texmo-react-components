import React from 'react';

export interface TableRowProps extends React.HTMLProps<HTMLTableRowElement> {}

const TableRow = ({ className, children, ...rest }: TableRowProps) => {
  return (
    <tr className={`table-responsive + ${className}`} {...rest}>
      {children}
    </tr>
  );
};

export default TableRow;
