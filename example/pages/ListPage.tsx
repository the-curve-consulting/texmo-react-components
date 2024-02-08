import { Chip, List, ProgressBar, InfoTile, SearchBar } from '@the-curve-consulting/texmo-react-components';
import { Row, Col } from 'react-bootstrap';

const ListPage = () => {
  return (
    <div className="mt-5">

    <Row className="g-4">
      <Col xl={6}>
        <InfoTile icon={'house'}>
          <InfoTile.Title title='Title 1'/>
          <InfoTile.Item text={'Text'} value={5}/>
        </InfoTile>
      </Col>

      <Col xl={6}>
        <InfoTile icon={'house'}>
          <InfoTile.Title title='Title 1'/> 
          <InfoTile.Item text={'Text'} value={5}/>
          <InfoTile.Item text={'Text'} value={3} theme={'secondary'}/>
        </InfoTile>
      </Col>
    </Row>

    <div className='d-flex mt-3 justify-content-end w-100'>
      <SearchBar>
        <SearchBar.Input />
        <SearchBar.Button />
      </SearchBar>
    </div>

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

          <List.Col borderStart>
            <List.Cell>
              <Chip label="Test" color="#B8F1A6"/>
            </List.Cell>
          </List.Col>

          <List.Col borderStart>
            <List.Cell>
              <ProgressBar percentage={40}/>
            </List.Cell>
          </List.Col>

          <List.Col borderStart>
            <List.Cell>
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

          <List.Col borderStart>
            <List.Cell>
              <Chip label="Test" color="#B8F1A6"/>
            </List.Cell>
          </List.Col>

          <List.Col borderStart>
            <List.Cell>
              <p className="m-0">Test</p>
            </List.Cell>
          </List.Col>

          <List.Col borderStart>
            <List.Cell>
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