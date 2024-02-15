import React from 'react';

export interface LayoutBrandProps extends React.HTMLProps<HTMLImageElement> {}

const LayoutBrand = ({ ...rest }: LayoutBrandProps) => {
  return <img alt="logo" className="logo" {...rest} />;
};

export default LayoutBrand;
