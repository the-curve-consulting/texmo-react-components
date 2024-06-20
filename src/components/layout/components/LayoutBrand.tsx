import React from 'react';

export interface LayoutBrandProps extends React.HTMLProps<HTMLImageElement> {}

const LayoutBrand = ({ ...rest }: LayoutBrandProps) => {
  return (
    <div className="d-flex logo-containter">
      <img alt="logo" className="logo" {...rest} />
    </div>
  );
};

export default LayoutBrand;
