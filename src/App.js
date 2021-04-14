import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main.js';
import Footer from './components/footer.js';
import Header from './components/header.js';
import item from './data.json';
import React from 'react';
import Container from 'react-bootstrap/Container';

class App extends React.Component {

  render() {
    return (
      <Container fluid>
        <Header />
        <Main data = {item}/>
        <Footer />
      </Container>
    );
  }
}


export default App;