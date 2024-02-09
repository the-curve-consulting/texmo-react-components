import React from 'react';
import InfoTileTitle from './components/InfoTileTitle';
import InfoTileItem from './components/InfoTileItem';
import { Card, Row, Col } from 'react-bootstrap';

export interface InfoTileProps extends React.HTMLProps<HTMLBaseElement> {
  icon: string;
}

const InfoTile = ({ icon, children }: InfoTileProps) => {
  return (
    <Card className="border-0 text-muted h-100 tile">
      <Row className="g-0">
        <Col xs="auto" className="p-4 d-none d-md-block">
          <div className={`segment p-4 h-100`}>
            <i className={`bi bi-${icon}`} style={{ fontSize: '4rem' }}></i>
          </div>
        </Col>
        <Col className="py-4">
          <Card.Body>{children}</Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

InfoTile.Item = InfoTileItem;
InfoTile.Title = InfoTileTitle;

export default InfoTile;
