import React from 'react';
export interface ProgressBarProps extends React.HTMLProps<HTMLDivElement> {
    percentage: number;
    color?: string;
}
declare const ProgressBar: ({ percentage, color, ...rest }: ProgressBarProps) => React.JSX.Element;
export default ProgressBar;
//# sourceMappingURL=ProgressBar.d.ts.map