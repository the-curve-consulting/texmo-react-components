import React from 'react';
import { CardText } from 'react-bootstrap';
import { Themes } from 'types';

export interface InfoTileItemProps extends React.HTMLProps<HTMLSpanElement> {
  text: string;
  value: number;
  theme?: Themes;
}

const InfoTileItem = ({
  text,
  value,
  theme = 'primary',
}: InfoTileItemProps) => {
  return (
    <CardText>
      <span className="d-flex mb-3 justify-content-between">
        {text}
        <span className={`badge bg-${theme} p-2`}>{value}</span>
      </span>
    </CardText>
  );
};

export default InfoTileItem;
