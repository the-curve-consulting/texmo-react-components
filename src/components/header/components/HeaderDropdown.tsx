import React from 'react';
import DropdownItem from './dropdown/DropdownItem';
import DropdownMenu from './dropdown/DropdownMenu';
import DropdownToggle from './dropdown/DropdownToggle';
import { Dropdown, NavItem } from 'react-bootstrap';

export interface HeaderDropDownProps extends React.HTMLProps<HTMLBaseElement> {}

const HeaderDropdown = ({ children }: HeaderDropDownProps) => {
  return (
    <Dropdown as={NavItem} align={'end'}>
      {children}
    </Dropdown>
  );
};

HeaderDropdown.Item = DropdownItem;
HeaderDropdown.Menu = DropdownMenu;
HeaderDropdown.Toggle = DropdownToggle;

export default HeaderDropdown;
