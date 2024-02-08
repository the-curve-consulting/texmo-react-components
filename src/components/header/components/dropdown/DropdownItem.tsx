import React from 'react';
import * as Bootstrap from 'react-bootstrap';

export interface DropdownItemProps extends Bootstrap.DropdownItemProps {}

const DropdownItem = ({ children, ...rest }: DropdownItemProps) => {
  return (
    <Bootstrap.Dropdown.Item {...rest}>{children}</Bootstrap.Dropdown.Item>
  );
};

export default DropdownItem;
