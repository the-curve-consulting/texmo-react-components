import React, { useState } from 'react';
import NavContext from './NavContext';
export var NavContextProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var openHandler = function (open) {
        setIsOpen(open);
    };
    return (React.createElement(NavContext.Provider, { value: { open: isOpen, setOpen: openHandler } }, children));
};
//# sourceMappingURL=NavContextProvider.js.map