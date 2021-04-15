import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import CardDeck from 'react-bootstrap/CardDeck';

class HornedBeasts extends React.Component {

  render() {
    return (
      // <CardDeck>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="primary">Do Something</Button>
          </Card.Body>
        </Card>
      // </CardDeck>
    );
  }
}

export default HornedBeasts;