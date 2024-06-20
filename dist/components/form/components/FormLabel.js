import React from 'react';
import { FormLabel as BootstrapFormLabel, } from 'react-bootstrap';
var FormLabel = function (_a) {
    var label = _a.label, children = _a.children, className = _a.className;
    return (React.createElement(BootstrapFormLabel, { className: className },
        label ? React.createElement("small", { className: "text-muted" }, label) : null,
        children));
};
export default FormLabel;
//# sourceMappingURL=FormLabel.js.map