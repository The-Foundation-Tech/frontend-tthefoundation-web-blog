import { Link } from 'react-router-dom';
import { images } from '../../../constants';
import { HiArrowNarrowRight } from 'react-icons/hi';

const newsItems = [
  { id: 'berita1', title: 'News1' },
  { id: 'berita2', title: 'News2' },
  { id: 'berita3', title: 'News3' },
];

const NewsCard = ({ newsItem }) => {
  return (
    <div className="max-w-[300px] rounded overflow-hidden shadow-lg bg-customGray border border-slate-900 mt-5">
      <div className="overflow-hidden">
        <img className="w-full hover:scale-110 duration-1000 ease-in-out" src={images.Berita1} alt="News" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{newsItem.title}</div>
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat felis id luctus suscipit.</p>
      </div>
    </div>
  );
};

//MAIN
const News = () => {
  return (
    <section className="mt-10">
      <h1 className="text-3xl font-semibold text-customNavy flex items-center justify-center w-fit px-7 h-10 mx-auto py-auto bg-customGray shadow-md rounded-full">Berita dan Kegiatan</h1>

      <div className="container flex flex-wrap justify-around mt-5 mx-auto">
        {newsItems.map((newsItem) => (
          <NewsCard newsItem={newsItem} />
        ))}
      </div>
      <Link to="/berita-dan-kegiatan">
        <button className="mx-auto flex items-center gap-x-2 font-bold border-2 border-slate-950 px-3 py-2 rounded-lg mt-10 bg-customGray hover:scale-105 duration-300">
          <span>Berita Lainnya</span>
          <HiArrowNarrowRight size={25} />
        </button>
      </Link>
    </section>
  );
};

export default News;
