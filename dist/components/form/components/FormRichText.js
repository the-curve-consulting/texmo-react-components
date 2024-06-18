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
import React, { useEffect, useRef, useImperativeHandle, forwardRef, } from 'react';
import Quill from 'quill';
var FormRichText = function (_a, ref) {
    var modules = _a.modules, value = _a.value, valueChange = _a.valueChange, rest = __rest(_a, ["modules", "value", "valueChange"]);
    var editorRef = useRef(null);
    var quillRef = useRef(null);
    var setValue = function (quillRef) {
        var delta = quillRef.clipboard.convert({ html: value });
        quillRef.setContents(delta, 'silent');
    };
    var configureListeners = function (quill) {
        quill.on('text-change', function () {
            var _a;
            if (valueChange) {
                valueChange(((_a = quillRef.current) === null || _a === void 0 ? void 0 : _a.getSemanticHTML()) || '');
            }
        });
    };
    useEffect(function () {
        if (editorRef.current) {
            var quill = new Quill(editorRef.current, modules);
            quillRef.current = quill; // Store the Quill instance in a ref
            if (ref) {
                // Assign the Quill instance to the forwarded ref
                if (typeof ref !== 'function') {
                    ref.current = quill; // For object refs
                }
                if (value) {
                    setValue(quill);
                }
                configureListeners(quill);
            }
        }
    }, []);
    useImperativeHandle(ref, function () { return quillRef.current; });
    return React.createElement("div", { ref: editorRef, style: rest.style, id: rest.id });
};
export default forwardRef(FormRichText);
//# sourceMappingURL=FormRichText.js.map