import React from 'react';
import {
  DropdownToggle as BootstrapDropdownToggle,
  DropdownToggleProps as BootstrapDropdownToggleProps,
  NavLink,
} from 'react-bootstrap';

export interface DropdownToggleProps extends BootstrapDropdownToggleProps {}

const DropdownToggle = ({ className, children }: DropdownToggleProps) => {
  return (
    <BootstrapDropdownToggle
      as={NavLink}
      className={`d-flex align-items-center ${className}`}
    >
      {children}
    </BootstrapDropdownToggle>
  );
};

export default DropdownToggle;
