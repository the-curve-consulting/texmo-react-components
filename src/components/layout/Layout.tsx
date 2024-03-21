import React from 'react';
import LayoutBrand from './components/LayoutBrand';
import LayoutContainer from './components/LayoutContainer';
import LayoutMain from './components/LayoutMain';
import { NavContextProvider } from 'components/nav/NavContextProvider';
import classNames from 'classnames';

export interface LayoutProps extends React.HTMLProps<HTMLDivElement> {}

const Layout = ({ className, children, ...rest }: LayoutProps) => {
  return (
    <NavContextProvider>
      <div className={classNames(className, 'd-flex flex-column')} {...rest}>
        {children}
      </div>
    </NavContextProvider>
  );
};

Layout.Brand = LayoutBrand;
Layout.Container = LayoutContainer;
Layout.Main = LayoutMain;

export default Layout;
