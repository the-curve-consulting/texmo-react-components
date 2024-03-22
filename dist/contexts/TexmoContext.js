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
import React, { createContext, useContext } from 'react';
var TexmoContext = createContext({});
var TexmoProvider = function (_a) {
    var children = _a.children, value = __rest(_a, ["children"]);
    return (React.createElement(TexmoContext.Provider, { value: value }, children));
};
export var useTexmoContext = function () { return useContext(TexmoContext); };
export default TexmoProvider;
//# sourceMappingURL=TexmoContext.js.map