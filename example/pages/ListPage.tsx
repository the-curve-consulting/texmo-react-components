import { Chip, List, ProgressBar, SearchBar, Title, Breadcrumb, FilterButton, Subtitle } from '@the-curve-consulting/texmo-react-components';
import { useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListPage = () => {
  const row1Ref = useRef<HTMLDivElement>(null!);
  const row2Ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    console.log(row1Ref.current.clientWidth);
  }, []);

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
        <Subtitle text='This is a list' />
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

    <List className='mt-4 list-desktop'>
      <List.Head>
        <List.Cell>Head 1</List.Cell>
        <List.Cell>Head 2</List.Cell>
        <List.Cell>Head 3</List.Cell>
        <List.Cell>Head 4</List.Cell>
        <List.Cell>Head 5</List.Cell>
      </List.Head>

      <List.Body>
        <List.Row ref={row1Ref}>
            <List.Col>
                <List.Cell>
                    <div className="mt-2">Test</div>
                    <div>
                        <h3>{'Test'}</h3>
                    </div>
                </List.Cell>
            </List.Col>

            <List.Col>
                <List.Cell borderStart>
                    <Chip label="Test" theme="primary" />
                </List.Cell>
            </List.Col>

            <List.Col>
                <List.Cell borderStart>
                    <ProgressBar percentage={40} />
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

        <List.Row ref={row2Ref}>
          <List.Col>
              <List.Cell>
                  <div className="mt-2">Test</div>
                  <div>
                      <h3>{`Test ${0}`}</h3>
                  </div>
              </List.Cell>
          </List.Col>

          <List.Col>
              <List.Cell borderStart>
                  <Chip label="Test" theme="primary" />
              </List.Cell>
          </List.Col>

          <List.Col>
              <List.Cell borderStart>
                  <ProgressBar percentage={40} />
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