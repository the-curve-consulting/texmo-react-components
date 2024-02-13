import React from 'react';
import { ColProps } from 'react-bootstrap';
export interface ListColProps extends ColProps {
    borderStart?: boolean;
}
declare const ListCol: ({ className, children, ...rest }: ListColProps) => React.JSX.Element;
export default ListCol;
//# sourceMappingURL=ListCol.d.ts.map