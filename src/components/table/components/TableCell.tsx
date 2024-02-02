import React, { useContext } from 'react';
import TableSectionContext, { TableSection } from '../TableSectionContext';

export interface TableCellProps extends React.HTMLProps<HTMLTableCellElement> {}

const TableCell = ({ className, children, ...rest }: TableCellProps) => {
  const section = useContext(TableSectionContext);

  switch (section) {
    case TableSection.HEAD:
      return (
        <th scope="col" className={className} {...rest}>
          {children}
        </th>
      );
    case TableSection.BODY:
    case TableSection.NONE:
    default:
      return (
        <td className={className} {...rest}>
          {children}
        </td>
      );
  }
};

export default TableCell;
