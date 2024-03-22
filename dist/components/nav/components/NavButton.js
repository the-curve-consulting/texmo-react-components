import React from 'react';
import { useNavContext } from '../NavContext';
import classNames from 'classnames';
var NavButton = function () {
    var _a = useNavContext(), open = _a.open, setOpen = _a.setOpen;
    return (React.createElement("div", { className: "sidenav-button-container flex-column", onClick: function () { return setOpen(!open); } },
        React.createElement("div", { className: "sidenav-button-container" },
            React.createElement("div", { className: classNames('open-dummy', open ? 'opened' : null) }),
            React.createElement("div", { className: classNames('d-flex flex-column sidenav-button nav-item-menu-icon', open
                    ? 'align-items-end sidenav-button-opened'
                    : 'align-items-center') },
                React.createElement("i", { className: "h-100 d-flex align-items-center bi bi-".concat(open ? 'x' : 'list', " fs-3") }))),
        React.createElement("div", { className: "sidenav-button-container-divider" })));
};
export default NavButton;
//# sourceMappingURL=NavButton.js.map