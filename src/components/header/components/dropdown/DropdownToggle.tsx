import React from 'react';
import * as Bootstrap from 'react-bootstrap';

export interface DropdownToggleProps extends Bootstrap.DropdownToggleProps {}

const DropdownToggle = ({ className, children }: DropdownToggleProps) => {
  return (
    <Bootstrap.Dropdown.Toggle
      as={Bootstrap.NavLink}
      className={`d-flex align-items-center ${className}`}
    >
      {children}
    </Bootstrap.Dropdown.Toggle>
  );
};

export default DropdownToggle;
