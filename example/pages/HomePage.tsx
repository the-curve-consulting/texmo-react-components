import { InfoTile, Title } from '@the-curve-consulting/texmo-react-components';
import { Row, Col } from 'react-bootstrap';

const HomePage = () => {

  return (
    <>      
      <Row className="my-4">
        <Title text='Dashboard'/>
      </Row>

      <Row className="g-4">
        <Col xl={6}>
          <InfoTile>
            <InfoTile.Col>
              <InfoTile.Title title='My Work Requests' className='mb-0'/>
            </InfoTile.Col>

            <InfoTile.Col className='col-auto'>
              <InfoTile.Value value={1} className='mb-0'/>
            </InfoTile.Col>
          </InfoTile>
        </Col>
        <Col xl={6}>
          <InfoTile>
            <InfoTile.Col>
              <InfoTile.Title 
                title='My Work Requests'
                className='mb-0'
              />
            </InfoTile.Col>

            <InfoTile.Col className='col-auto'>
              <InfoTile.Value value={1} className='mb-0' />
            </InfoTile.Col>
          </InfoTile>
        </Col>

        <Col xl={6}>
          <InfoTile icon='person-vcard'>
            <InfoTile.Title title={'My Approvals'}/>
            
            <InfoTile.Col>
              <InfoTile.Item text='Active' />
            </InfoTile.Col>

            <InfoTile.Col className='col-auto'>
              <InfoTile.Value value={0} />
            </InfoTile.Col>
          </InfoTile>
        </Col>

        <Col xl={6}>
          <InfoTile icon='diagram-2'>
            <InfoTile.Title title={'My Work Requests'}/>

            <InfoTile.Col>
              <InfoTile.Item text='Active' />
              <InfoTile.Item text='Drafts' />
            </InfoTile.Col>
            
            <InfoTile.Col className='col-auto'>
              <InfoTile.Value value={0} />
              <InfoTile.Value theme='info' value={0} />
            </InfoTile.Col>
          </InfoTile>
        </Col>
      </Row>
    </>
  )
}

export default HomePage;
