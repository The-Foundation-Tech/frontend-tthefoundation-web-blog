import { useParams } from 'react-router-dom';

export default function DetailKegiatan() {
  const { slug } = useParams();
  const allowedSlugs = ['kegiatan-1', 'kegiatan-2', 'kegiatan-3'];
  if (!allowedSlugs.includes(slug)) {
    return <h1>Tidak ditemukan!</h1>;
  }
  return (
    <>
      <h1>Ini {slug}</h1>
    </>
  );
}
