import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Profil from './pages/detail/Profil';
import Sejarah from './pages/detail/Sejarah';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';
function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil-yayasan" element={<Profil />} />
        <Route path="/sejarah-yayasan" element={<Sejarah />} />
      </Routes>
    </div>
  );
}

export default App;
