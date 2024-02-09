import React from 'react';
import { Nav, Navbar, Offcanvas } from 'react-bootstrap';

export interface HeaderNavbarProps extends React.HTMLProps<HTMLBaseElement> {}

const HeaderNavbar = ({ children }: HeaderNavbarProps) => {
  return (
    <Nav className="ms-auto">
      <Navbar.Toggle />
      <Navbar.Offcanvas placement="start" className="d-md-none bg-light">
        <Offcanvas.Header closeButton className="justify-content-end" />
        <Offcanvas.Body className="d-flex flex-column">
          {children}
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Nav>
  );
};

export default HeaderNavbar;
