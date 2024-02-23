import { Nav } from '@the-curve-consulting/texmo-react-components';
import { NavLink } from 'react-router-dom';

export interface NavItemProps {
  route: string;
  label: string;
  icon: string;
}

const Navbar = () => {
  return (
    <Nav navLink={NavLink}>
      <Nav.Item
        route={'/'} 
        icon={'house'}
      />
      <Nav.Item
        route={'/form'} 
        icon={'ui-checks'}
      />
      <Nav.Item
        route={'/list'} 
        icon={'list-task'}
      />
      <Nav.Item
        route={'/table'} 
        icon={'table'}
      />
    </Nav>
  )
}

export default Navbar;
