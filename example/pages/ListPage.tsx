import React from "react";
import { Chip, List, ProgressBar } from '@the-curve-consulting/texmo-react-components';

const ListPage = () => {
  return (
    <div className="mt-5">
    <List>
      <List.Head>
        <List.Cell>Head 1</List.Cell>
        <List.Cell>Head 2</List.Cell>
        <List.Cell>Head 3</List.Cell>
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
        </List.Row>
      </List.Body>
    </List>
  </div>
  )
}

export default ListPage;