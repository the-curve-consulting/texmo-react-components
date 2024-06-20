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
var TableRow = function (_a) {
    var borderColour = _a.borderColour, className = _a.className, style = _a.style, children = _a.children, rest = __rest(_a, ["borderColour", "className", "style", "children"]);
    return (React.createElement("tr", __assign({ className: classNames(className, 'table-responsive text-center h-100 mt-3 mx-0'), style: __assign({ border: "2px solid ".concat(borderColour) }, style) }, rest), children));
};
export default TableRow;
//# sourceMappingURL=TableRow.js.map