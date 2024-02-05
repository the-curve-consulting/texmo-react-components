import React from 'react';
import * as Bootstrap from 'react-bootstrap';
export interface TableProps extends React.ComponentProps<typeof Bootstrap.Table> {
    children: React.ReactNode;
}
declare const Table: ({ children, ...rest }: TableProps) => React.JSX.Element;
export default Table;
//# sourceMappingURL=Table.d.ts.map