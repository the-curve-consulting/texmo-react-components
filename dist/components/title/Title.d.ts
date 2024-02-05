import React from 'react';
export interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
    text: string;
}
declare const Title: ({ text, ...rest }: TitleProps) => React.JSX.Element;
export default Title;
//# sourceMappingURL=Title.d.ts.map