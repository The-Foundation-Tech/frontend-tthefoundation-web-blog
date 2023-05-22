import hero from '../../img/hero.jpg';

const Hero = () => {
  return (
    <section>
      <div className="container mt-10 px-3 py-5 lg:py-1">
        <div className="grid lg:grid-cols-2 items-center justify-items-center">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center mx-2 md:ml-10">
            <p className="w-full text-center text-lg font-bold md:text-3xl text-customGray mt-10">Asrama Mahasiswi YMI</p>
            <p className="text-customGray text-justify mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptate officia porro necessitatibus corporis, mollitia laudantium recusandae, quaerat, laborum itaque ut repellat sequi dolore voluptatibus beatae magni
              asperiores velit perferendis eaque nisi voluptatem tempora placeat. Dolores debitis quidem nostrum id?
            </p>
            <button className="font-semibold text-md md:text-lg bg-red-600 text-white py-2 px-5 mt-10 hover:bg-red-800 hover:shadow-xl rounded-lg hover:scale-110 transition duration-500">Daftar Disini</button>
          </div>
          <div className="order-1 lg:order-2">
            <img className={'rounded-xl border-2 border-white h-80 w-80 object-cover lg:w-[400px] lg:h-[400px] hover:scale-110 transition duration-500'} src={hero} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
