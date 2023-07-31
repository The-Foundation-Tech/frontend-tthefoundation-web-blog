import { NavLink } from 'react-router-dom';
import MainLayout from '../../Components/MainLayout';
import { images } from '../../constants';

const newsItems = [
  { id: 'berita1', title: 'News1', article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat felis id luctus suscipit.' },
  { id: 'berita2', title: 'News2', article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat felis id luctus suscipit.' },
  { id: 'berita3', title: 'News3', article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat felis id luctus suscipit.' },
  { id: 'berita4', title: 'News3', article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat felis id luctus suscipit.' },
  { id: 'berita5', title: 'News3', article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat felis id luctus suscipit.' },
  { id: 'berita6', title: 'News3', article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat felis id luctus suscipit.' },
  { id: 'berita7', title: 'News3', article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat felis id luctus suscipit.' },
  { id: 'berita8', title: 'News3', article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat felis id luctus suscipit.' },
  { id: 'berita9', title: 'News3', article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat felis id luctus suscipit.' },
];

const NewsCard = ({ newsItem }) => {
  return (
    <NavLink to="/details/:id">
      <div className="max-w-[300px] rounded overflow-hidden shadow-lg bg-customGray border border-slate-900 mt-5">
        <div className="overflow-hidden">
          <img className="w-full hover:scale-110 duration-1000 ease-in-out" src={images.Berita1} alt="News" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{newsItem.title}</div>
          <p className="text-gray-700 text-base">{newsItem.article}</p>
        </div>
      </div>
    </NavLink>
  );
};

//MAIN
const Berita = () => {
  return (
    <MainLayout>
      <section className="bg-customGray pt-32 pb-20 mx-auto px-10 text-slate-950">
        <h1 className="text-2xl md:text-3xl font-semibold text-customGray flex items-center justify-center w-fit px-7 h-10 mx-auto py-auto bg-customNavy shadow-md rounded-full mb-10">Berita dan Kegiatan</h1>

        <div className="container flex flex-wrap justify-around mt-5 mx-auto">
          {newsItems.map((newsItem) => (
            <NewsCard newsItem={newsItem} />
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Berita;
