import { createContext } from 'react';
export var ListSection;
(function (ListSection) {
    ListSection[ListSection["NONE"] = 0] = "NONE";
    ListSection[ListSection["HEAD"] = 1] = "HEAD";
    ListSection[ListSection["BODY"] = 2] = "BODY";
})(ListSection || (ListSection = {}));
var ListSectionContext = createContext(ListSection.NONE);
export default ListSectionContext;
//# sourceMappingURL=ListSectionContext.js.map