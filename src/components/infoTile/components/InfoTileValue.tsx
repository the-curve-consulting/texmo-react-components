import React from 'react';
import { Themes } from 'types';

export interface InfoTileValueProps extends React.HTMLProps<HTMLSpanElement> {
  value: string | number;
  theme?: Themes;
}

const InfoTileValue = ({
  className,
  value,
  theme = 'primary',
  ...rest
}: InfoTileValueProps) => {
  return (
    <div className="w-100 mb-3">
      <span
        className={`${className} w-100 badge bg-${theme} p-2`}
        style={{ fontSize: '1rem', padding: '0.7rem' }}
        {...rest}
      >
        {value}
      </span>
    </div>
  );
};

export default InfoTileValue;
