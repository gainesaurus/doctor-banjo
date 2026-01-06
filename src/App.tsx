import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Compositions from './Components/Compositions';
import Arrangements from './Components/Arrangements';
import Contact from './Components/Contact';
import SongLists from './Components/SongLists';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Compositions />
      <Arrangements />
      <SongLists />
      <Contact  />
    </div>
  );
}

export default App;
