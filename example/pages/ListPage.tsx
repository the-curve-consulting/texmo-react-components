import { Chip, List, ProgressBar, SearchBar, Title, Breadcrumb } from '@the-curve-consulting/texmo-react-components';
import { Col, Row } from 'react-bootstrap';

const ListPage = () => {
  return (
    <div className="mt-5">

    <Row className="mt-4">
      <Col>
        <Breadcrumb>
          <Breadcrumb.Item
            text='Home' 
            route='/' 
          />
          <Breadcrumb.Item 
            text='List'
            active
          />
        </Breadcrumb>

        <Title text='Dashboard'/>
        <div>This is a list</div>
      </Col>

      <Col className='d-flex align-items-end'>
        <div className='d-flex mt-3 justify-content-end w-100'>
          <SearchBar>
            <SearchBar.Input />
            <SearchBar.Button />
          </SearchBar>
        </div>
      </Col>
    </Row>

    <List>
      <List.Head>
        <List.Cell>Head 1</List.Cell>
        <List.Cell>Head 2</List.Cell>
        <List.Cell>Head 3</List.Cell>
        <List.Cell>Head 4</List.Cell>
      </List.Head>

      <List.Body>
        <List.Row>
          <List.Col>
            <List.Cell>
              <div className="mt-2">Test</div>
                <div>
                  <h3>
                    Test 2
                  </h3>
              </div>
            </List.Cell>
          </List.Col>

          <List.Col>
            <List.Cell borderStart>
              <Chip label="Test" color="#B8F1A6"/>
            </List.Cell>
          </List.Col>

          <List.Col>
            <List.Cell borderStart>
              <ProgressBar percentage={40}/>
            </List.Cell>
          </List.Col>

          <List.Col>
            <List.Cell borderStart>
              <p className="m-0">Test</p>
            </List.Cell>
          </List.Col>
        </List.Row>

        <List.Row>
          <List.Col>
            <List.Cell>
              <div className="mt-2">Test</div>
                <div>
                  <h3>
                    Test 2
                  </h3>
              </div>
            </List.Cell>
          </List.Col>

          <List.Col>
            <List.Cell borderStart>
              <Chip label="Test" color="#B8F1A6"/>
            </List.Cell>
          </List.Col>

          <List.Col>
            <List.Cell borderStart>
              <p className="m-0">Test</p>
            </List.Cell>
          </List.Col>

          <List.Col>
            <List.Cell borderStart>
              <p className="m-0">Test</p>
            </List.Cell>
          </List.Col>
          
        </List.Row>
      </List.Body>
    </List>
  </div>
  )
}

export default ListPage;