import ymi from '../../img/ymi.png';
import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-customBlue py-4 text-white">
      <div className="flex mx-10 items-center">
        <div className="flex items-center w-full gap-3">
          <img src={ymi} className="w-20 h-20 sm:w-24 bg-white rounded-md object-contain" />
          <p className="text-sm">Hak Cipta &copy; 2023 Yayasan Munashoroh Indonesia.</p>
        </div>

        <div className="container ml-3 flex items-center justify-between">
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
            <h1 className="text-2xl">Donasi</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
