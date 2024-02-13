import React from 'react';
export interface ListCellProps extends React.HTMLProps<HTMLDivElement> {
    borderStart?: boolean;
}
declare const ListCell: ({ borderStart, className, children, ...rest }: ListCellProps) => React.JSX.Element;
export default ListCell;
//# sourceMappingURL=ListCell.d.ts.map