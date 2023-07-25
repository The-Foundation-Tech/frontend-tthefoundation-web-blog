import MainLayout from '../../Components/MainLayout';
import { images } from '../../constants';

const Cabang = () => {
  return (
    <MainLayout>
      <section className=" bg-customGray pt-32 pb-20 mx-auto px-10 text-slate-950">
        <h1 className="text-3xl font-semibold text-customGray flex items-center justify-center w-fit px-7 h-10 mx-auto py-auto bg-customNavy shadow-md rounded-full mb-10">Cabang dan Mitra</h1>
        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-customNavy border-b-2">Cabang</h3>
            <div className="grid grid-cols-4 gap-2 mt-2">
              <div className="flex flex-col border-2">
                <h4 className="">Tangerang Selatan</h4>
                <img src={images.Logo} alt="logo" className="h-52 w-52" />
              </div>
              <div className="flex flex-col border-2">
                <h4 className="">Tangerang Selatan</h4>
                <img src={images.Logo} alt="logo" className="h-52 w-52" />
              </div>
              <div className="flex flex-col border-2">
                <h4 className="">Tangerang Selatan</h4>
                <img src={images.Logo} alt="logo" className="h-52 w-52" />
              </div>
              <div className="flex flex-col border-2">
                <h4 className="">Tangerang Selatan</h4>
                <img src={images.Logo} alt="logo" className="h-52 w-52" />
              </div>
              <div className="flex flex-col border-2">
                <h4 className="">Tangerang Selatan</h4>
                <img src={images.Logo} alt="logo" className="h-52 w-52" />
              </div>
              <div className="flex flex-col border-2">
                <h4 className="">Tangerang Selatan</h4>
                <img src={images.Logo} alt="logo" className="h-52 w-52" />
              </div>
              <div className="flex flex-col border-2">
                <h4 className="">Tangerang Selatan</h4>
                <img src={images.Logo} alt="logo" className="h-52 w-52" />
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md ">
            <h2 className="text-2xl font-semibold text-customNavy">Mitra</h2>
            <p className="mt-4 ">Terdepan Memberdayakan Anak Yatim Dhuafa hingga Pelosok Desa.</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cabang;
