import * as Bootstrap from 'react-bootstrap';
import React from 'react';
import InfoTileTitle from './components/InfoTileTitle';
import InfoTileItem from './components/InfoTileItem';

export interface InfoTileProps extends React.HTMLProps<HTMLBaseElement> {
  icon: string;
}

const InfoTile = ({ icon, children }: InfoTileProps) => {
  return (
    <Bootstrap.Card className="border-0 text-muted h-100 tile">
      <Bootstrap.Row className="g-0">
        <Bootstrap.Col xs="auto" className="p-4 d-none d-md-block">
          <div className={`segment p-4 h-100`}>
            <i className={`bi bi-${icon}`} style={{ fontSize: '4rem' }}></i>
          </div>
        </Bootstrap.Col>
        <Bootstrap.Col className="py-4">
          <Bootstrap.Card.Body>{children}</Bootstrap.Card.Body>
        </Bootstrap.Col>
      </Bootstrap.Row>
    </Bootstrap.Card>
  );
};

InfoTile.Item = InfoTileItem;
InfoTile.Title = InfoTileTitle;

export default InfoTile;
