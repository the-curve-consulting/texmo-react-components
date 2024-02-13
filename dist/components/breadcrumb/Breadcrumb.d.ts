import React from 'react';
import { BreadcrumbItemProps } from './components/BreadcrumbItem';
interface BreadcrumbProps extends React.HTMLProps<HTMLHeadingElement> {
}
declare const Breadcrumb: {
    ({ children, ...rest }: BreadcrumbProps): React.JSX.Element;
    Item: ({ text, active, href, className, ...rest }: BreadcrumbItemProps) => React.JSX.Element;
};
export default Breadcrumb;
//# sourceMappingURL=Breadcrumb.d.ts.map