import React from 'react';
export interface TableCellProps extends React.HTMLProps<HTMLTableCellElement> {
    borderStart?: boolean;
}
declare const TableCell: ({ borderStart, className, children, ...rest }: TableCellProps) => React.JSX.Element;
export default TableCell;
//# sourceMappingURL=TableCell.d.ts.map