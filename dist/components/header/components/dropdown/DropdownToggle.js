import classNames from 'classnames';
import React from 'react';
import { DropdownToggle as BootstrapDropdownToggle, NavLink, } from 'react-bootstrap';
var DropdownToggle = function (_a) {
    var className = _a.className;
    return (React.createElement(BootstrapDropdownToggle, { as: NavLink, className: classNames(className, 'topbar-item px-4 d-flex align-items-center user-toggle') },
        React.createElement("i", { className: "h-100 d-flex align-items-center user-profile bi bi-person-fill" })));
};
export default DropdownToggle;
//# sourceMappingURL=DropdownToggle.js.map