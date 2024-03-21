import React from 'react';
import { NavProps as BootstrapNavProps } from 'react-bootstrap';
export interface NavProps extends BootstrapNavProps {
}
declare const Nav: {
    ({ className, children, ...rest }: NavProps): React.JSX.Element;
    Item: ({ route, icon, text }: import("./components/NavItem").NavItemProps) => React.JSX.Element;
};
export default Nav;
//# sourceMappingURL=Nav.d.ts.map