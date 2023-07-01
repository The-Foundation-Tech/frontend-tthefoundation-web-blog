import MainLayout from '../../Components/MainLayout';
import Berita from './container/Berita';
import Cabang from './container/Cabang';
import Hero from './container/Hero';
import Program from './container/Program';

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Program />
      <Berita />
      <Cabang />
    </MainLayout>
  );
};

export default HomePage;
