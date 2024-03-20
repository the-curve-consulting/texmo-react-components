import React, { PropsWithChildren, useState } from 'react';
import NavContext from './NavContext';

export const NavContextProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openHandler = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <NavContext.Provider value={{ open: isOpen, setOpen: openHandler }}>
      {children}
    </NavContext.Provider>
  );
};
