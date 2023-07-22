import { images } from '../../../constants';

const Program = () => {
  return (
    <section className="mt-10 py-10 bg-customGray">
      <h1 className="text-3xl font-semibold text-customGray flex items-center justify-center w-fit px-7 h-10 mx-auto py-auto bg-customNavy shadow-md rounded-full">Program</h1>

      <div className="container mx-auto justify-center items-center h-full flex flex-wrap mt-10">
        <div className="flex flex-col m-7 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-md p-3 w-[350px] h-[400px] gap-y-3">
          <div className="mx-auto">
            <h4 className="text-2xl font-semibold text-customNavy border-b-2 border-customBlue">Pendidikan</h4>
          </div>
          <div>
            <img src={images.Pendidikan} alt="camp" className="w-52 h-52 object-cover rounded-md mx-auto " />
          </div>
          <div>
            <ul className="list-decimal pl-4 text-[0.9rem">
              <li>Program Orang Tua Asuh Yatim Desa</li>
              <li>Beasiswa Asrama Tahfidz Quran</li>
              <li>Madrasah Tsanawiyah YMI di Desa</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col m-7 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-md p-3 w-[350px] h-[400px] gap-y-3">
          <div className="mx-auto">
            <h4 className="text-2xl font-semibold text-customNavy border-b-2 border-customBlue">Kemanusiaan</h4>
          </div>
          <div>
            <img src={images.Kemanusiaan} alt="camp" className="w-52 h-52 object-cover rounded-md mx-auto " />
          </div>
          <div>
            <ul className="list-decimal pl-4 text-[0.9rem]">
              <li>Bantuan Pangan untuk Keluarga Prasejahtera</li>
              <li>Bantuan untuk Bencana</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col m-7 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-md p-3 w-[350px] h-[400px] gap-y-3 ">
          <div className="mx-auto">
            <h4 className="text-2xl font-semibold text-customNavy border-b-2 border-customBlue">Ekonomi</h4>
          </div>
          <div>
            <img src={images.Ekonomi} alt="camp" className="w-52 h-52 object-cover rounded-md mx-auto " />
          </div>
          <div>
            <ul className="list-decimal pl-4 text-[0.9rem]">
              <li>Pelatihan Keterampilan Produksi</li>
              <li>Pemasaran untuk Usaha Kecil</li>
              <li>Kurban hingga Pelosok Desa</li>
              <li>Bazar Barang Layak Pakai</li>
              <li>Produksi Virgin Coconut oil</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
