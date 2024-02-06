import React from 'react';
import NavItem from './components/NavItem';
import {
  Nav as BootstrapNav,
  NavProps as BootstrapNavProps,
} from 'react-bootstrap';
import NavButton from './components/NavButton';
import classNames from 'classnames';

export interface NavProps extends BootstrapNavProps {}

const Nav = ({ className, children, ...rest }: NavProps) => {
  return (
    <BootstrapNav
      navbar={false}
      variant="pills"
      className={classNames('flex-column main-nav side-navbar', className)}
      {...rest}
    >
      <NavButton />

      {children}
    </BootstrapNav>
  );
};

Nav.Item = NavItem;

export default Nav;
