import React from 'react';
import { TableProps as BootstrapTableProps } from 'react-bootstrap';
interface TableProps extends BootstrapTableProps {
}
declare const Table: {
    ({ className, children, ...rest }: TableProps): React.JSX.Element;
    Head: ({ children, ...rest }: import("./components/TableHead").TableHeadProps) => React.JSX.Element;
    Row: ({ className, children, ...rest }: import("./components/TableRow").TableRowProps) => React.JSX.Element;
    Cell: ({ className, children, ...rest }: import("./components/TableCell").TableCellProps) => React.JSX.Element;
    Body: ({ children, ...rest }: import("./components/TableBody").TableBodyProps) => React.JSX.Element;
};
export default Table;
//# sourceMappingURL=Table.d.ts.map