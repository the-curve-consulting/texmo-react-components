import { createContext } from 'react';
import { NavLink } from 'react-router-dom';

export interface NavContextProps {
  navLink: typeof NavLink;
  open: boolean;
}

const NavContext = createContext<NavContextProps>({
  navLink: NavLink,
  open: false,
});

export default NavContext;
