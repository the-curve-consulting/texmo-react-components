import React from 'react';
import HeaderDropdown from './components/HeaderDropdown';
import HeaderNavbar from './components/HeaderNavbar';
import { NavbarProps, Navbar } from 'react-bootstrap';

export interface HeaderProps extends NavbarProps {}

const Header = ({ children, ...rest }: HeaderProps) => {
  return (
    <header>
      <Navbar expand="md" className="py-0" {...rest}>
        <div className="py-2 header-container w-100">
          <div className="d-flex justify-content-end h-100 w-100">
            {children}
          </div>
        </div>
      </Navbar>
    </header>
  );
};

Header.Dropdown = HeaderDropdown;
Header.Navbar = HeaderNavbar;

export default Header;
