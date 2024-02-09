import React from 'react';
import {
  Dropdown,
  DropdownItemProps as BootstrapDropdownItemProps,
} from 'react-bootstrap';

export interface DropdownItemProps extends BootstrapDropdownItemProps {}

const DropdownItem = ({ children, ...rest }: DropdownItemProps) => {
  return <Dropdown.Item {...rest}>{children}</Dropdown.Item>;
};

export default DropdownItem;
