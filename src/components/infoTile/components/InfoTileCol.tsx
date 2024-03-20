import React from 'react';

export interface InfoTileColProps extends React.HTMLProps<HTMLDivElement> {}

const InfoTileCol = ({ className, children, ...rest }: InfoTileColProps) => {
  return (
    <div className={`${className} col`} {...rest}>
      {children}
    </div>
  );
};

export default InfoTileCol;
