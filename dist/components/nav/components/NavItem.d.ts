import React from 'react';
import { TexmoIcons } from '../../../types';
export interface NavItemProps extends React.HTMLProps<HTMLBaseElement> {
    route: string;
    icon: TexmoIcons;
    text: string;
}
declare const NavItem: ({ route, icon, text }: NavItemProps) => React.JSX.Element;
export default NavItem;
//# sourceMappingURL=NavItem.d.ts.map