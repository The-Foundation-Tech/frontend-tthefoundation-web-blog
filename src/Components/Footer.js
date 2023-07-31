import { images } from '../constants';
import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineArrowCircleRight, MdEmail } from 'react-icons/md';
import { BiDonateHeart } from 'react-icons/bi';
import { useState } from 'react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = 'Assalamualaikum, Saya atas nama ......... sudah berdonasi. Bukti transfer :';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281296925202?text=${encodedMessage}`);
  };

  const handleCopyToClipboard = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
  };

  const [showModal, setShowModal] = useState(false);
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
              <a href="https://www.instagram.com/ymi_munashorohindonesia/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <BsInstagram size={25} />
                <h1>Instagram</h1>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/Munashoroh.Indonesia/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <BsFacebook size={25} />
                <h1>Facebook</h1>
              </a>
            </div>
            <div className="m-2">
              <a href="https://wa.me/6281296925202/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <BsWhatsapp size={25} />
                <h1>Whatsapp</h1>
              </a>
            </div>
            <div className="m-2">
              <a href="mailto:munashoroh@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <MdEmail size={25} />
                <h1>Gmail</h1>
              </a>
            </div>
          </div>
        </div>
        <div>
          <button className="mt-5 md:mt-0 border-2 border-customNavy px-5 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center" onClick={() => setShowModal(true)}>
            <BiDonateHeart size={30} />
            <div className="pt-1 pl-1">Donasi</div>
          </button>
        </div>
      </div>

      {/* Donasi */}
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 text-black">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Donasi</h3>
                  <button>
                    <AiOutlineClose size={30} onClick={() => setShowModal(false)} />
                  </button>
                </div>
                <div className="flex flex-col py-10 px-5 gap-3">
                  <div className="flex flex-col items-center">
                    <img src={images.BRI} alt="bri" className="h-12 mb-2" />
                    <div className="flex items-center">
                      <h5>103.0004968810</h5>
                      <button className="ml-2 py-1 px-2 bg-blue-500 text-white text-sm rounded-md transition focus:bg-slate-700" onClick={() => handleCopyToClipboard('103.0004968810')}>
                        Copy
                      </button>
                    </div>
                    <h4 className="font-semibold">a.n Yayasan Munashoroh Indonesia</h4>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={images.Mandiri} alt="mandiri" className="h-12" />
                    <div className="flex items-center">
                      <h5>0420.01.00.0202.305</h5>
                      <button className="ml-2 py-1 px-2 bg-blue-500 text-white text-sm rounded-md transition focus:bg-slate-700" onClick={() => handleCopyToClipboard('0420.01.00.0202.305')}>
                        Copy
                      </button>
                    </div>
                    <h4 className="font-semibold">a.n Yayasan Munashoroh Indonesia</h4>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={images.BSI} alt="bsi" className="h-10 mb-2" />
                    <div className="flex items-center">
                      <h5>7237272147</h5>
                      <button className="ml-2 py-1 px-2 bg-blue-500 text-white text-sm rounded-md transition focus:bg-slate-700 " onClick={() => handleCopyToClipboard('7237272147')}>
                        Copy
                      </button>
                    </div>
                    <h4 className="font-semibold">a.n Yayasan Munashoroh Indonesia</h4>
                  </div>
                </div>
                <div className="flex items-center justify-center p-8 border-t border-solid border-blueGray-200 rounded-b">
                  <button className="mt-5 md:mt-0 border-2 border-slate-900 px-5 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center" type="button" onClick={handleWhatsAppClick}>
                    Konfirmasi
                    <MdOutlineArrowCircleRight size={30} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </footer>
  );
};

export default Footer;
