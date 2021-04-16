import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeasts from './selectedbeasts.js';


class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    }
  }

  addFavorite = () => {
    this.setState({ likes: this.state.likes + 1 });
  }


  render() {
    return (
      <>
        <Card bg="secondary"
          variant="dark"
          onClick={this.props.open}
          style={{ minWidth: '18rem' }}
        >
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              🤙 = {this.state.likes}
            </Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="primary"
              onClick={this.addFavorite}>Favorite</Button>
          </Card.Body>
        </Card>
        <SelectedBeasts 
        open={this.props.handleShow} 
        close={this.props.handleClose} 
        show={this.props.showModal} />
      </>
    );
  }
}

export default HornedBeasts;
