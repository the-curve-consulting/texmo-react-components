import { Chip, List, ProgressBar, SearchBar, Title, Breadcrumb, FilterButton } from '@the-curve-consulting/texmo-react-components';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListPage = () => {
  return (
    <div className="mt-5">

    <Row className="mt-4">
      <Col>
        <Breadcrumb link={Link}>
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

          <FilterButton filterExists/>
        </div>
      </Col>
    </Row>

    <List className='mt-4'>
      <List.Head>
        <List.Cell>Head 1</List.Cell>
        <List.Cell>Head 2</List.Cell>
        <List.Cell>Head 3</List.Cell>
        <List.Cell>Head 4</List.Cell>
        <List.Cell>Head 5</List.Cell>
      </List.Head>

      <List.Body>
        {
          Array.from({ length: 10 }).map((_, index) => (
              <List.Row key={index}>
                  <List.Col>
                      <List.Cell>
                          <div className="mt-2">Test</div>
                          <div>
                              <h3>Test {index}</h3>
                          </div>
                      </List.Cell>
                  </List.Col>

                  <List.Col>
                      <List.Cell borderStart>
                          <Chip label="Test" color="#B8F1A6" />
                      </List.Cell>
                  </List.Col>

                  <List.Col>
                      <List.Cell borderStart>
                          <ProgressBar percentage={40} />
                      </List.Cell>
                  </List.Col>

                  <List.Col>
                      <List.Cell borderStart>
                          <p className="m-0">Test {index}</p>
                      </List.Cell>
                  </List.Col>

                  <List.Col>
                      <List.Cell borderStart>
                          <p className="m-0">Test {index}</p>
                      </List.Cell>
                  </List.Col>
              </List.Row>
          ))
        }
      </List.Body>
    </List>
  </div>
  )
}

export default ListPage;