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
import { Container } from 'react-bootstrap';
var LayoutContainer = function (_a) {
    var className = _a.className, children = _a.children, style = _a.style, rest = __rest(_a, ["className", "children", "style"]);
    return (React.createElement(Container, __assign({ fluid: true, className: classNames('d-flex flex-column px-0 layout-container', className, 'col'), style: __assign(__assign({}, style), { minHeight: '100vh' }) }, rest), children));
};
export default LayoutContainer;
//# sourceMappingURL=LayoutContainer.js.map