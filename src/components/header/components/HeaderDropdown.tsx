import React from 'react';
import * as Bootstrap from 'react-bootstrap';
import DropdownItem from './dropdown/DropdownItem';
import DropdownMenu from './dropdown/DropdownMenu';
import DropdownToggle from './dropdown/DropdownToggle';

export interface HeaderDropDownProps extends React.HTMLProps<HTMLBaseElement> {}

const HeaderDropdown = ({ children }: HeaderDropDownProps) => {
  return (
    <Bootstrap.Navbar className="d-none d-md-flex justify-content-end">
      <Bootstrap.Dropdown as={Bootstrap.NavItem} align={'end'}>
        {children}
      </Bootstrap.Dropdown>
    </Bootstrap.Navbar>
  );
};

HeaderDropdown.Item = DropdownItem;
HeaderDropdown.Menu = DropdownMenu;
HeaderDropdown.Toggle = DropdownToggle;

export default HeaderDropdown;
