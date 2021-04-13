
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/main.js';
import Footer from './components/footer.js';
import Header from './components/header.js';
import item from './data.json';

function App() {
  return (
    <>
      <Header />
      <Main data = {item}/>
      <Footer />
    </>
  );
}

export default App;