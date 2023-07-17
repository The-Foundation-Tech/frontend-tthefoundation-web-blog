import MainLayout from '../../Components/MainLayout';
import Cabang from './container/Cabang';
import Hero from './container/Hero';
import Program from './container/Program';
import News from './container/News';

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Program />
      <News />
      <Cabang />
    </MainLayout>
  );
};

export default HomePage;
