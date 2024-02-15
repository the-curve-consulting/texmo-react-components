import { Table, Title, Chip } from "@the-curve-consulting/texmo-react-components"

const TablePage = () => {
  return (
    <div className="mt-4">
      <Title text='Table'/>

      <Table className="mt-3">
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
          <Table.Row borderColour="red">
            <Table.Cell>
              <div className="mt-2">Test</div>
              <div>
                  <h3>
                      Test 2
                  </h3>
              </div>
            </Table.Cell>
            <Table.Cell borderStart>
              <Chip label="Test" theme="primary"/>
            </Table.Cell>
            <Table.Cell borderStart>
              Value 3
            </Table.Cell>
            <Table.Cell borderStart>
              Value 1
            </Table.Cell>
            <Table.Cell borderStart>
              Value 2
            </Table.Cell>
            
            <Table.Cell borderStart>
              Value 3
            </Table.Cell>
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
  )
}

export default TablePage;