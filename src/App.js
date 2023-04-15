import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Servizi from './Pages/Servizi';
import Gallery from './Pages/Gallery';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Servizi />
      <Gallery />
    </div>
  );
}

export default App;
