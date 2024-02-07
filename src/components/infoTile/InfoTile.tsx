import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from 'react';
import InfoTileText from './components/InfoTileText';

export interface InfoTileProps extends React.HTMLProps<HTMLBaseElement> {
  title: string;
  icon: string;
}

const InfoTile = ({ title, icon, children }: InfoTileProps) => {
  return (
    <Card className="border-0 text-muted h-100 tile">
      <Row className="g-0">
        <Col xs="auto" className="p-4 d-none d-md-block">
          <div className={`segment bg-opacity-25 rounded p-4 h-100`}>
            <i className={`bi bi-${icon}`} style={{ fontSize: '4rem' }}></i>
          </div>
        </Col>
        <Col className="py-4">
          <Card.Body>
            <h3 className="fw-bold mb-4">{title}</h3>
            <Card.Text className="me-4">{children}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

InfoTile.Text = InfoTileText;

export default InfoTile;
