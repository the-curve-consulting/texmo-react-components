import { Title, Form } from '@the-curve-consulting/texmo-react-components';

const FormPage = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div className="mt-5">
      <Title text='Form'/>

      <Form>
        <Form.Group label='Control' className='mt-3'>
          <Form.Control placeholder='Placeholder...' isInvalid/>
          <Form.Feedback type="invalid">
            This is Feedback
          </Form.Feedback>
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

        <Form.Group label='Date Time' className='mt-3'>
          <Form.DateTime />
        </Form.Group>

        <Form.Group label='Typeahead' className='mt-3'>
          <Form.Typeahead
            id='example-typeahead'
            options={options}
            multiple
          />
        </Form.Group>

        <Form.Group label='Rich Text' className='mt-3'>
          <Form.RichText />
        </Form.Group>
      </Form>
    </div>
  )
}

export default FormPage;
