import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
    // <BrowserRouter>
    <div className="App">
      <Navbar />
        {/* <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/compositions' element={<Compositions />} />
          <Route path='/guitarcomp' element={<GuitarComp />} />
          <Route path='/arrangements' element={<Arrangements />} />
          <Route path='/banjo' element={<Banjo />} />
          <Route path='/guitar' element={<Guitar />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes> */}
        <Home />
        <Compositions />
        <GuitarComp />
        <Arrangements />
        <Banjo />
        <Guitar />
        <Contact  />
      </div>
    // </BrowserRouter>
  );
}

export default App;
