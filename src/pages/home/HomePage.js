import MainLayout from '../../Components/MainLayout';
import Info from './container/Info';
import Hero from './container/Hero';
import Program from './container/Program';
import News from './container/News';

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Program />
      <News />
      <Info />
    </MainLayout>
  );
};

export default HomePage;
