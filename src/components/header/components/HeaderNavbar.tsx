import React from 'react';
import * as Bootstrap from 'react-bootstrap';

export interface HeaderNavbarProps extends React.HTMLProps<HTMLBaseElement> {}

const HeaderNavbar = ({ children }: HeaderNavbarProps) => {
  return (
    <Bootstrap.Nav className="ms-auto">
      <Bootstrap.Navbar.Toggle />
      <Bootstrap.Navbar.Offcanvas
        placement="start"
        className="d-md-none bg-light"
      >
        <Bootstrap.Offcanvas.Header
          closeButton
          className="justify-content-end"
        />
        <Bootstrap.Offcanvas.Body className="d-flex flex-column">
          {children}
        </Bootstrap.Offcanvas.Body>
      </Bootstrap.Navbar.Offcanvas>
    </Bootstrap.Nav>
  );
};

export default HeaderNavbar;
