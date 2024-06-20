import React from 'react';
import { NavbarProps } from 'react-bootstrap';
export interface HeaderProps extends NavbarProps {
}
declare const Header: {
    ({ children, ...rest }: HeaderProps): React.JSX.Element;
    Dropdown: {
        ({ children }: import("./components/HeaderDropdown").HeaderDropDownProps): React.JSX.Element;
        Item: ({ children, ...rest }: import("./components/dropdown/DropdownItem").DropdownItemProps) => React.JSX.Element;
        Menu: ({ children, ...rest }: import("./components/dropdown/DropdownMenu").DropdownMenuProps) => React.JSX.Element;
        Toggle: ({ className }: import("./components/dropdown/DropdownToggle").DropdownToggleProps) => React.JSX.Element;
    };
    Navbar: ({ children }: import("./components/HeaderNavbar").HeaderNavbarProps) => React.JSX.Element;
};
export default Header;
//# sourceMappingURL=Header.d.ts.map