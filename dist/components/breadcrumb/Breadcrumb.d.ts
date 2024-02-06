import React from 'react';
import { Link } from 'react-router-dom';
interface BreadcrumbProps extends React.HTMLProps<HTMLHeadingElement> {
    link: typeof Link;
}
declare const Breadcrumb: {
    ({ link, children, ...rest }: BreadcrumbProps): React.JSX.Element;
    Item: ({ text, active, route, showSlash, className, ...rest }: import("./components/BreadcrumbItem").BreadcrumbItemProps) => React.JSX.Element;
};
export default Breadcrumb;
//# sourceMappingURL=Breadcrumb.d.ts.map