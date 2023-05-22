import berita1 from '../../img/berita1.jpg';
const Berita = () => {
  return (
    <section className="mt-10 pb-[2000px]">
      <h1 className="text-3xl font-semibold text-customNavy w-fit px-10 h-10 mx-auto py-auto bg-customGray shadow-md rounded-full">Berita dan Kegiatan</h1>
      <div className="container flex flex-wrap justify-around mt-5">
        <div className="max-w-[300px] rounded overflow-hidden shadow-lg bg-customGray border border-slate-900 mt-5">
          <img className="w-full hover:scale-125 overflow-hidden" src={berita1} alt="News" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">News Title</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat felis id luctus suscipit.</p>
          </div>
        </div>
        <div className="max-w-[300px] rounded overflow-hidden shadow-lg bg-customGray border border-slate-900 mt-5">
          <img className="w-full hover:scale-125" src={berita1} alt="News" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">News Title</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat felis id luctus suscipit.</p>
          </div>
        </div>
        <div className="max-w-[300px] rounded overflow-hidden shadow-lg bg-customGray border border-slate-900 mt-5">
          <img className="w-full hover:scale-125" src={berita1} alt="News" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">News Title</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat felis id luctus suscipit.</p>
          </div>
        </div>
        <div className="max-w-[300px] rounded overflow-hidden shadow-lg bg-customGray border border-slate-900 mt-5">
          <img className="w-full hover:scale-125" src={berita1} alt="News" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">News Title</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat felis id luctus suscipit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Berita;
