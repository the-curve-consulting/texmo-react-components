import React from 'react';
export interface LayoutProps extends React.HTMLProps<HTMLDivElement> {
}
declare const Layout: {
    ({ className, children, ...rest }: LayoutProps): React.JSX.Element;
    Brand: ({ ...rest }: import("./components/LayoutBrand").LayoutBrandProps) => React.JSX.Element;
    Container: ({ className, children, ...rest }: import("./components/LayoutContainer").LayoutContainerProps) => React.JSX.Element;
    Main: ({ className, children, ...rest }: import("./components/LayoutMain").LayoutMainProps) => React.JSX.Element;
};
export default Layout;
//# sourceMappingURL=Layout.d.ts.map