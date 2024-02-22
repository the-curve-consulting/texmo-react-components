import React from 'react';

export interface SubTitleProps extends React.HTMLProps<HTMLDivElement> {
  text: string;
}

const Subtitle = ({ text, ...rest }: SubTitleProps) => {
  return <div {...rest}>{text}</div>;
};

export default Subtitle;
