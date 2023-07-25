import MainLayout from '../../Components/MainLayout';
import { images } from '../../constants';

const Sejarah = () => {
  return (
    <MainLayout>
      <section className=" bg-customGray pt-32 pb-20 mx-auto px-10 text-slate-950">
        <h1 className="text-3xl font-semibold text-customGray flex items-center justify-center w-fit px-7 h-10 mx-auto py-auto bg-customNavy shadow-md rounded-full mb-10">Sejarah YMI</h1>
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src={images.Sejarah} alt="YMI Logo" className="w-[400px] mb-4 mx-auto bg-white rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
          </div>
          <div>
            <p className="mb-4 text-justify">
              Era tahun 2000 krisis ekonomi melanda Indonesia. Negeri yang besar ini nyaris porak-poranda. Angka kemiskinan bertambah, pengangguran meningkat, dan rakyat yang kelaparan semakin banyak. Bersamaan dengan itu, fenomena
              kehidupan yang semakin global telah memunculkan kompetisi yang semakin sengit. Mereka yang tak punya keterampilan harus siap-siap tergusur, cepat atau lambat akan tergilas oleh zaman.
            </p>
            <p className="mb-4 text-justify">
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
