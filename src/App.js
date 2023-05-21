import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Hero from './Components/Main/Hero';
import Navbar from './Components/Main/Navbar';
import Fasilitas from './Components/Main/Fasilitas';
import Berita from './Components/Main/Berita';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Fasilitas />
      <Berita />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
