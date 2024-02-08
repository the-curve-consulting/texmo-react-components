import React from 'react';
import * as Bootstrap from 'react-bootstrap';

export interface NavProps extends Bootstrap.NavProps {}

const Nav = ({ className, children, ...rest }: NavProps) => {
  return (
    <Bootstrap.Nav
      navbar={false}
      variant="pills"
      className={`flex-column mb-auto mx-auto text-center main-nav ${className}`}
      {...rest}
    >
      {children}
    </Bootstrap.Nav>
  );
};

export default Nav;
