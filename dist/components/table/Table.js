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
import TableHead from './components/TableHead';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import TableBody from './components/TableBody';
import { Table as BootstrapTable, } from 'react-bootstrap';
import classNames from 'classnames';
var Table = function (_a) {
    var className = _a.className, children = _a.children, rest = __rest(_a, ["className", "children"]);
    return (React.createElement(BootstrapTable, __assign({ className: classNames(className, 'texmo-table') }, rest), children));
};
Table.Head = TableHead;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Body = TableBody;
export default Table;
//# sourceMappingURL=Table.js.map