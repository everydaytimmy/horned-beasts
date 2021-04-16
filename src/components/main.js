import React from 'react';
import HornedBeasts from "./horned.js"
import CardColumns from 'react-bootstrap/CardColumns';
import item from '../data.json';




class Main extends React.Component {

  render() {
    return (
      <>
        <CardColumns>
          {
            item.map((element) => 
            <HornedBeasts 
            title={element.title} 
            description={element.description} 
            img={element.image_url} 
            open={this.props.open} 
            close={this.props.close} 
            show={this.props.show}/>)
          }
        </CardColumns>
      </>
    );
  }
}

export default Main;

