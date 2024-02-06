import React from 'react';

export interface LayoutMainProps extends React.HTMLProps<HTMLDivElement> {}

const LayoutMain = ({ className, children, ...rest }: LayoutMainProps) => {
  return (
    <div className={`${className} d-flex flex-row`} {...rest}>
      {children}
    </div>
  );
};

export default LayoutMain;
