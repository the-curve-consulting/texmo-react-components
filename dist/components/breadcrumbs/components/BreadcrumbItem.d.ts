import React from 'react';
export interface BreadcrumbItemProps extends React.HTMLProps<HTMLSpanElement> {
    text: string;
    active?: boolean;
    route?: string;
    showSlash?: boolean;
}
declare const BreadcrumbItem: ({ text, active, route, showSlash, className, ...rest }: BreadcrumbItemProps) => React.JSX.Element;
export default BreadcrumbItem;
//# sourceMappingURL=BreadcrumbItem.d.ts.map