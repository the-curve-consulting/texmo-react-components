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
import ListSectionContext, { ListSection } from '../ListSectionContext';
import classNames from 'classnames';
var ListCell = function (_a) {
    var borderStart = _a.borderStart, className = _a.className, children = _a.children, background = _a.background, rest = __rest(_a, ["borderStart", "className", "children", "background"]);
    var section = useContext(ListSectionContext);
    var border = borderStart ? 'border-start' : undefined;
    switch (section) {
        case ListSection.HEAD:
            return (React.createElement("div", __assign({ className: classNames(className, 'col list-cell text-uppercase') }, rest), children));
        case ListSection.BODY:
        case ListSection.NONE:
        default:
            return (React.createElement("div", __assign({ className: classNames(className, 'h-100 d-flex align-items-center list-cell') }, rest),
                React.createElement("div", { className: "bg-transparent card card-body h-100 w-100 py-3 d-flex justify-content-center align-items-center py-0 ".concat(border), style: { backgroundColor: background } },
                    React.createElement("div", { className: "w-100" }, children))));
    }
};
export default ListCell;
//# sourceMappingURL=ListCell.js.map