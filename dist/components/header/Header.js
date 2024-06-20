var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import HeaderDropdown from './components/HeaderDropdown';
import HeaderNavbar from './components/HeaderNavbar';
import { Navbar } from 'react-bootstrap';
var Header = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (React.createElement("header", null,
        React.createElement(Navbar, __assign({ expand: "md", className: "py-0" }, rest),
            React.createElement("div", { className: "py-2 header-container w-100" },
                React.createElement("div", { className: "d-flex justify-content-end h-100 w-100" }, children)))));
};
Header.Dropdown = HeaderDropdown;
Header.Navbar = HeaderNavbar;
export default Header;
//# sourceMappingURL=Header.js.map