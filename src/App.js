import { Route, Routes, Router } from 'react-router-dom';
// import Home from './Components/Home';
// import Contact from './Components/Contact';
// import About from './Components/About';
// import Hero from './Components/Main/Hero';
// import Navbar from './Components/Main/Navbar';
// import Program from './Components/Main/Program';
// import Berita from './Components/Main/Berita';
// import Footer from './Components/Main/Footer';
// import Cabang from './Components/Main/Cabang';
import HomePage from './pages/home/HomePage';
import Sejarah from './pages/profileDetail/Sejarah';

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sejarah-dan-profil" element={<Sejarah />} />
      </Routes>
    </div>
  );
}

export default App;
