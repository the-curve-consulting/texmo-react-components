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
import LayoutBrand from './components/LayoutBrand';
import LayoutContainer from './components/LayoutContainer';
import LayoutMain from './components/LayoutMain';
import { NavContextProvider } from 'components/nav/NavContextProvider';
import classNames from 'classnames';
var Layout = function (_a) {
    var className = _a.className, children = _a.children, rest = __rest(_a, ["className", "children"]);
    return (React.createElement(NavContextProvider, null,
        React.createElement("div", __assign({ className: classNames(className, 'd-flex flex-column') }, rest), children)));
};
Layout.Brand = LayoutBrand;
Layout.Container = LayoutContainer;
Layout.Main = LayoutMain;
export default Layout;
//# sourceMappingURL=Layout.js.map