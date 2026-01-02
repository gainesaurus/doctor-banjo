import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Compositions from './Components/Compositions';
import GuitarComp from './Components/GuitarComp';
import Arrangements from './Components/Arrangements';
import Banjo from './Components/Banjo';
import Guitar from './Components/Guitar';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Compositions />
      <GuitarComp />
      <Arrangements />
      <Banjo />
      <Guitar />
      <Contact  />
    </div>
  );
}

export default App;
