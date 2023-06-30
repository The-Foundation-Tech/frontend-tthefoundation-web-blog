import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiDonateHeart } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import logo from '../../img/logo.png';

const Navbar = () => {
  const [nav, setNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  //ITEM NAVBAR
  const menuItems = [
    { id: '/', label: 'Profil', subItems: ['Sejarah dan profil yayasan', 'Visi dan misi yayasan', 'Struktur organisasi'] },
    { id: '/about', label: 'Informasi', subItems: ['Cabang', 'Berita', 'FAQ'] },
    { id: '/activities', label: 'Galeri' },
    { id: 'contact', label: 'Kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Periksa posisi scroll saat ini
      const currentScrollPos = window.pageYOffset;

      // Tentukan aturan untuk mengubah keadaan isScrolled
      if (currentScrollPos > prevScrollPos) {
        // Scroll ke bawah
        setIsScrolled(true);
      } else if (currentScrollPos === 0) {
        // Scroll ke atas
        setIsScrolled(false);
      }

      // Perbarui posisi scroll sebelumnya
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleNav = () => {
    setNavVisible(!nav);
  };

  return (
    <section>
      <header className={`${isScrolled ? 'opacity-80' : 'opacity-100'} container fixed flex justify-between top-0 h-20 max-w-full px-10 text-slate-800 bg-customGray border-2 shadow-lg z-10 items-center`}>
        <div>
          <img src={logo} alt="logo" className="h-20" />
        </div>
        <div className="z-50 md:hidden">{!nav ? <AiOutlineMenu size={30} onClick={handleNav} /> : <AiOutlineClose size={30} onClick={handleNav} />}</div>
        <div
          className={`${
            !nav ? '-right-full' : 'right-0'
          } mt-[80px] md:mt-0 flex flex-col md:flex-row w-full md:w-auto justify-center fixed top-0 bottom-0 md:static gap-x-9 items-center z-[49] bg-blue-200 md:bg-inherit transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row gap-x-3 gap-y-3 font-semibold">
            {menuItems.map((menuItem) => (
              <li key={menuItem.id} className="block p-3 border rounded-sm border-slate-800 m-2 hover:bg-slate-700 hover:text-customGray group relative">
                <Link to={menuItem.id}>{menuItem.label}</Link>
              </li>
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
