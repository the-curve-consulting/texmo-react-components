import { createContext } from 'react';
import { NavLink } from 'react-router-dom';

const NavContext = createContext<typeof NavLink>(NavLink);

export default NavContext;
