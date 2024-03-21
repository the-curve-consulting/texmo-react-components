import classNames from 'classnames';
import React from 'react';
var Footer = function (_a) {
    var className = _a.className, organisation = _a.organisation;
    var currentYear = new Date().getFullYear();
    return (React.createElement("footer", { className: classNames(className, 'mt-auto pt-3 pb-2 text-end text-muted small px-3') },
        "Copyright \u00A9 ",
        organisation,
        " ",
        currentYear));
};
export default Footer;
//# sourceMappingURL=Footer.js.map