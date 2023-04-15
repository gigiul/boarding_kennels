import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Servizi from './Pages/Servizi';
import Gallery from './Pages/Gallery';
import Contatti from './Pages/Contatti';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Servizi />
      <Gallery />
      <Contatti />
      <Footer />
    </div>
  );
}

export default App;
