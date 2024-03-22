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
import classNames from 'classnames';
import React from 'react';
var InfoTileTitle = function (_a) {
    var title = _a.title, _b = _a.route, route = _b === void 0 ? '' : _b, link = _a.link, linkProps = _a.linkProps, className = _a.className;
    var titleComponent = (React.createElement("h4", { className: classNames(className, 'fw-bold') }, title));
    if (link) {
        var LinkComponent = link;
        return (React.createElement(LinkComponent, __assign({ to: route, className: "stretched-link text-reset link-underline-dark link-underline-opacity-0 link-underline-opacity-100-hover ".concat(linkProps === null || linkProps === void 0 ? void 0 : linkProps.className) }, linkProps), titleComponent));
    }
    return titleComponent;
};
export default InfoTileTitle;
//# sourceMappingURL=InfoTileTitle.js.map