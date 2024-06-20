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
import BreadcrumbItem from './components/BreadcrumbItem';
import BreadcrumbsContext from './BreadCrumbsContext';
import classNames from 'classnames';
var Breadcrumbs = function (_a) {
    var className = _a.className, link = _a.link, children = _a.children, rest = __rest(_a, ["className", "link", "children"]);
    var childrenArray = React.Children.toArray(children);
    return (React.createElement("p", __assign({ className: classNames(className, 'breadcrumbs-container') }, rest),
        React.createElement(BreadcrumbsContext.Provider, { value: link }, childrenArray.map(function (child, index) {
            var childElement = child;
            return React.cloneElement(childElement, {
                key: index,
                showSlash: index !== 0,
            });
        }))));
};
Breadcrumbs.Item = BreadcrumbItem;
export default Breadcrumbs;
//# sourceMappingURL=Breadcrumbs.js.map