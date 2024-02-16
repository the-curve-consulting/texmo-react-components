import React from 'react';
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
  return (
    <BootstrapNav
      navbar={false}
      variant="pills"
      className={`${className} flex-column mb-auto mx-auto text-center main-nav`}
      {...rest}
    >
      <NavContext.Provider value={navLink}>{children}</NavContext.Provider>
    </BootstrapNav>
  );
};

Nav.Item = NavItem;

export default Nav;
