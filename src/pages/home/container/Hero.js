import { images } from '../../../constants';

const Hero = () => {
  return (
    <section className="container md:mt-32 mt-20 px-3 py-5 lg:py-1 mx-auto">
      <div className="grid lg:grid-cols-2 items-center justify-items-center">
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center mx-2 md:ml-10">
          <p className="text-center text-lg font-bold md:text-3xl text-customRed mt-10 border-b-2 border-customRed drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Yayasan Munsashoroh Indonesia</p>
          <p className="text-customGray text-justify mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptate officia porro necessitatibus corporis, mollitia laudantium recusandae, quaerat, laborum itaque ut repellat sequi dolore voluptatibus beatae magni
            asperiores velit perferendis eaque nisi voluptatem tempora placeat. Dolores debitis quidem nostrum id?
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <img className="rounded-xl border-2 border-white h-80 w-80 object-cover lg:w-[400px] lg:h-[400px] hover:scale-110 transition duration-500" src={images.Hero} alt="hero" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
