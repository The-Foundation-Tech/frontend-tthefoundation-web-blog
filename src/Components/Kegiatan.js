import { Link } from 'react-router-dom';

export default function Kegiatan() {
  return (
    <>
      <h1>Kegiatan Kami : </h1>
      <ul>
        <li>
          <Link to="/kegiatan/kegiatan-1">Kegiatan 1</Link>
        </li>
        <li>
          <Link to="/kegiatan/kegiatan-2">Kegiatan 2</Link>
        </li>
        <li>
          <Link to="/kegiatan/kegiatan-3">Kegiatan 3</Link>
        </li>
      </ul>
    </>
  );
}
