import React from 'react';
import { Themes } from 'types';
export interface ProgressBarProps extends React.HTMLProps<HTMLDivElement> {
    percentage: number;
    theme?: Themes;
    showPercentage?: boolean;
}
declare const ProgressBar: ({ percentage, theme, showPercentage, ...rest }: ProgressBarProps) => React.JSX.Element;
export default ProgressBar;
//# sourceMappingURL=ProgressBar.d.ts.map