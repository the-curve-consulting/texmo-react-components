import React from 'react';
import DropdownItem from './dropdown/DropdownItem';
import DropdownMenu from './dropdown/DropdownMenu';
import DropdownToggle from './dropdown/DropdownToggle';
import { Navbar, Dropdown, NavItem } from 'react-bootstrap';

export interface HeaderDropDownProps extends React.HTMLProps<HTMLBaseElement> {}

const HeaderDropdown = ({ children }: HeaderDropDownProps) => {
  return (
    <Navbar className="d-none d-md-flex justify-content-end">
      <Dropdown as={NavItem} align={'end'}>
        {children}
      </Dropdown>
    </Navbar>
  );
};

HeaderDropdown.Item = DropdownItem;
HeaderDropdown.Menu = DropdownMenu;
HeaderDropdown.Toggle = DropdownToggle;

export default HeaderDropdown;
