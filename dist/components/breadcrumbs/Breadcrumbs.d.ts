import React from 'react';
import { Link } from 'react-router-dom';
interface BreadcrumbsProps extends React.HTMLProps<HTMLHeadingElement> {
    link: typeof Link;
}
declare const Breadcrumbs: {
    ({ className, link, children, ...rest }: BreadcrumbsProps): React.JSX.Element;
    Item: ({ text, active, route, showSlash, className, ...rest }: import("./components/BreadcrumbItem").BreadcrumbItemProps) => React.JSX.Element;
};
export default Breadcrumbs;
//# sourceMappingURL=Breadcrumbs.d.ts.map