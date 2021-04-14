import React from 'react';
import Card from 'react-bootstrap/Card';
// import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';

class HornedBeasts extends React.Component {

  render() {
    return (
      // <CardDeck>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      // </CardDeck>
    );
  }
}

export default HornedBeasts;