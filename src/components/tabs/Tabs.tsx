import React from 'react';
import TabButton from './components/TabsButton';

export interface TabsProps extends React.HTMLProps<HTMLDivElement> {}
const Tabs = ({ children, ...rest }: TabsProps) => {
  return <div {...rest}>{children}</div>;
};
Tabs.Button = TabButton;
export default Tabs;
