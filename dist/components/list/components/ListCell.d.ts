import React from 'react';
export interface ListCellProps extends React.HTMLProps<HTMLDivElement> {
    borderStart?: boolean;
    background?: string;
}
declare const ListCell: ({ borderStart, className, children, background, ...rest }: ListCellProps) => React.JSX.Element;
export default ListCell;
//# sourceMappingURL=ListCell.d.ts.map