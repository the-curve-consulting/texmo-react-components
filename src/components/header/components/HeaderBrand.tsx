import React from 'react';
import * as Bootstrap from 'react-bootstrap';

export interface HeaderBrandProps extends Bootstrap.NavbarBrandProps {}

const HeaderBrand = ({ children }: HeaderBrandProps) => {
  return <Bootstrap.Navbar.Brand>{children}</Bootstrap.Navbar.Brand>;
};

export default HeaderBrand;
