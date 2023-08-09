import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <p>Welcome home, Doctor.</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
