import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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
        <Card bg="secondary" 
        variant="dark" 
        style={{ minWidth: '18rem' }}
        onClick={this.addFavorite}
        >
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            🤙 = {this.state.likes}
          </Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="primary">Do Something</Button>
          </Card.Body>
        </Card>
    );
  }
}

export default HornedBeasts;