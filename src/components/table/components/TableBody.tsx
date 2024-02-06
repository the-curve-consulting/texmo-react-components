import React from 'react';
import TableSectionContext, { TableSection } from '../TableSectionContext';

export interface TableBodyProps
  extends React.HTMLProps<HTMLTableSectionElement> {}

const TableBody = ({ children, ...rest }: TableBodyProps) => {
  return (
    <tbody {...rest}>
      <TableSectionContext.Provider value={TableSection.BODY}>
        {children}
      </TableSectionContext.Provider>
    </tbody>
  );
};

export default TableBody;
