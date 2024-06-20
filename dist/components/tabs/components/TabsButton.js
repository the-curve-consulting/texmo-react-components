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
var TabButton = function (_a) {
    var className = _a.className, _b = _a.selected, selected = _b === void 0 ? false : _b, text = _a.text, rest = __rest(_a, ["className", "selected", "text"]);
    return (React.createElement(Button, __assign({ className: classNames(className, 'gray-text rounded-0 py-2 px-3'), variant: selected ? 'dark-secondary' : 'secondary' }, rest), text));
};
export default TabButton;
//# sourceMappingURL=TabsButton.js.map