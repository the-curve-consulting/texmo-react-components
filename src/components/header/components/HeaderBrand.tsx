import React from 'react';
import { NavbarBrandProps, Navbar } from 'react-bootstrap';

export interface HeaderBrandProps extends NavbarBrandProps {}

const HeaderBrand = ({ children }: HeaderBrandProps) => {
  return <Navbar.Brand>{children}</Navbar.Brand>;
};

export default HeaderBrand;
