import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Profil from './pages/detail/Profil';
import Sejarah from './pages/detail/Sejarah';
import axios from 'axios';
import Cabang from './pages/detail/Cabang';
import Berita from './pages/detail/BeritaKegiatan';
import Kontak from './pages/detail/Kontak';
import DetailBerita from './pages/detailBerita/News';
import NotFound from './pages/NotFound';

axios.defaults.baseURL = 'http://localhost:5000/api';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="App font-opensans">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil-yayasan" element={<Profil />} />
        <Route path="/sejarah-yayasan" element={<Sejarah />} />
        <Route path="/cabang-dan-mitra" element={<Cabang />} />
        <Route path="/berita-dan-kegiatan" element={<Berita />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/detailberita" element={<DetailBerita />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
