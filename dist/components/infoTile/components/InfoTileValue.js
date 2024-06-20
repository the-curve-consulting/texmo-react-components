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
import classNames from 'classnames';
var InfoTileValue = function (_a) {
    var className = _a.className, value = _a.value, _b = _a.theme, theme = _b === void 0 ? 'primary' : _b, rest = __rest(_a, ["className", "value", "theme"]);
    return (React.createElement("div", { className: "w-100" },
        React.createElement("span", __assign({ className: classNames(className, !(className === null || className === void 0 ? void 0 : className.includes('mb-0')) ? 'mb-3' : null, "w-100 badge bg-".concat(theme, " p-2 info-tile-value")) }, rest), value)));
};
export default InfoTileValue;
//# sourceMappingURL=InfoTileValue.js.map