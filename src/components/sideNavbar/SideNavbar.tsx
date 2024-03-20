import classNames from 'classnames';
// import { useNavContext } from 'components/nav/NavContext';
import React from 'react';

export interface SideNavbarProps extends React.HTMLProps<HTMLDivElement> {}

const SideNavbar = ({ className, children, ...rest }: SideNavbarProps) => {
  // const { open } = useNavContext();

  return (
    <div
      className={classNames(
        'd-none d-md-flex flex-column side-navbar-container',
        className,
        'col-auto'
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default SideNavbar;
