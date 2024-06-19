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
import 'quill/dist/quill.snow.css';
var FormRichText = function (_a) {
    var modules = _a.modules, value = _a.value, onChange = _a.onChange, theme = _a.theme, importCallback = _a.importCallback, debug = _a.debug, rest = __rest(_a, ["modules", "value", "onChange", "theme", "importCallback", "debug"]);
    var quillRef = useRef(null);
    var containerRef = useRef(null);
    //Set debug mode, false results in no output.
    Quill.debug(debug || false);
    var quillOptions = __assign(__assign({}, modules), { theme: theme || 'snow' });
    var setValue = function (quillRef) {
        var delta = quillRef.clipboard.convert({ html: value });
        quillRef.setContents(delta, 'silent');
    };
    var configureListeners = function (quill) {
        quill.on(Quill.events.TEXT_CHANGE, function () {
            var _a;
            if (onChange) {
                onChange(((_a = quillRef.current) === null || _a === void 0 ? void 0 : _a.getSemanticHTML()) || '');
            }
        });
    };
    useEffect(function () {
        if (containerRef.current) {
            if (importCallback) {
                //Callback to import new modules into quill, needs to be done within the same instance as the quill object.
                importCallback();
            }
            var container_1 = containerRef.current;
            var editorContainer = container_1.appendChild(container_1.ownerDocument.createElement('div'));
            var quill = new Quill(editorContainer, quillOptions);
            quillRef.current = quill; // Store the Quill instance in a ref
            if (value) {
                setValue(quill);
            }
            configureListeners(quill);
            return function () {
                container_1.innerHTML = '';
                quillRef.current.off(Quill.events.TEXT_CHANGE);
            };
        }
        // NOTE: Run effect once on component mount, please recheck dependencies if effect is updated.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return React.createElement("div", { ref: containerRef, style: rest.style, id: rest.id, className: rest.className });
};
export default FormRichText;
//# sourceMappingURL=FormRichText.js.map