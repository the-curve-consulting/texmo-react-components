import React from 'react';
export interface BreadcrumbItemProps extends React.HTMLProps<HTMLSpanElement> {
    text: string;
    active: boolean;
    route: string;
}
declare const BreadcrumbItem: ({ text, active, route, className, ...rest }: BreadcrumbItemProps) => React.JSX.Element;
export default BreadcrumbItem;
//# sourceMappingURL=BreadcrumbItem.d.ts.map