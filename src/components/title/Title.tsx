import React from 'react';

export interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
  text: string;
}

const Title = ({ text, ...rest }: TitleProps) => {
  return (
    <h1 className="title" {...rest}>
      {text}
    </h1>
  );
};

export default Title;