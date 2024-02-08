import React from 'react';
import * as Bootstrap from 'react-bootstrap';

export interface DropdownMenuProps extends Bootstrap.DropdownMenuProps {}

const DropdownMenu = ({ children, ...rest }: DropdownMenuProps) => {
  return (
    <Bootstrap.Dropdown.Menu {...rest}>{children}</Bootstrap.Dropdown.Menu>
  );
};

export default DropdownMenu;
