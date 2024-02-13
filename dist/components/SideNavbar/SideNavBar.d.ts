import React from 'react';
export interface SideNavbarProps extends React.HTMLProps<HTMLDivElement> {
}
declare const SideNavbar: {
    ({ className, children, ...rest }: SideNavbarProps): React.JSX.Element;
    Item: ({ route, label, icon }: import("./components/NavItem").NavItemProps) => React.JSX.Element;
};
export default SideNavbar;
//# sourceMappingURL=SideNavBar.d.ts.map