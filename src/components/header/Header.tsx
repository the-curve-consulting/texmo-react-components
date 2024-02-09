import React from 'react';
import HeaderBrand from './components/HeaderBrand';
import HeaderDropdown from './components/HeaderDropdown';
import HeaderNavbar from './components/HeaderNavbar';
import {
  NavbarProps,
  ContainerProps,
  Navbar,
  Container,
} from 'react-bootstrap';

export interface HeaderProps extends NavbarProps {
  container?: ContainerProps;
}

const Header = ({ container, children, ...rest }: HeaderProps) => {
  return (
    <header>
      <Navbar expand="md" {...rest}>
        <Container fluid className="px-4" {...container}>
          {children}
        </Container>
      </Navbar>
    </header>
  );
};

Header.Brand = HeaderBrand;
Header.Dropdown = HeaderDropdown;
Header.Navbar = HeaderNavbar;

export default Header;
