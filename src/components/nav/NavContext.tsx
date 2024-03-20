import { createContext, useContext } from 'react';

export interface NavContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const NavContext = createContext<NavContextProps>({
  open: false,
  setOpen() {},
});

export const useNavContext = () => useContext(NavContext);

export default NavContext;
