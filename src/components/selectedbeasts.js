import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

class SelectedBeasts extends React.Component {

  render() {
    return (
    <Modal show={this.props.show} close={this.props.close}>
          <Card bg="secondary"
          variant="dark"
          style={{ minWidth: '18rem' }}
        >
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            {console.log(this.props.title)}
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
        <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
              Close
            </Button>
          </Modal.Footer>
    </Modal>
    )
  };
}

export default SelectedBeasts;


