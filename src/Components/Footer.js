import { images } from '../constants';
import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { BiDonateHeart } from 'react-icons/bi';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = 'Assalamualaikum, saya ingin berdonasi.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281296925202?text=${encodedMessage}`);
  };
  return (
    <footer className="bg-customBlue py-4 text-white">
      <div className="container px-10 flex flex-wrap gap-y-5 items-center justify-between">
        <div className="flex items-center gap-3 order-3 md:order-first">
          <img src={images.Logo2} className="w-14 h-14 sm:w-24 sm:h-24 bg-white rounded-md object-contain" alt="YMI" />
          <p className="text-sm">Hak Cipta &copy; 2023 Yayasan Munashoroh Indonesia.</p>
        </div>

        <div className="flex items-center justify-center gap-6">
          <div className="flex flex-col">
            <div className="m-2">
              <a href="#" className="flex items-center gap-2">
                <BsInstagram size={25} />
                <h1>Instagram</h1>
              </a>
            </div>
            <div className="m-2">
              <a href="#" className="flex items-center gap-2">
                <BsFacebook size={25} />
                <h1>Facebook</h1>
              </a>
            </div>
            <div className="m-2">
              <a href="#" className="flex items-center gap-2">
                <BsWhatsapp size={25} />
                <h1>Whatsapp</h1>
              </a>
            </div>
          </div>
        </div>
        <div>
          <button className=" mt-5 md:mt-0 border-2 border-customNavy px-5 rounded-full font-semibold hover:bg-customGray hover:text-black transition-all duration-300 flex" onClick={handleWhatsAppClick}>
            <BiDonateHeart size={30} />
            <div className="pt-1 pl-1">Donasi</div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
