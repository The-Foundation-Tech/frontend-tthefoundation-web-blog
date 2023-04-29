import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

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
    </div>
  );
}

export default App;
