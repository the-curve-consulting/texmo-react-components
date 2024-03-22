import React from 'react';
export interface HeaderDropDownProps extends React.HTMLProps<HTMLBaseElement> {
}
declare const HeaderDropdown: {
    ({ children }: HeaderDropDownProps): React.JSX.Element;
    Item: ({ children, ...rest }: import("./dropdown/DropdownItem").DropdownItemProps) => React.JSX.Element;
    Menu: ({ children, ...rest }: import("./dropdown/DropdownMenu").DropdownMenuProps) => React.JSX.Element;
    Toggle: ({ className }: import("./dropdown/DropdownToggle").DropdownToggleProps) => React.JSX.Element;
};
export default HeaderDropdown;
//# sourceMappingURL=HeaderDropdown.d.ts.map