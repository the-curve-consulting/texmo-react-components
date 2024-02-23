import React from 'react';
import { CardText } from 'react-bootstrap';

export interface InfoTileItemProps extends React.HTMLProps<HTMLSpanElement> {
  text: string;
}

const InfoTileItem = ({ text }: InfoTileItemProps) => {
  return (
    <CardText>
      <span
        className="d-flex mb-3 justify-content-between"
        style={{ fontSize: '1.2rem' }}
      >
        {text}

        {/* <div>
          <span
            className={`badge bg-${theme} p-2`}
            style={{ fontSize: '1rem', padding: '0.7rem' }}
          >
            {value}
          </span>
        </div> */}
      </span>
    </CardText>
  );
};

export default InfoTileItem;
