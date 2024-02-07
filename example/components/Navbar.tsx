import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { SideNavbar } from '@the-curve-consulting/texmo-react-components';

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

const Navbar = () => {
  return (
    <SideNavbar>
      <NavItem 
        route={'/'} 
        icon={'house'}
        label={'Home'}
      />
      <NavItem
        route={'/form'} 
        icon={'ui-checks'}
        label={'Form'}
      />
      <NavItem
        route={'/list'} 
        icon={'list-task'}
        label={'List'}
      />
    </SideNavbar>
  )
}

export default Navbar;
