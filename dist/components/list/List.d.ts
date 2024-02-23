import React from 'react';
interface ListProps extends React.HTMLProps<HTMLDivElement> {
}
declare const List: {
    ({ className, children, ...rest }: ListProps): React.JSX.Element;
    Head: ({ className, children, ...rest }: import("./components/ListHead").ListHeadProps) => React.JSX.Element;
    Cell: ({ borderStart, className, children, background, ...rest }: import("./components/ListCell").ListCellProps) => React.JSX.Element;
    Row: React.ForwardRefExoticComponent<Omit<import("./components/ListRow").ListRowProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Col: ({ className, children, ...rest }: import("./components/ListCol").ListColProps) => React.JSX.Element;
    Body: ({ children, ...rest }: import("./components/ListBody").ListBodyProps) => React.JSX.Element;
};
export default List;
//# sourceMappingURL=List.d.ts.map