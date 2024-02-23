import React from 'react';
import { Themes } from 'types';

export interface ProgressBarProps extends React.HTMLProps<HTMLDivElement> {
  percentage: number;
  theme?: Themes;
}

const ProgressBar = ({
  percentage,
  theme = 'primary',
  ...rest
}: ProgressBarProps) => {
  return (
    <div {...rest} className="d-flex flex-column align-items-center">
      <div
        className="mt-4 mb-2"
        style={{
          height: '10px',
          width: '80%',
          border: '1px solid #5cb85c',
          borderRadius: '2px',
        }}
      >
        <div
          className={`h-100 bg-${theme}`}
          style={{
            width: `${percentage}%`,
            borderRadius: '2px',
          }}
        ></div>
      </div>
      <div>{Math.floor(percentage)}%</div>
    </div>
  );
};

export default ProgressBar;
