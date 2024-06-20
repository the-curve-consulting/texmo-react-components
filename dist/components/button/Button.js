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
import { Button as BootstrapButton, } from 'react-bootstrap';
var Button = function (_a) {
    var label = _a.label, icon = _a.icon, children = _a.children, className = _a.className, variant = _a.variant, rest = __rest(_a, ["label", "icon", "children", "className", "variant"]);
    return (React.createElement(BootstrapButton, __assign({ className: className, variant: variant || 'primary' }, rest),
        label || null,
        icon ? React.createElement("i", { className: "bi bi-".concat(icon) }) : null,
        children));
};
export default Button;
//# sourceMappingURL=Button.js.map