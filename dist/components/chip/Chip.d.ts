import React from 'react';
import { Themes } from 'types';
interface ChipProps extends React.HTMLProps<HTMLSpanElement> {
    theme: Themes;
    label: string;
}
declare const Chip: ({ style, label, theme, ...rest }: ChipProps) => React.JSX.Element;
export default Chip;
//# sourceMappingURL=Chip.d.ts.map