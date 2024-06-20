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
var CommentItem = function (_a) {
    var inbound = _a.inbound, text = _a.text, className = _a.className, createdAt = _a.createdAt, createdBy = _a.createdBy, onDelete = _a.onDelete, rest = __rest(_a, ["inbound", "text", "className", "createdAt", "createdBy", "onDelete"]);
    var itemClass = classNames(className, 'w-75 border rounded p-3 mt-3', inbound ? 'bg-secondary' : 'text-white bg-primary');
    var localeFormat = new Intl.DateTimeFormat('default', {
        dateStyle: 'short',
        timeStyle: 'short',
    });
    return (React.createElement("div", { className: classNames('d-flex', inbound ? 'justify-content-start' : 'justify-content-end') },
        React.createElement("div", __assign({ className: itemClass }, rest),
            text,
            React.createElement("div", { className: "d-flex justify-content-between mt-2 opacity-75" },
                React.createElement("span", null,
                    "From: ",
                    createdBy),
                React.createElement("div", null,
                    React.createElement("span", { className: classNames(!inbound ? 'me-2' : null) }, localeFormat.format(createdAt)),
                    !inbound ? (React.createElement("span", { className: "text-decoration-underline cursor-pointer", onClick: onDelete }, "Delete")) : null)))));
};
export default CommentItem;
//# sourceMappingURL=CommentItem.js.map