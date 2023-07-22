import MainLayout from '../../Components/MainLayout';
import { images } from '../../constants';

const Sejarah = () => {
  return (
    <MainLayout>
      <section className="container bg-customGray md:pt-32 pt-20 pb-20 mx-auto px-10 text-slate-950">
        <h1 className="text-3xl font-semibold text-customGray flex items-center justify-center w-fit px-7 h-10 mx-auto py-auto bg-customNavy shadow-md rounded-full mb-10">Sejarah YMI</h1>
        <div className="flex gap-4 justify-between items-center">
          <img src={images.Logo2} alt="YMI Logo" className="w-60 h-60 mb-4 bg-white rounded-md  shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
          <div>
            <p className="mb-4">
              Era tahun 2000 krisis ekonomi melanda Indonesia. Negeri yang besar ini nyaris porak-poranda. Angka kemiskinan bertambah, pengangguran meningkat, dan rakyat yang kelaparan semakin banyak. Bersamaan dengan itu, fenomena
              kehidupan yang semakin global telah memunculkan kompetisi yang semakin sengit. Mereka yang tak punya keterampilan harus siap-siap tergusur, cepat atau lambat akan tergilas oleh zaman.
            </p>
            <p className="mb-4">
              YMI lahir untuk merespon kondisi tersebut pada tanggal 10 Juli 2023. YMI hadir menggulirkan program-program pemberantasan anak hingga pelosok desa tertinggal. Anak-anak yatim duafa yang putus sekolah dapat kembali ke sekolah
              melalui program orang tua asuh bagi anak yatim desa.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Sejarah;
