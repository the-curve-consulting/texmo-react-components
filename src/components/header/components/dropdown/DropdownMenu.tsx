import React from 'react';
import {
  Dropdown,
  DropdownMenuProps as BootstrapDropdownMenuProps,
} from 'react-bootstrap';

export interface DropdownMenuProps extends BootstrapDropdownMenuProps {}

const DropdownMenu = ({ children, ...rest }: DropdownMenuProps) => {
  return <Dropdown.Menu {...rest}>{children}</Dropdown.Menu>;
};

export default DropdownMenu;
