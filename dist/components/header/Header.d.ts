import React from 'react';
import { NavbarProps, ContainerProps } from 'react-bootstrap';
export interface HeaderProps extends NavbarProps {
    container?: ContainerProps;
}
declare const Header: {
    ({ container, children, ...rest }: HeaderProps): React.JSX.Element;
    Brand: ({ children }: import("./components/HeaderBrand").HeaderBrandProps) => React.JSX.Element;
    Dropdown: {
        ({ children }: import("./components/HeaderDropdown").HeaderDropDownProps): React.JSX.Element;
        Item: ({ children, ...rest }: import("./components/dropdown/DropdownItem").DropdownItemProps) => React.JSX.Element;
        Menu: ({ children, ...rest }: import("./components/dropdown/DropdownMenu").DropdownMenuProps) => React.JSX.Element;
        Toggle: ({ className, children }: import("./components/dropdown/DropdownToggle").DropdownToggleProps) => React.JSX.Element;
    };
    Navbar: ({ children }: import("./components/HeaderNavbar").HeaderNavbarProps) => React.JSX.Element;
};
export default Header;
//# sourceMappingURL=Header.d.ts.map