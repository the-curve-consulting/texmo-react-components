// WIP

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export interface NavItemProps {
  route: string;
  label: string;
  icon: string;
}

const NavItem = ({ route, label, icon }: NavItemProps) => {
  const linkClass = (isActive: boolean): string => {
    return isActive ? 'nav-link active' : 'nav-link link-dark';
  };

  return (
    <Nav.Item>
      <NavLink to={route} className={({ isActive }) => linkClass(isActive)}>
        <i className={`bi bi-${icon} d-block`} />
        {label}
      </NavLink>
      <hr />
    </Nav.Item>
  );
};

export default NavItem;
