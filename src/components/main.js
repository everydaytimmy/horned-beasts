import React from 'react';
import HornedBeasts from "./horned.js"
import CardColumns from 'react-bootstrap/CardColumns';



class Main extends React.Component {

  render() {
    return (
      <>
        <CardColumns id="card">
          {
            this.props.data.map((element, index) => 
            <HornedBeasts 
            title={element.title} 
            description={element.description} 
            img={element.image_url} 
            index={index}
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

