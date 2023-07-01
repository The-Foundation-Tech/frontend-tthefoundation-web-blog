const Cabang = () => {
  return (
    <section className="mt-10 p-32 bg-customGray">
      <div className="flex flex-wrap justify-around">
        <div className="flex-col border-[3px] border-customBlue p-24 rounded-md shadow-md bg-customNavy text-customGray">
          <h1 className="text-2xl font-bold">Cabang</h1>
          <p className="text-center text-4xl font-bold">100</p>
        </div>
        <div className="flex-col border-[3px] border-customBlue p-24 rounded-md shadow-md bg-customNavy text-customGray">
          <h1 className="text-2xl font-bold">Orang Tua Asuh</h1>
          <p className="text-center text-4xl font-bold">100</p>
        </div>
        <div className="flex-col border-[3px] border-customBlue p-24 rounded-md shadow-md bg-customNavy text-customGray">
          <h1 className="text-2xl font-bold">Anak Asuh</h1>
          <p className="text-center text-4xl font-bold">100</p>
        </div>
      </div>
    </section>
  );
};

export default Cabang;
