import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Hero from './Components/Main/Hero';
import Navbar from './Components/Main/Navbar';
import Program from './Components/Main/Program';
import Berita from './Components/Main/Berita';
import InfoGraf from './Components/Main/InfoGraf';
import Footer from './Components/Main/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Program />
      <Berita />
      <InfoGraf />
      <Footer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
