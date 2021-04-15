
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


class Header extends React.Component {
  render() {
    return(
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Gallery of Horns</Navbar.Brand>
        </Navbar>
    )
  }
}

export default Header;