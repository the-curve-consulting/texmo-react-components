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
import React, { forwardRef } from 'react';
var ListRow = forwardRef(function (_a, ref) {
    var className = _a.className, style = _a.style, children = _a.children, overdue = _a.overdue, rest = __rest(_a, ["className", "style", "children", "overdue"]);
    return (React.createElement("div", __assign({ className: classNames(className, 'row text-center mt-2 mx-0 list-row'), style: __assign({ border: overdue ? '2px solid #99444f' : 'none' }, style), ref: ref }, rest), children));
});
ListRow.displayName = 'ListRow';
export default ListRow;
//# sourceMappingURL=ListRow.js.map