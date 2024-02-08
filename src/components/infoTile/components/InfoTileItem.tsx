import React from 'react';
import * as Bootstrap from 'react-bootstrap';
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
    <Bootstrap.Card.Text>
      <span className="d-flex mb-3 justify-content-between">
        {text}
        <span className={`badge text-bg-${theme} p-2`}>{value}</span>
      </span>
    </Bootstrap.Card.Text>
  );
};

export default InfoTileItem;
