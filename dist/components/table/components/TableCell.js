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
import TableSectionContext, { TableSection } from '../TableSectionContext';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';
var TableCell = function (_a) {
    var borderStart = _a.borderStart, className = _a.className, children = _a.children, rest = __rest(_a, ["borderStart", "className", "children"]);
    var section = useContext(TableSectionContext);
    var border = borderStart ? 'border-start' : undefined;
    switch (section) {
        case TableSection.HEAD:
            return (React.createElement("th", __assign({ scope: "col list-cell", className: className }, rest), children));
        case TableSection.BODY:
        case TableSection.NONE:
        default:
            return (React.createElement("td", __assign({ className: "px-0 pt-0 pb-3 texmo-table" }, rest),
                React.createElement("div", __assign({ className: classNames(className, 'h-100 d-flex align-items-center list-cell') }, rest),
                    React.createElement(Card, { className: "h-100 w-100 py-3" },
                        React.createElement(Card.Body, { className: "d-flex justify-content-center align-items-center py-0 ".concat(border) },
                            React.createElement("div", { className: "w-100 h-100" }, children))))));
    }
};
export default TableCell;
//# sourceMappingURL=TableCell.js.map