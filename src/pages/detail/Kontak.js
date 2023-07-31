import MainLayout from '../../Components/MainLayout';
import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiFillYoutube } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
const Kontak = () => {
  return (
    <MainLayout>
      <section className=" bg-customGray pt-32 pb-20 mx-auto px-10 text-slate-950">
        <h1 className="text-3xl font-semibold text-customGray flex items-center justify-center w-fit px-7 h-10 mx-auto py-auto bg-customNavy shadow-md rounded-full mb-10">Kontak Kami</h1>
        <div className="grid md:grid-cols-3 gap-10 md:gap-0">
          <div className="flex flex-col justify-center items-center gap-2">
            <a href="https://goo.gl/maps/TuTJfhHCoJ2mNB2B6" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <IoLocationOutline size={80} />
            </a>
            <p className="text-center font-semibold">Jl. Otista Raya, Gang Mandor No.85, RT 02/11, Ciputat, Tangerang Selatan.</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <a href="mailto:munashoroh@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <MdEmail size={80} />
            </a>
            <p className="text-center font-semibold">munashoroh@gmail.com</p>
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className="flex flex-col font-medium">
              <div className="flex gap-2 m-2">
                <a href="https://www.instagram.com/ymi_munashorohindonesia/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <BsInstagram size={25} />
                  <h1>@ymi_munashorohindonesia</h1>
                </a>
              </div>
              <div className="flex gap-2 m-2">
                <a href="https://www.facebook.com/Munashoroh.Indonesia/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <BsFacebook size={25} />
                  <h1>@munashorohindonesia</h1>
                </a>
              </div>
              <div className="flex gap-2 m-2">
                <a href="https://wa.me/6281296925202/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <BsWhatsapp size={25} />
                  <h1>+62 812-9692-5202</h1>
                </a>
              </div>
              <div className="flex gap-2 m-2">
                <a href="https://www.youtube.com/@munashorohindonesia5684" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <AiFillYoutube size={25} />
                  <h1>Munashoroh Indonesia</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Kontak;
