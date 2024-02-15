import React, { useState } from 'react';
import NavContext from './NavContext';
import { NavLink } from 'react-router-dom';
import NavItem from './components/NavItem';
import {
  Nav as BootstrapNav,
  NavProps as BootstrapNavProps,
} from 'react-bootstrap';

export interface NavProps extends BootstrapNavProps {
  navLink: typeof NavLink;
}

const Nav = ({ navLink, className, children, ...rest }: NavProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <BootstrapNav
      navbar={false}
      variant="pills"
      className={`${className} flex-column mb-auto mx-auto text-center main-nav side-navbar ${
        isOpen ? 'side-navbar-open' : ''
      }`}
      {...rest}
    >
      <NavContext.Provider value={{ navLink, open: isOpen }}>
        <div
          className={`sidenav-item open-container ${
            isOpen ? 'open-container-opened' : ''
          }`}
        >
          <div className="open-dummy opened" />
          <div
            className="open-content nav-menu nav-item-menu-icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="h-100 p-2 d-flex justify-content-center align-items-center">
              <i className="h-100 bi bi-list fs-2"></i>
            </div>
          </div>
        </div>

        {children}
      </NavContext.Provider>
    </BootstrapNav>
  );
};

Nav.Item = NavItem;

export default Nav;
