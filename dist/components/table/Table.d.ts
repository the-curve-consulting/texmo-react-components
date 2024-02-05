import React from 'react';
import * as Bootstrap from 'react-bootstrap';
interface TableProps extends Bootstrap.TableProps {
}
declare class Table extends React.PureComponent<TableProps> {
    static Head: ({ children, ...rest }: import("./components/TableHead").TableHeadProps) => React.JSX.Element;
    static Row: ({ className, children, ...rest }: import("./components/TableRow").TableRowProps) => React.JSX.Element;
    static Cell: ({ className, children, ...rest }: import("./components/TableCell").TableCellProps) => React.JSX.Element;
    static Body: ({ children, ...rest }: import("./components/TableBody").TableBodyProps) => React.JSX.Element;
    render(): React.JSX.Element;
}
export default Table;
//# sourceMappingURL=Table.d.ts.map