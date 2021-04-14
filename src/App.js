import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/main.js';
import Footer from './components/footer.js';
import Header from './components/header.js';
import item from './data.json';
import React from 'react';

// function App() {
//   return (
//     <>
//       <Header />
//       <Main data = {item}/>
//       <Footer />
//     </>
//   );
// }

class App extends React.Component {


  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}


export default App;