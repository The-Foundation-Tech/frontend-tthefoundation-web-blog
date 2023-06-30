import ymi from '../../img/ymi.png';
import mitra from '../../img/mitra.png';
import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-customBlue py-4 text-white">
      <div className="flex mx-10 items-center">
        <div className="flex items-center w-1/2 gap-3 bg-red-800">
          <img src={ymi} className="w-14 h-14 sm:w-24 sm:h-24 bg-white rounded-md object-contain" />
          <p className="text-sm">Hak Cipta &copy; 2023 Yayasan Munashoroh Indonesia.</p>
        </div>

        <div className="container ml-3 flex items-center justify-between bg-red-800">
          <div className="flex-col">
            <div className="m-2">
              <a href="#" className="flex gap-2">
                <BsInstagram size={25} />
                <h1>Instagram</h1>
              </a>
            </div>
            <div className="m-2">
              <a href="#" className="flex gap-2">
                <BsFacebook size={25} />
                <h1>Facebook</h1>
              </a>
            </div>
            <div className="m-2">
              <a href="#" className="flex gap-2">
                <BsWhatsapp size={25} />
                <h1>Whatsapp</h1>
              </a>
            </div>
          </div>
          <div className="mx-auto">
            <div className="border-2 p-2 rounded-sm hover:bg-customNavy transition duration-100">
              <h1 className="text-2xl">Donasi Disini</h1>
            </div>
          </div>
        </div>
      </div>
      <img src={mitra} className="mx-auto mix-blend-mode: screen;" />
    </footer>
  );
};

export default Footer;
