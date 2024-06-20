import { createContext, useContext } from 'react';
var NavContext = createContext({
    open: false,
    setOpen: function () { },
});
export var useNavContext = function () { return useContext(NavContext); };
export default NavContext;
//# sourceMappingURL=NavContext.js.map