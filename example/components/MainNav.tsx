import { NavLink } from 'react-router-dom';
import { NavItem, NavContext } from '@the-curve-consulting/texmo-react-components';

export interface NavItemProps {
  route: string;
  label: string;
  icon: string;
}

const Navbar = () => {
  return (
    <NavContext.Provider value={NavLink}>
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
    </NavContext.Provider>
  )
}

export default Navbar;
