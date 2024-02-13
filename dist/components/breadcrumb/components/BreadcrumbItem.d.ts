import React from 'react';
export interface BreadcrumbItemProps extends React.HTMLProps<HTMLSpanElement> {
    text: string;
    active: boolean;
    href: string;
}
declare const BreadcrumbItem: ({ text, active, href, className, ...rest }: BreadcrumbItemProps) => React.JSX.Element;
export default BreadcrumbItem;
//# sourceMappingURL=BreadcrumbItem.d.ts.map