import { createContext } from 'react';
export var TableSection;
(function (TableSection) {
    TableSection[TableSection["NONE"] = 0] = "NONE";
    TableSection[TableSection["HEAD"] = 1] = "HEAD";
    TableSection[TableSection["BODY"] = 2] = "BODY";
})(TableSection || (TableSection = {}));
var TableSectionContext = createContext(TableSection.NONE);
export default TableSectionContext;
//# sourceMappingURL=TableSectionContext.js.map