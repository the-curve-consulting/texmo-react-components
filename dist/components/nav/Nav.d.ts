import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavProps as BootstrapNavProps } from 'react-bootstrap';
export interface NavProps extends BootstrapNavProps {
    navLink: typeof NavLink;
}
declare const Nav: {
    ({ navLink, className, children, ...rest }: NavProps): React.JSX.Element;
    Item: ({ route, icon }: import("./components/NavItem").NavItemProps) => React.JSX.Element;
};
export default Nav;
//# sourceMappingURL=Nav.d.ts.map