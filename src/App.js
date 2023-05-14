import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero';

function App() {
  return (
    <div className="App">
      {/* Header Start */}
      <Navbar />
      {/* Header End */}
      {/* Hero Start */}
      <Hero />
      {/* Hero End */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
