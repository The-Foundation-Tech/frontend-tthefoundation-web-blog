import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTriger from 'react-scroll-trigger';

const Info = () => {
  const [counterOn, setCounterOn] = useState(false);

  const Card = ({ title, count }) => {
    return (
      <div className="bg-cutsomgray text-customNavy border-2 border-customNavy rounded-full p-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <h1 className={`text-center text-4xl font-semibold ${counterOn ? 'mb-2' : 'mb-4'}`}>{counterOn && <CountUp start={0} end={count} duration={3} delay={0.3} />}++</h1>
        <h2 className={`text-2xl font-bold text-center ${counterOn ? 'mb-4' : 'mb-2'}`}>{title}</h2>
      </div>
    );
  };

  return (
    <section className="mt-10 p-8 sm:py-32 bg-customGray">
      <ScrollTriger onEnter={() => setCounterOn(true)}>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Anak Asuh" count={700} />
          <Card title="Relawan" count={100} />
          <Card title="Donatur" count={50000} />
        </div>
      </ScrollTriger>
    </section>
  );
};

export default Info;
