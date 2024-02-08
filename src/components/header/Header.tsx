import React from 'react';
import * as Bootstrap from 'react-bootstrap';
import HeaderBrand from './components/HeaderBrand';
import HeaderDropdown from './components/HeaderDropdown';
import HeaderNavbar from './components/HeaderNavbar';

export interface HeaderProps extends Bootstrap.NavbarProps {
  container?: Bootstrap.ContainerProps;
}

const Header = ({ container, children, ...rest }: HeaderProps) => {
  return (
    <header>
      <Bootstrap.Navbar expand="md" {...rest}>
        <Bootstrap.Container fluid className="px-4" {...container}>
          {children}
        </Bootstrap.Container>
      </Bootstrap.Navbar>
    </header>
  );
};

Header.Brand = HeaderBrand;
Header.Dropdown = HeaderDropdown;
Header.Navbar = HeaderNavbar;

export default Header;
