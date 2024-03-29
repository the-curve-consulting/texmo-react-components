import React from 'react';

export interface TableRowProps extends React.HTMLProps<HTMLTableRowElement> {
  borderColour?: string;
}

const TableRow = ({
  borderColour,
  className,
  style,
  children,
  ...rest
}: TableRowProps) => {
  return (
    <tr
      className={`table-responsive text-center h-100 mt-3 mx-0 ${className}`}
      style={{ border: `2px solid ${borderColour}`, ...style }}
      {...rest}
    >
      {children}
    </tr>
  );
};

export default TableRow;
