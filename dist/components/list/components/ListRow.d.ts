import React from 'react';
import { Themes } from 'types';
export interface ListRowProps extends React.HTMLProps<HTMLDivElement> {
    borderTheme?: Themes;
}
declare const ListRow: React.ForwardRefExoticComponent<Omit<ListRowProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default ListRow;
//# sourceMappingURL=ListRow.d.ts.map