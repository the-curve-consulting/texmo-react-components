import React from 'react';
import Nav from '../nav/Nav';
import NavItem from './components/NavItem';

export interface SideNavbarProps extends React.HTMLProps<HTMLDivElement> {}

const SideNavbar = ({ className, children, ...rest }: SideNavbarProps) => {
  return (
    <div
      className={`d-none d-md-flex flex-column flex-shrink-0 sticky-top sidebar-bg-grey p-3 ${className}`}
      {...rest}
    >
      <Nav>{children}</Nav>
    </div>
  );
};

SideNavbar.Item = NavItem;

export default SideNavbar;
