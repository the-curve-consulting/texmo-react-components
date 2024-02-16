import NavContext from 'components/nav/NavContext';
import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';

export interface NavItemProps {
  route: string;
  label: string;
  icon: string;
}

const NavItem = ({ route, label, icon }: NavItemProps) => {
  const NavLink = useContext(NavContext);

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
