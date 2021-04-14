import React from 'react';
import HornedBeasts from "./horned.js"
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {

  render() {
    return (
      <CardGroup>
        {
          this.props.data.map(element => <HornedBeasts title={element.title} description={element.description} img={element.image_url} />)
        }
      </CardGroup>
    );
  }
}

export default Main;
