import NavContext from 'components/nav/NavContext';
import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';

export interface NavItemProps {
  route: string;
  icon: string;
}

const NavItem = ({ route, icon }: NavItemProps) => {
  const NavLink = useContext(NavContext);

  const linkClass = (isActive: boolean): string => {
    return isActive ? 'nav-link active' : 'nav-link link-dark';
  };

  return (
    <Nav.Item>
      <NavLink to={route} className={({ isActive }) => linkClass(isActive)}>
        <i className={`p-0 fs-1 bi bi-${icon} d-block`} />
      </NavLink>
      <hr />
    </Nav.Item>
  );
};

export default NavItem;
