import React from 'react';
export interface TabsProps extends React.HTMLProps<HTMLDivElement> {
}
declare const Tabs: {
    ({ children, ...rest }: TabsProps): React.JSX.Element;
    Button: ({ className, selected, text, ...rest }: import("./components/TabsButton").TabButtonProps) => React.JSX.Element;
};
export default Tabs;
//# sourceMappingURL=Tabs.d.ts.map