import React from 'react';
import DropdownItem from './dropdown/DropdownItem';
import DropdownMenu from './dropdown/DropdownMenu';
import DropdownToggle from './dropdown/DropdownToggle';
import { Dropdown, NavItem } from 'react-bootstrap';
var HeaderDropdown = function (_a) {
    var children = _a.children;
    return (React.createElement(Dropdown, { as: NavItem, align: 'end' }, children));
};
HeaderDropdown.Item = DropdownItem;
HeaderDropdown.Menu = DropdownMenu;
HeaderDropdown.Toggle = DropdownToggle;
export default HeaderDropdown;
//# sourceMappingURL=HeaderDropdown.js.map