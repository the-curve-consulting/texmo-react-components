import React from 'react';
import TableSectionContext, { TableSection } from '../TableSectionContext';

export interface TableHeadProps
  extends React.HTMLProps<HTMLTableSectionElement> {}

const TableHead = ({ children, ...rest }: TableHeadProps) => {
  return (
    <TableSectionContext.Provider value={TableSection.HEAD}>
      <thead {...rest}>{children}</thead>
    </TableSectionContext.Provider>
  );
};

export default TableHead;
