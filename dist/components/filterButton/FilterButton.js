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
import classNames from 'classnames';
import React from 'react';
import { Button } from 'react-bootstrap';
var FilterButton = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'secondary' : _b, filterExists = _a.filterExists, className = _a.className, rest = __rest(_a, ["variant", "filterExists", "className"]);
    return (React.createElement(Button, __assign({ variant: variant, className: classNames(className, 'position-relative ms-2') }, rest),
        React.createElement("i", { className: "bi bi-filter" }),
        filterExists ? (React.createElement("span", { className: "position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle" },
            React.createElement("span", { className: "visually-hidden" }, "Filter applied"))) : null));
};
export default FilterButton;
//# sourceMappingURL=FilterButton.js.map