import MainLayout from '../../Components/MainLayout';
import { images } from '../../constants';

const Profil = () => {
  return (
    <MainLayout>
      <section className="container bg-customGray pt-32 pb-20 mx-auto px-10 text-slate-950">
        <h1 className="text-3xl font-semibold text-customGray flex items-center justify-center w-fit px-7 h-10 mx-auto py-auto bg-customNavy shadow-md rounded-full mb-10">Profil</h1>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-customNavy">VISI</h2>
              <p className="mt-4 ">Terdepan Memberdayakan Anak Yatim Dhuafa hingga Pelosok Desa.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-customNavy">MISI</h2>
              <ul className="mt-4 divide-y divide-gray-300">
                <li className="py-2">Memperkuat struktur masyarakat muslim dengan membentuk organisasi dakwah yang profesional.</li>
                <li className="py-2">Memperluas jaringan sosial dan ekonomi melalui peran tokoh masyarakat dan pemuka agama.</li>
                <li className="py-2">Membina kerjasama dengan semua pihak sehingga memperoleh pengakuan dan eksis ditengah masyarakat.</li>
                <li className="py-2">Mengembangkan program-program pendidikan bagi anak-anak yatim dan kaum dhuafa hingga pelosok desa-desa tertinggal, melalui sistem pemberdayaan yang tepat sesuai kebutuhan.</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md md:w-2/3">
                <h2 className="text-2xl font-semibold text-customNavy">LOGO</h2>
                <img src={images.Logo2} alt="YMI Logo" className="md:w-60 md:h-60 h-auto max-w-full mb-4 bg-white mx-auto" />
                <p className="mt-4 italic">Berbentuk Tunas, yang selalu tumbuh dan berkembang terus, yang diikat oleh pita -dibawah tunas tersebut- menunjukan ikatan kerjasama yang kuat dan kokoh</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md md:h-[130px]">
                <h2 className="text-2xl font-semibold text-customNavy">SLOGAN</h2>
                <p className="mt-4 italic font-bold">"Berbagi Sepenuh Hati, Berbakti Tiada Henti"</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Profil;
