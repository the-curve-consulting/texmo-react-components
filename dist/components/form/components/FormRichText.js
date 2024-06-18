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
import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import Feedback from 'react-bootstrap/Feedback';
import 'quill/dist/quill.snow.css';
var FormRichText = function (_a) {
    var theme = _a.theme, modules = _a.modules, value = _a.value, onChange = _a.onChange, rest = __rest(_a, ["theme", "modules", "value", "onChange"]);
    var editorRef = useRef(null);
    var quillRef = useRef(null);
    var quillOptions = __assign(__assign({}, modules), { theme: theme || 'snow' });
    var setValue = function (quillRef) {
        var delta = quillRef.clipboard.convert({ html: value });
        quillRef.setContents(delta, 'silent');
    };
    var configureListeners = function (quill) {
        quill.on('text-change', function () {
            var _a;
            if (onChange) {
                onChange(((_a = quillRef.current) === null || _a === void 0 ? void 0 : _a.getSemanticHTML()) || '');
            }
        });
    };
    useEffect(function () {
        if (editorRef.current) {
            var quill = new Quill(editorRef.current, quillOptions);
            quillRef.current = quill; // Store the Quill instance in a ref
            if (value) {
                setValue(quill);
            }
            configureListeners(quill);
        }
    }, []);
    return React.createElement("div", { ref: editorRef, style: rest.style, id: rest.id });
};
FormRichText.Feedback = Feedback;
export default FormRichText;
//# sourceMappingURL=FormRichText.js.map