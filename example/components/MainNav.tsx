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
        icon='assets'
        text='Dashboard'
      />
      <Nav.Item
        route={'/form'}
        icon='checklist' 
        text='Form'
      />
      <Nav.Item
        route={'/list'}
        icon='stock-management'
        text='List'
      />
    </Nav>
  )
}

export default Navbar;
