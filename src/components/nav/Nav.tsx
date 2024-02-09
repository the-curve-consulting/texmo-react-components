import React from 'react';
import {
  Nav as BootstrapNav,
  NavProps as BootstrapNavProps,
} from 'react-bootstrap';

export interface NavProps extends BootstrapNavProps {}

const Nav = ({ className, children, ...rest }: NavProps) => {
  return (
    <BootstrapNav
      navbar={false}
      variant="pills"
      className={`flex-column mb-auto mx-auto text-center main-nav ${className}`}
      {...rest}
    >
      {children}
    </BootstrapNav>
  );
};

export default Nav;
