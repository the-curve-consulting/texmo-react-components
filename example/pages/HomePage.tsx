import { InfoTile, Title } from '@the-curve-consulting/texmo-react-components';
import { Row, Col } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>
      <Row className="my-5">
        <Title text='Dashboard'/>
      </Row>

      <Row className="g-4">
        <Col xl={6}>
          <InfoTile icon='calendar-check'>
            <InfoTile.Title title='My Work Requests'/>

            <InfoTile.Item text='Due in the next 24 hours' value={0} />
            <InfoTile.Item text='Overdue' theme='danger' value={1} />
            <InfoTile.Item text='Open Requests' value={1} />
          </InfoTile>
        </Col>
        <Col xl={6}>
          <InfoTile icon='clipboard-check'>
            <InfoTile.Title title='My Work Requests'/>
            
            <InfoTile.Item text='Due in the next 24 hours' value={0} />
            <InfoTile.Item text='Overdue' theme='danger' value={1} />
            <InfoTile.Item text='Open Requests' value={1} />
          </InfoTile>
        </Col>

        <Col xl={6}>
          <InfoTile icon='person-vcard'>
            <InfoTile.Title title={'My Approvals'}/>
            
            <InfoTile.Item text='Active' value={0} />
          </InfoTile>
        </Col>

        <Col xl={6}>
          <InfoTile icon='diagram-2'>
            <InfoTile.Title title={'My Work Requests'}/>
            
            <InfoTile.Item text='Active' value={0} />
            <InfoTile.Item text='Drafts' theme='info' value={0} />
          </InfoTile>
        </Col>
      </Row>
    </>
  )
}

export default HomePage;