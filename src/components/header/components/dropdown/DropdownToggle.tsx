import React from 'react';
import {
  DropdownToggle as BootstrapDropdownToggle,
  DropdownToggleProps as BootstrapDropdownToggleProps,
  NavLink,
} from 'react-bootstrap';

export interface DropdownToggleProps extends BootstrapDropdownToggleProps {}

const DropdownToggle = ({ className }: DropdownToggleProps) => {
  return (
    <BootstrapDropdownToggle
      as={NavLink}
      className={`topbar-item px-4 d-flex align-items-center user-toggle ${className}`}
    >
      <i className="user-profile bi bi-person-circle fs-2"></i>
    </BootstrapDropdownToggle>
  );
};

export default DropdownToggle;
