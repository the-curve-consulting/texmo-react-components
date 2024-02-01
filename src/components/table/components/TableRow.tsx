import React from 'react';

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

const TableRow = ({ children, ...rest }: TableRowProps) => {
  return (
    <tr className={'table-responsive'} {...rest}>
      {children}
    </tr>
  );
};

export default TableRow;
