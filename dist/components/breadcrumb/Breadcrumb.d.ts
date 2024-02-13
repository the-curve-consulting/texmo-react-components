import React from 'react';
interface BreadcrumbProps extends React.HTMLProps<HTMLHeadingElement> {
}
declare const Breadcrumb: {
    ({ children, ...rest }: BreadcrumbProps): React.JSX.Element;
    Item: ({ text, active, route, showSlash, className, ...rest }: import("./components/BreadcrumbItem").BreadcrumbItemProps) => React.JSX.Element;
};
export default Breadcrumb;
//# sourceMappingURL=Breadcrumb.d.ts.map