import React, { PropsWithChildren, createContext, useContext } from 'react';
import { NavLink } from 'react-router-dom';

type TexmoContextValue = {
  navLink: typeof NavLink;
};

const TexmoContext = createContext<TexmoContextValue>({} as TexmoContextValue);

const TexmoProvider = ({
  children,
  ...value
}: PropsWithChildren<TexmoContextValue>) => {
  return (
    <TexmoContext.Provider value={value}>{children}</TexmoContext.Provider>
  );
};

export const useTexmoContext = () => useContext(TexmoContext);

export default TexmoProvider;
