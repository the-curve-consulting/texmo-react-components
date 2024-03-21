import { Nav } from '@the-curve-consulting/texmo-react-components';

export interface NavItemProps {
  route: string;
  label: string;
  icon: string;
}

// TODO: Sort navlink context

const Navbar = () => {
  return (
    <Nav>
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
      <Nav.Item
        route="/table"
        icon='users2'
        text='Work Requests'
      />
    </Nav>
  )
}

export default Navbar;
