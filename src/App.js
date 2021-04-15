import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/main.js';
import Footer from './components/footer.js';
import Header from './components/header.js';
import item from './data.json';
import Container from 'react-bootstrap/Container';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  handleShow = () => {
    this.setState({showModal: true})
  }

  handleClose = () => {
    this.setState({showModal: false});
  }

  render() {
    return (
      <Container fluid>
        <Header />
        <Main data = {item} open = {this.handleShow} close = {this.handleClose} show = {this.state.showModal}/>
        <Footer />
      </Container>
    );
  }
}


export default App;