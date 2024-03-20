import React from 'react';
import InfoTileTitle from './components/InfoTileTitle';
import InfoTileItem from './components/InfoTileItem';
import { Card, Row, Col } from 'react-bootstrap';
import InfoTileValue from './components/InfoTileValue';
import InfoTileCol from './components/InfoTileCol';

export interface InfoTileProps extends React.HTMLProps<HTMLBaseElement> {
  icon?: string;
}

const InfoTile = ({ icon, children }: InfoTileProps) => {
  return (
    <Card className="border-0 text-muted h-100 info-tile">
      <Row className="g-0">
        {icon ? (
          <Col xs="auto" className="px-4 d-none d-md-block info-tile-col">
            <div className={`segment p-4 h-100`}>
              <i className={`bi bi-${icon}`} style={{ fontSize: '4rem' }}></i>
            </div>
          </Col>
        ) : null}

        <Col className="info-tile-col info-tile-body">
          <Card.Body className="justify-content-between row">
            {children}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

InfoTile.Item = InfoTileItem;
InfoTile.Title = InfoTileTitle;
InfoTile.Value = InfoTileValue;
InfoTile.Col = InfoTileCol;

export default InfoTile;
