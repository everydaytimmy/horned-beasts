import React from 'react';
import HornedBeasts from "./horned.js"
import CardColumns from 'react-bootstrap/CardColumns';
import item from '../data.json';

class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {}
    }
  }

  handleShow = (index) => {
    this.setState({selectedBeast: item[index]})
    this.setState({showModal: true})
  }

  handleClose = () => {
    this.setState({showModal: false});
  }

  render() {
    return (
      <>
        <CardColumns>
          {
            item.map((element, index) => 
            <HornedBeasts 
            title={element.title} 
            description={element.description} 
            img={element.image_url} 
            index = {index}
            open = {this.handleShow} 
            close = {this.handleClose} 
            show = {this.state.showModal}
            selectedBeast = {this.state.selectedBeast}/>)
          }
        </CardColumns>
      </>
    );
  }
}

export default Main;

