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
var ProgressBar = function (_a) {
    var percentage = _a.percentage, _b = _a.theme, theme = _b === void 0 ? 'primary' : _b, _c = _a.showPercentage, showPercentage = _c === void 0 ? true : _c, rest = __rest(_a, ["percentage", "theme", "showPercentage"]);
    return (React.createElement("div", __assign({ className: "d-flex flex-column align-items-center" }, rest),
        React.createElement("div", { className: "my-2 w-100", style: {
                height: '10px',
                border: '1px solid',
                borderRadius: '2px',
            } },
            React.createElement("div", { className: "h-100 bg-".concat(theme), style: {
                    width: "".concat(percentage, "%"),
                    borderRadius: '1px',
                } })),
        showPercentage ? React.createElement("div", null,
            Math.floor(percentage),
            "%") : null));
};
export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map