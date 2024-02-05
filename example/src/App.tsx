import { Title, Button, Table, Form } from "texmo-react-components";
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

        <Table striped bordered hover>
          <Table.Head>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test 2</Table.Cell>
              <Table.Cell>Test 3</Table.Cell>
            </Table.Row>
          </Table.Head>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Value 1</Table.Cell>
              <Table.Cell>Value 2</Table.Cell>
              <Table.Cell>Value 3</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Value 1</Table.Cell>
              <Table.Cell>Value 2</Table.Cell>
              <Table.Cell>Value 3</Table.Cell>
            </Table.Row>

            <Table.Row>
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
            <Form.Control />
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

          <Form.Group label='Rich Text' className='mt-3'>
            <Form.RichText />
          </Form.Group>

          <Form.Group label='Date Time' className='mt-3'>
            <Form.DateTime />
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

export default App;
