import React from 'react';
import { CardText } from 'react-bootstrap';

export interface InfoTileItemProps extends React.HTMLProps<HTMLSpanElement> {
  text: string;
}

const InfoTileItem = ({ text }: InfoTileItemProps) => {
  return (
    <CardText>
      <span className="d-flex mb-3 justify-content-between info-tile-item">
        {text}
      </span>
    </CardText>
  );
};

export default InfoTileItem;
