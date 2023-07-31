import MainLayout from '../../Components/MainLayout';
import { images } from '../../constants';

const Cabang = () => {
  return (
    <MainLayout>
      <section className=" bg-customGray pt-32 pb-20 mx-auto px-10 text-slate-950">
        <h1 className="md:text-3xl text-2xl font-semibold text-customGray flex items-center justify-center w-fit px-7 h-10 mx-auto py-auto bg-customNavy shadow-md rounded-full mb-10">Cabang dan Mitra</h1>
        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-customNavy border-b-2">Cabang</h3>
            <div className="grid md:grid-cols-4 gap-4 mt-2 font-semibold text-customNavy text-lg">
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <h4 className="">Tangerang Selatan</h4>
                <img src={images.Tangerang} alt="logo" className="h-52 w-52 rounded-md object-cover group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <h4 className="">Bekasi</h4>
                <img src={images.Bekasi} alt="logo" className="h-52 w-52 rounded-md object-cover group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <h4 className="">Pandeglang</h4>
                <img src={images.Pandeglang} alt="logo" className="h-52 w-52 rounded-md object-cover group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <h4 className="">Cirebon</h4>
                <img src={images.Cirebon} alt="logo" className="h-52 w-52 rounded-md object-cover group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <h4 className="">Lampung Selatan</h4>
                <img src={images.Lamsel} alt="logo" className="h-52 w-52 rounded-md object-cover group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <h4 className="">Lampung Timur</h4>
                <img src={images.Lamtim} alt="logo" className="h-52 w-52 rounded-md object-cover group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <h4 className="">Empat Lawang</h4>
                <img src={images.EmpatLawang} alt="logo" className="h-52 w-52 rounded-md object-cover group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md ">
            <h3 className="text-2xl font-semibold text-customNavy border-b-2">Mitra</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-2 font-semibold text-customNavy text-lg">
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.AmalSholeh} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.Basarnaz} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.Baznas} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.IndonesiaPower} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.ISDB} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.IZI} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.Kemenindustri} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.Kemensos} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.LaunchGoodTadamon} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.Launchgood} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.Kitabisa} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.Metro} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.Nama} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.Nice} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.Pemprov} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.Trans7} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.TVRI} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
              <div className="flex flex-col justify-center items-center hover:scale-110 duration-200 group ">
                <img src={images.YBM} alt="logo" className="h-20 rounded-sm group-hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cabang;
