import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiDonateHeart } from 'react-icons/bi';
import { MdOutlineArrowDropDown, MdOutlineArrowCircleRight } from 'react-icons/md';
import { useState } from 'react';
import { images } from '../constants';

//ITEM NAVBAR
const menuItems = [
  { id: '/', type: 'link', label: 'Beranda' },
  { id: '/Profil', label: 'Profil', type: 'dropdown', subItems: ['Profil Yayasan', 'Sejarah Yayasan'] },
  { id: '/informasi', label: 'Informasi', type: 'dropdown', subItems: ['Cabang dan Mitra', 'Berita dan Kegiatan'] },
  { id: '/kontak', type: 'link', label: 'Kontak' },
];

const NavItem = ({ menuItem }) => {
  const [dropDown, setDropDown] = useState(false);
  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };

  return (
    <li key={menuItem.id} className="relative group">
      {menuItem.type === 'link' ? (
        <Link to={menuItem.id} className="text-center block p-3 md:border rounded-lg border-slate-800 m-2 hover:bg-slate-700 hover:text-customGray ">
          {menuItem.label}
        </Link>
      ) : (
        <div className="flex flex-col items-center overflow-hidden">
          <div className="flex items-center p-3 md:border rounded-lg border-slate-800 m-2 hover:bg-slate-700 hover:text-customGray cursor-pointer" onClick={toggleDropdown}>
            {menuItem.label} <MdOutlineArrowDropDown />
          </div>
          <div className={`${dropDown ? 'block' : 'hidden'} md:hidden transition-all duration-500 md:absolute md:bottom-0  md:left-0 md:translate-y-full rounded-lg overflow-hidden md:group-hover:block w-max md:border border-slate-950`}>
            <ul className="flex flex-col shadow-lg text-center rounded-lg bg-gray-100">
              {menuItem.subItems.map((sub) => {
                let transformedSub = '/' + sub.toLowerCase().replace(/\s/g, '-');

                return (
                  <Link to={transformedSub} className="hover:bg-slate-700 hover:text-white px-4 py-2" key={sub}>
                    {sub}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

// MAIN
const Navbar = () => {
  const [nav, setNavVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleNav = () => {
    setNavVisible(!nav);
  };

  const handleWhatsAppClick = () => {
    const message = 'Assalamualaikum, Saya atas nama ......... sudah berdonasi. Bukti transfer : ';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281296925202?text=${encodedMessage}`);
  };

  const handleCopyToClipboard = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <section>
      <header className={` container fixed flex justify-between top-0 h-20 max-w-full px-10 text-slate-800 bg-customGray border-2 shadow-lg z-10 items-center`}>
        <div>
          <Link to="/" className="block">
            <img src={images.Logo} alt="logo" className="h-20" />
          </Link>
        </div>
        <div className="z-50 md:hidden">{!nav ? <AiOutlineMenu size={30} onClick={handleNav} /> : <AiOutlineClose size={30} onClick={handleNav} />}</div>
        <div
          className={`${
            !nav ? '-right-full' : 'right-0'
          } mt-[80px] md:mt-0 flex flex-col md:flex-row w-full md:w-auto justify-center items-center fixed top-0 bottom-0 md:static gap-x-9  z-[49] bg-gray-200 md:bg-inherit transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row gap-x-3 gap-y-3 font-semibold">
            {menuItems.map((menuItem, index) => (
              <NavItem key={index} menuItem={menuItem} />
            ))}
          </ul>
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
      </header>
    </section>
  );
};

export default Navbar;
