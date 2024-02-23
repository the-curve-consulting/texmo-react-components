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
        label={'Home'}
      />
      <Nav.Item
        route={'/form'} 
        icon={'ui-checks'}
        label={'Form'}
      />
      <Nav.Item
        route={'/list'} 
        icon={'list-task'}
        label={'List'}
      />
    </Nav>
  )
}

export default Navbar;
