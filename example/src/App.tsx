import { Title, Button, Table, Form, Chip, List, ProgressBar } from "@the-curve-consulting/texmo-react-components";

import './index.scss';

function App() {
  return (
    <div className="mx-5 my-3">
      <h1>Examples</h1>

      <div className="mt-4">
        <Title text='Buttons'/>

        <Button label='Primary' className='mx-1'/>
        <Button label='Secondary' variant='secondary' className='mx-1'/>
        <Button label='Info' variant='info' className='mx-1'/>
        <Button label='Danger' variant='danger' className='mx-1'/>
      </div>

      <div className="mt-5">
        <Title text='Table'/>

        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Cell>Head 1</Table.Cell>
              <Table.Cell>Head 2</Table.Cell>
              <Table.Cell>Head 3</Table.Cell>
              <Table.Cell>Head 4</Table.Cell>
              <Table.Cell>Head 5</Table.Cell>
              <Table.Cell>Head 6</Table.Cell>
            </Table.Row>
          </Table.Head>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <div className="mt-2">Test</div>
                <div>
                    <h3>
                        Test 2
                    </h3>
                </div>
              </Table.Cell>
              <Table.Cell className="borderStart">
                <Chip label="Test" color="#B8F1A6"/>
              </Table.Cell>
              <Table.Cell className="borderStart">Value 3</Table.Cell>
              <Table.Cell className="borderStart">Value 1</Table.Cell>
              <Table.Cell className="borderStart">Value 2</Table.Cell>
              <Table.Cell className="borderStart">Value 3</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Value 1</Table.Cell>
              <Table.Cell>Value 2</Table.Cell>
              <Table.Cell>Value 3</Table.Cell>
              <Table.Cell>Value 1</Table.Cell>
              <Table.Cell>Value 2</Table.Cell>
              <Table.Cell>Value 3</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Value 1</Table.Cell>
              <Table.Cell>Value 2</Table.Cell>
              <Table.Cell>Value 3</Table.Cell>
              <Table.Cell>Value 1</Table.Cell>
              <Table.Cell>Value 2</Table.Cell>
              <Table.Cell>Value 3</Table.Cell>
            </Table.Row>
            
          </Table.Body>
        </Table>
      </div>

      <div className="mt-5">
        <Title text='Form'/>

        <Form>
          <Form.Group label='Control' className='mt-3'>
            <Form.Control placeholder='Placeholder...'/>
          </Form.Group>

          <Form.Group label='Select' className='mt-3'>
            <Form.Select>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </Form.Select>
          </Form.Group>

          <Form.Group label='Check' className='mt-3'>
            <Form.Check name='group-check' label='Option 1'/>
            <Form.Check name='group-check' label='Option 2'/>
            <Form.Check name='group-check' label='Option 3' disabled/>
          </Form.Group>

          <Form.Group label='Radio' className='mt-3'>
            <Form.Check name='group-radio' type='radio' label='Option 1'/>
            <Form.Check name='group-radio' type='radio' label='Option 2'/>
            <Form.Check name='group-radio' type='radio' label='Option 3' disabled/>
          </Form.Group>

          <Form.Group label='Rich Text' className='mt-3'>
            <Form.RichText />
          </Form.Group>

          <Form.Group label='Date Time' className='mt-3'>
            <Form.DateTime />
          </Form.Group>
        </Form>
      </div>

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
    </div>
  )
}

export default App;
