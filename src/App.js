import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Hero from './Components/Main/Hero';
import Navbar from './Components/Main/Navbar';
import Fasilitas from './Components/Main/Fasilitas';
import Berita from './Components/Main/Berita';
import Testimoni from './Components/Main/Testimoni';
import Footer from './Components/Main/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Fasilitas />
      <Berita />
      <Testimoni />
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
