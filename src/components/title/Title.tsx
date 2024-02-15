import React from 'react';

export interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
  text: string;
}

const Title = ({ text, className, ...rest }: TitleProps) => {
  return (
    <h1 className={`${className} mb-0`} {...rest}>
      {text}
    </h1>
  );
};

export default Title;
