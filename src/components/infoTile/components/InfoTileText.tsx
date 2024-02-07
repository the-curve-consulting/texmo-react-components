import React from 'react';
import { Card } from 'react-bootstrap';

export interface InfoTileTextProps extends React.HTMLProps<HTMLSpanElement> {
  text: string;
  badge?: boolean;
  badgeCount?: number;
}

const InfoTileText = ({ text, badge, badgeCount }: InfoTileTextProps) => {
  return (
    <Card.Text>
      <span className="d-flex mb-3 justify-content-between">
        {text}

        {badge ? <span className={`badge count p-2`}>{badgeCount}</span> : null}
      </span>
    </Card.Text>
  );
};

export default InfoTileText;
