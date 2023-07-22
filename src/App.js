import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Sejarah from './pages/detail/Sejarah';
import VisiMisi from './pages/detail/VisiMisi';

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sejarah-dan-profil" element={<Sejarah />} />
        <Route path="/visi-dan-misi" element={<VisiMisi />} />
      </Routes>
    </div>
  );
}

export default App;
