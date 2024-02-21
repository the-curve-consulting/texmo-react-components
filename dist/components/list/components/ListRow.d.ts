import React from 'react';
import { RowProps } from 'react-bootstrap';
export interface ListRowProps extends RowProps {
    borderColour?: string;
}
declare const ListRow: ({ borderColour, children, ...rest }: ListRowProps) => React.JSX.Element;
export default ListRow;
//# sourceMappingURL=ListRow.d.ts.map