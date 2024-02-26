import React from 'react';
export interface ListRowProps extends React.HTMLProps<HTMLDivElement> {
    overdue?: boolean;
}
declare const ListRow: React.ForwardRefExoticComponent<Omit<ListRowProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default ListRow;
//# sourceMappingURL=ListRow.d.ts.map