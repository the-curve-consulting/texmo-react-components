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
import Button from 'components/button/Button';
import Subtitle from 'components/subtitle/Subtitle';
import React from 'react';
import { Form } from 'react-bootstrap';
var CommentInput = function (_a) {
    var onSubmit = _a.onSubmit, rest = __rest(_a, ["onSubmit"]);
    return (React.createElement("div", null,
        React.createElement(Subtitle, { text: "Comments:", className: "mb-2" }),
        React.createElement(Form.Control, __assign({ as: "textarea", placeholder: "Leave a comment..." }, rest)),
        React.createElement("div", { className: "d-flex justify-content-end mt-2" },
            React.createElement(Button, { onClick: onSubmit }, "Comment"))));
};
export default CommentInput;
//# sourceMappingURL=CommentInput.js.map