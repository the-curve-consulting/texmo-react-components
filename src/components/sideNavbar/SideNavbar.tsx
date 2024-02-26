import React from 'react';

export interface SideNavbarProps extends React.HTMLProps<HTMLDivElement> {}

const SideNavbar = ({ className, children, ...rest }: SideNavbarProps) => {
  return (
    <div
      className={`d-none d-md-flex flex-column flex-shrink-0 sticky-top p-3 side-navbar ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default SideNavbar;
