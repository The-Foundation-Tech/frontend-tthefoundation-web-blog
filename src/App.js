import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Tentang from './Components/Tentang';
import Kegiatan from './Components/Kegiatan';
import Donasi from './Components/Donasi';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tentang">Tentang Kami</Link>
          </li>
          <li>
            <Link to="/kegiatan">Kegiatan</Link>
          </li>
          <li>
            <Link to="/donasi">Donasi</Link>
          </li>
        </ul>
      </nav>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/donasi" element={<Donasi />} />
      </Routes>
    </div>
  );
}

export default App;
