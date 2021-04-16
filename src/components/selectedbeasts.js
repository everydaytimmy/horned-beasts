import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeasts extends React.Component {

  render() {
    return (
    <Modal show={this.props.show} close={this.props.close}>
        <Modal.Header closeButton onClick={this.props.close}>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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


