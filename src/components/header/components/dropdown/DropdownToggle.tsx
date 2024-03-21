import classNames from 'classnames';
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
      className={classNames(
        className,
        'topbar-item px-4 d-flex align-items-center user-toggle'
      )}
    >
      <i className="h-100 d-flex align-items-center user-profile bi bi-person-fill"></i>
    </BootstrapDropdownToggle>
  );
};

export default DropdownToggle;
