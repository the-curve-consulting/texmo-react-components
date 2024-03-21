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
import FormControl from './components/FormControl';
import FormGroup from './FormGroup';
import FormSelect from './components/FormSelect';
import FormCheck from './components/FormCheck';
import FormLabel from './components/FormLabel';
import FormRichText from './components/FormRichText';
import FormDateTime from './components/FormDateTime';
import FormTypeahead from './components/FormTypeahead';
import Feedback from 'react-bootstrap/esm/Feedback';
import { FormText, Form as BootstrapForm, } from 'react-bootstrap';
var Form = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return React.createElement(BootstrapForm, __assign({}, rest), children);
};
Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Control = FormControl;
Form.Select = FormSelect;
Form.Check = FormCheck;
Form.RichText = FormRichText;
Form.DateTime = FormDateTime;
Form.Feedback = Feedback;
Form.Text = FormText;
Form.Typeahead = FormTypeahead;
export default Form;
//# sourceMappingURL=Form.js.map