
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, CardColumns, Card, Navbar } from 'react-bootstrap'
import Main from './components/main.js';
import Footer from './components/footer.js';
import Header from './components/header.js';
import item from './data.json';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;