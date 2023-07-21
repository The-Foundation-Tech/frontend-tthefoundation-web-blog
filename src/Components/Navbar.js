import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiDonateHeart } from 'react-icons/bi';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { useState } from 'react';
import { images } from '../constants';

//ITEM NAVBAR
const menuItems = [
  { id: '/', label: 'Profil', type: 'dropdown', subItems: ['Sejarah dan Profil', 'Visi dan Misi', 'Struktur Organisasi'] },
  { id: '/informasi', label: 'Informasi', type: 'dropdown', subItems: ['Cabang', 'Berita', 'FAQ'] },
  { id: '/galeri', type: 'link', label: 'Galeri' },
  { id: '/contact', type: 'link', label: 'Kontak' },
];

const NavItem = ({ menuItem }) => {
  const [dropDown, setDropDown] = useState(false);
  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };

  return (
    <li key={menuItem.id} className="relative group">
      {menuItem.type === 'link' ? (
        <Link to={menuItem.id} className="block p-3 border rounded-sm border-slate-800 m-2 hover:bg-slate-700 hover:text-customGray ">
          {menuItem.label}
        </Link>
      ) : (
        <div className="flex flex-col items-center">
          <button className="flex items-center p-3 border rounded-sm border-slate-800 m-2 hover:bg-slate-700 hover:text-customGray" onClick={toggleDropdown}>
            {menuItem.label} <MdOutlineArrowDropDown />
          </button>
          <div
            className={`${
              dropDown ? 'block' : 'hidden'
            } md:hidden md:bg-customGray transition-all duration-500 pt-4 md:absolute md:bottom-0  md:left-0 md:translate-y-full md:group-hover:block w-max rounded-md overflow-hidden border border-slate-950`}
          >
            <ul className="flex flex-col shadow-lg border text-center">
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

  const handleNav = () => {
    setNavVisible(!nav);
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
          } mt-[80px] md:mt-0 flex flex-col md:flex-row w-full md:w-auto justify-center fixed top-0 bottom-0 md:static gap-x-9 items-center z-[49] bg-gray-200 md:bg-inherit transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row gap-x-3 gap-y-3 font-semibold">
            {menuItems.map((menuItem) => (
              <NavItem menuItem={menuItem} />
            ))}
          </ul>
          <div>
            <button className=" mt-5 md:mt-0 border-2 border-customNavy px-5 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex">
              <BiDonateHeart size={30} />
              <div className="pt-1 pl-1">Donasi</div>
            </button>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
