import { AiOutlineWifi } from 'react-icons/ai';
import { GrCafeteria } from 'react-icons/gr';
import { MdLocalLaundryService } from 'react-icons/md';
const Fasilitas = () => {
  return (
    <section className="mt-10 py-10 bg-customGray">
      <h1 className="text-3xl font-semibold text-customGray w-40 h-10 mx-auto py-auto bg-customNavy shadow-md rounded-full">Fasilitas</h1>

      <p className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere asperiores aperiam quo laboriosam neque assumenda! Adipisci amet fugiat praesentium maiores sequi necessitatibus assumenda similique voluptas perferendis, porro
        laboriosam temporibus omnis?
      </p>
      <div className="container h-full sm:flex flex-wrap justify-around mt-10">
        <div className="m-7 shadow-md rounded-md p-3">
          <AiOutlineWifi size={40} className="mx-auto" />
          <h4 className="text-4xl font-semibold">Wifi</h4>
        </div>
        <div className="m-7 shadow-md rounded-md p-3">
          <GrCafeteria size={40} className="mx-auto" />
          <h4 className="text-4xl font-semibold">Cafetaria</h4>
        </div>
        <div className="m-7 shadow-md rounded-md p-3">
          <MdLocalLaundryService size={40} className="mx-auto" />
          <h4 className="text-4xl font-semibold">Laundry</h4>
        </div>
        <div className="m-7 shadow-md rounded-md p-3">
          <MdLocalLaundryService size={40} className="mx-auto" />
          <h4 className="text-4xl font-semibold">Laundry</h4>
        </div>
      </div>
    </section>
  );
};

export default Fasilitas;
