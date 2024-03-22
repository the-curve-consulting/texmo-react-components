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
import ListHead from './components/ListHead';
import ListRow from './components/ListRow';
import ListCell from './components/ListCell';
import ListCol from './components/ListCol';
import ListBody from './components/ListBody';
import classNames from 'classnames';
var List = function (_a) {
    var className = _a.className, children = _a.children, rest = __rest(_a, ["className", "children"]);
    return (React.createElement("div", __assign({ className: classNames(className, 'list-container') }, rest), children));
};
List.Head = ListHead;
List.Cell = ListCell;
List.Row = ListRow;
List.Col = ListCol;
List.Body = ListBody;
export default List;
//# sourceMappingURL=List.js.map