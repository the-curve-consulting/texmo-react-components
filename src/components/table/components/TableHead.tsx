import React from 'react';
import TableSectionContext, { TableSection } from '../TableSectionContext';

interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const TableHead = ({ children, ...rest }: TableHeadProps) => {
  return (
    <TableSectionContext.Provider value={TableSection.HEAD}>
      <thead {...rest}>{children}</thead>
    </TableSectionContext.Provider>
  );
};

export default TableHead;
