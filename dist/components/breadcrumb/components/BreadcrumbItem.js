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
import React, { useContext } from 'react';
import BreadcrumbContext from '../BreadCrumbContext';
import classNames from 'classnames';
var BreadcrumbItem = function (_a) {
    var text = _a.text, active = _a.active, route = _a.route, showSlash = _a.showSlash, className = _a.className, rest = __rest(_a, ["text", "active", "route", "showSlash", "className"]);
    var Link = useContext(BreadcrumbContext);
    if (active) {
        return (React.createElement("span", __assign({ className: classNames(className, 'gray-text') }, rest),
            showSlash ? ' / ' : null,
            text));
    }
    return (React.createElement("span", __assign({ className: className }, rest),
        showSlash ? ' / ' : null,
        route ? (React.createElement(Link, { className: "breadcrumb-item", to: route }, text)) : (text)));
};
export default BreadcrumbItem;
//# sourceMappingURL=BreadcrumbItem.js.map