import React from 'react';
import Form from 'react-bootstrap/Form';


class BeastForm extends React.Component {
  handleSubmit = (e) => {
    const valueInt = parseInt(e.target.value);
    this.props.filter(valueInt);
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Control as="select" size="lg" onChange={this.handleSubmit}>
            <option value=''>Select Horn Amount</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='100'>WOW</option>
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }

}

export default BeastForm;