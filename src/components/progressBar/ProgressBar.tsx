import React from 'react';
import { Themes } from '../../types';

export interface ProgressBarProps extends React.HTMLProps<HTMLDivElement> {
  percentage: number;
  theme?: Themes;
  showPercentage?: boolean;
}

const ProgressBar = ({
  percentage,
  theme = 'primary',
  showPercentage = true,
  ...rest
}: ProgressBarProps) => {
  return (
    <div className="d-flex flex-column align-items-center" {...rest}>
      <div
        className="my-2 w-100"
        style={{
          height: '10px',
          border: '1px solid',
          borderRadius: '2px',
        }}
      >
        <div
          className={`h-100 bg-${theme}`}
          style={{
            width: `${percentage}%`,
            borderRadius: '1px',
          }}
        />
      </div>

      {showPercentage ? <div>{Math.floor(percentage)}%</div> : null}
    </div>
  );
};

export default ProgressBar;
