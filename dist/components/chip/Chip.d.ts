import React from 'react';
interface ChipProps extends React.HTMLProps<HTMLSpanElement> {
    color: string;
    label: string;
}
declare const Chip: ({ style, label, color, ...rest }: ChipProps) => React.JSX.Element;
export default Chip;
//# sourceMappingURL=Chip.d.ts.map