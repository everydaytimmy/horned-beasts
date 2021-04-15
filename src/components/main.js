import React from 'react';
import HornedBeasts from "./horned.js"
import CardColumns from 'react-bootstrap/CardColumns';



class Main extends React.Component {

  render() {
    return (
      <>
        <CardColumns id="card">
          {
            this.props.data.map(element => <HornedBeasts title={element.title} description={element.description} img={element.image_url} />)
          }
        </CardColumns>
      </>
    );
  }
}

export default Main;
