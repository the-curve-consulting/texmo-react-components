import React from 'react';
import { Nav, Navbar, Offcanvas } from 'react-bootstrap';
var HeaderNavbar = function (_a) {
    var children = _a.children;
    return (React.createElement(Nav, { className: "topbar-item" },
        React.createElement(Navbar.Toggle, { className: "border-0 rounded-0 px-4" }),
        React.createElement(Navbar.Offcanvas, { placement: "start", className: "d-md-none bg-light" },
            React.createElement(Offcanvas.Header, { closeButton: true, className: "justify-content-end" }),
            React.createElement(Offcanvas.Body, { className: "d-flex flex-column" }, children))));
};
export default HeaderNavbar;
//# sourceMappingURL=HeaderNavbar.js.map