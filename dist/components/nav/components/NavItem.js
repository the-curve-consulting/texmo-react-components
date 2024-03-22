// import { useNavContext } from 'components/nav/NavContext';
import TexmoIcon from 'components/texmoIcon/TexmoIcon';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useTexmoContext } from 'contexts/TexmoContext';
import { useNavContext } from '../NavContext';
import classNames from 'classnames';
var NavItem = function (_a) {
    var route = _a.route, icon = _a.icon, text = _a.text;
    var open = useNavContext().open;
    var NavLink = useTexmoContext().navLink;
    var linkClass = function (isActive) {
        return isActive ? 'nav-link active' : 'nav-link link-dark';
    };
    return (React.createElement(Nav.Item, { className: "sidenav-item" },
        React.createElement(OverlayTrigger, { placement: "right", overlay: !open ? React.createElement(Tooltip, null, text) : React.createElement(React.Fragment, null) },
            React.createElement(NavLink, { to: route, className: function (_a) {
                    var isActive = _a.isActive;
                    return classNames('d-flex align-items-center sidenav-link', linkClass(isActive));
                } },
                React.createElement("div", { className: "nav-item-icon" },
                    React.createElement(TexmoIcon, { icon: icon, height: 28 })),
                React.createElement("div", { className: classNames('d-flex justify-content-start nav-item-text', open ? 'opened' : null) }, text)))));
};
export default NavItem;
//# sourceMappingURL=NavItem.js.map