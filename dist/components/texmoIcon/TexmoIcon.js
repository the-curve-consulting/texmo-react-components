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
import * as Icons from '../../icons/index';
var TexmoIcon = function (_a) {
    var icon = _a.icon, _b = _a.height, height = _b === void 0 ? 40 : _b, rest = __rest(_a, ["icon", "height"]);
    var iconFilename = icon
        .split('-')
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join('');
    var IconComponent = Icons[iconFilename];
    return (React.createElement(React.Fragment, null,
        React.createElement(IconComponent, __assign({ height: height }, rest))));
};
export default TexmoIcon;
//# sourceMappingURL=TexmoIcon.js.map